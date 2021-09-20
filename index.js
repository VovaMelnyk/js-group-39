// function sum(callback) {

// }

// function minus() { }

// sum(minus);

// function foo(callback) {
//   callback(10);
// }

// function logger(value) {
//   return value;
// }

// console.log(logger); // function code
// console.log(logger(5)); //5

// console.log(foo(logger(5))); // foo(5)
// console.log(foo(logger)); // foo(5)

// foo(logger)
// foo(logger())

// function getTags () {

// }

// const getTGS = function () { }
// const getTGS = () => {};

// getTags();

// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек.
// Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// function createProduct(obj, method) {
//   const product = { ...obj, id: Date.now() };
//   method(product);
// }

// function logProduct(fruit) {
//   console.log("product in callback", fruit);
// }

// function logTotalPrice(fruit) {
//   console.log("price", fruit.price * fruit.quantity);
// }

// Напишите функцию each(array, callback), которая первым параметром ожидает массив,
//   а вторым - функцию, которая применится к каждому элементу массива.Функция each должна вернуть
//   новый массив, элементами которого будут результаты вызова коллбека.

// function each(array, callback) {
//   let newArray = [];
//   for (let el of array) {
//     newArray.push(callback(el));
//   }
//   return newArray;
// }

// function mult(value) {
//   value * 3;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 3;
//   })
// );

// console.log(each([64, 49, 36, 25, 16], mult));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], mult));

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return value * 2;
//   })
// );

// Выполните рефакторинг кода используя стрелочные функции.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// function logProduct(product) {
//   console.log(product);
// }

// const logProduct = (product) => {
//   console.log(product);
// };

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
//   console.log(this);
// }

// logTotalPrice()

// const logTotalPrice = () => {
//   console.log(product.price * product.quantity);
//   // console.log(this);
// };

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

// Выполните рефакторинг кода используя стрелочные функции.

// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], (value) => {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );

// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// const sum = () => {};

// console.log(typeof sum);

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// // const numbers = [];
// // console.log(numbers);

// numbers.forEach(function (number, index, arr) {
//   console.log(`indes = ${index}, value = ${number}`);
// });

// const users = [{ name: "Bob" }, { name: "John" }, { name: "Jack" }];

// users.forEach((user) => console.log(user.name));

// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function calсulateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    // const potionIndex = this.potions.indexOf(potionName);
    let potionIndex = -1;
    for (let potion of this.potions) {
      if (potionName === potion.name) {
        potionIndex = this.potions.indexOf(potion);
      }
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    // const potionIndex = this.potions.indexOf(oldName);

    let potionIndex = -1;
    for (let potion of this.potions) {
      if (oldName === potion.name) {
        potionIndex = this.potions.indexOf(potion);
      }
    }

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    const updatedPotion = this.potions[potionIndex];
    updatedPotion.name = newName;

    this.potions.splice(potionIndex, 1, updatedPotion);
  },
  // Change code above this line
};

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log(atTheOldToad.getPotions());
