<script setup lang="ts">

import {MenuSharp, Moon, Sunny} from "@vicons/ionicons5";
import type {MenuTypes} from "@/types/menu/menu.types";
import {useSettingStore} from "@/stores/setting";
import router from "@/router";
import {ref} from "vue";

defineProps<{
  menus: MenuTypes[]
}>()
const showSlideBar = ref(false)
const settingStore = useSettingStore()

const handleMenuClick = (menu: MenuTypes) => {
  router.push(menu.path)
}


const toggleSlideBar = () => {
  showSlideBar.value = !showSlideBar.value
}
</script>

<template>
  <div class="menu-item hidden lg:block" v-for="menu in menus" :key="menu.path" @click="handleMenuClick(menu)">{{
      menu.title
    }}
  </div>
  <div class="cursor-pointer">
    <div class="flex items-center gap-1" @click="settingStore.toggleTheme()">
      <el-icon size="20">
        <Sunny v-if="settingStore.isDark"/>
        <Moon v-else/>
      </el-icon>
    </div>
  </div>
  <div class="flex cursor-pointer sm:hidden" @click="toggleSlideBar">
    <el-icon size="30">
      <MenuSharp/>
    </el-icon>
  </div>
<!--  <n-drawer v-model:show="showSlideBar" width="60%" placement="left">-->
<!--    <n-drawer-content title="">-->
<!--      <div>-->
<!--        <div class="text-lg font-bold p-4" v-for="menu in menus" :key="menu.path" @click="handleMenuClick(menu)">{{-->
<!--            menu.title-->
<!--          }}-->
<!--        </div>-->
<!--      </div>-->
<!--    </n-drawer-content>-->
<!--  </n-drawer>-->
</template>

<style scoped lang="scss">

</style>