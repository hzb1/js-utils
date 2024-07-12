/**
 * 除
 * @param num1
 * @param num2
 */
const divide = (num1: number, num2: number): number => {
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
  const m = 10 ** (r2 - r1);
  return Number(((num1 * m) / (num2 * m)).toFixed(10));
};

export default divide;
