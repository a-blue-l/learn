<template>
  <div id="app">
    <l-table :data="tableData">
      <l-table-column prop="name" label="姓名" sortable></l-table-column>
      <l-table-column prop="date" label="日期"></l-table-column>
      <l-table-column prop="address" label="地址"></l-table-column>
    </l-table>
  </div>
</template>

<script>
import lTable from './components/l-table.vue'
import lTableColumn from './components/l-table-column.vue'

export default {
  name: 'App',
  components: {
    lTable,
    lTableColumn
  },
  data() {
    return {
      tableData: [
        {
          name: '王小虎1',
          date: '2020-4-3',
          address: '海南省'
        },
        {
          name: '王小虎2',
          date: '2020-4-3',
          address: '海南省'
        },
        {
          name: '王小虎3',
          date: '2020-4-3',
          address: '海南省'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
