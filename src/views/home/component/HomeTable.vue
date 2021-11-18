<template>
  <div class="home-table">
    <div class="table-header">任务列表</div>
    <el-table
      :data="tableData"
      :show-header="false"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        v-for="tc in tableColumn"
        :key="tc.prop"
        :prop="tc.prop"
        :width="tc.width"
        :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <ex-slot v-if="tc.render" :render="tc.render" :row="scope.row" :index="scope.$index" :column="tc" />
          <span v-else>{{ scope.row[tc.prop] || '-' }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="float: right;margin-top: 20px"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import NOTICE from '@/assets/image/home/notice.png'

// 自定义内容的组件
const exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    }
    if (data.props.column) params.column = data.props.column
    return data.props.render(h, params)
  }
}

export default {
  name: "HomeTable",
  components: {
    exSlot
  },
  data () {
    return {
      tableColumn: [
        {
          prop: 'date',
          label: '',
          width: 80,
          render: () => {
            return [
              <img src={ NOTICE } style="width: 48px" alt=""/>
            ]
          }
        }, {
          prop: 'info',
          label: '',
          render: (h, { row }) => {
            return [
              <div>
                <p>{ row.infoTitle }</p>
                <p>{ row.infoText }</p>
              </div>
            ]
          }
        }, {
          prop: 'name',
          label: '',
          width: 100,
          render: (h, { row }) => {
            return [
              <div>
                <p>发起者</p>
                <p>{ row.name }</p>
              </div>
            ]
          }
        }, {
          prop: 'time',
          label: '',
          width: 100,
          render: (h, { row }) => {
            return [
              <div>
                <p>开始时间</p>
                <p>{ row.date }</p>
              </div>
            ]
          }
        }, {
          prop: 'progress',
          label: '',
          render: (h, { row }) => {
            return [
              <el-progress percentage={ row.progress }></el-progress>
            ]
          }
        }, {
          prop: 'btn',
          label: '',
          width: 100,
          render: (h, { row }) => {
            return [
              <div>
                <el-button type="text">处理</el-button>
                <el-button type="text">更多</el-button>
              </div>
            ]
          }
        }
      ],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        infoTitle: '***需要点检',
        infoText: '3#烧结炉加热系统消炎药点检',
        progress: 50
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
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>

<style scoped lang="less">
  .home-table {
    margin-top: 20px;
    padding: 20px;
    overflow: auto;
    .table-header {
      font-weight: bold;
    }
  }
</style>
