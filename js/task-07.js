/**
 * Среднее значение
 *
 * Напишите функцию `calAverage()` которая принимает произвольное
 * кол-во аргументов и возвращает их среднее значение.
 *
 * Все аругменты будут только числами.
 */

function calAverage(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total / args.length;
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
