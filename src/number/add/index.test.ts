import { expect } from 'chai';
import add from './index';

describe('add 相加', () => {
  for (let i = 0; i < 5; i += 1) {
    it(`${i}: 0.1 加 0.2 应该等于 0.3`, () => {
      expect(add(0.1, 0.2)).to.equal(0.3);
    });
  }

  it('1 加 2 应该等于 3', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('1 加 0.23 应该等于 1.23', () => {
    expect(add(1, 0.23)).to.equal(1.23);
  });

  it('10 加 -1.02 应该等于 8.92', () => {
    expect(add(10, -1.02)).to.equal(8.98);
  });

  it('0.007 加 0.007 应该等于 0.014', () => {
    expect(add(0.007, 0.007)).to.equal(0.014);
  });

  it('多个参数相加', () => {
    expect(add(0.01, 0.02, 0.03, 0.04, 1.1)).to.equal(1.2);
  });
});
