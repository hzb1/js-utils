import isDate from './index';

describe('isDate 是否是日期对象', () => {
  it('new Date() 预期等于 true', () => expect(isDate(new Date())).to.be.ok);
  it('null 预期等于 false', () => expect(isDate(null)).to.not.be.ok);
  it('Invalid Date 空字符串', () => expect(isDate(new Date(''))).to.not.be.ok);
  it('Invalid Date 字符串时间戳', () => expect(isDate(new Date(`${Date.now()}`))).to.not.be.ok);
  it('Invalid Date 非法字符串', () => expect(isDate(new Date('2022/99/1'))).to.not.be.ok);
  it('Invalid Date new Date(NaN)', () => expect(isDate(new Date(NaN))).to.not.be.ok);
});
