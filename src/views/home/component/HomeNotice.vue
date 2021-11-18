<template>
  <div class="home-notice">
    <div v-for="(n, i) in notices" :key="i" class="notice-item">
      <p>{{ n.title }}</p>
      <p>{{ n.text }}</p>
    </div>
  </div>
</template>

<script>
const notices = [
  {
    title: '通知1',
    text: '那时候我只会想自己想要什么，从不想自己拥有什么。'
  }, {
    title: '通知1',
    text: '那时候我只会想自己想要什么，从不想自己拥有什么。'
  }, {
    title: '通知1',
    text: '那时候我只会想自己想要什么，从不想自己拥有什么。'
  }
]

export default {
  name: "HomeNotice",
  data () {
    return {
      notices
    }
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/css/common.less";

  .home-notice {
    display: flex;
    margin-top: 20px;
    padding: 20px;
    .notice-item {
      flex: 1;
      padding: 30px;
      border: 1px solid @bg-color;
    }

    .notice-item:not(:first-child):not(:last-child) {
      margin: 0 20px;
    }
  }
</style>
