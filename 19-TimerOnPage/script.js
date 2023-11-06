class StopWatch {
    constructor(onTick) {
        this.onTick = onTick;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.intervalId = null;
    }

    start() {
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

    pause() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.pause();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    getTime() {
        return {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds
        };
    }
}

const onTick = (time) => console.log(time);
const stopWatch = new StopWatch(onTick);
stopWatch.start();