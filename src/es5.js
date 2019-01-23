(function () {
  'use strict'

  // 不要直接声明函数，会发生变量提升
  var Class1 = function () {
    this.fun1 = function () {
      console.log('test')
    }
  }

  Class1.prototype.fun2 = function () {
    console.log('2')
  }
  // ES5的类就是一个构造方法，通过new关键字得到构造方法的副本
  // 并且赋予其新的值
  new Class1().fun2()

  var Animal = function (name, age) {
    this.name = name
    this.age = age
    this.say = function() {
      console.log(this.name + ' ' + this.age)
    }
  }

  var cat = new Animal('小猫',3)
  cat.say()
})();