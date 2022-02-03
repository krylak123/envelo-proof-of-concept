class Timer {
  constructor() {
    this.timer = 0;
    this.intervalIndex = 0;
  }

  getTime() {
    return this.timer;
  }

  startTimer() {
    this.intervalIndex = setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalIndex);
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default Timer;
