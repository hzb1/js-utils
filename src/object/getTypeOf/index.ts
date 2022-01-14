/**
 *
 * @param object
 * @returns typeString
 */

type typeString = 'number' | 'bigint' | 'string' | 'boolean' | 'symbol' | 'undefined' | 'function' | 'object' | 'array' | 'math' | 'date' | 'null';

const getTypeOf = <T>(object: T): typeString => {
  const types = typeof object;
  if (types === 'object') {
    const toString = Object.prototype.toString.call(object);
    switch (toString) {
      case '[object Date]':
        return 'date';
      case '[object Math]':
        return 'math';
      case '[object Array]':
        return 'array';
      case '[object Null]':
        return 'null';
      default:
        return 'object';
    }
  }
  return types;
};

export default getTypeOf;
