<script setup>
import Sidebar from './Sidebar.vue'
import ParentTest from '../views/test/ParentTest.vue';
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>xx企业后台管理系统</el-header>
      <el-container>
        <el-aside width="200px"><Sidebar></Sidebar></el-aside>
        <el-container>
          <el-main><router-view></router-view></el-main>
          <el-footer>xx科技公司开发</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <ParentTest msg="透传信息" @click="e=>console.log('透传事件',e.target )"></ParentTest>
</template>
