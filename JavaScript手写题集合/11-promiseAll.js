Promise.myAll = function(arr) {
  return new Promise((resolve,reject) => {
    if(!Array.isArray(arr)) return reject(new Error('arr must is Array'))

    let count = 0, result = []

    arr.map((item, i) => {
      Promise.resolve(item).then(res => {
        result[i] = item
        count ++
        
        if(count === arr.length){
          return resolve(result)
        }
      }).catch(reject)
    })
  })
}