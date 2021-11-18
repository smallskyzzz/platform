<template>
  <div class="root-content">
    <home-header></home-header>
    <home-table></home-table>
    <home-notice></home-notice>
  </div>
</template>

<script>
import HomeHeader from '@/views/home/component/HomeHeader'
import HomeTable from '@/views/home/component/HomeTable'
import HomeNotice from '@/views/home/component/HomeNotice'

export default {
  name: "index",
  components: {
    HomeHeader,
    HomeTable,
    HomeNotice
  }
}
</script>

<style scoped>

</style>
