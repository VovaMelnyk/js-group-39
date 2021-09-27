/**
 * Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
 * рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
 * количеством из свойства `stones`.
 */

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const stone = this.stones.find(({ name }) => name === stoneName);
    if (stone) {
      return stone.price * stone.quantity;
    }
    alert('Такого камня нет, извините');
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
