import {defineStore} from 'pinia'
import Logo from '@/assets/logo.png'
import {computed} from "vue";

/**
 * 应用基本信息
 */
export const useAppStore = defineStore('useAppStore', () => {
    const title = import.meta.env.VITE_APP_TITLE
    const showLogo = import.meta.env.VITE_APP_SHOW_LOGO
    const logo = computed(() => (showLogo === 'true' ? Logo : null))
    return {title, logo}
})
