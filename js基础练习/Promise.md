## Promise
### 作用：处理异步
### 优势：可同时处理多个异步操作，风格可人，便于维护
### 两种处理 resolve（pending -> resolved） reject（pending -> rejected）
### 三种状态
```
pending 【待定】 初始状态
fulfilled【实现】操作成功
rejected【被否决】操作失败

promise的状态发生改变的同时，会出发then中的相应函数处理后续步骤
promise的状态只会改变一次

状态改变只有两种情况
```

## 重点内容
### 两种错误处理方法
```
1、reject('错误信息')  通过then的第二个参数进行捕获
2、throw new Error('错误信息') 通过catch进行捕获
```
#### catch 也会返回一个Promise实例并且为resolved状态，同样可以通往下一个then


## 其余静态方法
```javascript
Promise.all() //多个Promise包装 Promise.all()
Promise.resolve(value) // 由value决定返回值，无论如何都会返回一个具体的状态，可继续链式调用1、Promise对象 2、空，基本类型，或其与常规对象，则返回fulfilled，可看vue源码中获取timeFunc函数的三种方法其中的Promise
Promise.reject(reason) // 返回一个装填为失败的Promise对象
Promise.race() // 任意一个成功后，返回成功后的结果
Promise.any() // 任意一个完成后，将返回成功或者失败的结果作为参数，返回该Promise对象
Promise.allSettled(iteralbe) // 当所有Promise都已完成，则将返回一个包含所有Promise状态的数组对象
```
