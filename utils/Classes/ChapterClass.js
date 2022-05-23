/** @format */

import React from "react";

class ChapterClass {
  constructor(
    id = null,
    name = null,
    description = null,
    levelID = null,
    image = null,
    contentID = null,
    duration = null,
    chapterNumber = null,
    completionTime = null,
    gainedStar = null
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.levelID = levelID;
    this.image = image;
    this.contentID = contentID;
    this.duration = duration;
    this.chapterNumber = chapterNumber;
    this.completionTime = completionTime;
    this.gainedStar = gainedStar;
  }
}

export default ChapterClass;
