class Person{
  constructor(name) {
    this.name = name
  }
}

class Colin extends Person{
  constructor(name, age){
    super(name)
    this.age = age
  }
  sayHi(){
    console.log(`Hi, I am ${this.name}, I am ${this.age}!`)
  }
}
const x = new Colin('colin', 21)
console.log(x.sayHi())