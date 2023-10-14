export default class StopWatch {
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

const timerElement = document.getElementById('timer');
const stopWatch = new StopWatch(updateTimer);

function updateTimer(time) {
    const hours = String(time.hours).padStart(2, '0');
    const minutes = String(time.minutes).padStart(2, '0');
    const seconds = String(time.seconds).padStart(2, '0');
}
updateTimer({ hours: 0, minutes: 0, seconds: 0 });
