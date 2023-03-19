/**
 * 乘法
 * @param {String} num1
 * @param {String} num2
 */
const multiplication = (num1: number, num2: number): number => {
  let r1; let r2;
  try {
    r1 = num1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  const m = 10 ** (r1 + r2);
  return ((num1 * m) * (num2)) / m;
};

export default multiplication;
