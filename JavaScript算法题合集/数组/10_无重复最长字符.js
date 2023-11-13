function fn(s) {
  if(s.length <= 1) return s.length

  let max = 0,
    p1 = 0,
    p2 = 1
  const set = new Set()
    while(p2<s.length){
      if(!set.has(s[p2])){
        set.add(s[p2])
        max = Math.max(max, p2-p1)
        p2 += 1
      }else{
        set.delete(s[p2])
        p1 += 1
      }
    }

  return max
}
console.log(fn('abcabcbb'))