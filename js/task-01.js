/**
 * Индекс массы тела
 *
 * Напиши функцию calcBMI(weight, height) которая рассчитывает
 * и возвращает индекс массы тела человека. Для этого необходимо
 * разделить вес в киллограммах на квадрат высоты человека в метрах.
 *
 * Вес и высота будут специально переданы как строки.
 * Нецелые числа могут быть заданы в виде "24.7" или "24,7",
 * то есть в качестве разделителя дробной части может быть запятая.
 *
 * Индекс массы тела необходимо округлить до одной цифры после запятой.
 */

function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  let bmi = numericWeight / numericHeight ** 2;
  bmi = bmi.toFixed(1);
  bmi = Number(bmi);
  return bmi;
}

console.log(calcBMI('88,3', '1.75'));
console.log(calcBMI('68,3', '1.65'));
console.log(calcBMI('118,3', '1.95'));
