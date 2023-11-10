function fn(target){
  if(target<=1) return target

  return fn(target - 1) + fn(target - 2)
}

console.log(fn(5))

function fn1(target, a=0, b=1){
  if(target === 0) return a

  return fn(target - 1, b, a+b)
}

console.log(fn(5))