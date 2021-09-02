/**
 * Ветвеления
 *
 * Напиши скрипт, который выводит в консоль строку "Это положительное число",
 * если в prompt пользователь ввел число больше нуля. Если был введен ноль,
 * выводи в консоль строку `"Это ноль"`. Если передали отрицательное число,
 * в консоли должна быть строка `"Это отрицательное число"`.
 */

let userInput = prompt('Введите число');
userInput = Number(userInput);

if (userInput > 0) {
  console.log('Это положительное число');
} else if (userInput === 0) {
  console.log('Это ноль');
} else {
  console.log('Это отрицательное число');
}

// function logMessage(number) {
//   if (number > 0) {
//     console.log('Это положительное число');
//   } else if (number === 0) {
//     console.log('Это ноль');
//   } else {
//     console.log('Это отрицательное число');
//   }
// }

// logMessage(userInput);
