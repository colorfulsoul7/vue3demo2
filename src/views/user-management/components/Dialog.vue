<template>
  <el-dialog v-model="dialogVisible" title="编辑用户" width="500" :before-close="handleClose">
    <el-form :inline="true" :model="modelValue" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="modelValue.name" placeholder="请输入姓名" clearable />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="modelValue.age" placeholder="请输入年龄" clearable />
      </el-form-item>
      <el-form-item label="城市">
        <el-select v-model="modelValue.city" placeholder="请选择城市" clearable>
          <el-option label="北京市" value="北京市" />
          <el-option label="上海市" value="上海市" />
          <el-option label="广州市" value="广州市" />
          <el-option label="深圳市" value="深圳市" />
          <el-option label="重庆市" value="重庆市" />
          <el-option label="成都市" value="成都市" />
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间">
        <el-date-picker value-format="YYYY-MM-DD" v-model="modelValue.date" type="date" placeholder="请选择时间" clearable />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogClose">取消</el-button>
        <el-button type="primary" @click="confirmEdit">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineEmits, computed, onMounted } from 'vue'
import { ElMessageBox } from 'element-plus'
const props = defineProps({
  dialogVisible: {
    type: Boolean
  },
  modelValue: {
    type: Object
  },
})

const emits = defineEmits(['dialogClose', 'update:modelValue', 'confirmEdit'])
const dialogClose = () => {
  emits('dialogClose')
}

const dialogVisible = computed({
  get: () => props.dialogVisible,
  set: () => emits('dialogClose')
})

const confirmEdit = () => {
  emits('confirmEdit', props.modelValue)
  dialogClose()
}

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

})
</script>
