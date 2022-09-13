/**
 * 解构时间
 * @param date
 */

export interface deconstructDateInterface {
  year: string,
  month: string,
  day: string,
  week: string,
  hour: string,
  minute: string,
  second: string,
  milliSecond: string,
}

// eslint-disable-next-line no-shadow
const deconstructDate = (date: Date = new Date()): deconstructDateInterface => {
  const d = new Date(date as any);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const week = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  const milliSecond = d.getMilliseconds();

  return {
    year: String(year), // 年
    month: month < 10 ? `0${month}` : String(month), // 月
    day: day < 10 ? `0${day}` : String(day), // 日
    week: String(week), // 星期几
    hour: hour < 10 ? `0${hour}` : String(hour), // 时
    minute: minute < 10 ? `0${minute}` : String(minute), // 分
    second: second < 10 ? `0${second}` : String(second), // 秒
    milliSecond: String(milliSecond), // 秒
  };
};

export default deconstructDate;
