/**
 * 聚焦
 */
export default {
    mounted(el) {
        const input = el.querySelector('input');
        // 延迟100毫秒，因为有可能在dialog框中
        setTimeout(() =>  input.focus(), 100)
    }
}
