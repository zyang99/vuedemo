<template>
  <!-- 管理首页，在aside中导航 在main中展示 header用于展示头部 -->
  <el-container>
    <el-aside width='250px'>
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item index="/index/userInfo">
              <i class="el-icon-user-solid"></i>
              <span slot="title">用户中心</span>
            </el-menu-item>
            <el-menu-item disabled>
              <span slot="title">分类服务</span>
            </el-menu-item>
            <el-submenu index="/">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一跳</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index/config">配置</el-menu-item>
                <el-menu-item index="/index/about">关于</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item disabled>
              <span slot="title">技术支持</span>
            </el-menu-item>
            <el-menu-item index="/">
              <i class="el-icon-sold-out"></i>
              <span slot="title">回到过去</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
html body .el-container {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>

<script>
// import NavMenu from "../views/NavMenu.vue";
export default {
  name: "Index",
  data() {
    return {
      RootName: "奇异的冒险之旅开始了",
    };
  },
  // components: {
  //   NavMenu,
  // },
};
</script>
