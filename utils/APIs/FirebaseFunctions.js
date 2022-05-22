/** @format */

import { firestore } from "firebase";
import { SnapshotViewIOSBase } from "react-native";
import firebase from "../firebaseConfig";
import RoutineClass from "../Classes/RoutineClass";
import LevelClass from "../Classes/LevelClass";
import ChapterClass from "../Classes/ChapterClass";
import ContentClass from "../Classes/ContentClass";
import StudentClass from "../Classes/StudentClass";

//**********************************************************************//
// new user registration
//**********************************************************************//
async function userSignup(user) {
  var docID = null;
  const querySnapshot = await firebase
    .firestore()
    .collection("guardians")
    .where("Email", "==", user.email)
    .get();
  if (querySnapshot.empty) {
    const query = await firebase
      .firestore()
      .collection("guardians")
      .add({
        Email: user.email,
        Password: user.password,
        Name: user.name,
        StudentList: [],
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        docID = docRef.id;
      })
      .catch(function (e) {
        console.log("Error adding document: ", e);
      });
  } else {
    querySnapshot.forEach((doc) => console.log(doc.data()));
  }
  return docID;
}

//**********************************************************************//
// user signing
//**********************************************************************//
async function userLogin(user) {
  const querySnapshot = await firebase
    .firestore()
    .collection("guardians")
    .where("Email", "==", user.email)
    .where("Password", "==", user.password)
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("Invalid user");
  } else {
    user.name = querySnapshot.docs[0].data().Name;
    user.studentList = querySnapshot.docs[0].data().StudentList;
    console.log("Login Successfull");
    return user;
  }
}

//**********************************************************************//
// user signing
//**********************************************************************//
async function getStudents(user) {
  var querySnapshot = await firebase.firestore().collection("students");
  user.StudentList.foreach((id) => {
    querySnapshot = querySnapshot.doc(id).get();
    querySnapshot.forEach((doc) => console.log(doc.data()));
    if (querySnapshot.empty) {
      console.log("Invalid Student");
    } else {
      var studentList = [];
      console.log("Students Retrieved");
      querySnapshot.forEach((doc) => {
        var newStudent = new StudentClass(
          doc.id,
          doc.Name,
          doc.Gender,
          doc.DateOfBirth,
          doc.WorkingDays,
          doc.ProfilePic
        );
        studentList.push(newStudent);
      });
      return studentList;
    }
  });
}

//**********************************************************************//
//******************** function to add new student ********************//
//**********************************************************************//
async function addStudent(userID, student, questionare, levelList) {
  const db = firebase.firestore();
  // start batch
  const batch = db.batch();
  // add student doc to 'students' collection
  const studentRef = db.collection("students").doc();
  batch.set(studentRef, {
    Name: student.name,
    Gender: student.gender,
    DateOfBirth: student.dateOfBirth,
    WorkingDays: student.workingDays,
    ProfilePic: student.profilePic,
  });
  console.log("Student Added", studentRef.id);
  const studentID = studentRef.id;

  // add questionare result in 'student/QuestionareResult' collection
  const questionareRef = db
    .collection("students")
    .doc(studentID)
    .collection("QuestionareResult")
    .doc(questionare.id);
  batch.set(questionareRef, {
    Name: questionare.name,
    Description: questionare.description,
    AttemptDate: Date(),
    AnswerList: questionare.answerList,
    Result: questionare.result,
  });
  console.log("Questionare Added", questionareRef.id);

  // initialize student reports in 'reports' collection
  const reportRef = db.collection("reports").doc(studentID);
  batch.set(reportRef, {
    StreakCount: 1,
    LastStreak: Date(),
    DailyChapters: 1,
    LearningPase: 50,
    AchievementList: [],
  });
  console.log("Report Added ", reportRef.id);

  // add levels for students
  const assignedLevelsRef = db
    .collection("reports")
    .doc(studentID)
    .collection("assigned-levels");

  levelList.forEach((level) => {
    const levelRef = db.collection("levels").doc(level);
    try {
      // get level details
      db.runTransaction(async (t) => {
        const doc = await t.get(levelRef);
        // set level for student
        assignedLevelsRef.doc(level);
        t.set(assignedLevelsRef, {
          CompletedChapters: [],
          CompletionTime: [],
          CurrentChapter: doc.data().ChapterList[0],
        });
      });

      console.log("Level Added!");
    } catch (e) {
      console.log("Level failure:", e);
    }
  });

  // add student to the 'guardian'
  const guardianRef = db.collection("guardians").doc(userID);
  try {
    await db.runTransaction(async (t) => {
      const doc = await t.get(guardianRef);

      var newStudentList = [];
      doc.data().StudentList.forEach((student) => newStudentList.push(student));

      newStudentList.push(studentID);
      t.update(guardianRef, { StudentList: newStudentList });
    });

    console.log("Guardian success!");
  } catch (e) {
    console.log("Guardian failure:", e);
  }
  // commit batch
  await batch.commit();

  return studentID;
}

//**********************************************************************//
// function to switch students
//**********************************************************************//
async function switchStudent(studentID) {
  const querySnapshot = await firebase
    .firestore()
    .collection("students")
    .doc(studentID)
    .get();
  console.log(querySnapshot.data());
  if (querySnapshot.empty) {
    console.log("Invalid student");
  } else {
    console.log("Student Login");
    var newStudent = new StudentClass(
      studentID,
      querySnapshot.data().Name,
      querySnapshot.data().Gender,
      querySnapshot.data().DateOfBirth,
      querySnapshot.data().WorkingDays,
      querySnapshot.data().ProfilePic
    );
    return newStudent;
  }
}

//**********************************************************************//
// add routine to 'routines/studentID/student-routines'
//**********************************************************************//
async function addRoutine(studentID, routine) {
  const query = await firebase
    .firestore()
    .collection("routines")
    .doc(studentID)
    .collection("student-routines")
    .add({
      Name: routine.name,
      Description: routine.description,
      StartTime: routine.startTime,
      Repeat: routine.repeat,
      AssetPic: routine.assetPic,
    });
  console.log("Routine created: ", query.id);
  return query.id;
}

//**********************************************************************//
// update routine to 'routines/studentID/student-routines.routine.id'
//**********************************************************************//
async function updateRoutine(studentID, routine) {
  const query = await firebase
    .firestore()
    .collection("routines")
    .doc(studentID)
    .collection("student-routines")
    .doc(routine.id)
    .update({
      Name: routine.name,
      Description: routine.description,
      StartTime: routine.startTime,
      Repeat: routine.repeat,
      AssetPic: routine.assetPic,
    });
  return query.id;
}

//**********************************************************************//
// routine routine from 'routines/studentID/student-routines/routine.id'
//**********************************************************************//
async function deleteRoutine(studentID, routine) {
  const query = await firebase
    .firestore()
    .collection("routines")
    .doc(studentID)
    .collection("student-routines")
    .doc(routine.id)
    .delete();
  return query.id;
}

//**********************************************************************//
// view student routines
//**********************************************************************//
async function viewRoutines(studentID, routines) {
  const querySnapshot = await firebase
    .firestore()
    .collection("routines")
    .doc(studentID)
    .collection("student-routines")
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("No routines added");
  } else {
    querySnapshot.foreach((doc) => {
      if (
        doc.data.StartTime.getDate() == Date().getDate() &&
        doc.data.StartTime.getMonth() == Date().getMonth()
      ) {
        const routine = new RoutineClass(
          (this.id = doc.id),
          (this.name = doc.data.Name),
          (this.description = doc.data.Description),
          (this.startTime = doc.data.StartTime),
          (this.repeat = doc.data.Repeat),
          (this.assetPic = doc.data.AssetPic)
        );
        routine.push(routine);
      }
    });
    console.log("returned");
    routines.forEach((doc) => console.log(doc));
    return routines;
  }
}

//**********************************************************************//
// view next routine
//**********************************************************************//
async function viewCurrentRoutine(studentID, routine) {
  var routine;
  const querySnapshot = await firebase
    .firestore()
    .collection("routines")
    .doc(studentID)
    .collection("student-routines")
    .where("StartTime", ">=", Date())
    .limit(1)
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("Nothing to do");
  } else {
    querySnapshot.forEach((doc) => {
      routine = new RoutineClass(
        (this.id = doc.id),
        (this.name = doc.data.Name),
        (this.description = doc.data.Description),
        (this.startTime = doc.data.StartTime),
        (this.repeat = doc.data.Repeat),
        (this.assetPic = doc.data.AssetPic)
      );
    });
    console.log("returned");
    return routine;
  }
}

//**********************************************************************//
// view level
//**********************************************************************//
async function getLevel(levelID) {
  const querySnapshot = await firebase
    .firestore()
    .collection("levels")
    .doc(levelID)
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("level not found");
  } else {
    // return level object
    var newLevel = new LevelClass(
      querySnapshot.id,
      querySnapshot.data().Name,
      querySnapshot.data().Description,
      querySnapshot.data().ChapterList,
      querySnapshot.data().Name,
      null,
      querySnapshot.data().Type,
      querySnapshot.data().Difficulty,
      querySnapshot.data().Image
    );
    console.log("level found");
    return newLevel;
  }
}

//**********************************************************************//
// view chapters of level with id 'levelID'
//**********************************************************************//
async function viewChapters(levelID, studentID) {
  var chapterList = [];
  // get chapters
  const chapterRef = await firebase
    .firestore()
    .collection("chapters")
    .where("LevelID", "==", levelID)
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("level not found");
  } else {
    // get chapters report
    const reportRef = await firebase
      .firestore()
      .collection("reports")
      .doc(studentID)
      .collection("assigned-levels")
      .doc(levelID)
      .get();
    if (reportRef.empty) {
      console.log("level not found");
    } else {
      // map data to chapterList
      for (let i = 0; i < chapterRef.size; i = i + 1) {
        const chapter = new ChapterClass(
          chapterRef[i].data().id,
          chapterRef[i].data().Name,
          chapterRef[i].data().Description,
          chapterRef[i].data().LevelID,
          chapterRef[i].data().Image,
          chapterRef[i].data().ContentID,
          chapterRef[i].data().Duration
        );
        if (i < reportRef.data().CompletionTime.length) {
          chapter.completionTime = reportRef.data().CompletionTime[i];
          chapter.gainedStar = reportRef.data().CompletedChapters[i].value;
        } else {
          chapter.completionTime = 0;
          chapter.gainedStar = 0;
        }
        chapterList.push(chapter);
      }
      console.log("level found");
      return chapterList;
    }
  }
}

//**********************************************************************//
// view chapter contents
//**********************************************************************//
async function getChapterContents(chapterID) {
  const querySnapshot = await firebase
    .firestore()
    .collection("chapters")
    .doc(chapterID)
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("chapter not found");
  } else {
    var content = new ContentClass(
      querySnapshot.id,
      querySnapshot.data().ContentList,
      querySnapshot.Type
    );
    console.log("chapter found");
    return content;
  }
}

export {
  userSignup,
  userLogin,
  addStudent,
  getStudents,
  switchStudent,
  addRoutine,
  updateRoutine,
  deleteRoutine,
  viewRoutines,
  viewCurrentRoutine,
  getLevel,
  viewChapters,
  getChapterContents,
};
