import { expect } from 'chai';
import dateFormat from './index';
import deconstructDate, { deconstructDateInterface } from '../deconstructDate';

describe('dateFormat 测试', () => {
  {
    const date = new Date();
    const { year, month, day }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${year}-${month}-${day}`;
    it('默认参数', () => expect(dateFormat()).to.equal(expectValue));
  }

  {
    const date = new Date();
    const { year, month, day }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${year}-${month}-${day}`;
    it(`传入时间戳 ${expectValue}`, () => {
      expect(dateFormat(date.getTime())).to.equal(expectValue);
    });
  }

  {
    const date = new Date();
    const { year, month, day }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${year}-${month}-${day}`;
    it(`传入字符串 ${expectValue}`, () => {
      expect(dateFormat(expectValue)).to.equal(expectValue);
    });
  }

  {
    const date = new Date('2020/9/18 12:5:10');
    const {
      year, month, day, hour, minute, second,
    }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    it(`yyyy-MM-dd hh:mm:ss 应该等于 ${expectValue}`, () => {
      expect(dateFormat(date, 'yyyy-MM-dd hh:mm:ss')).to.equal(expectValue);
    });
  }

  {
    const date = new Date('2020/9/18 12:5:10');
    const { hour, minute }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${hour}:${minute}`;
    it(`hh:mm 应该等于 ${expectValue}`, () => {
      expect(dateFormat(date, 'hh:mm')).to.equal(expectValue);
    });
  }

  {
    const date = new Date('2020/1/1 23:00:05');
    const {
      month, day, hour, minute,
    }: deconstructDateInterface = deconstructDate(date);
    const expectValue = `${month}月${day}日 ${hour}:${minute}`;
    it(`MM月dd日 hh:mm 应该等于 ${expectValue}`, () => {
      expect(dateFormat(date, 'MM月dd日 hh:mm')).to.equal(expectValue);
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
      expect(dateFormat(date, 'yyyy-MM-dd hh:mm:ss.S')).to.equal(expectValue);
    });
  }

  // eslint-disable-next-line no-lone-blocks
  {
    it('传入非法参数', () => expect(dateFormat('202200000')).to.equal(''));
  }
});
