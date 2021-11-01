import { getDate, getMonth } from 'date-fns';

export function isBirthday(date) {
  const today = new Date();
  const birthDate = new Date(date);
  return (
    getDate(today) === getDate(birthDate) &&
    getMonth(today) === getMonth(birthDate)
  );
}
