<template>
    <div class="detail-shop-info" v-if="Object.keys(shopInfo).length > 0">
        <div class="top">
            <img :src="shopInfo.shopLogo" alt="">
            <span>{{shopInfo.name}}</span>
        </div>

        <div class="center">
            <div class="left">
                <div>
                    <span>{{shopInfo.cSells | filterPrice}}</span>
                    <div>总销量</div>
                </div>
                <div>
                    <span>{{shopInfo.cGoods}}</span>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="right">

                <tr v-for="(item,index) in shopInfo.score" :key="index">
                    <td>

                        <span>
                            {{item.name}}&nbsp;{{item.score}}&nbsp;
                        </span>

                        <span :style="{color: item.isBetter ? 'red' : 'blue'}">
                            {{item.isBetter ? "高" : "低"}}
                        </span>
                    </td>
                </tr>

            </div>
        </div>

        <div class="bottom">
            进店铺逛一逛
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
            shopInfo:{
                type:Object,
                default() {
                    return {};
                }
            }
        },
        filters:{
            filterPrice(value) {
                return value > 10000 ? (value / 10000).toFixed(1) + "万": value;
            }
        }
    }
</script>

<style scoped lang="scss">

    .detail-shop-info{

        margin-top: .1rem;
        font-size: .30rem;
        color: #333333;
        border-top: 1px solid #333333;

        .top{
            display: flex;
            align-items: center;
        }

        .center{

            display: flex;
            justify-content: space-around;

            .left{
                display: flex;

                > div{
                    text-align: center;
                    margin: .1rem;
                }
            }

            .right{

                td{
                    display: flex;

                    span:last-child{
                        flex: 1;
                        text-align: right;
                    }
                }

            }

        }

        .bottom{
            text-align: center;
        }

        img{
            display: inline-block;
            width: 1rem;
            height: 1rem;
            margin: .1rem;
            border-radius: 50%;
        }

    }

</style>