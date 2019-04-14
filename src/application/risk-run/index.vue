<template>
    <div class="risk-run">
        <el-table
                :data="data"
                style="width: 100%"
                :header-cell-style="_headerCellStyle"
                :span-method="objectSpanMethod"
        >
            <el-table-column align="center" width="80">
                <template slot-scope="scope">演马庄西站施工安全风险预警体系</template>
            </el-table-column>
            <el-table-column prop="firstTarget" label="一级指标" align="center"></el-table-column>
            <el-table-column prop="weightOne" label="权重" align="center">
                <template slot-scope="scope">
                        <el-input v-model="scope.row.weightOne" size="small"></el-input>
                </template>
            </el-table-column>
            <el-table-column prop="secondTarget" label="二级指标" align="center" width="260">
                <template slot-scope="scope">
                    <div v-for="item in scope.row.secondTarget" class="border-bottom" style="text-align: left">
                        {{item}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="weightTwo" label="权重" align="center">
                <template slot-scope="scope">
                    <div v-for="item in scope.row.weightTwo" class="border-bottom">
                        <el-input :value="item" size="small"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="low" label="风险极低" align="center">
                <template slot-scope="scope">
                    <div v-for="item in scope.row.low" class="border-bottom">
                        <el-input :value="item" size="small"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="common" label="风险一般" align="center">
                <template slot-scope="scope">
                    <div v-for="item in scope.row.common" class="border-bottom">
                        <el-input :value="item" size="small"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="lower" label="风险较大" align="center">
                <template slot-scope="scope">
                    <div v-for="item in scope.row.lower" class="border-bottom">
                        <el-input :value="item" size="small"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="high" label="风险重大" align="center">
                <template slot-scope="scope">
                    <div v-for="item in scope.row.high" class="border-bottom">
                        <el-input :value="item" size="small"></el-input>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="higher" label="风险极高" align="center">
                <template slot-scope="scope">
                    <div v-for="item in scope.row.higher" class="border-bottom">
                        <el-input :value="item" size="small"></el-input>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin: 30px 0">
            <el-button>保存</el-button>
            <el-button>计算</el-button>
            <el-button>修改</el-button>
            <el-button>预警结果</el-button>
        </div>
        <div>
            <ul>
                <li>综合评价值= <el-input value="" style="width: 200px"></el-input></li>
                <li>
                    <el-radio-group v-model="radio">
                        <li style="margin: 10px 0"><el-radio :label="0">风险极低</el-radio></li>
                        <li style="margin: 10px 0"><el-radio :label="1">风险一般</el-radio></li>
                        <li style="margin: 10px 0"><el-radio :label="2">风险较大</el-radio></li>
                        <li style="margin: 10px 0"><el-radio :label="3">风险重大</el-radio></li>
                        <li style="margin: 10px 0"><el-radio :label="4">风险极高</el-radio></li>
                    </el-radio-group>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: 0,
                data: [
                    {
                        firstTarget: '降排水',
                        weightOne: 0.2395,
                        secondTarget: [
                            '降水方案不合理',
                            '排水沟集水井布置不合理',
                            '复合桩与高压旋喷桩接缝处止水效果差'
                        ],
                        weightTwo: [0.4425, 0.3092, 0.2483],
                        low: [0.2, 0.2, 0.1],
                        common: [0.5, 0.4, 0.2],
                        lower: [0.1, 0.1, 0.5],
                        high: [0.1, 0.2, 0.1],
                        higher: [0.1, 0.1, 0.1]
                    },
                    {
                        firstTarget: '支护结构',
                        weightOne: 0.2282,
                        secondTarget: [
                            '预制复合桩施工质量不合格',
                            '支撑架设不及时及变形',
                            '钢支撑安装不符合要求',
                            '未按规定进行支护变形监测'
                        ],
                        weightTwo: [0.3478, 0.2069, 0.2132, 0.2321],
                        low: [0.3, 0.2, 0.5, 0.4],
                        common: [0.3, 0.3, 0.2, 0.3],
                        lower: [0.2, 0.2, 0.2, 0.1],
                        high: [0.1, 0.2, 0, 0.1],
                        higher: [0.1, 0.1, 0.1, 0.]
                    },

                    {
                        firstTarget: '土方开挖',
                        weightOne: 0.1975,
                        secondTarget: [
                            '坑边周围超载',
                            '土坡暴露时间太长',
                            '基坑开挖顺序不当',
                            '超标高开挖',
                            '开挖已接近承压含水层',
                            '挖土机械与支护体系发生碰撞'
                        ],
                        weightTwo: [0.1932, 0.1625, 0.1492, 0.1653, 0.2042, 0.1256],
                        low: [0.3, 0.2, 0.5, 0.3, 0.3, 0.2],
                        common: [0.2, 0.4, 0.3, 0.4, 0.1, 0.3],
                        lower: [0.4, 0.2, 0.1, 0.2, 0.5, 0.],
                        high: [0, 0.1, 0.1, 0, 0.1, 0.],
                        higher: [0.1, 0.1, 0, 0.1, 0, 0.]
                    },
                    {
                        firstTarget: '周边环境',
                        weightOne: 0.1521,
                        secondTarget: [
                            '地下管线破坏',
                            '工程水文地质条件差 ',
                            '周边建（构）筑物发生沉降',
                            '作业气候条件差'
                        ],
                        weightTwo: [0.2291, 0.3103, 0.2415, 0.2191],
                        low: [0.2, 0.4, 0.3, 0.],
                        common: [0.2, 0.3, 0.5, 0.3],
                        lower: [0.3, 0.3, 0.2, 0.],
                        high: [0.2, 0, 0, 0.1],
                        higher: [0.1, 0, 0, 0]
                    },
                    {
                        firstTarget: '主体结构',
                        weightOne: 0.1827,
                        secondTarget: [
                            '防水层铺设不符合要求',
                            '复合立柱与顶纵梁连接强度不达标',
                            '主体钢筋施工质量不合格',
                            '高大侧墙模板安装拆除不当',
                            '脚手架运输及搭设拆除不当'
                        ],
                        weightTwo: [0.1912, 0.2673, 0.2128, 0.1546, 0.1741],
                        low: [0.3, 0.2, 0.5, 0.3, 0.3],
                        common: [0.4, 0.2, 0.4, 0.4, 0.4],
                        lower: [0.2, 0.5, 0.1, 0.1, 0.2],
                        high: [0.1, 0.1, 0, 0.1, 0.1],
                        higher: [0, 0, 0, 0.1, 0]
                    },
                ]
            }
        },
        methods: {
            _headerCellStyle() {
                return {
                    color: '#000',
                    padding: '12px 0',
                    background: '#409EFF'
                }
            },
            objectSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0) {
                    if (rowIndex === 0) {
                        return {
                            rowspan: 5,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .risk-run .border-bottom {
        height: 40px;
        line-height: 40px;
        padding: 1px 5px;
        /*border-bottom: 1px solid #ebeef5;*/
    }

    .risk-run .border-bottom:last-child {
        border: none;
    }

    .risk-run .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
        padding: 0;
    }

    .risk-run .el-table .cell, .el-table th div {
        padding: 0;
    }

    .risk-run .el-table td, .el-table th {
        padding: 0;
    }
    .risk-run .el-table--enable-row-transition .el-table__body td{
        background: #eee;
    }
    .risk-run .el-table td, .el-table th.is-leaf{
        border: none !important;
    }
    .el-table th, .el-table tr{
        background-color: #eee;
    }
</style>
