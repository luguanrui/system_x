<template>
  <div class="sys-implement-desc">
    <div class="sys-implement-desc-button">
      <el-button>编辑</el-button>
      <el-button type="primary">上传文件</el-button>
    </div>
    <el-table
      :data="data"
      style="width: 100%"
      border
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="place" label="工点" width="180" align="center"></el-table-column>
      <el-table-column prop="filename" label="文件名" align="center">
        <template slot-scope="scope">
          <a href="#">{{scope.row.filename}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="uploader" label="上传人" width="100" align="center"></el-table-column>
      <el-table-column prop="uploadTime" label="上传时间" width="200" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          place: "演马庄西站",
          filename: "深基坑大尺寸预制叠合桩施工工法",
          uploader: "王龙",
          uploadTime: "2017-07-23 14:18:20"
        },
        {
          place: "演马庄西站",
          filename: "复合立柱施工工法 ",
          uploader: "李海",
          uploadTime: "2017-07-22 15:35:50"
        },
        {
          place: "演马庄西站",
          filename: "地铁车站叠合顶板施工工法",
          uploader: "王龙",
          uploadTime: "2017-07-20 09:15:27"
        }
      ]
    };
  }
};
</script>
