<template>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted, toRaw } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
onMounted(() => {
    if (!window.localStorage.getItem('token')){
        // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwe0d87bd068758439&redirect_uri=${encodeURIComponent('http://weather-report.xdwizz.top/#/login')}&response_type=code&scope=snsapi_base&state=${route.path}#wechat_redirect`
    }
})
</script>
<style></style>