import isSameDay from './index';
/* eslint-disable no-unused-expressions */

describe('isSameDay 判断两个时间戳是不是同一天', () => {
  it('同天测试1', () => {
    expect(isSameDay('2020-09-18', '2020-09-18')).to.be.ok;
  });

  it('同天测试2', () => {
    expect(isSameDay('2020-09-18 12:30', '2020-09-18 9:30')).to.be.ok;
  });

  it('错误天测试1', () => {
    expect(isSameDay('2020-09-17', '2020-09-18')).to.not.be.ok;
  });
});
