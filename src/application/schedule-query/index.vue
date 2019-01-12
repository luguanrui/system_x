<template>
  <div class="sys-schedule-query">
    <el-table
      :data="data"
      style="width: 100%"
      border
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column prop="name" label="名称" sortable width="180" align="center"></el-table-column>
      <el-table-column prop="deadline" label="工期" sortable width="180" align="center"></el-table-column>
      <el-table-column prop="startDate" label="开始时间" align="center"></el-table-column>
      <el-table-column prop="finishDate" label="完成任务" align="center"></el-table-column>
      <el-table-column prop="preTask" label="前置任务" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          name: '施工准备',
          deadline: '1个工作日',
          startDate: '2018年8月1日',
          finishDate: '2018年8月1日',
          preTask: '11'
        },
      ]
    }
  }
}
</script>
