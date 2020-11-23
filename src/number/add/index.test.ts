import {add} from "./index";

describe("add 相加", function() {
  for (let i = 0; i < 5; i++) {
    it(`${i}: 0.1 加 0.2 应该等于 0.3`, function() {
      expect(add(0.1, 0.2)).to.equal(0.3);
    });
  }

  it(`1 加 2 应该等于 3`, function() {
    expect(add(1, 2)).to.equal(3);
  });

  it(`1 加 0.23 应该等于 1.23`, function() {
    expect(add(1, 0.23)).to.equal(1.23);
  });

  it(`10 加 -1.02 应该等于 8.92`, function() {
    expect(add(10, -1.02)).to.equal(8.98);
  });

});
