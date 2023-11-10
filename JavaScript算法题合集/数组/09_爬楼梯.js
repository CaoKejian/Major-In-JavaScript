function fn(n) {
  if(n<=2) return n

  let p2 = 2, p1 = 1, temp = 0
  for (let i = 3; i <= n; i++) {
    temp = p2 + p1
    p1 = p2
    p2 = temp
  }
  return temp
}

console.log(fn(4))
