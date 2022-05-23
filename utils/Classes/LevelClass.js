/** @format */

import React from "react";
import { diff } from "react-native-reanimated";

class LevelClass {
	constructor(
		id = null,
		name = null,
		description = null,
		chapterList = null,
		completionTime = null,
		gainedStars = null,
		currentChapter = null,
		type = null,
		difficulty = null,
		totalChapters = null,
		image = null
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.chapterList = chapterList;
		this.completionTime = completionTime;
		this.gainedStars = gainedStars;
		this.currentChapter = currentChapter;
		this.type = type;
		this.difficulty = difficulty;
		this.totalChapters = totalChapters;
		this.image = image;
	}
}

export default LevelClass;
