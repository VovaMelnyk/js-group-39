/**
 * Напиши класс `User` который создаёт объект со свойствами `login` и `email`.
 * Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через
 * геттер и сеттер `login` и `email`.
 */

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  set login(newLogin) {
    if (!newLogin.includes('hack')) {
      this.#login = newLogin;
    }
  }

  get login() {
    return this.#login;
  }

  set email(newEmail) {
    if (!newEmail.endsWith('.net')) {
      this.#email = newEmail;
    }
  }

  get email() {
    return this.#email;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

mango.login = 'get hacked son';
mango.email = 'mysupermail@mail.net';
console.log(mango.email);
console.log(mango.login);

mango.login = 'mangoooo';
mango.email = 'mysupermail@mail.com';
console.log(mango.email);
console.log(mango.login);
