Promise.myRace = function (arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) return reject(new Error(''))

    let result = []
    arr.map(item => {
      Promise.resolve(item)
        .then(resolve(result))
        .catch(reject)
    })
  })
}

Promise.myAll = function (arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray) return reject(new Error(''))

    let count = 0, result = []
    arr.map((item, i) => {
      Promise.resolve(item).then(res => {
        result[i] = res
        count++

        if (count === arr.length) {
          resolve(result)
        }
      }).catch(reject)
  })
})
}