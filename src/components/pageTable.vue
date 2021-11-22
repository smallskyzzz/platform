<!--表格+分页结合的控件-->
<!--项目表格统一控件-->
<template>
  <div>
    <el-table
        :data="url ? tableData : data"
        tooltip-effect="dark"
        style="width: 100%">
      <el-table-column
          v-for="tc in columns"
          :key="tc.prop"
          :prop="tc.prop"
          :label="tc.label"
          :width="tc.width"
          :show-overflow-tooltip="true">
        <template slot-scope="scope">
          <ex-slot v-if="tc.render" :render="tc.render" :row="scope.row" :index="scope.$index" :column="tc" />
          <span v-else>{{ scope.row[tc.prop] || '-' }}</span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      style="float: right;margin-top: 20px"
      @current-change="pageChange"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>

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
  name: "pageTable",
  components: {
    exSlot
  },
  props: {
    // 请求地址
    url: '',
    // 请求类型，默认为get
    method: {
      type: String,
      validator (value) {
        return ['post', 'get'].indexOf(value.toLowerCase()) > -1
      },
      default: 'get'
    },
    // 第一次加载，默认发送请求
    // autoLoad: {
    //   type: Boolean,
    //   default: true
    // },
    // isRemote: {
    //   type: Boolean,
    //   default: true
    // },
    // 列
    columns: {
      type: Array,
      default: () => [],
      required: true
    },
    // 表数据,可能是自己传的值（需要做分页）
    data: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      // 请求到的表格数据
      tableData: [],
      // 表格数据总条数
      total: 0
    }
  },
  created () {
    if (this.url) {
      // 发送请求
    }
  },
  methods: {
    pageChange () {

    }
  }
}
</script>

<style scoped>

</style>
