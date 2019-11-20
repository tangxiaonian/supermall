<template>
    <div class="good-detail">

        <detail-nav-bar></detail-nav-bar>

        <scroll class="wrapper" ref="scroll">

            <detail-swiper :top-image="topImages"></detail-swiper>

            <detail-base-info :good-base-info="goodBaseInfo"></detail-base-info>

            <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>

            <detai-image-info :detailImage="detailImage"></detai-image-info>

            <detai-size-info :itemParams="itemParams"></detai-size-info>

            <detail-comment-info :comments="comments"></detail-comment-info>

            <h3>推荐区</h3>
            <goods :goods="recommend"></goods>

        </scroll>

    </div>
</template>

<script>
    import DetailSwiper from "./childCompos/DetailSwiper";
    import DetailNavBar from "./childCompos/DetailNavBar";
    import DetailBaseInfo from "./childCompos/DetailBaseInfo";
    import DetailShopInfo from "./childCompos/DetailShopInfo";
    import DetaiImageInfo from "./childCompos/DetaiImageInfo";
    import DetaiSizeInfo from "./childCompos/DetaiSizeInfo";
    import DetailCommentInfo from "./childCompos/DetailCommentInfo";


    import Scroll from "../../components/common/scroll/Scroll";
    import Goods from "../../components/content/goods/Goods";


    import {GoodBaseInfo,ShopInfo, requestDetailInfo,getRecommend} from "../../network/detail/DetailRequest";


    import {mixin} from "../../common/mixins";

    export default {

        name: "GoodDetail",

        data() {
            return {
                topImages:[],
                goodBaseInfo:{},
                shopInfo: {},
                detailImage:{},
                itemParams:{},
                comments:{},
                recommend:[],
            };
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetaiImageInfo,
            DetaiSizeInfo,
            DetailCommentInfo,
            Goods,
            Scroll
        },
        created() {

            this.requestDetailInfo();

            this.getRecommend();

        },
        mounted(){



        },

        mixins: [mixin],

        destroyed() {

            this.$off("imgItemRefresh", this.itemImgListener);

        },
        methods: {

            // 请求商品信息
            requestDetailInfo() {

                let {iid} = this.$route.params;

                requestDetailInfo({iid}, (result) => {

                    // 轮播图
                    this.topImages = result.data.result.itemInfo.topImages;

                    // 商品基本信息
                    this.goodBaseInfo = new GoodBaseInfo(
                        result.data.result.columns,
                        result.data.result.itemInfo,
                        result.data.result.shopInfo.services
                    );

                    // 店铺信息
                    this.shopInfo = new ShopInfo(result.data.result.shopInfo);

                    // 详细图片
                    this.detailImage = result.data.result.detailInfo.detailImage[0];

                    // 参数详细信息
                    this.itemParams = result.data.result.itemParams;

                    // 评论信息
                    this.comments = result.data.result.rate;

                }, (error) => {

                    console.log(error);

                });
            },
            //请求商品推荐信息
            getRecommend() {
                getRecommend((result) => {
                    this.recommend = result.data.data.list;
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

    h3{
        font-size: .45rem;
    }

</style>