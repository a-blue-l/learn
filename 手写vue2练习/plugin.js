const Myplugin = {
  install(Vue) {
    Vue.component('plugin-test', {
      render(h) {
        return h('div', [
          h('span', '这里的位置是测试插件的使用')
        ])
      }
    })
  }
}
