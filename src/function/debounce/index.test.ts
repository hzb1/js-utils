import debounce from './index';

describe('debounce 防抖函数', () => {
  {
    let i = 0;
    const f = debounce(() => {
      i += 1;
      return i;
    });
    it('多次增量被取消', (done) => {
      f();
      f();
      f();
      setTimeout(() => {
        expect(i).to.equal(1);
        done();
      }, 300);
    });
    it('再次增量', (done) => {
      f();
      setTimeout(() => {
        expect(i).to.equal(2);
        done();
      }, 500);
    });
  }

  {
    let i = 0;
    const f = debounce(() => {
      i += 1;
      return i;
    });
    it('未调用', (done) => {
      f();
      f.cancel();
      setTimeout(() => {
        expect(i).to.equal(0);
        done();
      }, 300);
    });
    it('已调用', (done) => {
      f();
      setTimeout(() => {
        expect(i).to.equal(1);
        done();
      }, 300);
    });
  }

  {
    let i = 0;
    const f = debounce(() => {
      i += 1;
      return i;
    }, 300, true);
    it('防抖函数 立即执行', (done) => {
      f();
      setTimeout(() => {
        expect(i).to.equal(1);
        done();
      }, 10);
    });
  }

  {
    let i = 0;
    const f = debounce(() => {
      i += 1;
      return i;
    }, 100);
    it('防抖函数 wait', (done) => {
      f();
      setTimeout(f, 100);
      setTimeout(f, 180); // 这个不会执行，所以结果是3
      setTimeout(f, 300);
      setTimeout(() => {
        expect(i).to.equal(3);
        done();
      }, 500);
    });
  }
});
