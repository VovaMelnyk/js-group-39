/**
 * Форматирование времени
 *
 * Напиши функцию `formatTime(minutes)` которая переведёт значение `minutes`
 * (количество минут) в строку в формате часов и минут `HH:MM`.
 */

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
