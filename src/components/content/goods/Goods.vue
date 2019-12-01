<template>

    <div class="goods">

        <goods-item :good-info="item" v-for="(item,index) in goods" :key="index"/>
        
    </div>

</template>

<script>
    import GoodsItem from "./GoodsItem";

    export default {
        name: "Goods",
        props:{
            goods:{
                type:Array,
                default() {
                    return [];
                }
            }
        },
        components:{
            GoodsItem
        }
    }
</script>

<style scoped lang="scss">

    .goods{

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        width: 100%;
        font-size: 40px;

        .bg {
            width: 300px;
            height: 300px;
            background: url('../../../assets/img/common/collect.svg');
        }
    }

</style>