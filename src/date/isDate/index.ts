/**
 * 是否是日期对象
 * @param date
 */
const isDate = <T>(date: T):boolean => Object.prototype.toString.call(date) === '[object Date]';

export default isDate;
