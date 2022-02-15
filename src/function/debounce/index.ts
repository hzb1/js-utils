type DebouncedFunc = {
  (): any;
  cancel: () => void;
};

/**
 * 防抖函数
 * 在事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时。
 * @param func
 * @param {number} wait 等待时间
 * @param immediate
 */
const debounce = (
  // eslint-disable-next-line no-unused-vars
  func: (...age) => any,
  wait: number = 300,
  immediate: boolean = false, // 第一次时，是否立即执行
): DebouncedFunc => {
  let timeout: number | null;
  let result;
  let parameter: any[];
  let previous: number; // 之前的时间
  let context;
  const onRun = () => {
    const passed = Date.now() - previous;
    if (passed < wait) {
      timeout = setTimeout(onRun, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, parameter);
      if (!timeout) parameter = null;
    }
  };
  // eslint-disable-next-line func-names
  const debouncedFunc = function (...ages) {
    context = this;
    previous = Date.now();
    parameter = ages;
    if (!timeout) {
      timeout = setTimeout(onRun, wait);
      if (immediate) result = func.apply(context, parameter);
    }
    return result;
  };
  debouncedFunc.cancel = () => {
    clearTimeout(timeout);
    timeout = null;
    parameter = null;
  };
  return debouncedFunc;
};

export default debounce;
