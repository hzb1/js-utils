import getTypeOf from './index';

describe('getTypeOf 是否是日期对象', () => {
  it('null 预期等于 null', () => expect(getTypeOf(null)).to.be.equal('null'));
  it('undefined 预期等于 undefined', () => expect(getTypeOf(undefined)).to.be.equal('undefined'));
  it('0 预期等于 number', () => expect(getTypeOf(Number(0))).to.be.equal('number'));
  it('\'\' 预期等于 string', () => expect(getTypeOf(String(''))).to.be.equal('string'));
  it('true 预期等于 boolean', () => expect(getTypeOf(true)).to.be.equal('boolean'));
  it('{} 预期等于 object', () => expect(getTypeOf({})).to.be.equal('object'));
  it('new Date() 预期等于 date', () => expect(getTypeOf(new Date())).to.be.equal('date'));
  it('[] 预期等于 array', () => expect(getTypeOf([])).to.be.equal('array'));
  it('Math 预期等于 math', () => expect(getTypeOf(Math)).to.be.equal('math'));
});
