import dayjs from 'dayjs';

/**
 * Функция принимает парамер date(дата или дата и время) и сравнивает его с текущим временем
 * @param {string} date
 * @returns {boolean} date меньше текущей даты - true иначе false
 */

export default function isDateDiff(date) {
  return dayjs(date).diff(Date.now()) <= 0 ? true : false;
}
