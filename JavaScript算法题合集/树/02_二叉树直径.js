function fn(node) {
  let length = 0

  function depth(node) {
    if (!node) {
      return 0
    }

    let left = depth(node.left)
    let right = depth(node.right)

    length = Math.max(length, left + right)
    return Math.max(left, right)
  }

  depth(node)

  return length
}