<template>
    <div class="detail-bottom-bar">

        <div class="left">
            <div class="item">
                <i class="icon one"></i>
                <div>客服</div>
            </div>

            <div class="item">
                <i class="icon two"></i>
                <div>店铺</div>
            </div>

            <div class="item">
                <i class="icon three"></i>
                <div>收藏</div>
            </div>
        </div>

        <div class="right">
            <div class="item" @click="addCart">加入购物车</div>
            <div class="item">购买</div>
        </div>

    </div>
</template>

<script>
    export default {

        name: "DetailBottomBar",

        methods:{

            addCart() {

                this.$emit("addCart");

            }
        }
    }
</script>

<style scoped lang="scss">

    .detail-bottom-bar{
        display: flex;
        position: fixed;
        left: 0;bottom: 0;
        z-index: 3;
        height: 1rem;
        width: 100%;
        font-size: .3rem;
        background-color: #ffffff;

        .left,.right{
            display: flex;
            justify-content: center;
            flex: 1;

            .icon{
                display: block;
                height: .4rem;
                background: url("../../../assets/img/detail/detail_bottom.png") no-repeat;
            }

            .item{
                flex: 1;
                text-align: center;
            }
        }

        .left{

            align-items: center;

            .one{
                background-position: top center;

            }

            .two{
                background-position: center 80%;

            }

            .three{
                background-position: center 20%;
            }
        }

        .right{

            line-height:1rem;

            :first-child{
                background-color: yellow;
            }
            :last-child{
                background-color: pink;
            }
        }

    }

</style>