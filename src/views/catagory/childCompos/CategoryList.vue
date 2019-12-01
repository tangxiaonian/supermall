<template>

    <div class="category-content-list">
        <Goods :goods="listData"></Goods>
    </div>

</template>

<script>

    import Goods from "../../../components/content/goods/Goods";

    export default {
        name: "CategoryContent",
        props: {
            listData: {
                type:Array,
                default() {
                    return [];
                }
            }
        },
        components:{
            Goods
        }
    }
</script>

<style scoped lang="scss">

    .category-content-list{
        width: 100%;
        height: 100%;
    }

</style>