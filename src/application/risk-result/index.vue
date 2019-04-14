<template>
    <div class="risk-result">
        <el-table
                :data="data"
                border
                height="500"
                :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column type="index" label="序号" align="center" width="60" fixed></el-table-column>
            <el-table-column prop="name" label="指标名称" align="center"></el-table-column>
            <el-table-column prop="green" label="" align="center" width="100">
                <template slot="header"  slot-scope="scope">
                    <div class="green">绿色预警</div>
                </template>
                <template slot-scope="scope">
                    <i class="el-icon-star-on" v-if="scope.row.green"></i>
                </template>
            </el-table-column>
            <el-table-column prop="blue" align="center" width="100">
                <template slot="header"  slot-scope="scope">
                    <div class="blue">蓝色预警</div>
                </template>
                <template slot-scope="scope">
                    <i class="el-icon-star-on" v-if="scope.row.blue"></i>
                </template>
            </el-table-column>
            <el-table-column prop="yellow" label="" align="center" width="100">
                <template slot="header"  slot-scope="scope">
                    <div class="yellow">黄色预警</div>
                </template>
                <template slot-scope="scope">
                    <i class="el-icon-star-on" v-if="scope.row.yellow"></i>
                </template>
            </el-table-column>
            <el-table-column prop="orange" label="" align="center" width="100">
                <template slot="header"  slot-scope="scope">
                    <div class="orange">橙色预警</div>
                </template>
                <template slot-scope="scope">
                    <i class="el-icon-star-on" v-if="scope.row.orange"></i>
                </template>
            </el-table-column>
            <el-table-column prop="red" label="" align="center" width="100">
                <template slot="header"  slot-scope="scope">
                    <div class="red">红色预警</div>
                </template>
                <template slot-scope="scope">
                    <i class="el-icon-star-on" v-if="scope.row.red"></i>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin: 30px;">
            <img src="./2.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        name: '降水方案不合理',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '排水沟集水井布置不合理',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '复合桩与高压旋喷桩接缝处止水效果差',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '预制复合桩施工质量不合格',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '支撑架设不及时及变形',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '钢支撑安装不符合要求',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '未按规定进行支护变形监测',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '坑边周围超载',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '土坡暴露时间太长',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '基坑开挖顺序不当',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '超标高开挖',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '开挖已接近承压含水层',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '挖土机械与支护体系发生碰撞',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '地下管线破坏',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '工程水文地质条件差',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '周边建（构）筑物发生沉降',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '作业气候条件差',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '防水层铺设不符合要求',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '复合立柱与顶纵梁连接强度不达标',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '主体钢筋施工质量不合格',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '高大侧墙模板安装拆除不当',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '脚手架运输及搭设拆除不当',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                ]
            }
        }
    }
</script>
<style>
    .risk-result{
        display: flex;
    }
    .green{
        color: #000;
        background: green;
    }
    .blue{
        color: #000;
        background: blue;
    }
    .yellow{
        color: #000;
        background: yellow;
    }
    .orange{
        color: #000;
        background: orange;
    }
    .red{
        color: #000;
        background: red;
    }
</style>