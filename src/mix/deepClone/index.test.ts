import { expect } from 'chai';
import deepClone from './index';

describe('deepClone 深拷贝', () => {
  // eslint-disable-next-line no-lone-blocks
  {
    const a = {
      o: { name: 'o name' },
      n: 1,
    };
    const cloneA: any = deepClone(a);
    it('深拷贝 对象1', () => expect(a !== cloneA).to.ok);
  }
  {
    const b = {
      k: {
        name: '111',
      },
    };
    const cloneB = deepClone(b);
    it('深拷贝 对象2', () => expect(b.k !== cloneB.k).to.ok);
  }
  {
    const a = [{ name: 'o name' }, 'hi'];
    const c = deepClone<any[]>(a);
    it('深拷贝 数组1', () => expect(a !== c).to.ok);
  }
  {
    const a = [{ name: 'o name' }, 'hi'];
    const c = deepClone<any[]>(a);
    it('深拷贝 数组2', () => expect(a[0] !== c[0]).to.ok);
  }
  {
    const a = 1;
    const c = deepClone<number>(a);
    it('深拷贝 number', () => expect(a === c).to.ok);
  }
  {
    const c = deepClone<number>(null);
    it('数组深拷贝 null', () => expect(c === null).to.ok);
  }
});
