/**
 * 随机数
 * @param minNum
 * @param maxNum
 * @returns {number}
 */
const randomNum = function (minNum: number, maxNum?: number): number {
  switch (arguments.length) {
    case 1:
      return parseInt(String(Math.random() * minNum + 1), 10);
    case 2:
      return parseInt(String(Math.random() * (maxNum - minNum + 1) + minNum), 10);
    default:
      return 0;
  }
};

export default randomNum;
