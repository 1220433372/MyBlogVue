<script setup lang="ts">
import {ChevronDown} from "@vicons/ionicons5";
import TypeIt from 'typeit'
import {onMounted, ref} from "vue";

const textRef = ref('')
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})

onMounted(() => {
  new (TypeIt)(textRef.value, {
    strings: props.text,
    speed: 220,
    cursorChar: "<span class='cursorChar'>|<span>",//用于光标的字符。HTML也可以
    loop: true,//是否循环
  }).go()
})
</script>

<template>
  <div id="main-img">
    <div>WebBlog</div>
    <div ref="textRef" class="font-thin text-lg"></div>
    <div class="absolute left-1/2 bottom-[-1rem] animate-bounce">
      <el-icon size="30">
        <ChevronDown/>
      </el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
#main-img {
  @apply flex justify-center items-center text-[3rem] font-black relative flex-col;
  background-image: url("@/assets/img.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  color: white;
}
</style>