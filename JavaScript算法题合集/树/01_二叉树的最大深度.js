function maxDeep(node) {
  if(!node){
    return 0
  }

  const left = maxDeep(node.left)
  const right = maxDeep(node.right)

  return Math.max(left, right) + 1
}