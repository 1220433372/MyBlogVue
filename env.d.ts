declare interface ImportMetaEnv {
    readonly MODE: string
}

declare interface ImportMeta {
    readonly env: ImpoertMetaEnv
}

declare module '*.vue' {
    import {DefineComponent} from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}

/* images.d.ts文件 */
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
