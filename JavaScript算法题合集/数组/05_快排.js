function quicklySort(arr) {
  if(arr.length <= 1) return arr
  let temp = arr[0]

  let left = arr.filter(item => item < arr[0])
  let right = arr.filter(item => item > arr[0])

  return [...quicklySort(left), temp, ...quicklySort(right)]
}
console.log(quicklySort([1,5,3,6,4,2]))