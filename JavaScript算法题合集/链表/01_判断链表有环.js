function fn(list) {
  if(list === null || list.next === null) return false

  const map = new Map()

  while(list.next) {
    if(map.has(list)){
      return true
    }else{
      map.set(list, list)
    }
    list = list.next
  }
  return false
}

function fn1(list) {
  if(list === null || list.next === null) return false

  let p1 = list.next, p2 = list

  while(p1 !== p2){
    if(p1 === null || p1.next === null) return false
    p2 = list.next
    p1 = list.next?.next
  }
  return true
 }