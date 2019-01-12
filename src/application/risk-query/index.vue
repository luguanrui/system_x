<template>
  <div class="sys-risk-query">
    <div class="sys-implement-desc-button">
      <el-button type="primary">导出表格</el-button>
    </div>
    <el-table
      :data="data"
      style="width: 100%"
      border
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="index" label="危险源ID" width="80" align="center"></el-table-column>
      <el-table-column prop="stage" label="阶段" width="180" align="center"></el-table-column>
      <el-table-column prop="desc" label="安全风险描述" min-width="200" align="center"></el-table-column>
      <el-table-column prop="location" label="位置" width="100" align="center"></el-table-column>
      <el-table-column prop="reason" label="导致事故" width="200" align="center"></el-table-column>
      <el-table-column prop="rank" label="危险等级" width="200" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          stage: "管线改迁",
          desc: "管线拆改和保护过程中，措施不当引起管线破裂",
          location: "底线管线",
          reason: "透水和坍塌",
          rank: 4
        },

      ]
    };
  }
};
</script>
