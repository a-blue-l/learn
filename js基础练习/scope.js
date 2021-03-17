const c = function() {
  console.log(arguments[0])
}

// 执行环境
c('这里是全局环境')
function fin(){
  var a = 1;
  _b = 2;
  c('这里是局部环境')
}
fin();
// c('尝试获取局部变量a：' + a)
c('尝试获取全局变量_b：' + _b)

// 作用域链
// 延长作用域链
function new_fin() {
  var a = 1;
  with(location) {
    var url = a + href;
  }
  console.log(url)
}
c('测试延长作用域链')
new_fin();
// 垃圾收集
// 标记清除
// 从根出发，讲所有用到的对象，以及引用他的对象全部标记，其余未被标记的则认定是可以清除的垃圾
// 其余算法
// （1）标记-压缩
// （2）标记GC复制 from to两块空间互换
// （3）三色标记算法（黑白灰三块，解决阻塞）
// 引用计数
// 被引用，则计数加一，清除计数为0的内存
