<template>
  <div class="hello">
    <h1>保持理智&nbsp;&nbsp;相信未来</h1>
    <p style="font-size: 20px">
      Beautiful &nbsp;&bull;&nbsp; Stunning &nbsp;&bull;&nbsp; Glorious
    </p>
    <router-link to="/index">
      <img src="../assets/user.png" alt="User" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  text-align: center;
}
img {
  margin: 50px 50px;
  width: 100px;
  height: 100px;
}
img:hover{
  width: 120px;
  height: 120px;
  margin: 40px 40px;
}
</style>
