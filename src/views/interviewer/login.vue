<template>
    login
</template>
<script setup lang="ts">

function getQueryString(name:string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  const result = window.location.search.substring(1).match(reg);
  if (result != null) {
    return decodeURIComponent(result[2]);
  }
  return null;
}

// 通过原生 JS 去获取 code
console.log(getQueryString('code'))

</script>
<style lang="less" scoped></style>