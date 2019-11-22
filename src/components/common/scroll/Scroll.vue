<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">

            <slot></slot>

        </div>
    </div>
</template>

<script>

    import BScroll from "better-scroll";

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default() {
                    return 0;
                }
            },
            pullUpLoad:{
                type: Boolean,
                default() {
                    return false;
                }
            }
        },
        data() {
            return {
                scroll:null
            }
        },
        methods:{
            goTop(x,y,time=300){

                this.scroll && this.scroll.scrollTo(x, y, time);
            },
            // 通知上拉加载完成
            finishPullUp() {

                this.scroll && this.scroll.finishPullUp();

                this.refresh();
            },
            // 重新刷新滚动布局
            refresh() {
                this.scroll && this.scroll.refresh();
            },
            // 获取Y轴
            getY() {
                return this.scroll.y;
            }
        },
        mounted() {

            this.scroll = new BScroll(this.$refs.wrapper, {

                probeType: this.probeType,
                // 开启上拉刷新
                pullUpLoad: this.pullUpLoad,
                // 不阻止事件触发
                click:true
            });

            // 监听滚动条事件
            if (this.probeType === 2 || this.probeType === 3) {

                this.scroll.on("scroll", (posistion) => {

                    this.$emit("scrollContent",posistion);
                });
            }
            // 上拉加载更多事件
            if (this.pullUpLoad) {
                // 监听上拉事件
                this.scroll.on("pullingUp", () => {
                    // 加载更多数据
                    this.$emit("loadMore");
                });
            }

        }
    }
</script>

<style scoped lang="scss">

    // 动态计算方式

    /*.wrapper{*/
    /*    height: calc(100vh - .8rem - 1rem);*/
    /*    overflow: hidden;*/

    /*    .content{*/
    /*        position: relative;*/
    /*        left: 0;*/
    /*    }*/

    /*}*/

    // 定位方式 设置
    .wrapper{

        .content{
            position: relative;
            left: 0;
        }

    }

</style>