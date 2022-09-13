/**
 * 过滤空值
 * 过滤null和空字符串
 * @param obj
 */
const filterEmpty = <T = Object >(obj: T): T => {
  const o = { } as T;
  Object.keys(obj as Object).forEach((k) => {
    const v = obj[k];
    if (v !== '' && v !== null) {
      o[k] = v;
    }
  });
  return o;
};

export default filterEmpty;
