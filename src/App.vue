<script setup lang="ts">
import {useSettingStore} from "@/stores/setting";

const appStore = useSettingStore()
</script>

<template>
  <RouterView/>
</template>