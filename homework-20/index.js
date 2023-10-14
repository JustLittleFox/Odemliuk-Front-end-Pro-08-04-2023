import Stopwatch from './stopwatch.js';
import StopwatchUI from './stopwatch-ui.js';

const initialTime = { hours: 0, minutes: 0, seconds: 0 };
const container = document.getElementById('stopwatches-container');

function createNewStopwatch() {
    const ui = new StopwatchUI(initialTime);
    const stopwatch = new Stopwatch(time => ui.setTime(time));

    ui.startCallback(() => stopwatch.start());
    ui.pauseCallback(() => stopwatch.pause());
    ui.resetCallback(() => stopwatch.reset());

    container.appendChild(ui.getContainerElement());
}

document.getElementById('add-stopwatch-btn').addEventListener('click', createNewStopwatch);
createNewStopwatch();
