/**
 * Отображение времени (if...else)
 *
 * Напиши скрипт для отображения часов и минут в консоли браузера
 * в виде строки формата "14 ч. 26 мин.". Если значение переменной
 * `minutes` равно `0`, то выводи строку `"14 ч."`, без минут.
 */

// const hours = 28;
// const minutes = 14;
// if (minutes === 0) {
//   console.log(`${hours} ч.`);
// } else {
//   console.log(`${hours} ч. ${minutes} мин.`);
// }

function logTime(hours, minutes) {
  if (minutes === 0) {
    return `${hours} ч.`;
  } else {
    return `${hours} ч. ${minutes} мин.`;
  }
}

console.log(logTime(28, 14));

console.log(logTime(28, 0));
