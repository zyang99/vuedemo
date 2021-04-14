<template>
<!-- 欢迎页面 -->
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <transition name="my">
      <HelloWorld v-if='isLoading'></HelloWorld>
    </transition>
  </div>
</template>

<style>
.my-enter,
.my-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.5s ease;
}
.home{
  background: url('../assets/3.jpg');
  padding: 0;
  background-size: cover;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
}
*{
  margin: 0;
  padding: 0;
}
.home{
  width: 100%;
  height:100%;
  position: absolute;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  /*eslint-disable*/
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    const me = this
    me.loadPageData ()
  },
  methods: { 
    loadPageData () {
      this.isLoading = true
    }
  }
  /*eslint-disable*/
}
</script>
