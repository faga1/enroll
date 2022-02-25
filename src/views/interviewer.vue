<template>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';

onMounted(() => {
    if (!window.localStorage.getItem('token')){
        ElMessage.warning(window.localStorage.getItem('token') as string)
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwe0d87bd068758439&redirect_uri=${encodeURIComponent('http://weather-report.xdwizz.top/#/login')}&response_type=code&scope=snsapi_base#wechat_redirect`
    }
})
</script>
<style></style>