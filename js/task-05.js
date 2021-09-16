/**
 * Операция rest
 *
 * Напиши функцию `transformUsername(user)` так, чтобы она возвращала
 * новый обьект со свойством `fullName`, вместо `firstName` и `lastName`.
 */

function transformUsername({ firstName, lastName, ...otherProps }) {
  return {
    ...otherProps,
    fullName: `${firstName} ${lastName}`,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
