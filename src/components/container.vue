<template>
    <div class="container">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div> 
        <div class='footer'>
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
.container{
    width: 80%;
    margin:100px auto;
    background-color: rgb(242,242,242);
    .header{
        width: 95%;
        height: 60px;
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
    .content{
        width: 95%;
        margin:0 auto; 
        padding:30px;
        border-bottom:1px solid #000000;
        border-top:1px solid #000000;
    }
    .footer{
        display: flex;
        flex-direction: row-reverse;
        width: 95%;
        margin:0 auto;
        padding:10px 0;
        .el-pagination{
            margin:10px 30px;
        }
    }
}
</style>