/**
 * Поиск наибольшего элемента
 *
 * Напиши функцию `findLargestNumber(numbers)`которая ищет
 * самое большое число в массиве.
 */

function findLargestNumber(numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
console.log(findLargestNumber([49, 4, 7, 83, 12]));
console.log(findLargestNumber([-2, -3, -17, -1]));
