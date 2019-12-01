<template>
    <div class="category-grid">

        <grid-view>

            <div class="grid-item" v-for="(item,index) in gridData" :key="index">
                <img :src="item.image" width="100%" height="200px" alt="">
                <p class="text">{{item.title}}</p>
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

        width: 100%;
        font-size: .3rem;
        border: 1px solid red;
    }

</style>