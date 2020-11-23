


/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *  例子：
 *  dateFormat("yyyy年MM月dd日", new Date("2017-04-07")) ==> 2017年04月02日
 *  dateFormat("yyyy-MM-dd hh:mm:ss.S")                 ==> 2018-09-11 11:04:26.14
 * */
export const dateFormat = (format: string = 'yyyy年MM月dd日', date: Date = new Date()): string => {
  let now = date;

  let o = {
    "M+": now.getMonth() + 1,                    //月份
    "d+": now.getDate(),                         //日
    "h+": now.getHours(),                        //小时
    "m+": now.getMinutes(),                      //分
    "s+": now.getSeconds(),                      //秒
    "q+": Math.floor((now.getMonth() + 3) / 3),  //季度
    "S": now.getMilliseconds()                   //毫秒
  };

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (now.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  for (let k in o) {
    const item = o[k];
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? item : (("00" + item).substr(("" + item).length)));
    }
  }

  return format;
};
