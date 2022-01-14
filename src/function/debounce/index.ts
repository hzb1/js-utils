type DebouncedFunc = {
  (): any;
  cancel: () => void;
};

/**
 * 防抖函数
 * 在事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时。
 * @param func
 * @param {number} wait 等待时间
 */
const debounce = (
  // eslint-disable-next-line no-unused-vars
  func: (...age) => any,
  wait: number = 300,
  // immediate: boolean = false,
): DebouncedFunc => {
  let timeout: number | null;
  let result;
  let parameter: any[];
  let previous: number;
  const onRun = () => {
    const passed = Date.now() - previous;
    if (passed < wait) {
      timeout = setTimeout(onRun, wait - passed);
    } else {
      timeout = null;
      result = func(...parameter);
      if (!timeout) parameter = null;
    }
  };
  const debouncedFunc = (...ages) => {
    previous = Date.now();
    parameter = ages;
    if (!timeout) {
      timeout = setTimeout(onRun, wait);
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
