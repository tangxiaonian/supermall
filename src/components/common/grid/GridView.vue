<template>
    <div class="grid-view" ref="gridView">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GridView",
        props:{
            // 总共有多少列
            col:{
                type: Number,
                default() {
                    return 3;
                }
            },
            // 每一项的宽度
            gridItemWidth:{
                type: Number,
                default() {
                    return 200;
                }
            },
            // 做边界的误差值
            leftDeviation:{
                type: Number,
                default() {
                    return 5;
                }
            },
            // 顶边界的误差值
            topDeviation: {
                type: Number,
                default() {
                    return 10;
                }
            }
        },
        data() {
            return {
                containerWidth: 0,
                containerHeight: 0,
                index:-1,
                gridItemHeight: 0,

            }
        },
        mounted() {

            let gridView = this.$refs.gridView;

            let gridCollection = gridView.querySelectorAll(".grid-item");

            this.gridItemHeight = gridCollection.item(0).clientHeight;

            this.containerWidth = gridView.clientWidth;
            this.containerHeight = gridView.clientHeight;

            // 每一项平均分的宽度
            let itemWidth = this.containerWidth / this.col;

            // 行数
            this.row = Math.ceil(gridCollection.length / 3);

            // 每一项平均分的高度
            let itemHeight = this.containerHeight / (this.row);

            // 每一项平均分的宽度 -  传入的宽度  =  每一项应该得到的left
            let marginLeft = itemWidth - this.gridItemWidth - this.leftDeviation;

            // 每一项应该得到的top
            let marginTop = itemHeight - this.gridItemHeight - this.topDeviation;

            for (let i = 0; i < gridCollection.length; i++) {

                if ((i + 1) % this.col === 1) {
                    this.index++;
                }

                let gridItem = gridCollection.item(i);

                // left: 图片的实际位置  + margin left =
                // i % this.col: 0 1 2
                // i % this.col + 1  1  2  3
                gridItem.style.cssText = `
                    position: absolute;
                    top:${ this.index * this.gridItemHeight + (this.index % this.col + 1) * marginTop}px;
                    left:${ this.gridItemWidth * (i % this.col) + (i % this.col + 1) * marginLeft}px;
                    border: 1px solid red;
                `;
            }
        }
    }
</script>

<style scoped lang="scss">

    .grid-view{

        position: relative;
        left: 0;top: 0;
        width: 100%;
        height: 100%;

    }

</style>