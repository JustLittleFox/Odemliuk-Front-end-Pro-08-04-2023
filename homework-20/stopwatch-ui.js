export default class StopwatchUI {
    constructor(initialTime) {
        this.hours = initialTime.hours;
        this.minutes = initialTime.minutes;
        this.seconds = initialTime.seconds;

        this.timerElement = document.createElement('div');
        this.updateTimerDisplay();
        this.startButton = document.createElement('button');
        this.pauseButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        this.startButton.textContent = 'Start';
        this.pauseButton.textContent = 'Pause';
        this.resetButton.textContent = 'Reset';

        this.startButton.addEventListener('click', () => this.startCallback());
        this.pauseButton.addEventListener('click', () => this.pauseCallback());
        this.resetButton.addEventListener('click', () => this.resetCallback());

        this.containerElement = document.createElement('div');
        this.containerElement.appendChild(this.timerElement);
        this.containerElement.appendChild(this.startButton);
        this.containerElement.appendChild(this.pauseButton);
        this.containerElement.appendChild(this.resetButton);
    }

    updateTimerDisplay() {
        this.timerElement.textContent = `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}:${String(this.seconds).padStart(2, '0')}`;
    }

    setTime({ hours, minutes, seconds }) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.render();
    }

    startCallback(callback) {
        this.startCallback = callback;
    }

    pauseCallback(callback) {
        this.pauseCallback = callback;
    }

    resetCallback(callback) {
        this.resetCallback = callback;
    }

    render() {
        const hoursStr = String(this.hours).padStart(2, '0');
        const minutesStr = String(this.minutes).padStart(2, '0');
        const secondsStr = String(this.seconds).padStart(2, '0');
        this.timerElement.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
    }

    getContainerElement() {
        return this.containerElement;
    }
}