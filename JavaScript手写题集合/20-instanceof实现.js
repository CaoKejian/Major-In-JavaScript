function myInstanceof(a, b) {
  let left = a.__proto__
  let right = b.prototype

  while(true){
    if(left === null) return false
    if(left === right){
      return true
    }else{
      left = left.__proto__
    }
  }
}
