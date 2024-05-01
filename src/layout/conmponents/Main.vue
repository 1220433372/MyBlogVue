<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component, route }" :key="$route.fullPath">
    <transition name="fade" mode="out-in">
      <keep-alive :include="route.meta.keepLive ? [...route.name] : ''">
        <component v-if="!route.meta.link" :is="Component" :key="route.path"/>
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">

</style>