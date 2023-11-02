// 用例
const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 4
  }
}
const obj2 = obj1
obj2.b.c = 3
console.log('更改后的ob1->', obj1)
console.log('更改后的ob2->', obj2)

// 深拷贝下
function isObject(value) {
  return typeof value === 'object' && value !== null
}
const deepClone = (obj, hash = new WeakMap()) => {
  if(!isObject(obj)) return obj

  if(hash.has(obj)){
    return hash.get(obj)
  }
  const target = Array.isArray(obj) ? [] : {}
  hash.set(obj, target)

  Reflect.ownKeys(obj).map(item => {
    if(isObject(obj[item])){
      target[item] = deepClone(obj[item], hash)
    }else{
      target[item] = obj[item]
    }
  })
  
  return target
}
const obj3 = deepClone(obj1)
obj3.b.d = 5
console.log('更改后的ob1->', obj1)
console.log('更改后的ob3->', obj3)

