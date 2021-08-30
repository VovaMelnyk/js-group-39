// x = 3.14;
// console.log(`variable x`, x);
// let x = 010;
// console.log(`x`, x);
// let public = 1500;
// const apples = 47;
// const grapes = 135;
// debugger;

// let price;
// const percent = 12;
// console.log(`price`, price);

// const a = 5;
// const b = "5";

// console.log(a == b); // true
// console.log(a === b); // false

// '25px'

// console.log("яблоки", apples);
// console.log("виноград", grapes);

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// Замени выражение переопределения комбинированным оператором `+=`.

// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);

// Разбери приоритет операторов в инструкции присвоения значения переменной
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
// переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
// `Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

// const value = 27.5;
// console.log("floor", Math.floor(value));
// console.log("ceil", Math.ceil(value));
// console.log("round", Math.round(value));
// const user1 = 100;
// const user2 = 123;
// const user3 = 34;
// const maxValue = Math.max(user1, user2, user3);

// Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
// переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;

// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// const userName = "Bob";
// const budget = 1500000;
// const filmName = "Batman";
// const date = "23.05.2020";
// const filmMessage = `Привет ${userName}, сегодня вишло ${filmName} , с бюджетом ${budget} и дата проката ${date} `;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log("12".charCodeAt(0));
// console.log("2".charCodeAt(0));

// console.log("2" < "12");

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true); // true

// console.log( 1 == 1)//

// console.log(1 === true); // false

// console.log(1 === 1); // true

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log("Papaya" === "papaya");

// console.log(undefined == null);

// console.log(undefined === null);

// Каким будет результат выражений?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || " " || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null > 0)

// console.log(null || (2 && 3) || 4);

// console.log(null || 3 || 4);

// console.log("ghbdsn!" && 25 && null);
 
// 0
// ''
// false
// NaN
// null
// undefined
// -0


// Отрефактори код так, чтобы в переменную `value` присваивалось значение
// переменной `incomingValue`, если оно не равно `undefined` или `null`. В
// противном случае должно присваиваться значение `defaultValue`. Проверь работу
// скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
// false. Используй оператор `??` (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);

// Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
// строку в формате часов и минут `HH:MM`.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
