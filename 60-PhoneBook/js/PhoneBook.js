class PhoneBook {
  #ATTRS = {
    dataUserId: "data-user-id",
    dataRemoveBtn: "data-remove-btn",
    dataCallBtn: "data-call-btn",
    dataEndCallBtn: "data-end-call-btn",
    dataEmailBtn: "data-email-btn",
    dataLocationBtn: "data-location-btn",
  };
  list = null;
  listUl = null;
  callDurationEl = null;
  #contacts = [];
  #searchedContacts = [];
  #modal = null;

  constructor(users, listSelector) {
    this.list = document.querySelector(listSelector);
    this.listUl = this.list.querySelector("ul");

    this.#modal = new bootstrap.Modal("#exampleModalToggle", {
      keyboard: false,
      backdrop: "static",
    });

    this.callDurationEl = this.#modal._element.querySelector(
        ".modal-title .duration"
    );
    this.#setEvents();

    users.forEach((user) => {
      this.addContact(user);
    });
  }

  addContact(user) {
    if (!user.id) {
      user.id = this.#contacts.length + 1;
    }

    const userInstance = new User(user);
    userInstance.template = this.createContactTemplate(userInstance);

    this.#contacts.push(userInstance);
    this.listUl.prepend(userInstance.template);

    users.push(user);
  }

  call(contactId) {
    const contact = this.#contacts.find(({ id }) => id === contactId);

    this.#modal._element.querySelector(".modal-title .title").innerHTML =
        contact.name;
    this.#modal._element.querySelector(".modal-body").innerHTML =
        "Conversation with " + contact.phone;
    this.#modal.show();

    callController.startCall(contact);
  }

  removeContact(contactId) {
    const contactIndex = this.#contacts.findIndex(({ id }) => id === contactId);
    this.#contacts[contactIndex].template.remove();
    this.#contacts.splice(contactIndex, 1);
  }

  search(searchTerm) {
    this.#searchedContacts = this.#contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.renderContacts();
  }

  renderContacts() {
    const contactsToDisplay =
        this.#searchedContacts.length > 0
            ? this.#searchedContacts
            : this.#contacts;

    this.listUl.innerHTML = "";
    contactsToDisplay.forEach((contact) => {
      this.listUl.appendChild(contact.template);
    });
  }

  #setEvents() {
    Call.addSubscription(Call.EVENT_TYPES.changeStatus, this.#trackCallStatus);
    Call.addSubscription(
        Call.EVENT_TYPES.changeDuration,
        this.#trackCallDuration
    );

    const addContactForm = document.getElementById("addContactForm");
    addContactForm.addEventListener("submit", this.#addContactHandler);

    this.list.addEventListener("click", this.#removeHandler);
    this.list.addEventListener("click", this.#callHandler);
    this.list.addEventListener("click", this.#emailHandler);
    this.list.addEventListener("click", this.#locationHandler);

    this.#modal._element
        .querySelector(`[${this.#ATTRS.dataEndCallBtn}]`)
        .addEventListener("click", this.#endCall);
  }

  #emailHandler = (e) => {
    const { target: element } = e;
    e.stopPropagation();
    if (
        !element
            .closest(`[${this.#ATTRS.dataEmailBtn}]`)
            ?.hasAttribute(this.#ATTRS.dataEmailBtn)
    )
      return;
    const userId = +element
        .closest(`[${this.#ATTRS.dataUserId}]`)
        .getAttribute(this.#ATTRS.dataUserId);
    this.openEmailModal(userId);
  };

  #addContactHandler = (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const phoneInput = document.getElementById("contactPhone");
    const emailInput = document.getElementById("contactEmail");

    const newUser = {
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
    };

    this.addContact(newUser);

    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
  };

  #removeHandler = (e) => {
    const { target: element } = e;
    e.stopPropagation();
    if (
        !element
            .closest(`[${this.#ATTRS.dataRemoveBtn}]`)
            ?.hasAttribute(this.#ATTRS.dataRemoveBtn)
    )
      return;
    const userId = +element
        .closest(`[${this.#ATTRS.dataUserId}]`)
        .getAttribute(this.#ATTRS.dataUserId);
    this.removeContact(userId);
  };

  #callHandler = (e) => {
    const { target: element } = e;
    e.stopPropagation();
    if (
        !element
            .closest(`[${this.#ATTRS.dataCallBtn}]`)
            ?.hasAttribute(this.#ATTRS.dataCallBtn)
    )
      return;
    const userId = +element
        .closest(`[${this.#ATTRS.dataUserId}]`)
        .getAttribute(this.#ATTRS.dataUserId);
    this.call(userId);
  };

  #endCall = () => {
    callController.endCall();
    this.#modal.hide();
    this.callDurationEl.innerHTML = "00:00";
  };

  #trackCallStatus = (newStatus) => {
    if (!Call.endCallStatuses.includes(newStatus)) return;
    this.#endCall();
  };

  #trackCallDuration = (duration) => {
    this.callDurationEl.innerHTML = "00:0" + duration;
  };

  createContactTemplate(user) {
    const wrapper = document.createElement("div");
    wrapper.className =
        "list-group-item d-flex justify-content-between align-items-center";
    wrapper.setAttribute("data-user-id", user.id);

    wrapper.innerHTML = `
            <span class="contacts__contact">${user.name}</span>
            <div>
                <button type="button" ${
        this.#ATTRS.dataCallBtn
    } class="btn btn-success">
                    <i class="bi bi-telephone"></i>
                </button>
                <button type="button" ${
        this.#ATTRS.dataRemoveBtn
    } class="btn btn-danger">
                    <i class="bi bi-trash"></i>
                </button>
                <button type="button" ${
        this.#ATTRS.dataEmailBtn
    } class="btn btn-primary">
                    <i class="bi bi-envelope"></i>
                </button>
                <button type="button" ${
        this.#ATTRS.dataLocationBtn
    } class="btn btn-primary">
                    <i class="bi bi-geo"></i>
                </button>
            </div>`;

    return wrapper;
  }

  openEmailModal(userId) {
    const emailModal = new bootstrap.Modal(
        document.getElementById("emailModal")
    );
    const user = this.#contacts.find(({ id }) => id === userId);
    document.getElementById("recipientEmail").value = user.email;
    emailModal.show();
  }

  sendEmail() {
    const recipientEmail = document.getElementById("recipientEmail").value;
    const emailSubject = document.getElementById("emailSubject").value;
    const emailMessage = document.getElementById("emailMessage").value;

    console.log("Sending email to:", recipientEmail);
    console.log("Subject:", emailSubject);
    console.log("Message:", emailMessage);

    const emailModal = new bootstrap.Modal(
        document.getElementById("emailModal")
    );
    emailModal.hide();
  }

  callHistoryToHtml() {
    const initialCallHistory = callController.callHistory;
    const callHistoryList = document.getElementById("callHistoryList");

    initialCallHistory.forEach((call) => {
      const callHistoryItem = document.createElement("div");
      callHistoryItem.textContent = `Call to ${call.phone} ended with status: ${call.status} - Duration: ${call.duration} seconds`;
      callHistoryList.appendChild(callHistoryItem);
    });
  }

  addLocationToContact(userId) {
    const contact = this.#contacts.find(({ id }) => id === userId);

    if (contact && contact.adress && contact.adress.geo) {
      const { lat, lng } = contact.adress.geo;
      if (lat && lng) {
        const latNum = parseFloat(lat);
        const lngNum = parseFloat(lng);

        if (!isNaN(latNum) && !isNaN(lngNum)) {
          const url = `https://www.google.com/maps?q=${latNum},${lngNum}`;
          window.open(url, "_blank");
        } else {
          console.error("Invalid coordinates:", latNum, lngNum);
        }
      } else {
        console.error("Missing coordinates:", lat, lng);
      }
    } else {
      console.error("Invalid contact or missing address/geo data:", contact);
    }
  }

  #locationHandler = (e) => {
    const { target: element } = e;
    if (
        !element
            .closest(`[${this.#ATTRS.dataLocationBtn}]`)
            ?.hasAttribute(this.#ATTRS.dataLocationBtn)
    )
      return;
    const userId = +element
        .closest(`[${this.#ATTRS.dataUserId}]`)
        .getAttribute(this.#ATTRS.dataUserId);
    this.addLocationToContact(userId);
  };
}

const phoneBook = new PhoneBook(users, ".contacts__list");
