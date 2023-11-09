function printMatrixClockwise(arr) {
  let res = []
  let top=0,left=0,right=arr[0].length-1,bottom=arr.length-1

  while(true){
    for (let i = left; i <= right; i++) {
      res.push(arr[left][i])      
    }
    top++
    if(left > right) break
    for (let i = top; i <= bottom; i++) {
      res.push(arr[i][right])
    }
    right--
    if(right>bottom) break
    for (let i = right; i >= left; i--) {
      res.push(arr[bottom][i])
    }
    bottom--
    if(bottom<left) break
    for (let i = bottom; i >= top; i--) {
      res.push(arr[i][left])
    }
    left++
    if(left<top) break
  }
  return res
}
console.log(printMatrixClockwise([[1,2,3],[4,5,6],[7,8,9]]))