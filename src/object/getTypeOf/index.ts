/**
 *
 * @param object
 * @returns string < number || bigint || string || boolean || symbol || undefined || function || object || array || math>
 */
const getTypeOf = (object: any): string => {
  const typeofs = typeof object;
  if (typeofs === 'object') {
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
    }
  }
  return typeofs;
};

export default getTypeOf;
