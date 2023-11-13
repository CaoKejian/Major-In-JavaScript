function fn(str1, str2) {
  let dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  let maxLength = 0;
  let maxEnd = 0;
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }

      if (dp[i][j] > maxLength) {
        maxLength = dp[i][j];
        maxEnd = i;
      }
    }
  }
  return str1.substring(maxEnd - maxLength, maxEnd);
}

console.log(fn('1AB2345CD', '12345EF'))