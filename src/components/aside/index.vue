<template>
  <div class="sys-aside">
    <el-menu :router="true" :unique-opened="true">
      <el-submenu index="1">
        <template slot="title">基本信息</template>
        <el-menu-item index="project-profile">工程概况</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">BIM 模型管理</template>
        <el-menu-item index="model-iview">模型浏览</el-menu-item>
        <el-menu-item index="model-manage">模型管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">进度管理</template>
        <el-menu-item index="schedule-query">进度计划查询</el-menu-item>
        <el-menu-item index="schedule-control">进度控制</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">绿色施工</template>
        <el-menu-item index="simplement-desc">绿色施工工艺工法说明</el-menu-item>
        <el-menu-item index="visual-simulation">关键工艺可视化模拟</el-menu-item>
        <el-menu-item index="crash-detection">碰撞检测</el-menu-item>
      </el-submenu>
      <el-menu-item index="quantitative-statistics">
        <span slot="title">工程量统计</span>
      </el-menu-item>
      <el-submenu index="6">
        <template slot="title">安全管理</template>
        <el-menu-item index="risk-query">安全风险问题库查询</el-menu-item>
        <el-menu-item index="safety-precaution">安全预警</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.sys-aside .el-submenu__title {
  text-align: left;
}
.sys-aside .el-submenu .el-menu-item {
  text-align: left;
}
.sys-aside .el-menu-item{
  text-align: left
}
</style>

