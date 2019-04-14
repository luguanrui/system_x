<template>
    <div class="sys-header">
        <h1 class="sys-header--title">
            <i class="logo">
                <img src="../../assets/timg.png" alt>
            </i>
            济南轨道交通演马庄西站信息化施工管控平台
        </h1>
        <div class="logout-btn">
            <el-button type="text" @click="handleLogout">退出登录</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
            handleLogout() {
                this.$router.push({path: '/login'})
            }
        }
    };
</script>