// eslint-disable-next-line no-unused-vars
const throttle = <T extends (...args: any[]) => any>(
  // eslint-disable-next-line no-unused-vars
  func: T,
  wait: number = 100,
) => {
  let previous = 0;
  let timeout: number | null = null;
  let parameter: any[];
  let context: any;
  // eslint-disable-next-line func-names
  const throttleFunc = function (this: any, ...args: Parameters<T>): ReturnType<T> {
    context = this;
    const now = Date.now();
    const remaining = wait - (now - previous);
    parameter = args;
    let result;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, parameter);
    } else if (!timeout) {
      timeout = setTimeout(() => func.apply(context, parameter), remaining);
    }
    return result;
  };
  throttleFunc.cancel = () => {
    if (timeout) clearTimeout(timeout);
    previous = 0;
    timeout = null;
    parameter = [];
  };
  return throttleFunc;
};

export default throttle;
