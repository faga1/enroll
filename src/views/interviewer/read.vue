<template>
  <div>
    success
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { ElLoading, ElMessage } from 'element-plus';
import { useRoute } from 'vue-router'
import { readResume } from '../../commons/request/interviewer'
import 'element-plus/theme-chalk/el-loading.css'

const route = useRoute()
onMounted(() => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在授权...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  if (typeof route.query.resumeId === 'string'){
    readResume(route.query.resumeId).then((val) => {
        if (val.code === 1){
            loading.close()
        }
    })
  }
})

</script>
<style lang="less" scoped></style>