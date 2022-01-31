<template>
    <el-container>
      <el-header>招新管理后台</el-header>
      <el-container>
        <el-aside width="20%" style="max-width: 200px!important;min-width: 100px;">
            <el-menu router>
                <el-menu-item index="1" route="/admin/data">招新数据</el-menu-item>
                <el-menu-item index="2" route="/admin/resumeMag">简历管理</el-menu-item>
                <el-menu-item index="3" route="/admin/interviewerMag">面试官管理</el-menu-item>
                <el-sub-menu index="4">
                    <template #title>
                        面试题/面评更改
                    </template>
                    <el-menu-item index="4-1" route="/admin/changeInterview">
                        面评修改
                    </el-menu-item>
                    <el-menu-item index="4-2" route="/admin/resumeTemplate">
                        简历模板修改
                    </el-menu-item>
                </el-sub-menu>
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