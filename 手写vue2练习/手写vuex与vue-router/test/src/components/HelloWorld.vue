<template>
  <div class="hello">
    这是首页
    <div>{{ $store.state.counter }}</div>
    <div>这是getters数据：{{ $store.getters.doubleCounter }}</div>
    <div>这是getters数据：{{ $store.getters.tripleCounter }}</div>
    <button @click="$store.commit('SET_COUNTER')">增加</button>
    <button @click="$store.dispatch('SET_TIME_COUNTER')">减少</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
