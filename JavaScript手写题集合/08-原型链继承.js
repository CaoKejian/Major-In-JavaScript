function Person(name) {
  this.name = name
}

function Colin(age) {
  this.age = age
  Person.call(this, 'colin')
}
Colin.prototype.__proto__ = Person.prototype

Colin.prototype.sayHi = function() {
  console.log(`Hi, I am ${this.name}, my age is ${this.age}`)
}
const c1 = new Colin('21')
console.log(c1.sayHi())