<template>
  <div>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="碰撞点展示" name="first">
        <img src="./13.jpg" alt="" width="100%">
      </el-tab-pane>
      <el-tab-pane label="查看碰撞报告" name="second">
        <img src="./14.png" alt width="100%">
        <p
          style="margin-top: 30px;text-align: justify"
        >混凝土支撑与侧墙牛腿发生间隙碰撞40处，车站22-44轴线混凝土支撑与侧墙牛腿交叉点处的侧墙钢筋绑扎困难且模板拆除时没有足够的工作空间；此外混凝土支撑下侧混凝土浇筑、振捣也具有一定难度，混凝土浇筑密实度难以保证。</p>
      </el-tab-pane>
      <el-tab-pane label="导出碰撞点报告" name="third"></el-tab-pane>
      <el-tab-pane label="深化设计方案" name="fourth">
        <ul style="font-size: 0">
          <li style="display: inline-block;width: 50%;padding: 10px"><img src="./15.png" alt="" width="100%"></li>
          <li style="display: inline-block;width: 50%;padding: 10px"><img src="./16.png" alt="" width="100%"></li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName2: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
