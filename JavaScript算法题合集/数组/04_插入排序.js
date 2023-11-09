function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]    
    let j = i - 1
    while(arr[j] > key && j >= 0){
      arr[j + 1] = arr[j]
      j--
    }
    arr[j - 1] = key
  }
  return arr
}
console.log(insertSort([2, 1, 5, 7, 3, 4, 6]))
