type ThrottleFunc = {
  (): any;
  cancel: () => void;
};

const throttle = (
  // eslint-disable-next-line no-unused-vars
  func: (...age) => any,
  wait: number = 100,
  options = {},
): ThrottleFunc => {
  let previous = 0;
  let timeout = null;
  const throttleFunc = (...args) => {
    const now = Date.now();
    const remaining = wait - (now - previous);
    let result;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func(args);
    } else if (!timeout) {
      timeout = setTimeout(func, remaining);
    }
    return result;
  };
  throttleFunc.cancel = () => {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttleFunc;
};

export default throttle;
