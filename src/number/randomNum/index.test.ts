import { expect } from 'chai';
import randomNum from './index';

describe('随机数 randomNum', () => {
  it('10', () => {
    expect(randomNum(100)).to.within(10, 100);
  });
  it('范围', () => {
    expect(randomNum(100, 200)).to.within(100, 200);
  });
});
