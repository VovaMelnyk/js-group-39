/**
 * Форматирование ссылки (endsWith)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ. Используй конструкцию `if...else`.
 */

// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);

function appendUrl(url) {
  let link = url;

  if (!link.endsWith('/')) {
    link += '/';
  }

  return link;
}

console.log(appendUrl('https://my-site.com/about'));

console.log(appendUrl('https://my-site.com/about/'));
