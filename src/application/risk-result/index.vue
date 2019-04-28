<template>
    <div class="risk-result">
        <div>
    <el-table
                :data="data"
                border
                height="500"
                :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column type="index" label="序号" align="center" width="60" fixed></el-table-column>
            <el-table-column prop="name" label="指标名称" align="center" min-width="100px"></el-table-column>
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
        </div>
        <div style="margin: 0 0 0 30px;">
            <img src="./2.jpg" alt="" width="100%" style="display: inline-block">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        name: '降水方案合理性',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '降水井施工质量',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '预制复合桩与高压旋喷桩止水效果',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '预制复合桩施工质量',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '支撑架设情况',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '钢支撑安装情况',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '支护变形监测情况',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '基坑周围荷载',
                        green: false,
                        blue: false,
                        yellow: false,
                        orange: true,
                        red: false,
                    },
                    {
                        name: '土坡暴露时间',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '基坑开挖顺序',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '开挖已接近承压含水层',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '超标高开挖',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '挖土机械碰撞情况',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '地下管线破坏情况',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '工程水文地质条件',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '周边建（构）筑物沉降',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '作业气候条件',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '防水层铺设情况',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '复合立柱与顶纵梁连接强度',
                        green: false,
                        blue: false,
                        yellow: true,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '主体钢筋施工质量',
                        green: true,
                        blue: false,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '高大侧墙模板安装拆除情况',
                        green: false,
                        blue: true,
                        yellow: false,
                        orange: false,
                        red: false,
                    },
                    {
                        name: '脚手架运输及搭设拆除情况',
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
        align-items: start;
        justify-content: center;
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