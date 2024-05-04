<script setup lang="ts">
import {ref} from 'vue'
import AlertMessage from "@/components/AlertMessage.vue";

const categories = ref(
    [
      {
        id: null,
        name: '全部'
      },
      {
        id: 1,
        name: '最新'
      },
      {
        id: 2,
        name: '最热'
      },
    ]
)
</script>
<template>
  <div class="mt-6">
    <div class="container">
      <AlertMessage message="测试消息" type="notice"/>
      <div class=" flex gap-4">
        <div class="mt-5 w-2/3">
          <div class=" flex gap-4 ">
            <el-tag size="large" v-for="(item,index) in categories" :key="index" round style="padding: 16px" type="info">
              {{ item.name }}
            </el-tag>
          </div>
          <div>
            <div>
              <el-image src="https://picsum.photos/200/300"/>
            </div>
            <el-text>
              2e22
            </el-text>
          </div>
        </div>
        <div class="mt-5 border w-1/3">
          <div class=" flex gap-4 ">
            <el-tag size="large">全部</el-tag>
            <el-tag size="large" type="info">全部</el-tag>
            <el-tag size="large" type="info">全部</el-tag>
            <el-tag size="large" type="info">全部</el-tag>
            <el-tag size="large" type="info">全部</el-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h1{
  height: 80px;
}
</style>