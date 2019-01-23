class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    alert(`${this.name} eat something`)
  }
  speak() {
    alert(`My name is ${this.name}, age ${this.age}`)
  }
  getName() {
    return this.name
  }
  saySomething() {}
}

class Student extends Person {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  study() {
    alert(`${this.name} study`)
  }
  saySomething() {
    alert('I am student')
  }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.study()
console.log(xiaoming.number)
xiaoming.eat()
xiaoming.saySomething()
