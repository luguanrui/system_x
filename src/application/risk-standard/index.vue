<template>
    <div class="risk-standard">
        <div>
            <div style="text-align: left;margin-bottom: 20px"><h4 class="title">演马庄西站安全风险预警框架</h4></div>
            <img src="./1.jpg" alt="">
        </div>
        <div>
            <div style="text-align: left;margin: 20px 0 20px 0"><h4 class="title">演马庄西站安全风险预警标准</h4></div>
            <el-table
                    :data="data"
                    style="width: 100%"
                    border
                    :default-sort="{prop: 'date', order: 'descending'}"
                    :header-cell-style="_headerCellStyle"
            >
                <el-table-column type="index" label="等级" align="center" width="80"></el-table-column>
                <el-table-column prop="desc" label="描述" align="center"></el-table-column>
                <el-table-column prop="score" label="分值" align="center"></el-table-column>
                <el-table-column prop="signal" label="风险报警信号" align="center"></el-table-column>
                <el-table-column prop="color" label="信号颜色" align="center">
                    <template slot-scope="scope">
                        <div style="display: inline-block;width: 100px;height: 30px" :class="[scope.row.color]"></div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        desc: '风险极低，可控',
                        score: '[90,100]',
                        signal: '风险忽略，无警',
                        color: 'green'
                    },
                    {
                        desc: '风险一般，可接受',
                        score: '[80,89]',
                        signal: '风险关注，轻警',
                        color: 'blue'
                    },
                    {
                        desc: '风险较大，可预防接受',
                        score: '[75,79]',
                        signal: '风险防范，中警',
                        color: 'yellow'
                    },
                    {
                        desc: '风险重大，难以接受',
                        score: '[70,74]',
                        signal: '风险控制，重警',
                        color: 'orange'
                    },
                    {
                        desc: '风险极高，无法接受',
                        score: '[0,70]',
                        signal: '风险控制，巨警',
                        color: 'red'
                    },
                ]
            }
        },
        methods: {
            // :header-cell-style="_headerCellStyle"
            _headerCellStyle() {
                return {
                    backgroundColor: '#409EFF',
                    color: '#fff'
                }
            },
        }
    }
</script>
<style>
    .green{
        background: green;
    }
    .blue{
        background: blue;
    }
    .yellow{
        background: yellow;
    }
    .orange{
        background: orange;
    }
    .red{
        background: red;
    }
</style>

