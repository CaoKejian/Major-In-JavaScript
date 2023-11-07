function quicklySort(arr) {
  if(arr.length <= 1) return arr
  let temp = arr[0]
  const left = arr.filter(item => item < temp)
  const right = arr.filter(item => item > temp)
  
  return [...quicklySort(left), temp, ...quicklySort(right)]
}

console.log(quicklySort([1,5,3,6,4,2]))