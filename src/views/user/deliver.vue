<template>
    <div>
        <div class="title">为之工作室365天持续招新</div>
        <div class="postItem"  v-for="(item,index) in postList" :key="item.postName">
            <div class="postItem-header">
                <span>{{item.postName}}</span>
                <el-button 
                    @mouseenter="enter(index)"
                    @mouseleave="leave(index)"
                >岗位要求</el-button>
                <el-button @click="toResume">投递</el-button>
            </div>
            <div class="postRequire" v-show="item.visible">{{item.postRequire}}</div>
        </div>
    </div>
</template>
<script setup lang="ts">import { reactive } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    interface post{
        postName:string,
        postRequire:string,
        visible?:boolean
    }
    const postList:post[] = reactive([
        {
            postName: '产品',
            postRequire: '会产品',
        },
        {
            postName: '运营',
            postRequire: '会运营'
        },
        {
            postName: '前端',
            postRequire: '会前端'
        },
        {
            postName: '后端',
            postRequire: '会后端'
        } 
    ])
    const enter = (index: number) => {
        postList[index].visible = true
    }
    const leave = (index: number) => {
        postList[index].visible = false
    }
    const toResume = () => {
        router.push('/resume')
    }
</script>
<style lang="less" scoped>
    .title{
        font-size: 28px;
        color: dodgerblue;
        text-align: center;
    }
    .postItem{
        margin: 0 auto;
        width:500px;
        padding:20px;
        background-color:gainsboro;
        margin-bottom: 50px;
       .postItem-header{
        
        color:#ffffff;
        position: relative;
        span{
            margin-right: 150px;
        }
        
       }
       .postRequire{
           margin-top: 30px;
       }
    }
</style>