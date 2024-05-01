import {ref} from 'vue'
import {defineStore} from 'pinia'
import {useColorMode} from '@vueuse/core'

/**
 * 应用全局设置
 */
export const useSettingStore = defineStore('useSettingStore', () => {
    const mode = useColorMode()

    const isDark = ref(mode.value === 'dark')

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark')
        isDark.value = !isDark.value
    }

    return {toggleTheme, isDark}
})
