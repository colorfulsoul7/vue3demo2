<template>
  <h1>管理员页面</h1>
<div v-if="administratoInfo.gender != ''">  <p>{{ `您好：${administratoInfo.name.title} ${administratoInfo.name.first} ${administratoInfo.name.last}` }}</p>
  <img :src="administratoInfo.picture.large" />
  <p>{{ `性别：${administratoInfo.gender}` }}</p>
  <p>{{ `年龄：${administratoInfo.dob.age}` }}</p>
  <p>{{ `国家：${administratoInfo.location.country}` }}</p>
  <p>{{ `城市：${administratoInfo.location.city}` }}</p>
  <p>{{ `街道：${administratoInfo.location.street.name}` }}</p>
  <p>{{ `电话：${administratoInfo.phone}` }}</p>
  <p>{{ `邮箱：${administratoInfo.email}` }}</p></div>
  <p v-else>加载中……</p>
</template>
<script lang="ts" setup>
import { getAdministratorInfo } from '@/api/administrator-info/index'
import { reactive, onMounted } from 'vue'
const administratoInfo = reactive({
  "gender": "",
  "name": {
    "title": "",
    "first": "",
    "last": ""
  },
  "location": {
    "street": {
      "number": '',
      "name": "",
    },
    "city": "",
    "state": "",
    "country": "",
    "postcode": ""
  },
  "email": "",
  "dob": {
    "date": "",
    "age": ''
  },
  "phone": "",
  "cell": "",
  "picture": {
    "large": "",
    "medium": "",
    "thumbnail": ""
  }
})
onMounted(async () => {
  const data = await getAdministratorInfo()
  console.log(data)
  Object.assign(administratoInfo, data.results[0])
})

</script>