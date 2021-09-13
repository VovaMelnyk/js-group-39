// const userA = {
//   name: "Mango",
//   age: 30,
// };

// const userB = userA;
// const userC = userA;
// const userD = userA;
// userB.age = 50;
// userA.age = 100;
// console.log(userB);

// const name = "Генри Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генри Сибола"
// console.log(user.age); // 25

// user.age = 100;

// при такой записи в объекте создается копия значений свойств?
// то есть значение, которое указано в переменной, и занесено в объект можно будет переопределить?

// 1)  Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// // delete user.hobby;
// console.log(user);

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(keys);

// 2) У нас есть объект, в котором хранятся зарплаты нашей команды.Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// function countTotalSalaries(object) {
//   const values = Object.values(object);
//   let total = 0;
//   for (let number of values) {
//     total += number;
//   }
//   return total;
// }

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salaries2 = {};

// const result = countTotalSalaries(salaries2);
// const result2 = countTotalSalaries(salaries);
// console.log(`result`, result);

// 3) Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: "Изумруд", cost: 1300, quantity: 4 },
//   { name: "Бриллиант", cost: 2700, quantity: 3 },
//   { name: "Сапфир", cost: 400, quantity: 7 },
//   { name: "Щебень", cost: 200, quantity: 2 },
// ];

// function calcTotalPrice(stoneName, stones) {
//   for (let stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.cost * stone.quantity;
//     }
//   }
//   return "Stone not exist";
// }

// function calcTotalPrice(stoneName, stones) {
//   let result;
//   for (let stone of stones) {
//     if (stone.name === stoneName) {
//       result = stone.price * stone.quantity;
//     }
//   }
//   return result;
// }

// console.log(calcTotalPrice("Кварц", stones)); // 400
// calcTotalPrice(stones, "Сапфир"); // 2800

// const adventurer = {
//   name: 'Alice',
//   cat: {
//     name: 'Dinah'
//   }
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName);
// // expected output: undefined

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const wallet = {
  // Текущий баланс счета
  balance: 100,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Transaction not exist";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  //   getTransactionTotal(type) {
  //     const searchResult = [];
  //     let total = 0;
  //     for (let transaction of this.transactions) {
  //       if (transaction.type === type) {
  //         searchResult.push(transaction);
  //       }
  //     }

  //     for (let transaction of searchResult) {
  //       total += transaction.amount;
  //     }
  //     return total;
  //   },

  getTransactionTotal(type) {
    let total = 0;
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

wallet.deposit(50);
wallet.withdraw(30);
wallet.deposit(150);
wallet.deposit(20);
wallet.withdraw(10);

console.log(wallet.getBalance());
console.log(wallet.transactions);
console.log(wallet.getTransactionDetails(3));
console.log(wallet.getTransactionTotal(Transaction.DEPOSIT));
console.log(wallet.getTransactionTotal(Transaction.WITHDRAW));
