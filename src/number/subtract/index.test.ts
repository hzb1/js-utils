import { subtract } from './index';

describe('subtract 相减', () => {
  for (let i = 0; i < 5; i++) {
    it(`${i}: 0.3 减 0.2 应该等于 0.1`, () => {
      expect(subtract(0.3, 0.2)).to.equal(0.1);
    });
  }

  it('3 减 2 应该等于 1', () => {
    expect(subtract(3, 2)).to.equal(1);
  });

  it('1.23 减 0.21 应该等于 1.02', () => {
    expect(subtract(1.23, 0.21)).to.equal(1.02);
  });

  it('10.11 减 -1.02 应该等于 11.13', () => {
    expect(subtract(10.11, -1.02)).to.equal(11.13);
  });

  it('0.11 减 2.001 应该等于 -1.891', () => {
    expect(subtract(0.11, 2.001)).to.equal(-1.891);
  });
});
