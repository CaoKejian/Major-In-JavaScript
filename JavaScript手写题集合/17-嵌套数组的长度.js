function deepLength(arr) {
  if(!Array.isArray(arr)) return 0
  let length = 0
  
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      const deep = deepLength(arr[i])
      if(deep > length){
        length = deep
      }
    }
  }
  return length + 1
}

const arr = [1, [2, 3], [4, [5, 6]]];
const depth = deepLength(arr);
console.log("数组的深度为:", depth);