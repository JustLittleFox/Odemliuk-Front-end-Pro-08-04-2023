export default class StopWatch {
    constructor(onTick, initialTime) {
        this.onTick = onTick;
        this.time = initialTime;
        this.intervalId = null;
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.time.seconds++;
                if (this.time.seconds === 60) {
                    this.time.seconds = 0;
                    this.time.minutes++;
                }

                if (this.time.minutes === 60) {
                    this.time.minutes = 0;
                    this.time.hours++;
                }

                if (this.time.hours === 24) {
                    this.time.seconds = 1;
                    this.time.hours = 0;
                }

                this.onTick(this.time);
            }, 1000);
        }
    }

    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset() {
        this.pause();
        this.time = { hours: 0, minutes: 0, seconds: 0 };
        this.onTick(this.time);
    }

    getTime() {
        return this.time;
    }
}

