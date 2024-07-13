import isDate from '../isDate';

type Time = Date | number | string;

/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *  例子：
 *  dateFormat("yyyy年MM月dd日", new Date("2017-04-07")) ==> 2017年04月02日
 *  dateFormat("yyyy-MM-dd hh:mm:ss.S")                 ==> 2018-09-11 11:04:26.14
 * */
const dateFormat = (time: Time = new Date(), format = 'yyyy-MM-dd'): string => {
  let date;
  try {
    // @ts-ignore
    date = (isDate(time) ? time : new Date(time)) as Date;
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(date)) throw date;
  } catch (e) {
    console.error(`dateFormat: ${e}`);
    return '';
  }

  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  let newFormat = format;
  if (/(y+)/.test(format)) {
    newFormat = newFormat.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }

  Object.keys(o).forEach((k) => {
    // @ts-ignore
    const item = o[k];
    if (new RegExp(`(${k})`).test(format)) {
      newFormat = newFormat.replace(RegExp.$1, (RegExp.$1.length === 1) ? item : ((`00${item}`).substr((`${item}`).length)));
    }
  });

  return newFormat;
};

export default dateFormat;
