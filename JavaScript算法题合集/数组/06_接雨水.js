function fn(height) {
  let result = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0;
    let rightMax = 0;

    // 寻找左边最高的柱子
    for (let j = i - 1; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }

    // 寻找右边最高的柱子
    for (let j = i + 1; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    // 计算当前位置可以接的雨水
    const currentHeight = height[i];
    const minMax = Math.min(leftMax, rightMax);

    if (minMax > currentHeight) {
      result += minMax - currentHeight;
    }
  }

  console.log(result);
  return result;
}

fn([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])