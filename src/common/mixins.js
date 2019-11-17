import {debounce} from "./Utils";

export let mixin = {

    mounted(){

        // 监听器
        this.recommendImgListener = () => {

            this.$refs.scroll.refresh();

        };

        let fun = debounce(this.recommendImgListener);

        // 监听 推荐图片加载完成刷新 scroll
        this.$bus.$on("imgItemRefresh", fun);

    },
};