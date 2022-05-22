/** @format */

import React from "react";

class AchievementClass {
  constructor(
    id = null,
    name = null,
    description = null,
    chaptersToComplete = null,
    media = null
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ChaptersToComplete = chaptersToComplete;
    this.Media = media;
  }
}

export default AchievementClass;
