<template>
<!-- 主页面 -->
  <div id="app">
    <transition name="my" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
</script>

<style lang="scss">
html body #app {
  padding: 0;
  margin: 0;
  width: 100%;
  height:100%;
  position: absolute;
}
</style>
