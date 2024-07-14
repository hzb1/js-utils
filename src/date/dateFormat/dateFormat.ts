type Time = Date | number | string;
/**
 * 使用自定义逻辑格式化日期，格式与 dayjs 一致
 *
 * @param time 要格式化的日期，可以是 Date 对象、时间戳或字符串
 * @param format 格式化字符串，遵循 dayjs 的格式
 * @returns 格式化后的日期字符串
 */
const dateFormat = (time: Time, format = 'YYYY-MM-DD'): string => {
  if (!time) return '';

  let date: Date;
  if (typeof time === 'string' || typeof time === 'number') {
    date = new Date(time);
  } else if (time instanceof Date) {
    date = time;
  } else {
    console.error(`dateFormat: Invalid date ${time}`);
    return '';
  }

  if (Number.isNaN(date.getTime())) {
    console.error(`dateFormat: Invalid date ${time}`);
    return '';
  }

  const padZero = (num: number, targetLength: number = 2) => String(num).padStart(targetLength, '0');

  const tokens: { [key: string]: () => string } = {
    YYYY: () => String(date.getFullYear()),
    YY: () => String(date.getFullYear()).slice(-2),
    MM: () => padZero(date.getMonth() + 1),
    M: () => String(date.getMonth() + 1),
    DD: () => padZero(date.getDate()),
    D: () => String(date.getDate()),
    HH: () => padZero(date.getHours()),
    H: () => String(date.getHours()),
    hh: () => padZero(date.getHours() % 12 || 12),
    h: () => String(date.getHours() % 12 || 12),
    mm: () => padZero(date.getMinutes()),
    m: () => String(date.getMinutes()),
    ss: () => padZero(date.getSeconds()),
    s: () => String(date.getSeconds()),
    SSS: () => padZero(date.getMilliseconds(), 3),
    SS: () => padZero(Math.floor(date.getMilliseconds() / 10), 2),
    S: () => String(Math.floor(date.getMilliseconds() / 100)),
    A: () => (date.getHours() < 12 ? 'AM' : 'PM'),
    a: () => (date.getHours() < 12 ? 'am' : 'pm'),
  };

  return format.replace(/YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a/g, (match) => {
    const token = tokens[match];
    return token ? token() : match;
  });
};

export default dateFormat;
