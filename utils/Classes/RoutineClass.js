/** @format */

import React from "react";

class RoutineClass {
  constructor(
    id = null,
    name = null,
    description = null,
    startTime = null,
    repeat = null,
    assetID = null,
    assetPic = null
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.repeat = repeat;
    this.assetID = assetID;
    this.assetPic = assetPic;
  }
}

export default RoutineClass;
