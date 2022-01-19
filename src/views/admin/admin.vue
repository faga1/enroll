<template>
    <el-container>
      <el-header>招新管理后台</el-header>
      <el-container>
        <el-aside width="200px">
            <el-menu router>
                <el-menu-item index="1" route="/admin/data">招新数据</el-menu-item>
                <el-menu-item index="2" route="/admin/resumeMag">简历管理</el-menu-item>
                <el-menu-item index="3" route="/admin/interviewerMag">面试官管理</el-menu-item>
                <el-menu-item index="4" route="/admin/changeInterview">面试题/面评更改</el-menu-item>
                <el-menu-item index="5" route="/admin/projectMag">项目管理</el-menu-item>
            </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
</template>
<script setup lang="ts">
</script>
<style lang="less" scoped>
.el-container{
    height: 100vh;
    .el-header{
        font-size: 40px;
        font-weight: 600;
        background-color: #b3c0d1;
    }
    .el-aside{
        background-color: rgb(242,242,242);
    }
}
</style>