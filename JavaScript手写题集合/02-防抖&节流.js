// debounce 函数实现了函数防抖
const debounce = (fn, time) => {
  let timer = null; // 用于存储定时器标识

  return function (...args) {
    if (timer) {
      clearTimeout(timer); // 如果已经存在定时器，清除它
    }

    timer = setTimeout(() => {
      fn.call(undefined, ...args); // 在等待时间后执行传入的函数
      timer = null; // 清除定时器标识，准备下一次调用
    }, time);
  };
};

// throttle 函数实现了函数节流
const throttle = (fn, time) => {
  let timer = null; // 用于存储定时器标识

  return function (...args) {
    if (timer) return; // 如果已经存在定时器，直接返回，不执行函数

    fn.call(undefined, ...args); // 第一次触发时立即执行传入的函数

    timer = setTimeout(() => {
      timer = null; // 清除定时器标识，允许下一次调用
    }, time);
  };
};
