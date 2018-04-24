type BankAccount = {money: number, deposit: (value: number) => void};
type BankCustomer = {name: string, bankAccount: BankAccount, hobbies: string[]};

let bankAccount: BankAccount = {
  money: 0,
  deposit(value) {
      this.money += value;
  }
};

let myself: BankCustomer = {
    name: "Gui",
    bankAccount: bankAccount,
    hobbies: ["hiphop", "nonstop"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
