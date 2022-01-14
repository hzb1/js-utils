import getTypeOf from '../../object/getTypeOf';

/**
 * 浅拷贝
 * @param value
 */
const clone = <T extends [] & object>(value: T): T | T[] => {
  const type = getTypeOf(value);
  if (type === 'array') {
    return [...value];
  } if (type === 'object') {
    return { ...value };
  }
  return value;
};

export default clone;
