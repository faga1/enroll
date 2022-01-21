<template>
    <el-select v-model="project">
        <el-option 
            v-for="item in projectList" 
            @click="changeProject(item.value)"
            :label="item.label" 
            :value="item.value" 
            :key="item.value"></el-option>
    </el-select>
</template>
<script setup lang="ts">
import { reactive, ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    init: String
})
const project = ref(props.init)
const projectList = reactive([
    { label: '2021秋招(当前)', value: '2021秋招(当前)' },
    { label: '2021春招', value: '2021春招' }

])
const emit = defineEmits(['changeProject'])
function changeProject(projectName:string){
    emit('changeProject', projectName)
}
</script>
<style lang="less" scoped>
</style>