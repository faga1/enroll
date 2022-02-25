<template>
  <div>
    
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElLoading, ElMessage } from 'element-plus';
import { interviewerLogin } from '../../commons/request/index'
import 'element-plus/theme-chalk/el-loading.css'

const router = useRouter()
function getQueryString(name:string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const result = window.location.search.substring(1).match(reg);
  if (result != null) {
    return decodeURIComponent(result[2]);
  }
  return null;
}
onMounted(() => {
  const loading = ElLoading.service({
    lock: true,
    text: '正在授权...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  const code = getQueryString('code')
  const route = getQueryString('state')
  if (typeof code === 'string'){
    interviewerLogin(code).then((val) => {
      if (val.code === 1 && val.data){
        window.localStorage.setItem('token', val.data)
        ElMessage.success('授权成功')
        loading.close()
        router.push(route as string)
      }
    })
  }
})

</script>
<style lang="less" scoped></style>