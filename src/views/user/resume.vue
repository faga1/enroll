<template>
  <el-form :rules="formRules" ref="formRef" :model="form" label-width="120px" label-position="top" >
   <el-form-item label="从哪里了解到我们" prop="messageFrom">
     <el-radio-group v-model="form.messageFrom">
        <el-radio label="海报" ></el-radio>
        <el-radio label="冬令营/夏令营"></el-radio>
        <el-radio label="其他自媒体"></el-radio>
      </el-radio-group>
      <span class="interpolate-text">内推人</span>
      <el-input class="interpolate" v-model="form.pushInperson"></el-input>
   </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" ></el-input>
   </el-form-item>
   <el-form-item label="性别" prop="gender">
     <el-select v-model="form.gender" >
       <el-option label="男" :value='1'></el-option>
       <el-option label="女" :value="0"></el-option>
     </el-select>
   </el-form-item>
   <el-form-item label="年级" prop="grade">
     <el-select v-model="form.grade">
       <el-option
        v-for="item in gradeList"
        :value="item"
        :label="item"
        :key="item"
       ></el-option>
     </el-select>
   </el-form-item>
   <el-form-item label="学院和专业" prop='major'>
      <el-input v-model="form.major"></el-input>
   </el-form-item>
   <el-form-item label="联系电话" prop="phoneNumber">
      <el-input v-model="form.phoneNumber"></el-input>
   </el-form-item>
    <el-form-item label="QQ" prop="qq">
      <el-input v-model="form.qq" placeholder="非必填"></el-input>
   </el-form-item>
   <el-form-item label="是否有相关项目/实习经历" prop="hasExperience">
     <el-radio-group v-model="form.hasExperience" >
        <el-radio label="没有,想来学习" ></el-radio>
        <el-radio label="有"></el-radio>
      </el-radio-group>
   </el-form-item>
    <el-form-item label="详细描述下你的过往经历吧越详细面试通过的概率越大" v-if="form.hasExperience" prop="experience">
      <el-input v-model="form.experience" type="textarea"></el-input>
     
    </el-form-item>
    <el-form-item v-if="form.hasExperience==='没有,想来学习'" prop="file">
      <el-upload 
        list-type="picture-card"
        multiple
        :drag="true" 
        :before-upload="beforeUpload"
      ><el-icon><plus /></el-icon></el-upload>
    </el-form-item>
     <el-form-item label="未来发展意愿" prop="future">
      <el-radio-group v-model="form.future" >
        <el-radio label="就业" ></el-radio>
        <el-radio label="读研"></el-radio>
        <el-radio label="出国"></el-radio>
        <el-radio label="不确定"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type'
import { sendResume } from '@/commons/request'
import { useRouter } from 'vue-router'

const router = useRouter()
const gradeList :string[] = ['大一', '大二', '大三', '大四', '研一', '研二', '研三']
const formRules = {
  messageFrom: [
    { required: true, message: '请填写了解渠道' }
  ],
  name: [
    { required: true, message: '请填写名字' }
  ],
  gender: [
    { required: true, message: '请选择性别' }
  ],
  grade: [
    { required: true, message: '请选择年级' }
  ],
  major: [
    { required: true, message: '请填写学院和专业' }
  ],
  phoneNumber: [
    { required: true, message: '请填写电话' }
  ],
  hasExperience: [
    { required: true, message: '请选择是否有相关项目/实习经历' }
  ],
  experience: [
    { required: true, message: '请填写经历' }
  ],
  future: [
    { required: true, message: '请选择未来发展意愿' }
  ],
}
const formRef = ref()
const form = reactive({
  messageFrom: '',
  pushInperson: '',
  name: '',
  gender: null,
  grade: '',
  major: '',
  phoneNumber: '',
  qq: '',
  hasExperience: '',
  experience: '',
  future: ''
})
function beforeUpload(file:UploadFile){
  console.log(file);
}
function onSubmit(){
  formRef.value.validate((valid: boolean) => {
    if (valid){
      sendResume(form)
      router.push('/success')
    }
  })
}
</script>
<style lang="less">
.interpolate-text{
  margin:0  40px 0 200px;
}
.interpolate{
  width:100px;
}
</style>