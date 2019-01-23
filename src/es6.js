// class ClassTest {
//   constructor() {
//     console.log('我创建了')
//   }

//   fun1() {
//     console.log('fun1')
//   }

//   static fun2() {
//     console.log('2')
//   }
// }

// new ClassTest().fun1()

// ClassTest.fun2()

class Animal {
  constructor(name = 'no name', age = 0) {
    this.name = name
    this.age = age
  }

  say() {
    console.log(this.name, this.age)
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age)
  }
  // 通过申明相同的方法对父类的方法进行覆盖
  say() {
    super.say()
    console.log('这是子类的say')
  }
}

const cat = new Cat('小猫哈哈', 2)
cat.say()
