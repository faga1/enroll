<template>
  <div></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { interviewerLogin } from '../../commons/request'

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
      window.localStorage.setItem('token', val.data)
    })
  }
})

</script>
<style lang="less" scoped></style>