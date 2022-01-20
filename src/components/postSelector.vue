<template>
    <el-select v-model="post">
        <el-option 
            v-for="item in postList" 
            @click="changePost(item.name)"
            :label="item.name" 
            :value="item.name" 
            :key="item.name"></el-option>
    </el-select>
</template>
<script setup lang="ts">
import { reactive, ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    init: String
})
const post = ref(props.init)
const postList = reactive([
    { name: '全部' },
    { name: '未读' },
    { name: '已读' },
    { name: '已处理' }
])
const emit = defineEmits(['changePost'])
function changePost(postName:string){
    emit('changePost', postName)
}
</script>
<style lang="less" scoped>
</style>