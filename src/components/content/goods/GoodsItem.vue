<template>

    <div class="good-item" @click="goDetails">

        <img v-lazy="goodInfo.img || goodInfo.image || goodInfo.showLarge.img" alt="" @load="imgLoadFinish">

        <div class="good-info">
            <p class="good-title">{{goodInfo.title}}</p>
            <div class="good-body">
                <span class="price">价格:{{goodInfo.price}}</span>
                <span class="collect">点赞数:{{goodInfo.cfav}}</span>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
            goodInfo:{
                type:Object
            }
        },
        methods:{
            // 图片加载完成触发
            imgLoadFinish() {

                this.$bus.$emit("imgItemRefresh");

            },
            // 跳转商品详情
            goDetails() {

                this.$router.push({
                    name:"detail",
                    params:{
                        iid: this.goodInfo.iid
                    }
                });

            }
        },
        filters:{

            filterImg(goodInfo) {
                return goodInfo.image || goodInfo.showLarge.img;
            }
        }
    }
</script>

<style scoped lang="scss">

    .good-item{

        width: 48%;

        img,.good-info{

            width: 100%;

            .good-title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .good-body{
                text-align: center;
            }

            .price{
                color: red;
                margin-right: 40px;
            }

            .collect {
                position: relative;
            }

            .collect::before{
                content: '';
                position: absolute;
                left: -45px;
                top: -1px;
                width: .4rem;
                height: .4rem;
                background: url("../../../assets/img/common/collect.svg");
            }

    }
}

</style>