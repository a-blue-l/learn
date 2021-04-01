// 简易版Vuex
let Vue

class Store {

  constructor(option) {

    // 处理getters
    const computed = {}
    this.getters = {} // 可以通过$store.getters获取到配置中getters的值

    // 处理每一个配置中的getters方法，并将其赋值给Vue实例的computed对象，达到监听变化的效果
    Object.keys(option.getters).forEach((item) => {
      computed[item] = () => option.getters[item](option.state) // 将state当做参数传入，可以在getters方法中获取对应的值
      Object.defineProperty(this.getters, item, {
        get: () => {
          return this._vm[item] // 当computed属性生效后，可以直接返回Vue实例上的值
        }
      })
    })

    this._vm = new Vue({
      data: {
        $$state: option.state
      },
      computed
    })

    this.mutations = option.mutations
    this.actions = option.actions
  }

  // 重写commit/dispatch方法，将this指向Store类
  commit = (type) => {
    this.mutations[type](this.state)
  }

  dispatch = (type) => {
    this.actions[type](this)
  }

  // state
  get state() {
    return this._vm._data.$$state
  }

  set state(v) {
    throw new TypeError('不能修改！')
  }
}

function install(_Vue) {
  Vue = _Vue
  // 在这里做一件事
  // 注册$store
  _Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        _Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}
