/**
 * Операция spread
 *
 * Дополни функцию `createContact(partialContact)` так, чтобы она
 * возвращала новый объект контакта с добавленными свойствами `id`
 * и `createdAt`, а также `list` со значением "default" если
 * в `partialContact` нет такого свойства.
 */

function createContact(partialContact) {
  return {
    list: 'default',
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
