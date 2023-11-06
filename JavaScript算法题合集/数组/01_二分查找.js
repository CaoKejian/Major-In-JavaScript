const arr = [1,2,3,4,5]
const target = 4

function midFind(arr, target) {
  let mid, left = 0, right = arr.length - 1
  while(left <= right) {
    mid = Math.floor((left + right) / 2)
    if(arr[mid] > target){
      right = mid - 1
    }else if(arr[mid] < target){
      left = mid + 1
    }else{
      return mid
    }
  }
  return -1
}
console.log(midFind(arr, target))

