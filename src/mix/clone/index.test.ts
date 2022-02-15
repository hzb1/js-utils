import clone from './index';

describe('clone 克隆函数', () => {
  const p = {
    o: { name: 'name' },
    a: [1, 2, 3],
    num: 1,
    n: null,
  };
  {
    const o = clone(p);
    it('克隆对象', () => {
      expect(p === o).to.equal(false);
    });
  }
  {
    const a = clone<number[]>(p.a);
    it('克隆数组', () => {
      expect(a === p.a).to.equal(false);
    });
  }
});
