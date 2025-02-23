<template>
  <el-menu :router="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="/user-management">
      <el-icon><User /></el-icon>

      <span>人员管理</span>
    </el-menu-item>

    <el-menu-item index="financial-management">
      <el-icon><Wallet /></el-icon>
      <span>财务管理</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Wallet, User } from '@element-plus/icons-vue';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
