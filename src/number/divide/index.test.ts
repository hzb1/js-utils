import { expect } from 'chai';
import divide from './index';

describe('divide 相除', () => {
  for (let i = 0; i < 5; i += 1) {
    it(`${i}: 0.007 除 100 应该等于 0.00007`, () => {
      expect(divide(0.007, 100)).to.equal(0.00007);
    });
  }

  it('1 除 1 应该等于 1', () => {
    expect(divide(1, 1)).to.equal(1);
  });

  it('3 除 0.3 应该等于 10', () => {
    expect(divide(3, 0.3)).to.equal(10);
  });

  it('0.1 除 0.2 应该等于 0.02', () => {
    expect(divide(0.1, 0.2)).to.equal(0.02);
  });

  it('-1.1 除 100.000 应该等于 -0.011', () => {
    expect(divide(-1.1, 100.000)).to.equal(-0.011);
  });

  it('16.9 除 100 应该等于 0.169', () => {
    expect(divide(16.9, 100)).to.equal(0.169);
  });
});
