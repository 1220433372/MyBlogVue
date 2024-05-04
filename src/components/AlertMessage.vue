<script setup lang="ts">
import {NotificationsOutline, PaperPlaneSharp} from '@vicons/ionicons5'
import type {PropType} from "vue";

defineProps(
    {
      message: {
        type: String,
        default: null
      },
      type: {
        // 规定type传参只能为 notice/announcement
        type: String as PropType<'notice' | 'announcement'>,
        default: 'notice'
      }
    }
)
</script>

<template>
  <el-alert>
    <template #title>
      <div class="flex items-center gap-2">
        <el-icon size="18">
          <NotificationsOutline v-if="type === 'notice'"/>
          <PaperPlaneSharp v-else/>
        </el-icon>
        <span>{{ message }}</span>
      </div>
    </template>
  </el-alert>
</template>

<style scoped lang="scss">

</style>