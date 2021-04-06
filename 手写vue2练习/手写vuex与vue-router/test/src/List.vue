<template>
  <div>
    <div>这是list页面</div>
    <router-link to="/list/listA">A子路由</router-link>
    <router-link to="/list/listB">B子路由</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
