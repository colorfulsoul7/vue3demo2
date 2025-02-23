<template>
  <el-menu :router="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item v-for="(it, i) in routes" :key="i" :index="it.path">
      <span>{{ it.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Wallet, User } from '@element-plus/icons-vue';
import { routes } from '@/router'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
