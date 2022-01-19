<template>
    <div>
        <span>筛选条件</span>
        <el-select v-model="post">
            <el-option 
            v-for="item in postList" 
            :key='item.name' 
            :label="item.name" 
            :value="item.name"></el-option>
        </el-select>
    </div>
    <el-row>
        <el-col :span="12">
            <div class="title">投递数据</div>
            <el-table :data="deliveryData" border>
                <el-table-column prop="post" label="岗位"></el-table-column>
                <el-table-column prop="front" label="前端"></el-table-column>
                <el-table-column prop="pm" label="产品"></el-table-column>
                <el-table-column prop="end" label="后端"></el-table-column>
                <el-table-column prop="operate" label="运营"></el-table-column>
                <el-table-column prop="UI" label="UI"></el-table-column>
                <el-table-column prop="total" label="总数"></el-table-column>
            </el-table>
        </el-col>
        <el-col :span="10" style="margin-left:auto">
            <div class="title">详情</div>
            <el-table :data="dataDetail" border>
                <el-table-column prop="post" label="岗位"></el-table-column>
                <el-table-column prop="passed" label="通过"></el-table-column>
                <el-table-column prop="noPass" label="不通过"></el-table-column>
                <el-table-column prop="passRate" label="通过率"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <div style="width:60%">
        <div class="title">来源渠道</div>
        <el-table :data="wayDetail" border>
                <el-table-column prop="from" label="渠道"></el-table-column>
                <el-table-column prop="sumCamp" label="夏令营"></el-table-column>
                <el-table-column prop="winCamp" label="冬令营"></el-table-column>
                <el-table-column prop="poster" label="海报"></el-table-column>
                <el-table-column prop="other" label="其他"></el-table-column>
            </el-table>
    </div>
    <div>
        <div>内推人</div>
        <div class="container">
            <el-table :data="putinData" border>
                <el-table-column type="index" label="序号" width="100px"></el-table-column>
                <el-table-column prop="putin" label="内推人"></el-table-column>
                <el-table-column prop="number" label="数量"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const post = ref('全部')
const postList = reactive([
    { name: '前端' },
    { name: '后端' },
    { name: '产品' },
    { name: '运营' }
])
const deliveryData = reactive([
  { post: '人数', front: '2', pm: 5, end: 2, operate: 3, UI: 7, total: 32 },
  { post: '占比', front: 0.4, pm: 0.2, end: 0.2, operate: 0.1, UI: 0.3, total: 1 },
])
const dataDetail = reactive([
    { post: '前端', passed: 6, noPass: 3, passRate: 0.6 },
    { post: '后端', passed: 6, noPass: 3, passRate: 0.6 },
    { post: '产品', passed: 6, noPass: 3, passRate: 0.6 },
    { post: '运营', passed: 6, noPass: 3, passRate: 0.6 },
    { post: 'UI', passed: 6, noPass: 3, passRate: 0.6 },
])
const wayDetail = reactive([
    { from: '人数', sumCamp: 43, winCamp: 23, poster: 23, other: 23 },
    { from: '占比', sumCamp: 0.4, winCamp: 0.3, poster: 0.2, other: 0.1 }
])
const putinData = reactive([
    { putin: '刘钊辰', number: 14 },
    { putin: '刘朝阳', number: 14 },
    { putin: '金熙', number: 14 },
    { putin: '徐宇轲', number: 14 }

])
</script>
<style lang="less" scoped>
</style>