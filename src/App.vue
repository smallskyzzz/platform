<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less">
  @import "~@/assets/css/common.less";

  #app {
    font-family: Avenir,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: @black;
    width: 100%;
    height: 100%;
    /*所有页面根dom需要加上这个class*/
    .root-content {
      height: calc(100% - 20px);
      padding: 10px;
      overflow-y: auto;
      background-color: white;
    }
  }
</style>
