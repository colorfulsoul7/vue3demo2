<template>
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
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="onAdd">新增用户</el-button>

  <el-table :data="tableDate" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="age" label="年龄" width="180" />
    <el-table-column prop="city" label="城市" width="180" />
    <el-table-column prop="date" label="活动时间" />
    <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-icon @click="handleEdit(scope.$index, scope.row)"size="18">
            <Edit />
          </el-icon>
          <el-icon @click="handleDelete(scope.$index, scope.row)" size="18" style="margin-left: 10px">
            <Delete />
          </el-icon>
        </template>
      </el-table-column>
  </el-table>
<Dialog :dialogVisible="dialogVisible" @dialogClose="dialogClose" :userInfo="userCHose" ></Dialog>


</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Edit, Delete } from '@element-plus/icons-vue';
import Dialog from './components/Dialog.vue'

const user = reactive({
  name: '',
  age: '',
  city: '',

  date: '',
});

const originalTableData = reactive([
  {
    name: 'Tom',
    age: 24,
    city: '重庆市',
    date: '2016-05-03',

  },
  {
    name: 'kangkang',
    age: 28,
    city: '上海市',
    date: '2016-06-03',

  },
  {
    name: 'kevin',
    age: 21,
    city: '成都市',
    date: '2012-05-03',

  },
  {
    name: 'maria',
    age: 30,
    city: '北京市',
    date: '2017-01-03',

  },
  {
    name: 'eric',
    age: 24,
    city: '深圳市',
    date: '2016-08-08',

  },
  {
    name: '李华',
    age: 20,
    city: '广州市',
    date: '2011-01-03',

  }
])
const  tableDate = originalTableData

function filteredPerson () {
  originalTableData
}
const onSubmit = () => {
  console.log('submit!');
};

const onAdd= ()=>{

}
const dialogVisible = ref(false)
const dialogClose = ()=> {
  dialogVisible.value = false
}
let userCHose= reactive({})
// 编辑操作处理函数
const handleEdit = (index: number, row ) => {
   Object.assign(userCHose, row)
  dialogVisible.value = true
}

// 删除操作处理函数
const handleDelete = (index: number, row) => {
  tableDate.splice(index,1)
  console.log(index, row)
}
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
