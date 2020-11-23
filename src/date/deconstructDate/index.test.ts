import deconstructDate, { deconstructDateInterface } from './index';

describe('deconstructDate 解构日期', () => {
  const deconstruct = (date) => {
    const yyyy = date.getFullYear();
    const m = date.getMonth() + 1;
    const mm = m < 10 ? `0${m}` : `${m}`;
    const d = date.getDate();
    const dd = d < 10 ? `0${d}` : `${d}`;
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const hh = hour < 10 ? `0${hour}` : String(hour); // 时
    const mmm = minute < 10 ? `0${minute}` : String(minute); // 分
    const ss = second < 10 ? `0${second}` : String(second); // 秒
    return {
      yyyy, mm, dd, hh, mmm, ss,
    };
  };

  {
    const data = new Date();
    const { yyyy, mm, dd } = deconstruct(data);
    const { year, month, day }:deconstructDateInterface = deconstructDate();

    it(`默认参数 year预期等于 ${yyyy}`, () => expect(year).to.equal(`${yyyy}`));

    it(`默认参数 month预期等于 ${yyyy}`, () => expect(month).to.equal(`${mm}`));

    it(`默认参数 day预期等于 ${dd}`, () => expect(day).to.equal(`${dd}`));
  }

  {
    const data = new Date('2020/9/1');
    const { yyyy, mm, dd } = deconstruct(data);
    const { year, month, day }:deconstructDateInterface = deconstructDate(data);

    it(`2020/9/1 year预期等于 ${yyyy}`, () => expect(year).to.equal(`${yyyy}`));

    it(`2020/9/1 month预期等于 ${yyyy}`, () => expect(month).to.equal(`${mm}`));

    it(`2020/9/1 day预期等于 ${dd}`, () => expect(day).to.equal(`${dd}`));
  }

  {
    const data = new Date('2020/12/28 9:59:30');
    const { yyyy, mm, dd } = deconstruct(data);
    const { year, month, day }:deconstructDateInterface = deconstructDate(data);

    it(`2020/12/28 year预期等于 ${yyyy}`, () => expect(year).to.equal(`${yyyy}`));

    it(`2020/12/28 month预期等于 ${yyyy}`, () => expect(month).to.equal(`${mm}`));

    it(`2020/12/28 day预期等于 ${dd}`, () => expect(day).to.equal(`${dd}`));
  }

  {
    const data = new Date('2020/12/28 9:59:30');
    const { hh, mmm, ss } = deconstruct(data);
    const { hour, minute, second }:deconstructDateInterface = deconstructDate(data);

    it(`9:59:30 hour预期等于 ${hh}`, () => expect(hour).to.equal(`${hh}`));

    it(`9:59:30 minute预期等于 ${mmm}`, () => expect(minute).to.equal(`${mmm}`));

    it(`9:59:30 second预期等于 ${ss}`, () => expect(second).to.equal(`${ss}`));
  }
});
