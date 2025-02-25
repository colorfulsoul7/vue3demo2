<template>
  <div>
    <p>子组件测试</p>
    </div>
</template>
<script setup>
import {useAttrs } from 'vue'
const attrs = useAttrs()
console.log(attrs)
</script>