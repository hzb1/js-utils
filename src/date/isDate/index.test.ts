import {isDate} from "./index";

describe('isDate 是否是日期对象', () => {
  it(`new Date() 预期等于 true`, () => {
    return expect(isDate(new Date())).to.be.ok;
  });
  it(`null 预期等于 false`, () => expect(isDate(null)).to.not.be.ok);
  it(`时间戳 预期等于 false`, () => expect(isDate(Date.now())).to.not.be.ok);
  it(`{} 预期等于 false`, () => expect(isDate({})).to.not.be.ok);
});
