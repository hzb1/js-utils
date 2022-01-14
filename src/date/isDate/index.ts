/**
 * 是否是日期对象
 * 排除Invalid Date
 * @param date
 */
const isDate = (date: Date):boolean => {
  if (Object.prototype.toString.call(date) !== '[object Date]') return false;
  // @ts-ignore
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date)) return false;
  return true;
};

export default isDate;
