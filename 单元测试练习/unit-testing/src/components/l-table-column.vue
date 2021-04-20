<template>
  <th class="l-table-cell">
    {{ label }}
    <span class="caret-wrapper" v-if="$attrs.sortable !== undefined">
      <i class="sort-caret ascending" @click="sort('up')"></i>
      <i class="sort-caret descending" @click="sort('down')"></i>
    </span>
  </th>
</template>

<script>
export default {
  name: "l-table-column",
  props: {
    prop: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    sort(type) {
      this.$parent.$emit('sort', this.prop, type)
    }
  }
};
</script>

<style scoped>
.caret-wrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 34px;
  width: 24px;
  vertical-align: middle;
  cursor: pointer;
  overflow: initial;
  position: relative;
}
.sort-caret {
  width: 0;
  height: 0;
  border: solid 5px transparent;
  position: absolute;
  left: 7px;
}
.sort-caret.ascending {
  border-bottom-color: #409eff;
  top: 5px;
}
.sort-caret.descending {
  border-top-color: #409eff;
  bottom: 7px;
}
</style>
