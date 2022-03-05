<template>
  <div class="title">完善信息</div>
  <el-form 
  :show-file-list="true" 
  :rules="formRules" 
  ref="formRef" 
  :model="form" 
  label-width="120px" 
  label-position="top" >
   <el-form-item label="从哪里了解到我们" prop="messageFrom">
     <el-radio-group v-model="form.messageFrom">
        <el-radio label="海报" ></el-radio>
        <el-radio label="冬令营/夏令营"></el-radio>
        <el-radio label="其他自媒体"></el-radio>
      </el-radio-group>
      <div class="pushIn">
        <span class="interpolate-text">内推人</span>
        <el-input class="interpolate" v-model="form.pushInperson"></el-input>
      </div>
      
   </el-form-item>
    <el-form-item label="姓名" prop="name" style="display: inline-block;width:33%">
      <el-input v-model="form.name" ></el-input>
   </el-form-item>
   <el-form-item 
    label="性别" 
    prop="gender" 
    placeholder="请选择性别" 
    style="display: inline-block;width:33%">
     <el-select v-model="form.gender" placeholder="性别">
       <el-option label="男" :value='1'></el-option>
       <el-option label="女" :value="0"></el-option>
     </el-select>
   </el-form-item> 
   <el-form-item 
    label="年级" 
    prop="grade" 
    style="display: inline-block;width:33%">
     <el-select v-model="form.grade" placeholder="年级">
       <el-option
        v-for="item in gradeList"
        :value="item"
        :label="item"
        :key="item"
       ></el-option>
     </el-select>
   </el-form-item>
   <el-form-item label="学院和专业" prop='major' style="display: inline-block;width:33%">
      <el-input v-model="form.major"></el-input>
   </el-form-item>
   <el-form-item label="联系电话" prop="phoneNumber" style="display: inline-block;width:33%">
      <el-input v-model="form.phoneNumber"></el-input>
   </el-form-item>
    <el-form-item label="QQ" prop="qq" style="display: inline-block;width:33%">
      <el-input v-model="form.qq" placeholder="非必填"></el-input>
   </el-form-item>
   <el-form-item label="是否有相关项目/实习经历" prop="hasPractice">
     <el-radio-group v-model="form.hasPractice" >
        <el-radio :label="false" >没有,想来学习</el-radio>
        <el-radio :label="true">有</el-radio>
      </el-radio-group>
   </el-form-item>
    <el-form-item label="详细描述下你的过往经历吧越详细面试通过的概率越大" v-if="form.hasPractice!==null" prop="practice">
      <el-input 
      v-model="form.practice" 
      type="textarea" 
      :autosize="{ minRows: 5, maxRows: 10 }" resize="none"></el-input>
     
    </el-form-item>
    <el-form-item v-if="form.hasPractice" prop="file">
      <el-upload
        multiple
        :drag="true" 
        :before-upload="beforeUpload"
        style="margin:0 auto 40px"
        :file-list="fileList"
      >上传作品</el-upload>
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
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { sendResume } from '../../commons/request'

const router = useRouter()

const route = useRoute()
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
    { required: true, message: '请填写电话' },
    { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  hasPractice: [
    { required: true, message: '请选择是否有相关项目/实习经历' }
  ],
  practice: [
    { required: true, message: '请填写经历' }
  ]
}
const proFile = ref();
const fileList = ref([])
const formRef = ref()
const form = reactive({
  messageFrom: '',
  pushInperson: '',
  name: '',
  gender: '',
  grade: '',
  major: '',
  phoneNumber: '',
  qq: '',
  hasPractice: null,
  practice: '',
})
function beforeUpload(file:UploadFile){
  if (file){
    fileList.value = [{ name: file.name }]
    proFile.value = file
  }
  return false;
}
function onSubmit(){
  formRef.value.validate((valid: boolean) => {
    if (valid){
      if (!route.query.station){
        ElMessage.error('参数异常,请重新投递')
        router.push('/user/delivery')
      } else {
        const formData = new FormData()
        const json = JSON.stringify({ ...form, station: route.query.station as string })
        formData.append('json', new Blob([json], { type: "application/json" }))
        if (proFile.value) formData.append('file', proFile.value)
        sendResume(formData).then((val) => {
          if (val.code === 1){
            router.push('/success')
          }
        })
      }
    }
  })
}
</script>
<style lang="less">
.title{
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.pushIn{
  display: inline-block;
  margin-left:auto;

}

.el-form{
  width: 70vw;
  margin:60px auto;
  .el-input{
    max-width: 180px;
  }
  .el-upload-dragger{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:20px;
    color:#ccc;
  }
  .el-radio{
    margin-right: 150px;
  }
  .interpolate{
    width:100px;
  }
  .el-button{
    width:100px;
    height: 40px;
    display: block;
    margin:10px auto;
  }
}
@media (max-width:500px){
  .el-form{
    width:90%;
  }
}
</style>