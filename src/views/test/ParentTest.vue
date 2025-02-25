<template>

  <div>
    <p>父组件测试</p>
    <ChildTest v-bind='$attrs'></ChildTest>
  </div>
  <!-- <ChildTest ></ChildTest> -->
</template>

<script setup>
import ChildTest from './ChildTest.vue';
// defineOptions({
//   inheritAttrs: false,
// })
</script>