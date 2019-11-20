import {debounce} from "./Utils";

export let mixin = {
    data() {
        return {
            itemImgListener: null, // 图片加载完成的监听函数。
            fun: null, // 防抖函数
        };
    },
    mounted(){

        // 监听器
        this.itemImgListener = () => {

            this.$refs.scroll && this.$refs.scroll.refresh();

        };

        this.fun = debounce(this.itemImgListener);

        // 监听 推荐图片加载完成刷新 scroll
        this.$bus.$on("imgItemRefresh", this.fun);
    },
};