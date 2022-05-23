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
async function addStudent(userID, student, questionare, difficulty) {
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
  var assignedLevelsRef = db
    .collection("reports")
    .doc(studentID)
    .collection("assigned-levels");
  const levelRef = db
    .collection("levels")
    .where("Difficulty", "==", difficulty);
  try {
    // get level details
    db.runTransaction(async (t) => {
      const doc = await t.get(levelRef);
      levelRef.forEach((level) => {
        // set level for student
        assignedLevelsRef.doc(level.id);
        t.set(assignedLevelsRef, {
          CompletedChapters: [],
          CompletionTime: [],
          CurrentChapter: level.data().ChapterList[0],
        });
      });
    });

    console.log("Level Added!");
  } catch (e) {
    console.log("Level failure:", e);
  }

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
      AssetID: routine.assetID,
      TimeAM_PM: routine.time,
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
async function viewRoutines(studentID) {
  const snapResult = [];
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
    querySnapshot.forEach((doc) => snapResult.push(doc.data()));
    console.log("returned");
    return snapResult;
  }
}
//**********************************************************************//
// view next routine
//**********************************************************************//
async function viewCurrentRoutine(studentID) {
  const snapResult = [];
  const querySnapshot = await firebase
    .firestore()
    .collection("routines")
    .doc(studentID)
    .collection("student-routines")
    .where("StartTime", ">=", new Date().getTime() / 1000)
    .limit(1)
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("Nothing to do");
  } else {
    querySnapshot.forEach((doc) => snapResult.push(doc.data()));
    console.log("returned");
    return snapResult;
  }
}

//**********************************************************************//
// view level
//**********************************************************************//
async function getLevel(studentID) {
  const stdLevelRef = await firebase
    .firestore()
    .collection("reports")
    .doc(studentID)
    .collection("assigned-levels")
    .orderBy("Difficulty")
    .get();
  stdLevelRef.forEach((doc) => {
    console.log(doc.data());
  });
  if (stdLevelRef.empty) {
    console.log("level not found");
  } else {
    var levelList = [];
    stdLevelRef.forEach((doc) => {
      var newLevel = new LevelClass(
        (this.id = doc.id),
        (this.name = doc.data().Name),
        null,
        (this.chapterList = doc.data().CompletedChapters),
        (this.completionTime = doc.data().CompletionTime),
        (this.gainedStarts = doc.data().GainedStars),
        (this.currentChapter = doc.data().CurrentChapter),
        null,
        (this.difficulty = doc.data().Difficulty),
        (this.totalChapters = doc.data().TotalChapters),
        (this.image = doc.data().Image)
      );
      console.log("level found");
      levelList.push(newLevel);
    });
    console.log(levelList);
    return levelList;
  }
}

//**********************************************************************//
// view chapters of level with id 'levelID'
//**********************************************************************//
async function viewChapters(level) {
  var chapterList = [];
  // get chapters
  const chapterRef = await firebase
    .firestore()
    .collection("chapters")
    .where("LevelID", "==", level.id)
    .get();
  chapterRef.forEach((doc) => console.log(doc.data()));
  if (chapterRef.empty) {
    console.log("level not found");
  } else {
    var i = 0;
    // map data to chapterList
    chapterRef.forEach((doc) => {
      const chapter = new ChapterClass(
        doc.id,
        doc.data().Name,
        doc.data().Description,
        doc.data().LevelID,
        doc.data().ChapterMedia,
        doc.data().ContentID,
        doc.data().ExpectedTime,
        doc.data().ChapterNumber
      );
      if (i < reportRef.data().CompletionTime.length) {
        chapter.completionTime = level.completionTime[i];
        chapter.gainedStar = level.gainedStarts[i];
      } else {
        chapter.completionTime = 0;
        chapter.gainedStar = 0;
      }
      chapterList.push(chapter);
      i = i + 1;
    });
    console.log("chapters found");
    chapterList.forEach((chapter) => console.log(chapter));
    return chapterList;
  }
}

//**********************************************************************//
// view chapter contents
//**********************************************************************//
async function getChapterContents(chapterID) {
  const querySnapshot = await firebase
    .firestore()
    .collection("contents")
    .doc(chapterID)
    .get();
  console.log(querySnapshot.data());
  if (querySnapshot.empty) {
    console.log("chapter not found");
  } else {
    var content = new ContentClass(
      querySnapshot.id,
      querySnapshot.data().NameList,
      querySnapshot.data().DataList,
      querySnapshot.data().Type
    );
    console.log("chapter found");
    console.log(content);
    return content;
  }
}

//**********************************************************************//
// complete chapter
//**********************************************************************//
async function updateCompletedChapter(studentID, chapter) {
  const db = firebase.firestore();
  const levelRef = await firebase
    .firestore()
    .collection("levels")
    .doc(chapter.id)
    .get();

  var flag = false;
  var currentChapter = chapter.id;

  const assignedLevelRef = await firebase
    .firestore()
    .collection("reports")
    .doc(studentID)
    .collection("assigned-levels")
    .doc(chapter.levelID);

  try {
    // get level details
    db.runTransaction(async (t) => {
      const doc = await t.get(assignedLevelRef);
      // update values
      var completed = doc.data().CompletedChapters;
      var completionTime = doc.data().CompletionTime;
      var gainedStarts = doc.data().GainedStars;
      if (chapter.chapterNumber > doc.data().CompletedChapters.length) {
        flag = true;
        completed.push(chapter.chapterID);
        completionTime.push(chapter.completionTime);
        gainedStarts.push(chapter.gainedStar);
        if (chapter.chapterNumber < levelRef.data().ChapterList.length) {
          currentChapter =
            levelRef.data().ChapterList[chapter.chapterNumber + 1];
        }
      } else {
        completionTime[chapter.chapterNumber] = chapter.completionTime;
        gainedStarts[chapter.chapterNumber] = chapter.gainedStar;
      }

      // update level for student
      t.update(assignedLevelRef, {
        CompletedChapters: completed,
        CompletionTime: completionTime,
        GainedStars: gainedStarts,
        CurrentChapter: currentChapter,
      });
    });

    console.log("Level updated");
  } catch (e) {
    console.log("Level failure:", e);
  }
  if (flag) {
    const reportRef = await firebase
      .firestore()
      .collection("reports")
      .doc(studentID);
    try {
      // get report details
      db.runTransaction(async (t) => {
        const doc = await t.get(reportRef);
        var completed = doc.data().TotalCompletedChapters + 1;
        var learning =
          (doc.data().LearningPase * doc.data().TotalCompletedChapters +
            (chapter.gainedStar * 100) / 3) /
          completed;
        // update report for student
        t.update(reportRef, {
          TotalCompletedChapters: completed,
          LearningPase: learning,
        });
      });

      console.log("Report updated");
    } catch (e) {
      console.log("Report failure:", e);
    }
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
  updateCompletedChapter,
};
