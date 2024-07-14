import { expect } from 'chai';
import dateFormat from './dateFormat';

type Time = Date | number | string;

describe('dateFormat', () => {
  it('应返回空字符串对于无效日期', () => {
    expect(dateFormat('invalid date')).to.equal('');
    expect(dateFormat(undefined as Time)).to.equal('');
    expect(dateFormat(null as Time)).to.equal('');
    expect(dateFormat(NaN as Time)).to.equal('');
    expect(dateFormat(true as unknown as Time)).to.equal('');
  });

  it('应使用默认格式正确格式化日期', () => {
    const date = new Date(2023, 6, 13); // 月份从0开始，所以7月是6
    expect(dateFormat(date)).to.equal('2023-07-13');
  });

  it('应使用自定义格式正确格式化日期', () => {
    const date = new Date(2023, 6, 13, 14, 30, 15, 123);
    expect(dateFormat(date, 'YYYY年MM月DD日 HH:mm:ss.SSS')).to.equal('2023年07月13日 14:30:15.123');
    expect(dateFormat(date, 'YY年M月D日 H:m:s.S')).to.equal('23年7月13日 14:30:15.1');
    expect(dateFormat(date, 'hh:mm A')).to.equal('02:30 PM');
    expect(dateFormat(date, 'hh:mm a')).to.equal('02:30 pm');

    const date2 = new Date(2023, 6, 13, 9, 1, 2, 3);
    expect(dateFormat(date2, 'h:m SS')).to.equal('9:1 02');
  });

  it('应处理不同的输入类型', () => {
    const timestamp = 1626158723000;
    expect(dateFormat(timestamp, 'YYYY-MM-DD')).to.equal('2021-07-13');
    expect(dateFormat('2021-07-13T18:25:23.000Z', 'YYYY-MM-DD')).to.equal('2021-07-13');
  });

  it('应正确格式化单数字月份和日期', () => {
    const date = new Date(2023, 0, 5); // 2023年1月5日
    expect(dateFormat(date, 'YYYY-MM-DD')).to.equal('2023-01-05');
    expect(dateFormat(date, 'M-D')).to.equal('1-5');
    expect(dateFormat(date, 'MM-DD')).to.equal('01-05');
  });

  it('应处理12小时和24小时格式', () => {
    const date = new Date(2023, 6, 13, 2, 5, 9);
    expect(dateFormat(date, 'HH:mm:ss')).to.equal('02:05:09');
    expect(dateFormat(date, 'hh:mm:ss a')).to.equal('02:05:09 am');
    expect(dateFormat(date, 'hh:mm:ss A')).to.equal('02:05:09 AM');
    date.setHours(15);
    expect(dateFormat(date, 'HH:mm:ss')).to.equal('15:05:09');
    expect(dateFormat(date, 'hh:mm:ss a')).to.equal('03:05:09 pm');
    expect(dateFormat(date, 'hh:mm:ss A')).to.equal('03:05:09 PM');
  });
});
