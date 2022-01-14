import debounce from './index';

describe('debounce 防抖函数', () => {
  {
    let i = 0;
    const f = debounce(() => {
      i += 1;
      return i;
    });
    f();
    f();
    f();
    it('多次增量被取消', function () {
      this.timeout(1000);
      expect(i).to.equal(1);
    });
    it('再次增量', function () {
      this.timeout(2000);
      f();
      this.timeout(1000);
      expect(i).to.equal(2);
    });
  }

  {
    let i = 0;
    const f = debounce(() => {
      i += 1;
      return i;
    });
    f();
    f.cancel();
    it('未调用', function () {
      this.timeout(280);
      expect(i).to.equal(0);
    });
  }

  {
    let i = 0;
    const f = debounce(() => {
      i += 1;
      return i;
    });
    f();
    it('防抖函数延迟执行', function () {
      this.timeout(100);
      expect(i).to.equal(0);
    });
  }
});
