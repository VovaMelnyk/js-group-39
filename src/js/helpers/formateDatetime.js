import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

export function formateDatetime(datetime) {
  return format(new Date(datetime), 'dd MMM yyyy, HH:mm', {
    locale: uk,
  });
}
