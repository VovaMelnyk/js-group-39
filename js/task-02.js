/**
 * Выполните рефакторинг методов объекта `phonebook` чтобы код заработал.
 */

const phonebook = {
  contacts: [],
  add(data) {
    const newContact = {
      list: 'default',
      ...data,
      id: this.generateId(),
      createdAt: this.getDate(),
    };
    this.contacts.push(newContact);
  },
  list() {
    console.table(this.contacts);
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

phonebook.add({
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
});
phonebook.list();

phonebook.add({
  name: 'Poly',
  email: 'poly@hotmail.com',
});
phonebook.list();
