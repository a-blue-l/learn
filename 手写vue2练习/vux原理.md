#### VUEX效用原理

##### 运行机制

```javascript
1、vuex实为vue的插件，包含install方法，当调用Vue.use(vuex)的同时，会执行install方法注册插件
2、install做了两件事：
	（1）防止重复注册vuex
    （2）初始化vuex【将vuexinit混淆进每一个vue实例的beforeCreated生命周期中，并执行vuexinit】
3、在vuexinit中，会判断是否为根节点，并将每一个实例的$store属性设置为同一个store实例
4、收集modules，并递归安装modules
5、为state的每一个属性设置数据绑定，并新建一个vue实例，将state作为data数据传入
6、getter会作为vue实例的computed来注册
7、至此，我们可以通过this.$store.state[属性]来访问我们想要的数据了
8、问题：为何只能通过mutation来修改state的值
	解答：初始化committing标签，来表示修改的方式，通过mutation来修改，会将committing设置为true，再触发watch的回调的时候就可以正常修改。如果直接修改state的值，便会直接触发watch的回调，这时候的committing为false，会触发报错
9、在实例Store中将dispatch和commit的调用this会将其指向store自身
```

