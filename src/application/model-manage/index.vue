<template>
  <div class="sys-model-manage">
      <el-table
              :data="data"
              style="width: 100%"
              border
              :default-sort="{prop: 'date', order: 'descending'}"
              :header-cell-style="_headerCellStyle"
      >
          <el-table-column prop="name" label="模型名称" width="180" align="center"></el-table-column>
          <el-table-column prop="size" label="模型大小" width="180" align="center"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间" align="center"></el-table-column>
          <el-table-column prop="uploader" label="上传人" align="center"></el-table-column>
          <el-table-column prop="preview" label="可见性" align="center">
              <template slot-scope="scope">
                  <i class="el-icon-view"></i>
              </template>
          </el-table-column>
          <el-table-column prop="delete" label="删除" align="center">
              <template slot-scope="scope">
                  <i class="el-icon-delete"></i>
              </template>
          </el-table-column>
      </el-table>
  </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                {
                    name: '演马庄西站—1F',
                    size: '16.3M',
                    updateTime: '2018-7-10',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '演马庄西站—2F',
                    size: '20.4M',
                    updateTime: '2018-7-10',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '场地模型',
                    size: '26.8M',
                    updateTime: '2018-6-25',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '倒T型顶板',
                    size: '0.4M',
                    updateTime: '2018-6-13',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '预制复合桩',
                    size: '0.4M',
                    updateTime: '2018-6-13',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '高压旋喷桩',
                    size: '0.4M',
                    updateTime: '2018-6-13',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '芯柱',
                    size: '0.4M',
                    updateTime: '2018-6-13',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '矩形横撑',
                    size: '0.3M',
                    updateTime: '2018-6-13',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '冠梁',
                    size: '0.4M',
                    updateTime: '2018-6-13',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                },
                {
                    name: '围檩',
                    size: '0.3M',
                    updateTime: '2018-6-13',
                    uploader: '译筑科技',
                    preview: '',
                    delete: ''
                }
            ]
        }
    },
    methods: {
        //  :header-cell-style="_headerCellStyle"
        _headerCellStyle() {
            return {
                backgroundColor: '#409EFF',
                color: '#fff'
            }
        },
    }
}
</script>
