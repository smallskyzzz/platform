<template>
  <el-container>
    <el-aside width="200px">
      <sideMenu></sideMenu>
    </el-aside>
    <el-container>
      <el-header>
        header
      </el-header>
      <el-main>
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

<style scoped>

</style>
