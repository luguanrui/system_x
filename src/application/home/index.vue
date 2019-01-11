<template>
  <div class="sys-container">
    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <el-container style="margin-top: 60px">
        <el-aside class="sys-container-aside" width="200px">
          <v-aside></v-aside>
        </el-aside>
        <el-main class="sys-container-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vHeader from "@/components/header/index.vue";
import vAside from "@/components/aside/index.vue";
export default {
  components: { vHeader, vAside }
};
</script>

