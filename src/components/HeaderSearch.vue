<script lang="ts" setup>

import {PricetagsOutline, Search, Timer} from "@vicons/ionicons5";
import {onMounted, ref} from "vue";

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    // 监听ctrl+k事件
    if (e.ctrlKey && e.key === 'k') {
      // 去掉浏览器默认事件
      e.preventDefault()
      toggleSearchModal()
    }
  })
})
const showSearchModal = ref(false)

const toggleSearchModal = () => {
  showSearchModal.value = !showSearchModal.value
  if (showSearchModal.value) {
    document.addEventListener('keydown', handleSelectItem)
  } else {
    removeArrowListener()
  }
}

const searchKey = ref('')
const currentItem = ref(-1)
const searchInputRef = ref()
const searchLoading = ref(false)

const handleSearch = () => {
  searchLoading.value = true
  setTimeout(() => {
    articles.value.push({
      img: 'https://picsum.photos/200/300',
      title: '新起点丨开源建站工具 Halo 发布 2.0 版本',
      desc: 'Halo 是一款好用又强大的开源建站工具，它让你无需太多的技术知识就可以快速搭建一个博客、网站或者内容管理系统。',
      date: '2021-01-01',
      author: '作者',
      category: "Java"
    },)
    searchLoading.value = false
  }, 1000)
}

const articles = ref([])

const handleSelectItem = (e) => {
  // 绑定上下方向键
  if (e.key === 'ArrowUp') {
    // 阻止浏览器默认事件
    e.preventDefault()
    if (currentItem.value > 0) {
      currentItem.value = currentItem.value - 1
      searchInputRef.value.blur()
    } else {
      searchInputRef.value.focus()
      currentItem.value = -1
    }
  }
  if (e.key === 'ArrowDown') {
    // 阻止浏览器默认事件
    e.preventDefault()
    currentItem.value = (currentItem.value + 1) % articles.value.length
    searchInputRef.value.blur()
  }
  // 绑定enter事件
  if (e.key === 'Enter') {
    // 去掉浏览器默认事件
    e.preventDefault()
    toDetail()
  }
}
const removeArrowListener = () => {
  document.removeEventListener('keydown', handleSelectItem)
}

const toDetail = () => {
  if (currentItem.value !== -1) {
    console.log('/article/' + currentItem.value)
  }
}
</script>

<template>
  <div>
    <div class="menu-item" @click="toggleSearchModal">
      <div class="flex items-center gap-1">
        <el-icon size="22">
          <Search/>
        </el-icon>
        <span class="hidden lg:block">搜索</span>
      </div>
    </div>
    <div>
      <el-dialog
          @close="removeArrowListener"
          destroy-on-close
          v-model="showSearchModal"
          :show-close="false"
          top="3rem"
      >
        <div>
          <el-input ref="searchInputRef" v-focus v-model="searchKey" class="h-[2.6rem]" placeholder="请输入搜索内容"
                    @input="handleSearch">
            <template #suffix>
              <div class="hidden lg:block">
                <el-tag type="info">Ctrl+K</el-tag>
              </div>
            </template>
          </el-input>
        </div>
        <el-scrollbar v-if="!searchLoading && articles.length > 0" max-height="500px">
          <div class="my-2 text-sm">
            共搜索到 {{ articles.length }} 条结果
          </div>
          <ul class="search-content">
            <li
                :class="['bg-[--header-search-bg-color]', { 'bg-[--header-search-bg-hover-color]': currentItem === index }]"
                @mouseover="currentItem = index"
                @click="toDetail"
                v-for="(item, index) in articles" :key="index">
              <div class="flex gap-2 h-24">
                <el-image :src="item.img + '?t=' + index" class="h-full w-44 rounded-lg" fit="cover" height="100%"
                          preview-disabled
                          width="100%"/>
                <div class="w-full flex flex-col justify-evenly">
                  <div>
                    <p>
                      <el-text :line-clamp="2" class="text-lg font-bold leading-tight">
                        {{ item.title }}
                      </el-text>
                    </p>
                    <p>
                      <el-text :line-clamp="2" class="leading-tight">
                        {{ item.desc }}
                      </el-text>
                    </p>
                  </div>
                  <div class="flex gap-4">
                    <div class="flex items-center gap-1">
                      <el-icon size="18">
                        <Timer/>
                      </el-icon>
                      <span>{{ item.date }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <el-icon size="18">
                        <PricetagsOutline/>
                      </el-icon>
                      <span>{{ item.category }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-scrollbar>
        <el-empty v-else :image-size="1" :description="searchLoading ? '搜索中...' : '没有搜索结果'"/>
        <template #footer>
          <div class="hidden lg:flex gap-4 text-sm justify-end items-center">
            <div class="dialog-footer-option">
              <span>选择</span>
              <el-tag type="info">↑↓</el-tag>
            </div>
            <div class="dialog-footer-option">
              <span>确定</span>
              <el-tag type="info">Enter</el-tag>
            </div>
            <div class="dialog-footer-option">
              <span>关闭</span>
              <el-tag type="info">Esc</el-tag>
            </div>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-content {
  @apply my-2 rounded-lg flex gap-2 flex-col;
  li {
    @apply shadow rounded-lg cursor-pointer p-4 transition-all duration-300;
  }
}

.dialog-footer-option {
  @apply flex gap-2 items-center text-sm text-[--header-search-text-color1];
}

:deep(.el-dialog) {
  @apply lg:w-[40rem] w-[90%];
}
</style>