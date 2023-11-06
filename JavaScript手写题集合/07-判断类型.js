function type(value) {
  const x = Object.prototype.toString.call(value).split(' ')[1]
  const res = x.substring(0, x.length - 1).toLowerCase()
  console.log(value + '----->', res)
  return res
}

type({name: '123'})
type(null)
type(undefined)
type(123)
type('ckj')
type([])
type(new Date())