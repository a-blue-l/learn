let Vue

// router类
class VueRouter {
  constructor(option) {
    this.$options = option
    this.current = window.location.hash.slice(1) || '/';
    // 重点，添加数据响应式
    // Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || '/')

    // 嵌套路由解决方案
    Vue.util.defineReactive(this, 'matched', [])

    // 将所有相关的路由选项添加入matched中，之后根据dep来寻找对应路由
    this.match();

    window.addEventListener('hashchange', () => {
      this.current = window.location.hash.slice(1)
      this.matched = [];
      this.match();
    })
  }

  match(routes) {
    // 通过递归遍历，将所有截取到的路由集合放入matchd
    routes = routes || this.$options.routes;
    for (const route of routes) {
      if (route.path === '/' && this.current === '/') {
        // 首页，默认无子路由
        this.matched.push(route)
      } else if (route.path !== '/' && this.current.indexOf(route.path) != -1) {
        this.matched.push(route)
        if (route.children) {
          // 如果有子路由，则递归
          this.match(route.children)
        }
      }
    }
  }
}

// 因为是vue的插件，所以需要install方法
VueRouter.install = function (_Vue) {
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
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
  })

  _Vue.component('router-view', {
    render(h) {
      // console.log(this.$parent)
      this.routerView = true;
      // 这里去定义router-view的层级
      let parent = this.$parent, dep = 0;
      while (parent) {
        if (parent.routerView) {
          dep++
        }
        parent = parent.$parent;
      }
      const _component = this.$router.matched[dep] ? this.$router.matched[dep].component : null
      return h(_component)
    }
  })
}

export default VueRouter
