/**
 * 判断两个时间戳是不是同一天
 * @param dateString1
 * @param dateString2
 */
export const isSameDay = (dateString1, dateString2):boolean => new Date(dateString1).toDateString() === new Date(dateString2).toDateString();
