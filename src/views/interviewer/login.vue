<template>
    login
    <div>{{Route.query.code}}</div>    
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const Route = useRoute()

</script>
<style lang="less" scoped></style>