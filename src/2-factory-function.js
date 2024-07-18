const bankAccountFactory = (balance) => ({
  checkBalance: function () {
    if (!balance) balance = 0
    return balance
  },
  add: function (amount) {
    const startingBalance = balance;
    balance = (startingBalance + amount)
    console.log(`$${amount} added.`)
  },
  subtract: function (amount) {
    const startingBalance = balance;
    balance = (startingBalance - amount)
    console.log(`$${amount} subtracted.`)
  }
});

module.exports = {
  bankAccountFactory,
};
