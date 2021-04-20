<template>
  <table cellspacing="0" width="820" class="l-table">
    <thead>
      <tr>
        <slot></slot>
      </tr>
    </thead>
    <tbody>
      <tr v-for="tr in data" :key="tr.id">
        <td v-for="td in result" :key="td" class="l-table-cell">
          {{ tr[td] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
/**
 * @title Table
 * @description 模拟Element Table组件实现
 *  * */

export default {
  inheritAttrs: false,
  name: "l-table",
  data() {
    return {
      result: [],
      data: [],
    };
  },
  watch: {
    '$attrs.data': {
      handler() {
        
      }
    }
  },
  created() {
    // 根据column对数据字段进行排序
    const slots = this.$slots.default;
    const result = [];

    slots.forEach((item) => {
      result.push(item.componentOptions.propsData.prop);
    });

    this.result = result;

    this.setId();

    // 监听排序事件
    this.$on("sort", (prop, type) => {
      this.data = this.data.sort((a, b) => {
        return type === "up"
          ? a[prop] > b[prop]
            ? 1
            : -1
          : b[prop] < a[prop]
          ? -1
          : 1;
      });
    });
  },
  methods: {
    setId() {
      // 若没有id标识，则自动添加
      this.$attrs.data = this.$attrs.data.map((item) => ({
        id: Math.random() * 10,
        ...item,
      }));

      this.data = this.$attrs.data;
    },
  },
};
</script>

<style scoped>
th,
td {
  padding: 20px 10px;
}
</style>
