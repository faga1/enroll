<template>
    login
    <div>{{code}}</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const code = ref()
function getQueryString(name:string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const result = window.location.search.substring(1).match(reg);
  if (result != null) {
    return decodeURIComponent(result[2]);
  }
  return null;
}
onMounted(() => {
    code.value = getQueryString('code')
})

</script>
<style lang="less" scoped></style>