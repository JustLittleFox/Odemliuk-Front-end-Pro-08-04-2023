export default class StopwatchUI {
    #ui = {};
    constructor(initialTime) {
        this.#init(initialTime);
    }

    #getElement(tagName, classNames) {
        const tag = document.createElement(tagName);
        tag.classList.add(...[].concat(classNames));
        return tag;
    }

    #createWrapper() {
        const wrapper = this.#getElement('div', 'stopwatch-wrapper');
        this.#ui.wrapper = wrapper;
    }

    #addClock(time) {
        const stopwatch = this.#getElement('h1', 'stopwatch');
        stopwatch.id = 'stopwatch';
        this.#ui.wrapper.append(stopwatch);
        this.#ui.stopwatch = stopwatch;
    }

    #addButtons() {
        const wrapper = this.#getElement('div', 'buttons-wrapper');
        const ul = this.#getElement('ul', 'buttons-list');
        const buttonTexts = ['Start', 'Pause', 'Reset'];
        this.#ui.buttons = {};
        buttonTexts.forEach((buttonText) => {
            const li = this.#getElement('li', 'button-container');
            const button = this.#getElement('button', [
                'button',
                buttonText.toLowerCase(),
            ]);
            button.id = buttonText;
            button.textContent = buttonText;
            li.append(button);
            ul.append(li);
            this.#ui.buttons[buttonText.toLowerCase()] = button;
        });
        wrapper.append(ul);
        this.#ui.wrapper.append(wrapper);
    }

    #formatTime(time) {
        return [
            time.hours.toString().padStart(2, 0),
            time.minutes.toString().padStart(2, 0),
            time.seconds.toString().padStart(2, 0),
        ].join(':');
    }

    #init(initialTime) {
        this.#createWrapper();
        this.#addClock();
        this.#addButtons();
        this.setTime(initialTime);
    }

    setTime(time) {
        this.#ui.stopwatch.textContent = this.#formatTime(time);
    }

    addStartBtnListener(callback) {
        this.#ui.buttons.start.addEventListener('click', callback);
    }
    addPauseBtnListener(callback) {
        this.#ui.buttons.pause.addEventListener('click', callback);
    }
    addResetBtnListener(callback) {
        this.#ui.buttons.reset.addEventListener('click', callback);
    }

    appendStopwatch(container) {
        container.append(this.#ui.wrapper);
    }
}
