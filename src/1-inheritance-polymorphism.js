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
  /** FEEDBACK: You were on the right track here! 
   * Your order of operations could have looked like this: 
   * First check if the contact exists in the array and then after we have the index of the array we can then remove the contact. 
   * If there is no contact found when we first look for it then we should handle all of the edge cases!
   * In addition, the main thing you should be asking your self is the following: 
   * What method should I use to check if a contact exists? 
   * What does my array look like? Hint: It is an array of objects.
   * Can we use .includes() on an array of objects?
   */
  removeContact(name) {
    let remove = (this.contacts.splice(this.contacts.findIndex((contact) => contact.name === name), 1))
    if (remove) return `${name} removed.`

    let find = ((this.contacts.includes((contact) => contact.name === name)))
    // if (find === undefined) return `Contact not found.`
    // Need to work on this!

  }
  /** FEEDBACK: This method also needs to be edited so that it can also check for a phoneNumber! In the tests for the iPhone that checks for inheritance, a phone number is passed in and that's the test that does not pass! */
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
    if (phone instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`
    } else {
      return `Message could not be sent.`
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
