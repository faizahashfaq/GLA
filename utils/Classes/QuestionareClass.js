/** @format */

import React from "react";

class QuestionareClass {
  constructor(
    id = null,
    name = null,
    description = null,
    attemptDate = null,
    questionList = null,
    answerList = null,
    result = null
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.attemptDate = attemptDate;
    this.questionList = questionList;
    this.answerList = answerList;
    this.result = result;
  }
}

export default QuestionareClass;
