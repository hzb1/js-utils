/**
 * 判断是否有小数部分
 * @param num
 */
const hasDecimalPart = (num: number): boolean => num % 1 !== 0;

/**
 * 求和
 * @param num1
 * @param num2
 */
const summation = (num1: number, num2: number): number => {
  const r1 = hasDecimalPart(num1) ? num1.toString().split('.')[1].length : 0;
  const r2 = hasDecimalPart(num2) ? num2.toString().split('.')[1].length : 0;
  const m = 10 ** Math.max(r1, r2);
  return Math.round(num1 * m + num2 * m) / m;
};

const add = (...ages: number[]): number => ages.reduce((per, cur) => summation(per, cur), 0);

export default add;
