### 源码解读笔记
## 【重点一、依赖收集】
```
initData 初始化data数据  
  
遍历数据，分辨是对象或是函数，函数将调用返回结果  
  
对data进行代理，指向app，可直接调用data数据  
  
对data对象进行observe，数据双向绑定（如果是对象则递归深层次绑定，如果是数组，则对每一项绑定，vue已重写数组的七个方法，可以响应数据更新[push/pop/shift/unshift/splice/sort/reverse]）  
【如何重写数组方法】 - 【在元素有新增的时候，将新增的元素重新observe】 - 无论如何都要重新通知观察者
    
依赖收集  
通过遍历每一个数据，在getter中设定依赖收集的方法

在此之前，首先要有一个发布者 Dep
Dep对象中包含一个或多个watch对象，在发生更新的时候可以通知所有watch对象更新（notify）
Dep对象可以添加watcher 移除watcher 依赖收集

Observe对象，遍历每一个属性（递归），将其数据defineProperty绑定

每一个vue组件都会生成一个watcher对象，并将watcher自身赋值给了Dep.target，生成自身update方法，当数据更新调用cb回调函数进行渲染

赋值完成后开始执行渲染函数，当其中用到某些属性的时候，会调用这些属性的getter方法，在每个属性的getter方法中，进行了依赖收集

依赖收集的原理：
    每一个属性绑定都会产生一个闭包的dep对象，dep对象可以通过depend方法进行添加依赖，会将同一个watcher对象法如dep中
    
到此为止：【所有用到的data中的每一个属性在发生变化的同时，拦截setter方法，调用了每一个属性自身dep的notify方法，更新自身dep的所有subs的更新函数】
问题：什么时候创建的watcher对象，如何渲染dom，虚拟dom运转原理
问题：每一项都在添加watcher，势必会有很多个重复的watcher，最后是否要重复调用多次update？
        【否，更新的是每一个闭包中的dep，每一个属性的dep中都不可能包含多个重复的watcher】
```
## 内部运行机制
```
初始化生命周期、事件、render
beforeCreated
初始化data、prop、methods、computed、watch
created

挂载组件
```
#### 相关
1、ast解析parse源码[点这里](https://github.com/answershuto/learnVue/blob/master/vue-src/compiler/parser/index.js#L53)
```
模板渲染
1、首先得到AST（抽象语法树）
2、对AST进行优化（对于一些静态不需改变的dom声明为常量，不需要再重新创建节点）

```
*渲染到视图并非实时，而是创建了watcher放入队列中，再下一个tick时更新视图*

## 虚拟dom vnode
问题：  
1、为什么性能更快  ？  （更新更少的内容）
2、在这其中vue做了哪些优化？  （diff算法，patch跳过）

## diff 算法 【重点：updateChildren函数】
1、同层比较 时间复杂度 O(n)，比较条件，新旧节点为同一节点，如果不是同一节点，则直接替换旧节点  

2、patchVnode的规则是这样的：

    1.如果新旧VNode都是静态的，同时它们的key相同（代表同一节点），并且新的VNode是clone或者是标记了once（标记v-once属性，只渲染一次），那么只需要替换elm以及componentInstance即可。

    2.新老节点均有children子节点，则对子节点进行diff操作，调用updateChildren，这个updateChildren也是diff的核心。

    3.如果老节点没有子节点而新节点存在子节点，先清空老节点DOM的文本内容，然后为当前DOM节点加入子节点。

    4.当新节点没有子节点而老节点有子节点的时候，则移除该DOM节点的所有子节点。

    5.当新老节点都无子节点的时候，只是文本的替换。

updateChildren核心函数
如何对比子节点
newStartNode newEndNode oldStartNode oldEndNode 四种比较

生成旧节点哈希表 用来参照对比
如果满足sameNode 则移动相应dom
如果不满足则生成新dom

最后，循环结束，去除多余节点，添加新增节点

## 单个初始化函数解析
```

```
