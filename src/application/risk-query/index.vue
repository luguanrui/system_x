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
      <el-table-column prop="stage" label="阶段" width="100" align="center"></el-table-column>
      <el-table-column prop="desc" label="安全风险描述" min-width="200" align="center"></el-table-column>
      <el-table-column prop="location" label="位置" width="100" align="center"></el-table-column>
      <el-table-column prop="reason" label="导致事故" width="200" align="center"></el-table-column>
      <el-table-column prop="rank" label="危险等级" width="100" align="center"></el-table-column>
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
         {
          stage: "交通疏解",
          desc: "施工围挡外导向标识不明显，车辆有可能冲入施工现场",
          location: "周边围挡",
          reason: "车辆伤害",
          rank: 2,
        },
          {
          stage: "交通疏解",
          desc: "围挡大门及道路处无人指挥，施工车辆危及社会车辆及行人",
          location: "周围围挡",
          reason: "机械伤害",
          rank: 3,
        },
          {
          stage: "基坑围护",
          desc: "围护结构插入深度不呆，引起失稳",
          location: "地下连续墙",
          reason: "坍塌",
          rank: 3
        },
          {
          stage: "基坑围护",
          desc: "勘察不详，开挖破坏地下管线",
          location: "地下连续墙",
          reason: "透水及坍塌",
          rank: 4,
        },
          {
          stage: "基坑围护",
          desc: "吊装钢筋笼时，操作不当，引起人身伤害",
          location: "地下连续墙",
          reason: "机械伤害",
          rank: 3,
        },
          {
          stage: "基坑围护",
          desc: "吊装钢筋笼时，操作不当，起重机械倾覆",
          location: "地下连续墙",
          reason: "起重伤害",
          rank: 4
        },
         {
          stage: "基坑围护",
          desc: "地质软弱,混凝土浇筑时塌土",
          location: "地下连续墙",
          reason: "透水及坍塌",
          rank: 3
        },
          {
          stage: "基坑围护",
          desc: "导墙拆撑后没加横向支撑",
          location: "地下连续墙",
          reason: "坍塌",
          rank: 4
        },
          {
          stage: "基坑围护",
          desc: "混凝土导墙浇筑和养护时，重型机械、车辆在其附近作业",
          location: "地下连续墙",
          reason: "坍塌",
          rank: 3
        },
          {
          stage: "土方工程",
          desc: "勘察不详，土方开挖破坏地下管线",
          location: "土方开挖部位",
          reason: "地下连续墙",
          rank: 3
        }
      ]
    };
  }
};
</script>
