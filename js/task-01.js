/**
 * Напиши класс `Blogger` для создания обьекта блоггера
 * со следующим свойствами:
 * - `email` - почта, строка
 * - `age` - возраст, число
 * - `numberOfPosts` - кол-во постов, число
 * - `topics` - массив тем на которых специализируется блоггер
 *
 * Класс ожидает один параметр - объект настроек с одноимёнными свойствами.
 * Добавь метод `getInfo()`, который, возвращает строку:
 * `User ${почта} is ${возраст} years old and has ${кол-во постов} posts`.
 *
 * Добавь метод `updatePostCount(value)`, который в параметре `value` принимает
 * количество постов которые нужно добавить пользователю.
 */

class Blogger {
  constructor({ email, age, numberOfPosts, topics }) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  email: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango);
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  email: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly);
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts
