/**
 * 是否是日期对象
 * @param date
 */
export const isDate = <T>(date: T):boolean => {
  return Object.prototype.toString.call(date) === '[object Date]';
};
