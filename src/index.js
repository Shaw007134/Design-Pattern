class jQuery {
  constructor(selector) {
    let slice = Array.prototype.slice
    //将DOM节点转换为数组
    let dom = slice.call(document.querySelectorAll(selector))
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }
  append(node) {}
  addClass(name) {}
  html(data) {}
}

window.$ = function(selector) {
  // 工厂模式
  return new jQuery(selector)
}


function loadImg(src) {
  var promise = new Promise(function (resolve, reject) {
    var img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('load error')
    }
    img.src = src
  })
  return promise
}

var src = 'https://www.imooc.com/static/img/index/logo_new.png'
var result = loadImg(src)

result.then(function (img) {
  console.log('img,width', img.width)
  return img
}).then(function (img) {
  console.log('img.height', img.height)
}).catch(function (ex) {
  console.log(ex)
})
// 单一职责原则，每个then中只作好一件事
// 开放封闭原则，如果新增需求，扩展then -- 对扩展开放，对修改封闭