import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import List from './List.vue'
import VueRouter from './router'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/list',
    component: List
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  // 为什么注册，是为了能够拿到router属性，以及拿到配置信息
  router,
  render: h => h(App)
}).$mount('#app')
