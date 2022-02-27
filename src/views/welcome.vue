<template>
    <div class="welcome">
        <div class="header"><span @click="toDelivery">加入我们</span></div>
        <div class="text">
            <div class="title animate__animated animate__backInLeft" style="--i:0">
                为什么选择我们?
            </div>
            <div class="animate__animated animate__backInLeft" style="--i:1">
                找到发展方向,互联网职业道路探索,摆脱迷茫
            </div>
            <div class="animate__animated animate__backInLeft" style="--i:2">
                落地自己的idea项目,提升职场核心竞争力
            </div>
            <div class="animate__animated animate__backInLeft" style="--i:3">
                拥有项目经历,为读研/就业/出国做准备
            </div>
            <div class="animate__animated animate__backInLeft" style="--i:4">
                与互联网大厂工作的大佬面对面交流的机会
            </div>
            <div class="animate__animated animate__backInLeft" style="--i:5">
                更多等待发掘...
            </div>
        </div>
        <el-button @click="toDelivery" class="animate__animated animate__backInLeft" style="--i:6">
            加入我们
        </el-button>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router' 
import 'animate.css'

const router = useRouter()
function toDelivery(){
    router.push('/user')
}

</script>

<style lang="less" scoped>
    .welcome{
        min-height: 100vh;
        background-color: dodgerblue;
        color: #ffffff;
        .header{
            text-align: right;
            background-color: #ffffff;
            color:#000000;
            height: 50px;
            line-height: 50px;
            padding-right: 20px;
            font-size: 27px;
            font-weight: 600;
            span{
                cursor: pointer;
            }
        }
        .text{
            margin-top: 20vh;
            text-align: center;
            font-size: 20px;
            line-height: 50px;
            
            .title{
                margin-bottom: 50px;
                font-size: 40px;
            }
        }
        .animate__animated{
                animation-delay:calc(0.2s*var(--i));
        }
        .el-button{
            width:200px;
            height: 80px;
            border-radius: 40px;
            font-size: 28px;
            font-weight: 600;
            margin:20px auto 0;
            display: block;
        }
        
    }
    
</style>