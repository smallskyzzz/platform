<template>
  <div>
    <h5 style="height: 60px;margin: 0">logo</h5>
    <el-menu
        style="height: calc(100% - 60px)"
        background-color="rgba(0, 21, 41, 1)"
        text-color="rgba(255, 255, 255, .6)"
    >
      <!--过滤出hideInMenu项-->
      <div v-for="(r, i) in routers">
        <el-menu-item
          v-if="!(r.meta && r.meta.hideInMenu)"
          :key="r.name"
          @click="handleClick(r)"
          :index="i + ''"
        >
          <i class="el-icon-document"></i>
          <span slot="title">{{ r.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import routers from '@/router/index'

export default {
  name: "sideMenu",
  data () {
    return {
      routers
    }
  },
  computed: {
    activeName () {
      console.log(this.routers.findIndex((r) => r.path === this.$router.path))
      return this.routers.findIndex((r) => r.path === this.$router.path)
    }
  },
  created () {
    console.log(routers)
  },
  methods: {
    handleClick (r) {
      console.log(r)
      const { path } = r
      this.$router.push({
        path
      })
    }
  }
}
</script>

<style scoped>

</style>
