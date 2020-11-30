/**
 * 相减
 * @param num1
 * @param num2
 */
const subtract = (num1: number, num2:number): number => {
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
  const m = 10 ** Math.max(r1, r2);
  const n = (r1 >= r2) ? r1 : r2;
  return Number((Math.round(num1 * m - num2 * m) / m).toFixed(n));
};

export default subtract;
