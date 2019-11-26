<template>

    <div class="cart-list-item">

        <check-button @click.native="toggleSwitch(product.iid)" :isActive="product.checked" class="left"></check-button>

        <div class="center">
            <img :src="product.image" width="200" height="200" alt="">
        </div>
        <div class="right">
            <p class="item-title">{{product.goodBaseInfo.title}}</p>
            <p class="item-desc">{{product.goodBaseInfo.desc}}</p>
            <p>
                <span>{{product.goodBaseInfo.oldPrice}}</span>
                <span>x{{product.number}}</span>
            </p>
        </div>

    </div>

</template>

<script>

    import CheckButton from "../../../components/content/checkButton/CheckButton";

    import { mapMutations } from "vuex";

    export default {
        name: "CartListItem",
        props:{
            product:{
                type:Object,
                default() {
                    return {};
                }
            }
        },
        components:{
            CheckButton
        },
        methods: {

            ...mapMutations("cartModule",["changeSelectState"]),
            // 切换选中状态
            toggleSwitch(iid) {
                this.changeSelectState({iid});
            }
        }
    }
</script>

<style scoped lang="scss">

    .cart-list-item{
        display: flex;
        width: 100%;
        margin-top: .1rem;
        font-size: .35rem;
        border-bottom: 1px solid #333333;

        .left{

            align-self: center;

            img{
                width: 50px;
                height: 50px;
                background-color: #ff5777;
                border-radius: 50%;
            }

        }
        .center{

        }
        .right{
            flex: 1;
            width: 100px;
            margin: .05rem;

            .item-desc,.item-title{

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .item-desc{
                font-size: .25rem;
            }

            p:nth-child(2) {
                margin: .12rem 0;
            }

            :last-child{
                :first-child{
                    color: orange;
                }
                :last-child{
                    float: right;
                }
            }
        }

    }

</style>