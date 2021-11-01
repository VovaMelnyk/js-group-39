import { differenceInCalendarYears } from 'date-fns';

export function calculateAge(birthDate) {
  return differenceInCalendarYears(new Date(), new Date(birthDate));
}
