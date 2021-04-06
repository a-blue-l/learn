import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import List from './List.vue'
import ListA from './components/listA.vue'
import ListB from './components/listB.vue'
import VueRouter from './router'
// 此处的Vuex包含{store,install}
import Vuex from './nStore'
import stores from './store'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/list',
    component: List,
    children: [
      {
        path: '/list/listA',
        component: ListA,
      },
      {
        path: '/list/listB',
        component: ListB,
      }
    ]
  }
]

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(stores)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  // 为什么注册，是为了能够拿到router属性，以及拿到配置信息
  router,
  store,
  render: h => h(App)
}).$mount('#app')
