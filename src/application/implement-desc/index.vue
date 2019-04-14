<template>
    <div class="sys-implement-desc">
        <div class="sys-implement-desc-button">
            <div class="sys-implement-desc-button-group">
                <el-select v-model="value" placeholder="请选择" :style="style">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :style="style">
                    </el-option>
                </el-select>
                <el-date-picker
                        v-model="dateOne"
                        type="date"
                        placeholder="选择日期"
                        :style="style">
                </el-date-picker>
                -
                <el-date-picker
                        v-model="dateTwo"
                        type="date"
                        placeholder="选择日期"
                        :style="style">
                </el-date-picker>
                <el-input placeholder="请输入文件名" :style="style"></el-input>
                <el-button icon="el-icon-search">搜索</el-button>
            </div>
            <div class="sys-implement-desc-button-group" style="text-align: right">
                <el-button>编辑</el-button>
                <el-button type="primary">上传文件</el-button>
            </div>
        </div>
        <el-table
                :data="data"
                style="width: 100%"
                border
                :default-sort="{prop: 'date', order: 'descending'}"
        >
            <el-table-column prop="filename" label="文件名" align="left"></el-table-column>
            <el-table-column prop="builder" label="创建人" width="180" align="center"></el-table-column>
            <el-table-column prop="uploadTime" label="上传时间" align="center"></el-table-column>
            <el-table-column prop="size" label="文件大小" width="100" align="center"></el-table-column>
            <el-table-column prop="label" label="标签" width="200" align="center"></el-table-column>
            <el-table-column prop="common" label="常用资料" width="200" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-star-on"></i>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                style: {
                    width: '140px'
                },
                options: [
                    {
                        value: 0,
                        label: '不限上传人'
                    },
                    {
                        value: 1,
                        label: '限制上传人'
                    }
                ],
                value: '不限上传人',
                dateOne: '2018-01-17',
                dateTwo: '2018-10-24',
                data: [
                    {
                        filename: '深基坑大尺寸预制叠合庄施工技术交底',
                        builder: '王龙',
                        uploadTime: '2018-1-25 11:01:28',
                        size: '3M',
                        label: '技术交底',
                        common: ''
                    },
                    {
                        filename: '复合立柱施工技术交底',
                        builder: '王龙',
                        uploadTime: '2018-1-25 10:50:39',
                        size: '3M',
                        label: '技术交底',
                        common: ''
                    },
                    {
                        filename: '地铁车站叠合顶板施工工法技术交底',
                        builder: '王龙',
                        uploadTime: '2018-1-25 10:46:21',
                        size: '3M',
                        label: '技术交底',
                        common: ''
                    },
                    {
                        filename: '演马庄西站清单',
                        builder: '李强',
                        uploadTime: '2018-1-21 14:33:20',
                        size: '1M',
                        label: '材料',
                        common: ''
                    },
                    {
                        filename: '工筹分解表',
                        builder: '李强',
                        uploadTime: '2018-1-21 14:19:20',
                        size: '36K',
                        label: '进度',
                        common: ''
                    },
                    {
                        filename: '施工作业标准化手册',
                        builder: '梁译汉',
                        uploadTime: '2018-1-21 09:39:21',
                        size: '2M',
                        label: '规范',
                        common: ''
                    },
                    {
                        filename: '2018管线迁改计划',
                        builder: '梁译汉',
                        uploadTime: '2018-1-20 14:32:20',
                        size: '2M',
                        label: '进度',
                        common: ''
                    },
                    {
                        filename: '主体结构风亭及出入口结构横剖面图',
                        builder: '梁译汉',
                        uploadTime: '2018-1-20 14:32:20',
                        size: '350K',
                        label: '规范',
                        common: ''
                    },
                    {
                        filename: 'GB50911-2013城市轨道交通工程监测技术规范',
                        builder: '田飞',
                        uploadTime: '2018-1-2014:29:29',
                        size: '902K',
                        label: '规范',
                        common: ''
                    },
                ]
            };
        }
    };
</script>
