import getTypeOf from '../../object/getTypeOf';
import clone from '../clone';

// eslint-disable-next-line no-shadow
const f = <T extends ([] & {})>(value: T): T | {} => {
  const t = getTypeOf(value);
  if (t === 'array') {
    return value.map((item) => {
      const itemType = getTypeOf(item);
      if (itemType === 'array' || itemType === 'object') {
        return f(item);
      }
      return clone(item);
    });
  }
  const o = {};
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const k in value) {
    const item = value[k];
    const itemType = getTypeOf(item);
    if (itemType === 'array' || itemType === 'object') {
      o[k] = f(item);
    }
    o[k] = clone(item);
  }
  return o;
};

const deepClone = <T>(value: T): T => {
  if (!value) return value;
  const type = getTypeOf<T>(value);
  if (type === 'array') {
    return f<any>(value);
  } if (type === 'object') {
    return f<any>(value);
  }
  return value;
};

export default deepClone;
