function toCurren(fn, ...args1) {
  const length = fn.length

  return function(...args2) {
    const args = [...args1, ...args2]
    if(length > args.length) {
      return toCurren(fn, args)
    }else{
      return fn.apply(fn, args)
    }
  }
}