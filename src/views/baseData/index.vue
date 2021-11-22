<template>
  <div class="root-content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="组织架构" name="first">
        <pageTable :data="data" :columns="columns"></pageTable>
      </el-tab-pane>
      <el-tab-pane label="人员" name="second">人员</el-tab-pane>
      <el-tab-pane label="设备" name="third">设备</el-tab-pane>
      <el-tab-pane label="点检项" name="fourth">点检项</el-tab-pane>
      <el-tab-pane label="过程检验项" name="fifth">过程检验项</el-tab-pane>
      <el-tab-pane label="原料" name="sixth">原料</el-tab-pane>
      <el-tab-pane label="工艺" name="seventh">工艺</el-tab-pane>
      <el-tab-pane label="产品" name="eighth">产品</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import pageTable from '@/components/pageTable'

export default {
  name: "index",
  components: {
    pageTable
  },
  data () {
    return {
      activeName: 'first',
      data: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      columns: [
        {
          prop: 'date',
          label: '时间'
        }, {
          prop: 'name',
          label: '名称',
        }, {
          prop: 'address',
          label: '地址',
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>

</style>
