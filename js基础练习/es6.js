const vm = new Vue({
  el: '#app',
  data() {
    return {
      text: ''
    }
  },
  created() {
    const { c } = this;
    c('********************ES6**********************')
    c('**************解构赋值****************')
    let { bar, foo } = { bar: 1, foo: 2 }
    c(bar);
    c(foo);
    let _map = new Map();
    _map.set('a', 1);
    _map.set('b', 2);

    for(let [, value] of _map){
      c('map：'+value)
    }
    // 字符串扩展
    // startWidth endWidth includes
    // repeat
    c('a'.repeat(2))

    // 数值的扩展
    // isFinite(是否有限) isNAN（是否为NAN）
    // isInteger
    c(Number.isInteger(1.00))
    // EPSILON，解决浮点数不精确的问题
    c(Number.EPSILON)
    // 安全整数 isSafeInteger
    c(Number.isSafeInteger(1.2))

    // Math 新增方法

    // Math.trunc
    // number < 0? Math.ceil(number) : Math.floor(number)

    // Math.sign
    // 返回是正数还是负数

    // Math.cbrt 立方根 等同于Math.pow(nnumber, 1/3)

    // Math.hypot 求所有参数平方和的平方根

    // Math.log10  Math.log2 Math.log1p Math.expm1

    // 指数运算符
    c(2 ** 3)

    // 二进制和八进制的表示法  0b和0o

    // 数组的扩展
    // Array.from，将类数组转换成真正的数组，同扩展运算符的区别是可以对对象进行转换，前提是包含length字段
    // 可以转换dom列表，对象，set结构
    c(Array.from(new Set([1, 2, 4])))
    c(Array.from({ 0: '1', length: 3 }))
    c([].slice.call({0: '2',length: 3}))
    // 同[].slice.call(object)
    c(Array.from([1,2,3], a => (a*2)))
    // 三个参数 第一个 数据，第二个类似于map，第三个this指向

    // Array.of 将一组数值转换成数组，解决Array不同参数行为不同的问题
    c(Array.of(1,2,3))

    // Array.copyWithin 替换数组内容 第一个参数替换的开始位置，第二个参数开始读取数据的位置，第三个参数结束读取数据的位置
    c([1,2,3,4,5,6].copyWithin(1, 3, 5))  // 1 4 5 4 5 6
    // Array.find Array.findIndex 寻找符合条件的值，寻找符合条件的值的下标
    // Array.fill 填充内容，第二个参数和第三个参数分别是填充的起始位置和结束位置
    // 遍历数组的三个新方法 keys(键名) values(键值) entries(键值对) let [item, elem] of [].entries
    
    // 函数的扩展
    // 默认参数
    // 给参数设置了作用域， let暂时性死区
    // rest参数
    // // 绑定运算符 :: ES7提案
    // let obj = {name: 1}
    // let fun = () => { console.log(this.name) }
    // obj::fun;

    // 对象的扩展
    let a = 'nums';
    let objes6 = {
      [a]: '111',
      ['1' + '2']() {

      }
    } 

    Object.is('1', 2)
    Object.assign() // 对象的合并
    Object.getOwnPropertyDescriptor(objes6, 'nums'); // 查找对象上某属性的可描述对象
    
    // 五种遍历方法
    // for in
    // Object.keys
    // Object.getOwnPropertyNames
    // Object.getOwnPrePertySymbols
    // Reflect.ownKeys

    // Symbol
    
  },
  methods: {
    c(a = "默认值") {
      this.text += a + '<br/>';
    }
  },
  template: `
    <div v-html="text"></div>
  `
})
