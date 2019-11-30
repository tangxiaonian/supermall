<template>
    <div class="category-grid">

        <grid-view
                :grid-item-width="185"
                :left-deviation="15"
                :top-deviation="15"
        >
            <div class="grid-item" v-for="(i) in 9">
                <img src="../../../assets/logo.png" width="180px" height="200px" alt="">
                <p class="text">鞋子</p>
            </div>

        </grid-view>

    </div>
</template>

<script>

    import GridView from "../../../components/common/grid/GridView";

    export default {
        name: "CategoryGrid",
        props: {
            gridData:{
                type:Array,
                default() {
                    return {};
                }
            }
        },
        components:{
            GridView
        }
    }
</script>

<style scoped lang="scss">

    .category-grid{

        display: flex;
        flex-wrap: wrap;

        width: 100%;
        height: 60%;
        font-size: .3rem;
        border: 1px solid red;

        .grid-item{

            height: auto;

            .text{
                text-align: center;
            }

        }

    }

</style>