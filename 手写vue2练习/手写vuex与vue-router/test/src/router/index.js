let Vue

// router类
class VueRouter {
  constructor(option) {
    this.$options = option

    // 重点，添加数据响应式
    Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')

    window.addEventListener('hashchange',  () => {
      this.current = window.location.hash.slice(1)
    })
  }
}

// 因为是vue的插件，所以需要install方法
VueRouter.install = function(_Vue) {
  Vue = _Vue
  // _Vue为注册router时的vue实例
  // 这里做三件事
  // 挂载$router
  // 注册router-view与router-link组件
  // 由于在此时的vue只是运行时的构造函数，并不能取得$options，所以要采用混入模式
  // _Vue.prototype.$router = 
  _Vue.mixin({
    beforeCreate() {
      // 只在根组件执行一次
      if (this.$options.router) _Vue.prototype.$router = this.$options.router
    }
  })
  
  // 注册组件
  _Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true
      }
    },
    render(h) {
      return h('a', { attrs: {href: '#' + this.to} }, this.$slots.default)
    }
  })
  
  _Vue.component('router-view', {
    render(h) {
      const _component = this.$router.$options.routes.find(route => route.path === this.$router.current).component
      return h(_component)
    }
  })
}

export default VueRouter
