import { formatDistanceToNow, formatRelative } from 'date-fns';
import { uk } from 'date-fns/locale';

console.log(
  formatDistanceToNow(new Date('2021-07-01T21:10:00'), {
    addSuffix: true,
    locale: uk,
  })
);
