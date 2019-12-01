<template>
    <div class="grid-view" ref="gridView">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GridView",
        props:{
            // 列数
            col:{
                type:Number,
                default() {
                    return 3;
                }
            },
            // 上下 Margin
            tBMargin:{
                type:Number,
                default() {
                    return 10;
                }
            },
            // 左右 padding
            lRMargin:{
                type:Number,
                default() {
                    return 10;
                }
            },

        },
        data() {
            return {
                containerWidth: 0,
            }
        },
        mounted() {

            setTimeout(() => {

                this._autoLayout();

            },1000);

        },
        updated() {
        },
        methods:{
            _autoLayout() {

                let gridView = this.$refs.gridView;

                let gridCollection = gridView.children;

                this.containerWidth = gridView.clientWidth;

                // 每一项 的 实际宽度
                let itemWidth = (this.containerWidth / this.col) - (this.lRMargin * 2) ;

                [].forEach.call(gridCollection, (gridItem) => {

                    // 设置 width 包含 padding
                    gridItem.style.width = `${itemWidth}px`;

                    gridItem.style.margin = `${this.tBMargin}px ${this.lRMargin}px`;

                });

            }
        }
    }
</script>

<style scoped lang="scss">

    .grid-view{

        display: flex;
        flex-wrap: wrap;

        .grid-item{
            height: auto;
            .text{
                text-align: center;
            }

        }

    }

</style>