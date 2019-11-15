<template>
    <div class="good-detail">

        <detail-nav-bar></detail-nav-bar>

        <scroll class="wrapper">

            <detail-swiper :top-image="topImages"></detail-swiper>

            <detail-base-info :good-base-info="goodBaseInfo"></detail-base-info>

            <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>

        </scroll>

    </div>
</template>

<script>
    import DetailSwiper from "./childCompos/DetailSwiper";
    import DetailNavBar from "./childCompos/DetailNavBar";
    import DetailBaseInfo from "./childCompos/DetailBaseInfo";
    import DetailShopInfo from "./childCompos/DetailShopInfo";


    import Scroll from "../../components/common/scroll/Scroll";


    import {GoodBaseInfo,ShopInfo, requestDetailInfo} from "../../network/detail/DetailRequest";

    export default {

        name: "GoodDetail",

        data() {
            return {
                topImages:[],
                goodBaseInfo:{},
                shopInfo: {},
            };
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            Scroll
        },
        created() {

            this.requestDetailInfo();

        },
        methods: {

            // 请求商品信息
            requestDetailInfo() {

                let {iid} = this.$route.params;

                requestDetailInfo({iid}, (result) => {

                    console.log(result);

                    this.topImages = result.data.result.itemInfo.topImages;
                    // 封装 商品基本信息的组件数据
                    this.goodBaseInfo = new GoodBaseInfo(
                        result.data.result.columns,
                        result.data.result.itemInfo,
                        result.data.result.shopInfo.services
                    );

                    this.shopInfo = new ShopInfo(result.data.result.shopInfo);

                }, (error) => {

                    console.log(error);

                });
            }

        }
    };
</script>

<style scoped lang="scss">

    .wrapper{
        position: relative;
        left: 0;z-index: 3;
        height: calc(100vh - .8rem);
        background-color: white;
    }

</style>