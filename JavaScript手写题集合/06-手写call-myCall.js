Function.prototype.myCall = function(context = window) {
  context.fn = this
  let args = [...arguments].splice(1)
  console.log([...arguments])
  let result = context.fn(...args)
  delete context.fn
  return result
}
var obj = {name: 'ckj'}
function fn(a, b) {
  console.log(a + b)
  console.log(this)
}
fn.myCall(obj, 1, 2)