function convert(node){
  if(!node) {
    return null
  }

  let temp = node.left
  let left = convert(node.right)
  let right = convert(temp)

  node.left = left
  node.right = right
  return node
}
