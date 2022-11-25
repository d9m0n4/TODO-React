import dayjs from 'dayjs';

export default function isDateDiff(date) {
  return dayjs(date).diff(Date.now()) <= 0 ? true : false;
}
