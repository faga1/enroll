<template>
    <div class="user">
        <div class="header">
            <router-link to="/user/search">面试进度查询</router-link>
            <router-link to="/user/delivery">岗位投递</router-link>
        </div>
    <router-view/>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
.user{
    min-height: 100vh;

    .header{
        display: flex;
        flex-direction: row-reverse;
        width:100%;
        height: 50px;
        line-height: 50px;
        background-color:whitesmoke;
        border: 1px solid #ccc;
        a{
            text-decoration: none;
            color: #000000;
            font-weight: 600;
            margin-right: 30px;
        }
    }
}
@media (min-width:0px){
        .header{font-size:12px;}
        
    }
    @media (min-width: 320px){
        .header{font-size:15px;}
    }
    @media (min-width: 340px){
        .header{font-size:16px;}
    }
    @media (min-width: 360px){
        .header{font-size:18px;}
    }
    @media (min-width: 380px){
        .header{font-size:20px;}
    }
    
    @media (min-width: 535px){
        .header{font-size:25px;}
    }
</style>