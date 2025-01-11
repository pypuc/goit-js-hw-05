function Account(login, email) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`You login: ${this.login}, email: ${this.email}`);
};

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo();

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo();
