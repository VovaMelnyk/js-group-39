/**
 * Площадь прямоугольника
 *
 * Напиши функцию `getRectArea(dimensions)` для вычисления
 * площади прямоугольника со сторонами, значения которых
 * будут переданы в параметр `dimensions` в виде строки.
 * Значения гарантированно разделены пробелом.
 */

function getRectArea(dimensions) {
  const values = dimensions.split(' ');
  const area = values[0] * values[1];
  return area;
}

console.log(getRectArea('8 11'));
console.log(getRectArea('15 5'));
console.log(getRectArea('12 3'));
