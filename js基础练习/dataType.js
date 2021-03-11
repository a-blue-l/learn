'use strict'

console.log('1:'+Number.MIN_VALUE)
console.log('2:' +Number.MAX_VALUE)
console.log(typeof null)
console.log(null == undefined)
console.log('3:' +Boolean(''))
console.log('4:' +Boolean('测试boolean值'))
console.log('5:' +Boolean(1))
console.log('6:' +Boolean(0))
console.log('7:' + Boolean(undefined))

// symbol 独一无二的值
let SYMBOL_NAME = Symbol('KK')
console.log(SYMBOL_NAME)
console.log(typeof(SYMBOL_NAME))

let SYMBOL_NAME_CLONE = Symbol('KK')
console.log(SYMBOL_NAME == SYMBOL_NAME_CLONE)

console.log('位运算：' + (2 >> 1))
console.log('位运算：' + (-2 >> 1))
console.log('位运算：' + (2 << 1))
console.log('位运算：' + (2 >>> 1))
console.log('位运算：' + (-2 >>> 1))
console.log('位运算：' + (1 & 1))
console.log('位运算：' + (0 & 1))
console.log('位运算：' + (11 & 1))
console.log('位运算：' + (-1 | 0))
console.log('位运算：异或：' + (12 ^ 10))
// 数据交换
let a = 5, b = 7;
a ^= b;
console.log(a, b)
b ^= a;
console.log(a, b)
a ^= b;
console.log(a, b)
