<template>
  <el-container class="container">
    <el-aside width="200px">
      <sideMenu style="height: 100%"></sideMenu>
    </el-aside>
    <el-container>
      <el-header>
        header
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sideMenu from '@/components/sideMenu'

export default {
  name: "Main",
  components: {
    sideMenu
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/css/common.less";

  .container {
    height: 100%;
    .main {
      padding: 10px;
      background-color: @bg-color;
    }
  }
</style>
