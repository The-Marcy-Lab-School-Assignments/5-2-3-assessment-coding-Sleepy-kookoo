class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  addContact(newContact) {
    if (!newContact.name || !newContact.phoneNumber) return `Invalid`
    if (newContact.phoneNumber.length !== 10) return `Invalid`
    // Need to work on this!
    this.contacts.push(newContact)
    return `${newContact.name} added.`
  }

  removeContact(name) {
    let remove = (this.contacts.splice(this.contacts.findIndex((contact) => contact.name === name), 1))
    if (remove) return `${name} removed.`

    let find = ((this.contacts.includes((contact) => contact.name === name)))
    // if (find === undefined) return `Contact not found.`
    // Need to work on this!

  }

  makeCall(name) {
    if ((this.contacts.find((contact) => contact.name === name))) {
      return `Calling ${name}...`
    } else if (name.length !== 10) {
      return `Invalid`
    } else {
      return `Calling ${name}...`
    }
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model
  }
  sendIMessage(phone, message) {
    if (phone) return
    return `Message: ${message} - sent from ${this.model}`
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
