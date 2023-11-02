/* js的new做了什么？ */
// 创建临时对象/新对象
// 绑定原型
// 指定 this = 临时对象
// 执行构造函数
// 返回临时对象

function myNew(fn, ...args) {
  const obj = {}
  obj.__proto__ = fn.prototype
  const result = fn.apply(obj, args)
  return result instanceof Object ? result : obj
}
function person(name, age){
  this.name = name
  this.age = age
}
person.prototype.sayHi = function() {
  console.log(`hi, my name is ${this.name}`)
}
const jo = myNew(person, 'ckj', 21)
jo.sayHi()