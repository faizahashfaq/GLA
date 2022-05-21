/** @format */

import { firestore } from "firebase";
import { SnapshotViewIOSBase } from "react-native";
import firebase from "../firebaseConfig";

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
        docID = docRef;
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
    .get();
  querySnapshot.forEach((doc) => console.log(doc.data()));
  if (querySnapshot.empty) {
    console.log("Invalid user");
  } else {
    user.name = querySnapshot.docs[0].data.Name;
    user.studentList = querySnapshot.docs[0].data.StudentList;
    console.log("Login Successfull");
    return user;
  }
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

  // initialize student reports in 'reports' collection
  const reportRef = db.collection("reports").doc(studentID);
  batch.set(reportRef, {
    StreakCount: 1,
    LastStreak: Date(),
    DailyChapters: 1,
    LearningPase: 50,
    AchievementList: [],
  });

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
  }
  var snapData = querySnapshot.data();
  return snapData;
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
    });
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
    .where("StartTime", ">=", Date())
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

export {
  userSignup,
  userLogin,
  addStudent,
  switchStudent,
  addRoutine,
  viewRoutines,
  viewCurrentRoutine,
};
