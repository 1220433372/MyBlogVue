<script setup lang="ts">
import {useAppStore} from "@/stores/app";

const appStore = useAppStore()

</script>

<template>
  <div id="app">
    <n-config-provider :theme="appStore.theme" :locale="appStore.locale"
                       :date-locale="appStore.dateLocale">
      <!--将样式加到body -->
      <n-global-style/>
      <RouterView/>
    </n-config-provider>
  </div>
</template>