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
console.log('8:' + Boolean(null))

// symbol 独一无二的值
let SYMBOL_NAME = Symbol('KK')
console.log(SYMBOL_NAME)
console.log(typeof(SYMBOL_NAME))

let SYMBOL_NAME_CLONE = Symbol('KK')
console.log(SYMBOL_NAME == SYMBOL_NAME_CLONE)
console.log('------------------位运算-----------------')
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

// Number
console.log('------------------Number-----------------')
console.log('number1：'+Number(''))
console.log('number2：'+Number('1'))
console.log('number3：'+Number('1.2'))
console.log('number4：'+Number('123abc'))
console.log('number5：'+Number('0xAF'))
console.log('number6：'+Number(null))
console.log('number7：'+Number(undefined))
console.log('number8：'+Number({a: 1}))
console.log('parseInt1：'+ parseInt('')) // NAN
console.log('parseInt2：'+ parseInt('123.1'))
console.log('parseInt3：'+ parseInt('123abc'))
console.log('parseInt4：'+ parseInt('abc123'))
console.log('parseInt5：'+ parseInt(undefined))
console.log('parseFloat1：'+ parseFloat(''))
console.log('parseFloat2：'+ parseFloat('1.2'))
console.log('parseFloat3：'+ parseFloat('123abc'))
console.log('parseFloat3：'+ parseFloat('abc123'))
console.log('parseFloat4：'+ parseFloat('0xAF'))
console.log('parseFloat5：'+ parseFloat('123.3.3'))
// String
console.log('------------------String-----------------')
console.log('String：' + String(null))
console.log('String：' + String(undefined))
console.log('String：' + String(true))
console.log('toString1：' + ([1,2,3]).toString())
console.log('toString2：' + ([1,2,{a: 1, b: 2}]).toString())
console.log('toString2：' + ([1,2,[3,4]]).toString())
// Object
console.log('------------------Object-----------------')
console.log({a: 1, b: 2})