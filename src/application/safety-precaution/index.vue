<template>
  <div class="sys-safety-precaution">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="风险识别" name="first">
        <img src="./20.png" alt width="100%">
        <p class="title">风险部位：芯柱外包。</p>
        <p class="title">风险描述：芯柱外包混凝土部分不能与上部顶纵梁形成有效连接。</p>
        <p class="title">致险设计因素：顶纵梁与后期外包混凝土之间均仅靠混凝土的粘结力连接，无钢筋连接措施。可能后果：粘结强度无法满足设计要求引起开裂或塌陷。</p>
        <p class="title">处理措施：对顶纵梁及外包部分的钢筋重新优化布置，在顶纵梁现场浇筑时，在钢筋网加强点预先埋设套筒，埋设的位置与外包部分纵筋位置相对应，外包混凝土施工时，绑扎的纵筋锚入顶纵梁预埋套筒内，与其内部钢筋网机械连接形成统一整体，这样复合立柱与顶纵梁形成共同受力体，保证了结构强度，满足了设计及施工要求.</p>
      </el-tab-pane>
      <el-tab-pane label="应急预案查询" name="second">
       
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
