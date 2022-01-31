<template>
    <div class="deliver">
        <div class="title">为之工作室365天持续招新</div>
        <div class="stationItem"  v-for="(item,index) in stationList" :key="item.stationName">
            <div class="stationItem-header">
                <span>{{item.stationName}}</span>
                <el-button 
                    @mouseenter="enter(index)"
                    @mouseleave="leave(index)"
                >岗位要求</el-button>
                <el-button @click="toResume(index)">投递</el-button>
            </div>
            <div class="stationRequire" :style="{maxHeight:item.visible?'200px':'0'}" >
                <div class="requireContent">{{item.stationRequire}}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { reactive, ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    interface station{
        stationName:string,
        stationRequire:string,
        visible?:boolean,
    }
    const stationList:station[] = reactive([
        {
            stationName: '产品',
            stationRequire: '会产品',
        },
        {
            stationName: '运营',
            stationRequire: '会运营',
        },
        {
            stationName: '前端',
            stationRequire: '会前端',
        },
        {
            stationName: '后端',
            stationRequire: '会后端',
        } 
    ])
    const enter = (index: number) => {
        stationList[index].visible = true
    }
    const leave = (index: number) => {
        stationList[index].visible = false
    }
    const toResume = (index:number) => {
        router.push(`/user/resume?station=${stationList[index].stationName}`)
    }
</script>
<style lang="less" scoped>
.deliver{
    min-height:calc(100vh - 50px);
    background-image: url('../../assets/welcome.png');
    background-size:100% 100%;
    .title{
        font-size: 28px;
        color: dodgerblue;
        text-align: center;
    }
    .stationItem{
        margin: 0 auto;
        width:500px;
        padding:20px;
        background-color:gainsboro;
        margin-bottom: 50px;
       .stationItem-header{
        
        color:#ffffff;
        position: relative;
        span{
            margin-right: 150px;
        }
        
       }
       .stationRequire{
           transition: max-height .5s;
           overflow: hidden;
           .requireContent{
               padding:30px
           }
       }
    }
}

</style>