// import { differenceInCalendarYears, getDate, getMonth } from 'date-fns';
import employees from '../employees.json';

document.querySelector('tbody').innerHTML = prepareTableRowsMarkup();

function prepareTableRowsMarkup() {
  return employees
    .map(employee => {
      return `<tr>
      <td>Имя</td>
      <td>Возраст</td>
      <td>Да/Нет</td>
    </tr>`;
    })
    .join('');
}

function calculateAge(birthDate) {}

function isBirthday(date) {}
