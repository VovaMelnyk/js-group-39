/**
 * Глубокая деструктуризация
 *
 * Перепиши функцию так, чтобы она принимала один объект параметров,
 * вместо набора независимых аргументов.
 */

function getStockReport({ companyName, stock }) {
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

// Было
// console.log(getStockReport('Cyberdyne Systems', 150, 50));

// Ожидается
console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"

console.log(
  getStockReport({
    companyName: 'Babushka',
    stock: {
      apples: 50,
      potato: 100,
      eggs: 150,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"
