function fn(arr) {
  const dp = new Array(arr.length).fill(1)

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1
      }
    }
  }

  let max = Math.max(...dp), result = []
  for (let i = arr.length - 1; max > 0; i--) {
    if (dp[i] === max) {
      result.unshift(arr[i])
      max--
    }
  }
  return result
}
console.log(fn([1, 3, 0, 6])); // [1, 3, 6]