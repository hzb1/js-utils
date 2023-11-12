import { expect } from 'chai';
import multiply from './index';

describe('multiply 相乘', () => {
  for (let i = 0; i < 5; i += 1) {
    it(`${i}: 0.007 乘 100 应该等于 0.7`, () => {
      expect(multiply(0.007, 100)).to.equal(0.7);
    });
  }

  it('1 乘 1 应该等于 1', () => {
    expect(multiply(1, 1)).to.equal(1);
  });

  it('3 乘 0.3 应该等于 0.9', () => {
    expect(multiply(3, 0.3)).to.equal(0.9);
  });

  it('100 乘 100.002 应该等于 10000.2', () => {
    expect(multiply(100, 100.002)).to.equal(10000.2);
  });

  it('0.1 乘 0.2 应该等于 0.02', () => {
    expect(multiply(0.1, 0.2)).to.equal(0.02);
  });

  it('0.007 乘 0.11 应该等于 0.00077', () => {
    expect(multiply(0.007, 0.11)).to.equal(0.00077);
  });

  it('-1.1 乘 100.000 应该等于 -110', () => {
    expect(multiply(-1.1, 100.000)).to.equal(-110);
  });

  it('16.9 乘 100 应该等于 1690', () => {
    expect(multiply(16.9, 100)).to.equal(1690);
  });
});
