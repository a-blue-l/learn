## react 笔记

### 生命周期
```javascript
componentDidMount
componentDidUnmount
componentDidUpdate
...
```

### 事件绑定
```javascript
1、通过在contructor中将函数指向重新绑定
2、在render函数中用箭头函数
3、在定义方法的时候使用箭头函数重新指向
```

### setState
```javascript
注意事项：调用setState更新数据，其执行可能是异步的，可以传入对象以及回调，setState是批量更新的，不能出现连续执行，否则只会执行后执行的那一次操作
【如果要进行链式调用，则使用给setState传入函数的方法，如下】
this.setState(state => {
    return {
        state[propertype]: ***
    }
})

异步：
在合成方法中执行，可以在回调中进行操作

同步：
直接用原生方法获取dom绑定监听事件
在setTimeout中执行

```


### 组件复合

```javascript
// 对比vue的slot(插槽)功能
// 在react中实现插槽

// 使用this.props.children       【不具名插槽】
// 父组件传入对象，在子组件中使用this.props.children[propertype]来实现具名插槽

```
