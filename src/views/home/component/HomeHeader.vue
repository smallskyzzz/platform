<template>
  <div class="home-header">
    <div v-for="h in headers" :key="h.title" class="home-header-item">
      <p class="title">{{ h.title }}</p>
      <p class="content">{{ h.content }}</p>
    </div>
  </div>
</template>

<script>
const headers = [
  {
    title: '我的待办',
    content: '8个任务'
  }, {
    title: '本周任务平均处理时212间',
    content: '32分钟'
  }, {
    title: '本周完成任务数',
    content: '24个任务'
  }
]

export default {
  name: "HomeHeader",
  data () {
    return {
      headers
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/css/common.less";

  .home-header {
    display: flex;
    .home-header-item {
      flex: 1;
      text-align: center;
      .title {
        line-height: 32px;
        color: @text-color;
      }
      .content {
        font-size: 24px;
      }
    }

    .home-header-item:not(:last-child) {
      border-right: 1px solid @bg-color;
    }
  }
</style>
