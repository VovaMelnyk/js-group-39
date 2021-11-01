import { calculateAge } from './helpers/calculateAge';
import { isBirthday } from './helpers/isBirthday';
import employees from '../employees.json';

document.querySelector('tbody').innerHTML = prepareTableRowsMarkup();

function prepareTableRowsMarkup() {
  return employees
    .map(({ username, birthDate }) => {
      return `<tr>
      <td>${username}</td>
      <td>${calculateAge(birthDate)}</td>
      <td>${isBirthday(birthDate) ? 'Yes' : 'No'}</td>
    </tr>`;
    })
    .join('');
}
