var bankAccount = {
    money: 0,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Gui",
    bankAccount: bankAccount,
    hobbies: ["hiphop", "nonstop"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
console.log("yoyo ! c'est pas mal");
//# sourceMappingURL=app.js.map