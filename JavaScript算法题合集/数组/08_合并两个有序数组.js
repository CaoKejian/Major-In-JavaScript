function merge(num1, m, num2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = n + m - 1

  while (p2 >= 0) {
    if(num1[p1] > num2[p2]){
      num1[p] = num1[p1]
      p1--
    }else{
      num1[p] = num2[p2]
      p2--
    }
    p--
  }
}
let num1 = [1,2,3,0,0,0], m = 3, num2 = [2,5,6], n = 3
merge(num1, m, num2, n)
console.log(num1)

function merge1(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let length = m + n
  while(true) {
    if(n === 0) return nums1
    if(nums1[p1] > nums2[p2]){
      nums1[length] = nums1[p1]
      m--
    }else{
      nums1[length] = nums2[p2]
      n--
    }
  }
}