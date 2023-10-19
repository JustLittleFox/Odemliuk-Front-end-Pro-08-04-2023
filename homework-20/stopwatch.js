export default class StopWatch {
    constructor(onTick) {
        this.onTick = onTick;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.seconds++;
                if (this.seconds === 60) {
                    this.seconds = 0;
                    this.minutes++;
                    if (this.minutes === 60) {
                        this.minutes = 0;
                        this.hours++;
                    }
                }
                this.onTick({
                    hours: this.hours,
                    minutes: this.minutes,
                    seconds: this.seconds
                });
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
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.onTick({ hours: 0, minutes: 0, seconds: 0 });
    }

    getTime() {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        };
    }
}

