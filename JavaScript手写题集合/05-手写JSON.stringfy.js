function customStringfy(temp) {
  if(typeof temp === 'number' || typeof temp === 'null' ||typeof temp === 'undefined' ||typeof temp === 'boolean'){
    return temp.toString()
  }else if(typeof temp === 'string'){
    return "'" + temp + "'"
  }

  if(Array.isArray(temp)){
    const x = temp.map(customStringfy)
    return "[" + x.join(',') + "]"
  }

  if(typeof temp === 'object' && temp !== null) {
    const keys = Object.keys(temp)
    const x = keys.map(item => {
      return '"' + item + '"' + ':' + customStringfy(temp[item])
    })
    return "{" + x.join(',') + "}"
  }
}

// 用例
const obj = {name: 'ckj', age: 12, temp: ['1', 2, {colin: 'hahaha'}]}
const Robj = customStringfy(obj)
console.log(Robj)

const x = 123
const Rx = customStringfy(x)
console.log(Rx)
console.log(customStringfy({name: 'ckj', age: 123}))
