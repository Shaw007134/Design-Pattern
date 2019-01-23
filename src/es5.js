;(function() {
  ;('use strict')

  // 不要直接声明函数，会发生变量提升
  var Class1 = function() {
    this.fun1 = function() {
      console.log('test')
    }
  }

  Class1.prototype.fun2 = function() {
    console.log('2')
  }
  // ES5的类就是一个构造方法，通过new关键字得到构造方法的副本
  // 并且赋予其新的值
  new Class1().fun2()

  var Animal = function(name, age) {
    this.name = name
    this.age = age
    // 这里不能用this.say，this.say不在原型链上
    Animal.prototype.say = function() {
      console.log(this.name + ' ' + this.age)
    }
  }

  // var cat = new Animal('小猫', 3)
  // cat.say()

  // // 寄生组合继承
  // // call() apply()
  // apply接收的参数是数组，只有一个
  // // 调用一个对象的一个方法，用另一个对象替换当前对象
  // // Animal.prototype.say.call(cat)
  // Animal.prototype.say.apply(cat)

  // var params = {
  //   name: '小猫2',
  //   age: 4
  // }

  // cat.say.call(params)
  // // 寄生组合继承
  // 与组合继承的区别是不是将父类放到原型链中，是利用create浅克隆
  var Cat = function(name, age) {
    // argument是数组
    // Animal.apply(this, arguments)
    // Animal.apply(this, [name, age])
    Animal.call(this, name, age)
  }
  // Object.create是一个浅克隆方式
  Cat.prototype = Object.create(Animal.prototype)
  // 不是将对象直接克隆过来，而是将原型链浅克隆
  // Cat.prototype = new Animal()
  Cat.prototype.say = function() {
    // 若要调用父类，可以使用以下方式
    var p = {
      name: '父类',
      age: 10
    }
    Animal.prototype.say.apply(p)
    console.log('这个是子类的名字' + this.name + this.age)
  }
  var cat1 = new Cat('子猫', 5)
  cat1.say()
})()
