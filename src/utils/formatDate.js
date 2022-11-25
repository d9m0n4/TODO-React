import dayjs from 'dayjs';

export default function formatDate(date, time) {
  return dayjs(date + time).format('DD.MM.YYYY HH:mm');
}
