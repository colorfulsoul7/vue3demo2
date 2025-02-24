<template>
  <el-menu :router="true" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    
  <el-menu-item v-for="(item, index) in routes " :key="index" :index="item.path">{{ item.name }}</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { routes } from '@/router';
import { Wallet, User } from '@element-plus/icons-vue';
import { onMounted } from 'vue';
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
onMounted(() => {
  console.log(routes);
});
</script>
