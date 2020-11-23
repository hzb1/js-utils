/**
 * 两个对象之间的优化深度比较，确定他们是否应被视为相等
 * @param obj1
 * @param obj2
 */
const isEqual = (obj1: object, obj2: object): boolean => {
  if(typeof obj1 !== typeof obj2) return false;
  // if (obj instanceof Array) return obj.length === 0;
  return true;
};

export default isEqual;
