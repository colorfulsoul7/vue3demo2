<template>
  <el-dialog v-model="dialogVisible" title="编辑用户" width="500" :before-close="handleClose">
    <el-form :inline="true" :model="user" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="user.name" placeholder="请输入姓名" clearable />
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="user.age" placeholder="请输入年龄" clearable />
    </el-form-item>
    <el-form-item label="城市">
      <el-select v-model="user.city" placeholder="请选择城市" clearable><el-option label="北京市" value="beijing" />
        <el-option label="上海市" value="上海市" />
        <el-option label="广州市" value="广州市" />
        <el-option label="深圳市" value="深圳市" />
        <el-option label="重庆市" value="重庆市" />
        <el-option label="成都市" value="成都市" />
      </el-select>
    </el-form-item>

    <el-form-item label="活动时间">
      <el-date-picker v-model="user.date" type="date" placeholder="请选择时间" clearable />
    </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogClose">取消</el-button>
        <el-button type="primary" @click="dialogClose">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, onMounted,computed ,reactive} from 'vue'
import { ElMessageBox } from 'element-plus'
const props = defineProps({
  dialogVisible: {
    type: Boolean
  },
  userInfo:{
    type : Object
  }
})

const emits = defineEmits(['dialogClose','update:userInfo'])
const dialogClose = () => {
  emits('dialogClose')
}
const user = computed({
  get() {
    return props.userInfo
  },
  set(newValue) {
    console.log('newValue',newValue)
    emits('update:userInfo',newValue)
  }
})
const dialogVisible = computed({
  get: ()=>props.dialogVisible,
  set: ()=>emits('dialogClose')
})


const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
onMounted(() => {
  console.log(props)
})
</script>
