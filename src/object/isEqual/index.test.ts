import isEqual from './index';

describe('isEqual 对象是否相等', () => {
  {
    const a = {};
    const b = {};
    it('空对象比较 ', () => expect(isEqual(a, b)).to.ok);
  }

  {
    const a = {};
    const b = null;
    it('对象和null比较 ', () => expect(isEqual(a, b)).to.not.ok);
  }

  {
    const a = {};
    const b = undefined;
    it('对象和undefined比较', () => expect(isEqual(a, b)).to.not.ok);
  }

  {
    const a = undefined;
    const b = undefined;
    it('undefined和undefined比较', () => expect(isEqual(a, b)).to.ok);
  }

  {
    const a = null;
    const b = null;
    it('null和null比较', () => expect(isEqual(a, b)).to.ok);
  }

  {
    const a = { name: undefined };
    const b = {};
    it('属性undefined', () => expect(isEqual(a, b)).to.not);
  }

  {
    const a = {
      name: 'name', und: undefined, nul: null, o: {}, a: [], nan: NaN,
    };
    const b = {
      name: 'name', und: undefined, nul: null, o: {}, a: [], nan: NaN,
    };
    it('两个繁杂对象比较', () => expect(isEqual(a, b)).to.ok);
  }
});
