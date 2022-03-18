<template>
    <div class="deliver">
        <div class="title">为之工作室365天持续招新</div>
        <div class="stationItem"  v-for="(item,index) in stationList" :key="item.name">
            <div class="stationItem-header">
                <span>{{item.name}}</span>
                <el-button 
                    class="requireBtn"
                    @mouseenter="enter(index)"
                    @mouseleave="leave(index)"
                >岗位要求</el-button>
                <el-button @click="toResume(index)">投递</el-button>
            </div>
            <div 
            class="stationRequire" 
            :style="{maxHeight:item.visible?'200px':'0'}" 
            >
                <el-input type="textarea" 
                    disabled
                    class="requireContent"
                    :autosize="{minRows: 5,maxRows: 8}"
                    v-model="item.desc"></el-input>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { getStation } from '../../commons/request'

    const router = useRouter()
    interface station{
        name:string,
        desc:string,
        visible?:boolean
    }
    const stationList = ref<station[]>([])
    onMounted(() => {
        getStation().then((val) => {
            if (val.code === 1) stationList.value = val.data
        })
    })
    const enter = (index: number) => {
        stationList.value[index].visible = true
    }
    const leave = (index: number) => {
        stationList.value[index].visible = false
    }
    const toResume = (index:number) => {
        router.push(`/user/resume?station=${stationList.value[index].name}`)
    }
</script>
<style lang="less" scoped>
.deliver{
    min-height:calc(100vh - 50px);
    background-image: url('../../assets/welcome.png');
    background-size:100% 100%;
    .title{
        color: dodgerblue;
        text-align: center;
        margin:20px 0;
    }
    .stationItem{
        width:80%;
        margin: 0 auto;
        padding:20px;
        background-color:gainsboro;
        margin-bottom: 50px;
       .stationItem-header{
            display: flex;
            position: relative;
            font-weight: 600;
            .requireBtn{
                margin-left:auto;
                
            }
            
       }
       .stationRequire{
           transition: max-height .5s;
           overflow: hidden;
           .requireContent{
               padding-top:20px
           }
           .requireContent /deep/ .el-textarea__inner {
                color: #000000 !important;
                background-color:#ffffff;
            }
       }
    }
}
@media (min-width:0px){
        .title{font-size:12px;}
        
    }
    @media (min-width: 320px){
        .title{font-size:15px;}
    }
    @media (min-width: 340px){
        .title{font-size:16px;}
    }
    @media (min-width: 360px){
        .title{font-size:18px;}
    }
    @media (min-width: 380px){
        .title{font-size:20px;}
    }
    
    @media (min-width: 535px){
        .title{font-size:25px;}
        .stationItem{width: 500px !important;}
    }
</style>