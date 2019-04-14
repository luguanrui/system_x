<template>
    <div class="sys-crash-detection">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <!--<el-tab-pane label="碰撞点展示" name="first">-->
            <!--<img src="./13.jpg" alt="" width="100%">-->
            <!--</el-tab-pane>-->
            <el-tab-pane label="查看碰撞报告" name="second">
                <h5 style="text-align: left;margin-bottom: 20px">碰撞处理详细信息列表（其中：新建碰撞：0；活动碰撞：40；已审阅碰撞：0；已核准碰撞：0；已解决碰撞：0）</h5>
                <div style="text-align: left;margin-bottom: 20px">
                    状态：
                    <el-select v-model="value" placeholder="请选择" :style="style">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :style="style">
                        </el-option>
                    </el-select>
                    名称：
                    <el-input placeholder="请输入文件名" :style="style"></el-input>
                    <el-button icon="el-icon-search">搜索</el-button>
                </div>
                <el-table
                        :data="data"
                        style="width: 100%"
                        border
                        :default-sort="{prop: 'date', order: 'descending'}"
                >
                    <el-table-column type="index" label="序号" align="center" width="80"></el-table-column>
                    <el-table-column prop="name" label="名称" align="center"></el-table-column>
                    <el-table-column prop="dot" label="轴网交点" align="center"></el-table-column>
                    <el-table-column prop="introduce" label="说明" align="center"></el-table-column>
                    <el-table-column prop="status" label="状态" align="center"></el-table-column>
                    <el-table-column prop="time" label="入库时间" align="center"></el-table-column>
                    <el-table-column prop="show" label="碰撞展示" align="center">
                        <template slot-scope="scope">
                            <img :src="scope.row.show" alt="" width="100px" height="100px">
                        </template>
                    </el-table-column>
                </el-table>

            </el-tab-pane>
            <el-tab-pane label="导出碰撞点报告" name="third"></el-tab-pane>
            <el-tab-pane label="深化设计方案" name="fourth">
                <ul style="font-size: 0">
                    <li style="display: inline-block;width: 50%;padding: 10px"><img src="./15.png" alt="" width="100%">
                    </li>
                    <li style="display: inline-block;width: 50%;padding: 10px"><img src="./16.png" alt="" width="100%">
                    </li>
                </ul>
                <p style="text-align: justify;line-height: 34px">设计变更为侧墙在混凝土支撑下面位置1.0米范围内取消牛腿设计，车站22-44轴线混凝土支撑与侧墙交叉点处在施工混凝土支撑时预埋侧墙竖向钢筋连接器，侧墙竖向钢筋设置焊接接头；混凝土支撑下侧墙混凝土浇筑参照盖挖法施工的方式，采取预留注浆条件。</p>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName2: "second",
                options: [
                    {
                        label: '新建',
                        value: 0
                    },
                    {
                        label: '活动',
                        value: 1
                    },
                    {
                        label: '已审阅',
                        value: 2
                    },
                    {
                        label: '已核准',
                        value: 3
                    },
                    {
                        label: '已解决',
                        value: 4
                    },
                ],
                value: '',
                style: {
                    width: '140px'
                },
                data: [
                    {
                        name: '碰撞点1',
                        dot: 'E（-150）—24（-500）',
                        introduce: '间隙碰撞',
                        status: '新建',
                        time: '2018/12/5 19:00:48',
                        show: require('./6.jpg')
                    },
                    {
                        name: '碰撞点2',
                        dot: 'E（-150）—23（-499）',
                        introduce: '间隙碰撞',
                        status: '新建',
                        time: '2018/12/5 19:00:48',
                        show: require('./7.jpg')
                    },
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>
