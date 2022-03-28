<template>
    <div class="container">
        <div class="header">
            <el-select v-model="mode" @change="selStation" >
                <el-option label="未读" :value="1"></el-option>
                <el-option label="已读" :value="2"></el-option>
                <el-option label="已处理" :value="3"></el-option>
            </el-select>
        </div>
        <div class="userList" >
            <el-empty :image-size="200" v-if="!userList.length" />
            <div class="userItem" v-for="item in userList" :key="item.resumeId">
                <div class="show">
                    <div class="info-container" :style="returnColor(item.resumeId)">
                        <div class="info">
                         <div class="text info-box">姓名: {{item.name}}</div>
                         <div class="text info-box">年级: {{item.grade}}</div>
                            <div class="text info-box">性别: {{item.gender==1?"男":"女"}}</div>
                            <div class="text info-box">专业: {{item.major}}</div>
                               <div class="text info-box">电话:{{item.phoneNumber}}</div>
                               <div v-if="item.fileURL" class="text info-box">作品: <a v-if="item.fileURL" :href="item.fileURL">点击查看</a></div>
                        </div>
                         <div v-if="item.visible"  class="not_has_more">
                            简历详情
                        </div>
                      <div v-if="item.visible" class="text info-box " style> {{item.practice}}</div>
                       <div class="itemTools">
                                  <div @click="()=>{item.visible=!item.visible}">
                            {{!item.visible?'展开简历':'收起简历'}}
                        </div>
                        <router-link :to="{ path:'/change', query: { id: item.resumeId, station: item.station }}">
                            更换面试官
                        </router-link>
                 
                    <router-link 
                    class="read"
                    :to="{path:'/fill',query:{id:item.resumeId,name:item.name,grade:item.grade,major:item.major}}"
                    :style="{
                        color:mode===1?'8896b3':'#ccc',
                        cursor:mode===1?'pointer':'auto'
                    }">填写面评</router-link>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        <el-pagination 
            layout="prev, pager, next" 
            :page-size="size"
            :total="total" 
            @current-change="pageChange"></el-pagination>
    </div>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getResume, readResume } from '@/commons/request/interviewer';
    import { useRouter } from 'vue-router';

    const router = useRouter()
    const mode = ref<number>(1)
    const userList = ref([])
    const current = ref<number>(1)
    const size = ref<number>(5)
    const total = ref(5)
    function getResumeList(page:number = current.value, station = mode.value){
        getResume(page, size.value, station).then((val) => {
            if (val.code === 1){
                userList.value = val.data.records
                total.value = parseInt(val.data.total, 10)
            }
        })
    }
    onMounted(() => {
        getResumeList()
    })
    function read(id: string):void{
        if (mode.value === 1) readResume(id)
    }
    function pageChange(page:number){
        current.value = page;
        getResumeList(page)
    }
    function returnColor(num1: number){
       let num = num1 % 10
       num /= 10
       
        if (num < 0.1){
 return "background: -webkit-linear-gradient(left, #a18cd1 0%, #fbc2eb 100%);"
        } if (num < 0.2){
             return "background: -webkit-linear-gradient(left, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);"
        } if (num < 0.3){
             return "background: -webkit-linear-gradient(left, #30cfd0 0%, #330867 100%);"
        } if (num < 0.4){
             return "background: -webkit-linear-gradient(left,  #e9defa 0%, #fbfcdb 100%);"
        }
         if (num < 0.5){
             return "background: -webkit-linear-gradient(left,   #88d3ce 0%, #6e45e2 100%);"
        }
         if (num < 0.6){
             return "background: -webkit-linear-gradient(left,  #88d3ce 0%, rgba(0, 0, 0, 0.30) 100%);"
        }
         if (num < 0.7){
             return "background: -webkit-linear-gradient(left,  #92fe9d 0%, #00c9ff 100%);"
        }
         if (num < 0.8){
             return "background: -webkit-linear-gradient(left,  #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);"
        } if (num < 0.9){
             return "background: -webkit-linear-gradient(left,  #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);"
        }

            return "background: -webkit-linear-gradient(left, #84fab0 0%, #8fd3f4 100%);"
    }
    function selStation(val:number){
        console.log(userList.value);
        mode.value = val
        getResumeList(undefined, val) 
    }
</script>
<style lang="less" scoped>
    .header{
        height: 50px;
        .el-select{
            //margin-right: 100px;
            float: left;
            
        }
    /deep/.el-input{
            //float: left;
            width: 200px;
            margin:0 0 !important;
        }

    }
.not_has_more {
    text-align: center;
    position: relative;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ccc;
    line-height: 33px;
    &::after,
    &::before {
      position: absolute;
      width: 37px;
      height: 0.5px;
      background: #fff;
      content: '';
      top: 15px;
    }
    &::after {
      left: 28%;
    }
    &::before {
      right: 28%;
    }
  }
.info{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    .info-box{
        width: 50%;
        height: 20px;
        margin-bottom:10px;
    }

}

    .container{
        width:80%;
        min-height: 100vh;
        padding-top: 20px;
        margin:0 auto;
       
        .userItem{

            .show{
                display: flex;
                .info-container{
                    width: 100%;
                   min-height: 100px;
                    border-radius: 5px;
                    margin-bottom:16px;
                    padding: 16px;
                   // eslint-disable-next-line no-irregular-whitespace
                    transition:all .8s ease-in-out;
                }
                .itemInfo{
                    display: flex;
                    div{
                        margin-right: 30px;
                        
                    }
                }
                .text{
                    font-size: 14px;
                    color: #fff;
                }
                .itemTools{
                    margin-top:20px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    color:#8896b3;
                    margin-left:auto;
                    a{
                        color:#8896b3;
                        margin-right: 20px;
                    }
                    div{
                        cursor: pointer;
                    }
                }
            }
            
            .experience{
                width: 100%;
                padding-top:40px;
                .info{
                    text-align: center;
                    font-size: 18px;
                    a{
                        color:dodgerblue;
                        cursor: pointer;
                    }
                }
                .read{
                    text-align: center;
                    margin-top: 20px;
                }
                .el-textarea{
                    display: block;
                    width: 80%;
                    margin:20px auto 0;
                }
            }
        }
        .el-pagination{
            margin:20px auto;
            width:240px;
            justify-content: center;
        }
    }
    @media (min-width:0px){
        .userItem{font-size:12px;}
    }
    @media (min-width: 320px){
        .userItem{font-size:12px;}
    }
    @media (min-width: 340px){
        .userItem{font-size:13px;}
    }
    @media (min-width: 360px){
        .userItem{font-size:14px;}
    }
    @media (min-width: 380px){
        .userItem{font-size:15px;}
    }
    @media (min-width: 460px){
        .userItem{font-size:20px;}
    }
    @media (min-width: 535px){
        .userItem{font-size:25px;}
    }
    @media (min-width: 800px){
        .container{width:600px}
    }
</style>