class ReportClass {
  constructor(
    streakCount = null,
    lastStreak = null,
    dailyChapters = null,
    learningPase = null,
    achievementList = null
  ) {
    this.streakCount = streakCount;
    this.lastStreak = lastStreak;
    this.dailyChapters = dailyChapters;
    this.learningPase = learningPase;
    this.achievementList = achievementList;
  }
}

export default ReportClass;
