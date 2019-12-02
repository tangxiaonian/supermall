<template>
    <div class="cart-bottom-bar">
        <div class="left">
            <div class="circle" @click="selectAll" :class="{active:checked}">
                <img src="../../../assets/img/cart/tick.svg" alt="">
            </div>
            <span>全选</span>
        </div>
        <div class="center">
            <span>合计: ${{cartTotal}}</span>
        </div>
        <div class="right">
            <span>去计算: {{cartNumber}}</span>
        </div>
    </div>
</template>

<script>

    import { mapGetters,mapMutations } from "vuex";

    export default {
        name: "CartBottomBar",
        data() {
            return {
                checked: false
            };
        },
        computed:{

            ...mapGetters("cartModule",["cartList"]),

            // 计算总价格
            cartTotal() {

                return this.cartList.reduce((preCount, item) => {

                    return preCount + (item.checked ? item.number * item.goodBaseInfo.realPrice : 0);

                },0).toFixed(2);

            },
            // 计算总数量
            cartNumber() {
                return this.cartList.reduce((preCount, item) => {

                    return preCount + (item.checked ? 1 : 0);

                },0);
            }
        },
        methods: {

            ...mapMutations("cartModule",["selectAllShop"]),
            // 全选
            selectAll() {

                this.checked = !this.checked;

                this.selectAllShop();
            }
        }
    }
</script>

<style scoped lang="scss">

    .cart-bottom-bar{

        position: absolute;
        left: 0;bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: .8rem;width: 100%;
        padding: 0 5px;

        background-color: #f1f1f1;

        .left{
            display: flex;
            align-items: center;
            width: 1.1rem;

            .circle{
                flex: 1;
                height: 50%;
                border: 2px solid #333333;
                border-radius: 50%;
            }

            .active{

                background-color: #ff5777;

                img{
                    width: 100%;
                    height: 100%;
                }
            }

        }


    }

</style>