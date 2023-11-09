function format(date, mate) {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  month = month < 10 ? '0'+month : month
  day = day < 10 ? '0' + day : day
  return `${year}年${month}月${day}日`
}
console.log(format(new Date(), 'YYYY-MM-DD'))

let phoneRegex = /^1[34578]\d{9}$/
let emailRegex =/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.[a-zA-Z]{2}/
// console.log(phoneRegex.test("18339296532"))
console.log(emailRegex.test("1849@qq.com"))
