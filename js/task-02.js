/**
 * Напиши класс `Storage` который создаёт объекты для управления складом товаров.
 * При вызове будет получать один аргумент - начальный массив товаров, и записывать
 * его в свойство `items`.
 *
 * Добавь методы класса:
 * - `getItems()` - возвращает массив товаров
 * - `addItem(item)` - получает новый товар и добавляет его к текущим
 * - `removeItem(item)` - получает товар и, если он есть, удаляет его из текущих.
 */

class Storage {
  constructor(initialValue = []) {
    this.items = initialValue;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemName) {
    const item = this.items.find(el => el === itemName);
    if (item) {
      this.items = this.items.filter(item => item !== itemName);
    }
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
