<template>
<div>
    <el-table
            :data="data"
            style="width: 100%"
            border
            :default-sort="{prop: 'date', order: 'descending'}"
            :header-cell-style="_headerCellStyle"
    >
        <el-table-column type="index" label="序号" align="center" width="80"></el-table-column>
        <el-table-column prop="name" label="指标名称" align="center"></el-table-column>
        <el-table-column prop="measure" label="风险应对措施" align="left"></el-table-column>
    </el-table>
</div>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    {
                        name: '坑边周围荷载',
                        measure: '基坑边坡附近严禁堆积荷载；在距基坑边缘一定距离处，设置安全防护栏并架设密目网。高度不低于 1.2m，并稳固可靠。对于基坑边长期有重型设备作业，设置地面加固措施与防护措施，遇到不可避免的附加荷载时，将稳定性验算计入附加荷载的影响，加强地表沉降监测 1.2m，并稳固可靠。'
                    },
                    {
                        name: '开挖已接近承压含水层',
                        measure: '合理计算降水深度，严格按照设计要求的降水深度设置降水井点；在基坑开挖过程中，对每个观测井的水位进行仔细和认真的观测，出具观测结果并做基本的分析；为防止井点坏损，布设一定数量的预备井点'
                    },
                    {
                        name: '超标高开挖',
                        measure: '开挖过程中加强监测，防止超挖。每层开挖至支撑底部以下 0.5m 为宜；土方开挖至坑底 0.3m 时，改用人工开挖的方法，减小对基底土层的干扰。'
                    },
                    {
                        name: '地下管线破坏情况',
                        measure: '在基坑开挖前，应对施工场地内的管线进行开挖探槽，查明是否存在不明管线。针对基坑施工影响范围内的管线，制定合理的改迁、悬吊保护及加固方案。基坑开挖的过程中，加强对管线的监测。场地出入口处道路进行必要的硬化处理，防止重载运输车辆的反复通过损坏地下管线'
                    },
                    {
                        name: '复合立柱与顶纵梁强度',
                        measure: '顶纵梁及外包部分的钢筋重新优化布置，在顶纵梁现场浇筑时，在钢筋网加强点预先埋设套筒，埋设的位置与外包部分纵筋位置一一对应，外包混凝土施工时，绑扎的纵筋锚入顶纵梁预埋套筒内，与其内部钢筋网机械连接形成统一整体，从而确保了两者间的有效连接。'
                    },
                    {
                        name: '周边建（构）筑物沉降',
                        measure: '对地基土体进行加固，使得被加固土体在平面和深度范围内形成一个整体，从而减小地基的沉降。'
                    },
                    {
                        name: '基坑开挖顺序',
                        measure: '基坑开挖应分层进行，每层开挖深度要符合规范；②基坑开挖在同一层内开挖时，应采用先分段、再分块的方式。'
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
