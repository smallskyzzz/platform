<template>
  <div class="root-content">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="90px">
      <el-form-item label="用户名：" prop="name">
        <el-input v-model="loginForm.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setToken } from '@/libs/auth'

export default {
  name: "index",
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          // 登录接口，存用户登录信息token
          setToken(this.loginForm.name)
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
