import getTypeOf from '../../object/getTypeOf';

/**
 * 浅拷贝
 * @param value
 */
const clone = <T extends object>(value: T): T => {
  const type = getTypeOf(value);
  if (type === 'array') {
    // @ts-ignore
    return [...value];
  } if (type === 'object') {
    // @ts-ignore
    return { ...value };
  }
  return value;
};

export default clone;
