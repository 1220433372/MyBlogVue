import {ref, computed} from 'vue'
import {darkTheme, useOsTheme} from 'naive-ui'
import {defineStore} from 'pinia'
import {zhCN, dateZhCN, enUS, dateEnUS} from 'naive-ui'

/**
 * 应用全局状态
 */
export const useAppStore = defineStore('useAppStore', () => {
    // 获取系统主题
    const osThemeRef = useOsTheme()
    const themeName = ref(osThemeRef.value)
    const theme = computed(() => (themeName.value === 'dark' ? darkTheme : null))

    function toggleTheme() {
        themeName.value = themeName.value === 'dark' ? 'light' : 'dark'
    }

    // 国际化
    const locale = ref(zhCN)

    const dateLocale = ref(dateZhCN)

    function toggleLocale() {
        locale.value = locale.value.name === 'zh-CN' ? enUS : zhCN
        dateLocale.value = dateLocale.value.name === 'zh-CN' ? dateEnUS : dateZhCN
    }

    return {theme, themeName, toggleTheme, locale, dateLocale, toggleLocale}
})
