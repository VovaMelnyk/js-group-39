const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// const getModels = (cars) => cars.map((car) => car.model);
// const getModels = (cars) => cars.map(({ model }) => model);

// console.log("getModels", getModels(cars));

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));
// };

// makeCarsWithDiscount(cars);

// console.log(makeCarsWithDiscount(cars, 0.2));

// const filterByPrice = (cars, threshold) => {
//   return cars.filter((car) => car.price < threshold);
// };

// const filterByName = (cars, name) => {
//   return cars.filter((car) => car.make !== name);
// };

// console.table(filterByPrice(cars, 30000));
// console.log(filterByPrice(cars, 10000));
// console.log(filterByName(cars, "Honda"));

// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => car.onSale === true);
// };
// const getCarsWithDiscount = (cars) => {
//   return cars.filter((car) => car.onSale);
// };
// console.log(getCarsWithDiscount(cars));

// const getCarsWithType = (cars, carType) =>
//   cars.filter(({ type }) => type === carType);
// console.log(getCarsWithType(cars, "suv"));
// console.log(getCarsWithType(cars, "sedan"));

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);
// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "www"));

// const sortByAscendingAmount = (cars) => {
//   return [...cars].sort((a, b) => a.price - b.price);
// };

// console.table(cars);

// console.table(sortByAscendingAmount(cars));

// const sortByModel = (cars) => {
//   return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//   // return [...cars].sort();
// };

// console.table(sortByModel(cars));

// const getTotalAmount = (cars) => {
//   return cars.reduce((acc, { amount }) => acc + amount, 0);
// };

// let total = 0;

// for (let car of cars) {
//   total += car.amount;
// }

// console.log(getTotalAmount(cars));

// const result = cars.sort((a, b) => a.model.localeCompare(b.model));
// console.log(result);

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map((car) => car.model);

// console.table(getModelsOnSale(cars));

// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => b.price - a.price);

// console.table(getSortedCarsOnSale(cars));

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average);

// const filter = (arr, fn) => {
//   return arr.reduce((filteredArr, element) => {
//     return fn(element) ? [...filteredArr] : [...filteredArr, element];
//   }, []);
// };

// console.log(filter([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)); // [1, 3, 5]

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });
//   return newArray;
// };

// /const getUserNames = users.map(user => user.name);
// const getUseEmails = users.map(user => user.email);

// allCourses = ['HTML', 'CSS', "HTML"]
// // 0 === 0
// // 1 === 1
// // 0 === 2

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// Object.keys(book);
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства //
//   console.log(book[key]);
// }
// // 2)а во втором варианте
// Object.keys(object);
// function countProps(object) {
//   "use strict";
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

// const tags = getTags(tweets);
// console.log(tags);
// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);
