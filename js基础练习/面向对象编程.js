function c() {
  console.log(arguments[0])
}

// 工厂模式
// 缺点：每一次都要显式地创建object对象
// function createFactoryObject() {
//   const obj = Object.create(null);
//   obj.name = 'my';
//   obj.talk = function(){
//     c(arguments[0])
//   }
//   return obj;
// }
// let newObj = createFactoryObject();
// c(newObj.name)
// newObj.talk(111)

// 构造函数模式
// 优点：不需要显式创建object，可以直接赋值this，省略return语句
// 缺点：如果便于公用，每赋值一个api都需要单独写全局函数，不符合全局变量的含义
// function structureFuncrion() {
//   this.name = 'my name is bob';
//   this.talk = talk;
// }

// function talk() {
//   c(arguments[0])
// }

// let strObj = new structureFuncrion();
// strObj.talk('222')
// 办了哪几件事
/**
 * 1、创建了一个空对象
 * 2、将空对象的原型指向了函数的prototype
 * 3、将函数内部的this指向了空对象
 * 4、执行函数代码，赋值属性技方法
 * 5、最后返回对象
 * */ 

// 添加prototype
// structureFuncrion.prototype.newfun = function() {
  
// }

// 原型模式
// 什么是原型对象
// 

// function factoryFunction() {

// }

// factoryFunction.prototype.foo = 2;

// let definact = function(obj, key, val) {
//   Object.defineProperty(obj, key, {
//     get() {
//       return val
//     },
//     set() {
//       val = 2;
//     }
//   })
// }
// definact(factoryFunction.prototype, 'foo', factoryFunction.prototype['foo'])

// let obj_create = new factoryFunction();

// obj_create.foo = 567;

// console.log(obj_create.foo) // 2


// obj_create.foo1 = '3';

// console.log(obj_create.foo1) // 222

// Object.defineProperty(obj_create, 'foo1', {
//   get foo(value) {
//     // console.log(value)
//     return value
//   },
//   set foo(value) {
//     // console.log(value)
//     return value
//   },
//   // writable: false // 只读
// })
// obj_create.foo1 = 3;
// console.log(obj_create.foo1)

// 原型模式

// 组合模式（构造函数+原型模式）
// 通用方法使用原型模式，通用属性使用构造函数


// function factory(){
//   this.name = '1';
//   this.arr = [1,2];
// }


// let obj1 = new factory();

// factory.prototype.say = function() {
//   console.log(1)
// }

// factory.prototype = {
//   constructor: factory,
//   say() {  
//     console.log('123')
//   }
// }

// obj1.say()


// 原型链继承
console.log('************原型链继承***********')
function functoryParent() {
  this.array = [1,2,3]
}

functoryParent.prototype.getname = function(){
  console.log(this.array)
}

function objFunctory() {

}

objFunctory.prototype = new functoryParent();

// 顺序问题

objFunctory.prototype = {
  constructor: functoryParent
}

let obj = new objFunctory();
let obj1 = new objFunctory();

// 会共享parent层的属性
console.log(obj.getname)

// 经典继承
console.log('************经典继承***********')
function SuperType() {
  this.color = ['red', 'green'];  
}

SuperType.prototype.getName = function() {
  console.log(this.color)
}

function SubType() {
  SuperType.call(this)
}

let objs = new SubType()

console.log(objs) 
