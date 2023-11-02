function customStringfy(temp) {
  if(typeof temp === 'number' || typeof temp === 'boolean' || typeof temp === 'null' ){
    return temp.toString()
  }else if(typeof temp === 'string'){
    return "'" + temp + "'"
  }

  if(Array.isArray(temp)){
    const x = temp.map(item => customStringfy(item))
    return '[' + x.join(',') + ']'
  }

  if(typeof temp === 'object'){
    const keysArr = Object.keys(temp)
    const iterArr = keysArr.map(item => {
      const value = customStringfy(temp[item])
      return '"' + item + ':' + value + '"'
    })
    return "{" + iterArr.join(',') + "}"
  }
}

// 用例
const obj = {name: 'ckj', age: 12, temp: ['1', 2, {colin: 'hahaha'}]}
const Robj = customStringfy(obj)
console.log(Robj)

const x = 123
const Rx = customStringfy(x)
console.log(Rx)
