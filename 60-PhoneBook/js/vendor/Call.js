class Call {
  #connectTimeout = 2000;

  #inProgressTimeout = Math.round(Math.random() * 10000);

  #timerId = null;

  static CALL_STATUSES = {
    connecting: 'connecting',
    inProgress: 'in progress',
    rejected: 'rejected',
    disconnected: 'disconnected',
  };

  static EVENT_TYPES = {
    changeStatus: 'changeStatus',
    changeDuration: 'changeDuration',
  };

  static get endCallStatuses() {
    return [Call.CALL_STATUSES.rejected, Call.CALL_STATUSES.disconnected];
  }

  #status = null;

  #phone = null;

  #duration = 0;

  #startDate = null;

  #endDate = null;

  static #handlers = {
    changeStatus: [],
    changeDuration: [],
  };

  constructor(phone) {
    if (!Call.validatePhone(phone)) { throw new Error(`Phone [ ${phone} ] is not valid`); }

    this.#phone = phone;
    this.#changeStatus(Call.CALL_STATUSES.connecting);
  }

  #changeStatus(newStatus) {
    const oldStatus = this.#status;
    // console.log('Status change: ', this.#status, '>' ,newStatus)

    if (newStatus === Call.CALL_STATUSES.connecting) {
      this.#startCalcDuration();
      setTimeout(() => {
        this.#status = newStatus;
        this.#changeStatus(this.#randomCallStatus);
      }, this.#connectTimeout);
    }

    if (newStatus === Call.CALL_STATUSES.inProgress) {
      setTimeout(() => {
        this.#status = newStatus;
        this.#changeStatus(Call.CALL_STATUSES.disconnected);
      }, this.#inProgressTimeout);
    }

    if (Call.endCallStatuses.includes(newStatus)) {
      this.#status = newStatus;
      this.#stopCalcDuration();
    }

    Call.#handlers[Call.EVENT_TYPES.changeStatus].forEach((handler) => {
      handler(newStatus, oldStatus);
    });
  }

  static addSubscription(eventType, handler) {
    if (typeof handler !== 'function') return;
    Call.#handlers[eventType].push(handler);
  }

  static removeSubscription(eventType, handler) {
    if (typeof handler !== 'function') return;
    const index = Call.#handlers[eventType].findIndex(
      (func) => handler === func,
    );
    Call.#handlers[eventType].splice(index, 1);
  }

  endCallByCaller() {
    if (Call.endCallStatuses.includes(this.#status)) return this.#status;

    this.#changeStatus(Call.CALL_STATUSES.disconnected);
    return Call.CALL_STATUSES.disconnected;
  }

  #startCalcDuration() {
    this.#startDate = new Date();
    this.#timerId = setInterval(() => {
      this.#duration += 1;

      Call.#handlers[Call.EVENT_TYPES.changeDuration].forEach((handler) => {
        handler(this.#duration);
      });
    }, 1000);
  }

  #stopCalcDuration() {
    clearInterval(this.#timerId);
    this.#endDate = new Date();
    this.#timerId = null;
  }

  get phone() {
    return this.#phone;
  }

  get duration() {
    return this.#duration;
  }

  get startDate() {
    return this.#startDate;
  }

  get endDate() {
    return this.#endDate;
  }

  get status() {
    return this.#status;
  }

  static validatePhone(phone) {
    return typeof phone === 'string' && phone.length > 0;
  }

  get #randomCallStatus() {
    const randomNum = Math.round(Math.random() * 10);

    if (randomNum > 5) {
      return Call.CALL_STATUSES.rejected;
    }

    return Call.CALL_STATUSES.inProgress;
  }
}
