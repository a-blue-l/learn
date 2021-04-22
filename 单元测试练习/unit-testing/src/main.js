import Vue from 'vue'
import App from './App.vue'
import lTable from './components/l-table.vue'
import lTableColumn from './components/l-table-column.vue'

Vue.config.productionTip = false

Vue.component('l-table', lTable)
Vue.component('l-table-column', lTableColumn)

new Vue({
  render: h => h(App),
}).$mount('#app')
