function reserveArr(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[arr.length - i - 1] = arr[i]
  }
  return result
}

function x(arr) {
  let left = 0
  let right = arr.length -1

  while(left < right) {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    left++
    right--
  }
  return arr
}
console.log(x([1,2,3,4,5]))
