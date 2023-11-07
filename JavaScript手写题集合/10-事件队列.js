// 定义事件队列
const eventQueue = [];

// 添加事件到队列
function addEvent(callback) {
  eventQueue.push(callback);
}

// 模拟异步操作
function asyncOperation(callback) {
  setTimeout(callback, 0);
}

// 事件循环函数
function eventLoop() {
  if (eventQueue.length > 0) {
    const callback = eventQueue.shift(); // 从队列中取出一个事件
    asyncOperation(callback); // 执行异步操作
    setTimeout(eventLoop, 0); // 递归调用事件循环
  }
}

// 启动事件循环
eventLoop();

// 示例：添加事件到队列
addEvent(() => {
  console.log('Event 1');
});

addEvent(() => {
  console.log('Event 2');
});
