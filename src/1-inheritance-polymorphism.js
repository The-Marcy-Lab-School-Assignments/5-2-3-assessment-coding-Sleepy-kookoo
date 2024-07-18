class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  addContact(newContact) {
    if (!newContact.name || !newContact.phoneNumber) return `Invalid`
    if (newContact.phoneNumber) return `Invalid`
    this.contacts.push(newContact)
    return `${newContact.name} added.`
  }

  removeContact(name) {
    this.contacts.splice(this.contacts.findIndex((contact) => contact.name === name), 1)
  }
}

class AppleIPhone {

}

module.exports = {
  Phone,
  AppleIPhone,
};
