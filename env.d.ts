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