/* eslint-disable no-unused-vars */

/**
 * 防抖函数
 * 在事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时。
 * @param func
 * @param {number} wait 等待时间
 * @param {boolean} immediate 第一次时是否是立即执行的
 */
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number = 300,
  immediate: boolean = false, // 第一次时，是否立即执行
) => {
  let timeout: number | null;
  let result: ReturnType<T>; // 函数返回值
  let parameter: Parameters<T> | null; // 函数参数
  let previous: number = 0; // 上一次的执行时间
  let context: any; // 执行上下文 this
  const onRun = () => {
    const passed = Date.now() - previous;
    // 如果时间间隔小于`wait`，那么将延迟执行`func`; 否则再如果是第一次不是立即执行， 那么将立即执行`func`
    if (passed < wait) {
      timeout = setTimeout(onRun, wait - passed);
    } else {
      if (!immediate) result = func.apply(context, parameter!);
      timeout = null;
      parameter = null;
    }
  };
  // eslint-disable-next-line func-names
  const debouncedFunc = function (this: any, ...ages: Parameters<T>): ReturnType<T> {
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
    if (timeout) clearTimeout(timeout);
    timeout = null;
    parameter = null;
  };
  return debouncedFunc;
};

export default debounce;
