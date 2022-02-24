<template>
  <div></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { interviewerLogin } from '../../commons/request/index'

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
  const code = getQueryString('code')
  if (typeof code === 'string'){
    interviewerLogin(code).then((val) => {
      if (val.code === 1 && val.data){
        window.localStorage.setItem('token', val.data)
        router.go(-2)
      }
    })
  }
})

</script>
<style lang="less" scoped></style>