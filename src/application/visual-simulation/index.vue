<template>
  <div>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="可视化模拟" name="first">
        <video controls="controls" width="500" height="500">
        <source src="http://www.runoob.com/try/demo_source/mov_bbb.mp4">
        </video>
      </el-tab-pane>
      <el-tab-pane label="二维码查看" name="second">
        <img src="./12.png" alt width="500">
        <img src="./11.png" alt width="500">
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
