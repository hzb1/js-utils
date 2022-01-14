/**
 * 两个对象之间的优化深度比较，确定他们是否应被视为相等
 * @param obj1
 * @param obj2
 */
const isEqual = (obj1: object, obj2: object): boolean => {
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 === 'undefined' && typeof obj2 === 'undefined') return true;
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export default isEqual;
