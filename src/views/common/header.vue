<template>
  <div class="header">
    <div class="header-content">header</div>
    <el-popover class="header-user-wrapper" trigger="click" title="用户信息">
      <div class="header-user-content" style="text-align: center">
        <p @click="logout" style="cursor: pointer">退出登录</p>
      </div>
      <div slot="reference">
        <el-avatar size="medium" :src="userAvatarUrl" class="avatar"></el-avatar>
        <div class="name text-overflow">{{ name }}</div>
        <i class="el-icon-arrow-down"></i>
      </div>
    </el-popover>
  </div>
</template>

<script>
import { getToken, removeToken } from '@/libs/auth'

export default {
  name: "header",
  data () {
    return {
      userAvatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      name: ''
    }
  },
  created () {
    this.name = getToken()
  },
  methods: {
    logout () {
      // 清除token
      removeToken()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 100%;
  .header-content {
    flex: 1;
  }
  .header-user-wrapper {
    flex: 0 0 120px;
    .header-user-content {
      text-align: center;
      p {
        cursor: pointer;
      }
    }
  }
}

/deep/ .el-popover__reference {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  .avatar {
    flex: 0 0 36px;
  }
  .name {
    flex: 1;
    padding: 0 10px;
  }
  .el-icon-arrow-down {
    flex: 0 0 16px;
  }
}
</style>
