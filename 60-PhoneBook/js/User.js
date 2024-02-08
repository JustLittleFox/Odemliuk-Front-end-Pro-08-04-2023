class User {
  #id = null;

  name = null;

  phone = null;

  email = null;

  website = null;

  adress = null;

  template = null;

  constructor({
    id, name, phone, email, website, adress}) {
    this.#id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.website = website;
    this.adress = adress;
  }

  static isUser(obj) {

  }

  get id() {
    return this.#id;
  }
}
