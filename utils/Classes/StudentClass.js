/** @format */

import React from "react";

class StudentClass {
  constructor(
    id = null,
    name = null,
    gender = null,
    dateOfBirth = null,
    workingDays = null,
    profilePic = null
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.workingDays = workingDays;
    this.profilePic = profilePic;
  }
}

export default StudentClass;
