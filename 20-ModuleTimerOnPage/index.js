import Stopwatch from './stopwatch.js';
import StopwatchUi from './stopwatch-ui.js';

function addTimer() {
    const initialTime = { hours: 0, minutes: 0, seconds: 0 };
    const ui = new StopwatchUi(initialTime);
    const stopwatch = new Stopwatch(ui.setTime.bind(ui), initialTime);

    ui.addStartBtnListener((e) => stopwatch.start());
    ui.addPauseBtnListener((e) => stopwatch.pause());
    ui.addResetBtnListener((e) => stopwatch.reset());

    ui.appendStopwatch(document.body);
}

const addTimerBtn = document.querySelector('#add-timer');
addTimerBtn.addEventListener('click', addTimer);