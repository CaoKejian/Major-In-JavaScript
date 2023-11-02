const timeout = async (time) => {
  await sleep(time)
  console.log(`延迟了${time}秒！`)
}
const sleep = (x) => {
  return new Promise((resolve) => {
    setTimeout(resolve, x*1000)
  })
}
timeout(3)