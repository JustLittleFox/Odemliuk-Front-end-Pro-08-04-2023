class CallController {
  #currentCall = null;

  #callHistory = [];

  constructor() {
    Call.addSubscription(Call.EVENT_TYPES.changeStatus, this.#trackCallStatus);
  }

  startCall({ phone }) {
    if (!Call.validatePhone(phone)) {
      console.warn('Phone number is not valid');
      return null;
    }

    if (!this.#currentCall) {
      this.#currentCall = new Call(phone);
      console.log(this.#currentCall);
      return this.#currentCall;
    }

    console.warn(
      `You have another call in [${this.#currentCall.status}] status`,
    );
    return this.#currentCall;
  }

  endCall() {
    if (!this.#currentCall) {
      console.warn('No call in progress');
      return;
    }

    this.#currentCall.endCallByCaller();
    this.#killCurrentCall();
  }

  #trackCallStatus = (newStatus, oldStatus) => {
    console.log(
      'CallController track status change: ',
      oldStatus,
      '>',
      newStatus,
    );
    if (!Call.endCallStatuses.includes(newStatus)) return null;
    return this.#killCurrentCall();
  };

  #appendCallHistoryToHTML(call) {
    const callHistoryList = document.getElementById('callHistoryList');
    if (callHistoryList) {
      const callHistoryItem = document.createElement('div');
      callHistoryItem.textContent = `Call to ${call.phone} ended with status: ${call.status} - Duration: ${call.duration} seconds`;
      callHistoryList.appendChild(callHistoryItem);
    }
  }

  #killCurrentCall() {
    this.#callHistory.push(Object.freeze(this.#currentCall));
    this.#currentCall = null;
    const lastCall = this.#callHistory.at(-1);
    this.#appendCallHistoryToHTML(lastCall);

    return this.#callHistory.at(-1);
  }

  get currentCall() {
    return structuredClone(this.#currentCall);
  }

  get callHistory() {
    return [...this.#callHistory];
  }
}

const callController = new CallController();
