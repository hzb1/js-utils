import dateFormat from './index';
import deconstructDate, { deconstructDateInterface } from '../deconstructDate';

describe('dateFormat 测试', () => {
  {
    const date = new Date();
    const { year, month, day }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${year}年${month}月${day}日`;
    it(`默认参数 应该等于 ${expectValue}`, () => {
      expect(dateFormat()).to.equal(expectValue);
    });
  }

  {
    const date = new Date('2020/9/18 12:5:10');
    const {
      year, month, day, hour, minute, second,
    }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    it(`yyyy-MM-dd hh:mm:ss 应该等于 ${expectValue}`, () => {
      expect(dateFormat('yyyy-MM-dd hh:mm:ss', date)).to.equal(expectValue);
    });
  }

  {
    const date = new Date('2020/9/18 12:5:10');
    const { hour, minute }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${hour}:${minute}`;
    it(`hh:mm 应该等于 ${expectValue}`, () => {
      expect(dateFormat('hh:mm', date)).to.equal(expectValue);
    });
  }

  {
    const date = new Date('2020/1/1 23:00:05');
    const {
      month, day, hour, minute,
    }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${month}月${day}日 ${hour}:${minute}`;
    it(`MM月dd日 hh:mm 应该等于 ${expectValue}`, () => {
      expect(dateFormat('MM月dd日 hh:mm', date)).to.equal(expectValue);
    });
  }

  {
    const date = new Date('2020/12/28 12:35:10');
    date.setMilliseconds(120);
    const {
      year, month, day, hour, minute, second, milliSecond,
    }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${year}-${month}-${day} ${hour}:${minute}:${second}.${milliSecond}`;
    it(`milliSecond 应该等于 ${expectValue}`, () => {
      expect(dateFormat('yyyy-MM-dd hh:mm:ss.S', date)).to.equal(expectValue);
    });
  }
});
