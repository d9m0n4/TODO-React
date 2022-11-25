import dayjs from 'dayjs';

/**
 * Функция преобразует принятые date и time в строку
 * @param {string} date
 * @param {string} time
 * @returns {string} возвращает строку типа '01.01.2022 12:00'
 */

export default function formatDate(date, time) {
  return dayjs(date + time).format('DD.MM.YYYY HH:mm');
}
