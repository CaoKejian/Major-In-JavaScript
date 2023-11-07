function getAllDate( startDate, endDate ) {
  let result = []
  let currentTime = startDate.getTime()
  let endTime = endDate.getTime()
  console.log(currentTime, endTime)
  if(currentTime <= endTime) {
    const x = endTime - currentTime
    result.push(x/1000/(60*60*24))
  }
  console.log(result)
  return result
}

getAllDate(new Date('2023-11-01'), new Date('2023-11-05'))