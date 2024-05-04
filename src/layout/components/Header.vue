<script setup lang="ts">
import {useRouter} from "vue-router";
import {useAppStore} from "@/stores/app";
import {type MenuTypes} from "@/types/menu/menu.types";
import {onMounted, ref} from "vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import CoverImg from "@/components/CoverImg.vue";
import {coverImgShow} from "@/config/cover-img-show";
import HeaderSearch from "@/components/HeaderSearch.vue";

const appStore = useAppStore()
const router = useRouter()

const headerRef = ref()
const menus: MenuTypes[] = [
  {
    title: '首页',
    key: 'home',
    icon: 'home-filled',
    path: '/'
  },
  {
    title: '文章',
    key: 'article',
    icon: 'document-filled',
    path: '/article'
  },
  {
    title: '分类',
    key: 'category',
    icon: 'folder-filled',
    path: '/category'
  },
  {
    title: '标签',
    key: 'tag',
    icon: 'folder-filled',
    path: '/tags'
  }]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        headerRef.value?.classList.remove('header-bg-color')
        headerRef.value?.classList.add('text-white')
      } else {
        headerRef.value?.classList.remove('text-white')
        headerRef.value?.classList.add('header-bg-color')

      }
    }, {
      threshold: [1.0],
      delay: 1000,
      trackVisibility: true,
    })
  })
  let mainImg = document.querySelector('#main-img');
  if (mainImg)
    observer.observe(mainImg)
})

</script>

<template>
  <header ref="headerRef" class="header-container header-bg-color">
    <div class="flex h-full items-center justify-between px-6">
      <div class="flex items-center gap-2 cursor-pointer" @click="router.push('/')">
        <el-avatar v-if="appStore.logo" :src="appStore.logo" round size="large"/>
        <h1 class="text-xl">{{ appStore.title }}</h1>
      </div>
      <div class="flex gap-6 h-full items-center ">
        <HeaderSearch/>
        <HeaderMenu :menus="menus"/>
      </div>
    </div>
  </header>
  <cover-img v-show="coverImgShow.includes($route.path)" text="欢迎使用我的博客系统！"/>
</template>

<style scoped lang="scss">
.header-container {
  @apply h-16 w-full fixed;
  z-index: 1;
}

.header-bg-color {
  @apply bg-[--el-bg-color];
}
</style>