<template>
    <div class="good-detail">

        <detail-nav-bar
                @clickItemNav="clickItemNav"
                ref="detailNavBar"
        ></detail-nav-bar>

        <scroll class="wrapper"
                ref="scroll"
                @scrollContent="scrollContent"
                :probe-type="3"
        >

            <detail-swiper :top-image="topImages"></detail-swiper>

            <detail-base-info :good-base-info="goodBaseInfo"></detail-base-info>

            <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>

            <detai-image-info :detailImage="detailImage" @imgLoadFinsh="imgLoadFinsh"></detai-image-info>

            <!--    参数       -->
            <detai-size-info ref="params" :itemParams="itemParams"></detai-size-info>

            <!--    评论        -->
            <detail-comment-info ref="comment" :comments="comments"></detail-comment-info>

            <!--    推荐        -->
            <h3>推荐区</h3>
            <goods :goods="recommend" ref="recommend"></goods>

        </scroll>

        <back-top @click.native="clickBack" v-show="isShow"></back-top>

        <!--    底部菜单栏    -->
        <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>

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
    import DetailBottomBar from "./childCompos/DetailBottomBar";

    import Scroll from "../../components/common/scroll/Scroll";
    import Goods from "../../components/content/goods/Goods";
    import BackTop from "../../components/common/backtop/BackTop";
    import Toast from "../../components/common/toast/Toast";

    import {getRecommend, GoodBaseInfo, requestDetailInfo, ShopInfo} from "../../network/detail/DetailRequest";
    import {backTopMixin, mixin} from "../../common/mixins";
    import {debounce} from "../../common/Utils";

    import { mapActions } from "vuex";

    export default {

        name: "GoodDetail",

        data() {
            return {
                iid: 0,
                topImages:[],
                goodBaseInfo:{},
                shopInfo: {},
                detailImage:{},
                itemParams:{},
                comments:{},
                recommend:[],
                topValue: [], // 计算每个选项组件距离顶部的offsetTop值
                topValueListener: null,
                topDebounce: null,
                preIndex:0,
                index:0,
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
            DetailBottomBar,
            Goods,
            Scroll,
            BackTop,
        },
        computed: {

        },
        created() {

            this.iid = this.$route.params.iid;

            this.requestDetailInfo();

            this.getRecommend();

        },
        mounted(){

            this.topValueListener = () => {

                this.topValue.length = 0;

                this.topValue.push(0);

                this.topValue.push(this.$refs.params.$el.offsetTop);

                this.topValue.push(this.$refs.comment.$el.offsetTop);

                this.topValue.push(this.$refs.recommend.$el.offsetTop);

            };

            this.topDebounce = debounce(this.topValueListener,100);
        },

        mixins: [mixin,backTopMixin],

        destroyed() {
            this.$bus.$off("imgItemRefresh", this.itemImgListener);
        },
        methods: {
            ...mapActions("cartModule",["addCarts"]),
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
            },
            // 图片组件 加载完成 刷新scroll,计算组件的offsetTop值
            imgLoadFinsh() {

                // 防抖计算top值
                this.topDebounce();

                this.fun();

            },
            // 派发点击事件
            clickItemNav(index) {
                // 点击跳转
                this.$refs.scroll.goTop(0, -this.topValue[index], 200);
            },
            // 详情页 页面滚动事件触发事件  改变导航栏的位置
            scrollContent(posistion) {

                let {y} = posistion;

                for (let i = 1; i < this.topValue.length; i++) {

                    // 最后边界值判断
                    if ((-(y * 1 - 50)) >= this.topValue[this.topValue.length - 1]) {

                        this.index = this.topValue.length - 1;

                        break;
                    }
                    // 其他位置判断
                    if ((-(y * 1 - 50)) <= this.topValue[i]) {

                        this.index = i - 1;

                        break;
                    }

                }

                if (this.index !== this.preIndex) {

                    this.$refs.detailNavBar.currentIndex = this.index;

                    this.preIndex = this.index;

                }

                // 显示 backTop组件
                this.isShow = (-posistion.y) > 1500;
            },

            // 添加购物车回调事件
            addCart() {
                // 获取当前要购买商品的信息
                let product = {};
                // 商品的id
                product.iid = this.iid;
                // 封面
                product.image = this.topImages[0];
                // 商品详细信息
                product.goodBaseInfo = this.goodBaseInfo;

                this.addCarts(product).then((result) => {
                    this.$toast.show(result, 2000);
                });
            }
        }
    };
</script>

<style scoped lang="scss">

    .wrapper{
        position: relative;
        left: 0;z-index: 3;
        height: calc(100vh - .8rem - 1rem);
        background-color: white;
    }

    h3{
        font-size: .45rem;
    }

</style>