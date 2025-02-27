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


//继承测试
function Parent() {
    this.parentMethod = function() {
        console.log('This is a parent method');
    };
}

function Child() {}

Child.prototype = new Parent();
const child = new Child();
child.parentMethod(); // 输出: This is a parent method
console.log(child.constructor===Parent);

//promise测试
const myPromise = new Promise((resolve, reject) => {
    console.log('Promise 执行器函数开始执行');
    const success = Math.random() > 0.5;
    if (success) {
        // 操作成功，将 Promise 状态变为 fulfilled
        resolve('操作成功');
    } else {
        // 操作失败，将 Promise 状态变为 rejected
        reject('操作失败');
    }
    console.log('Promise 执行器函数执行结束');
});

// 处理 Promise 的结果
myPromise
   .then((result) => {
        console.log('Promise 成功:', result);
    })
   .catch((error) => {
        console.log('Promise 失败:', error);
    });

console.log('Promise 创建之后的代码');
</script>