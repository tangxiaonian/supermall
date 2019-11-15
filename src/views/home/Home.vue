<template>
    <div id="home">

        <nav-bar class="nav-bar">

            <template v-slot:center>
                <span>购物街</span>
            </template>

        </nav-bar>
        <!--   模拟吸顶盒效果     -->
        <tab-controller class="tab-controller"
                        :titles="['流行','新款','精选']"
                        @switchTabControll="switchTabControll"
                        ref="tabController1"
                        :class="{'tab-controller-fixed':isFixed}"
                        v-show="isFixed"
        >
        </tab-controller>

        <scroll
                ref="scroll"
                class="scroll"
                :probeType="3"
                :pullUpLoad="true"
                @loadMore="loadMore"
                @scrollContent="scrollContent">

            <swiper :banner="banner"
                    class="swiper-container"
                    @calculationImgHeight="calculationImgHeight"/>

            <recomend-view :data="recommend.list"></recomend-view>

            <feature/>

            <tab-controller class="tab-controller"
                            :titles="['流行','新款','精选']"
                            @switchTabControll="switchTabControll"
                            ref="tabController2"
            >
            </tab-controller>

            <goods :goods="goodData"></goods>

        </scroll>

        <back-top @click.native="clickBack" v-show="isShow"></back-top>

    </div>
</template>

<script>
    import {requestHome, requestHomeGoods} from "../../network/home/HomeRequest";

    import NavBar from "../../components/common/navbar/NavBar";
    import Swiper from "../../components/common/swiper/Swiper";
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/common/backtop/BackTop";

    import RecomendView from "./childComps/RecomendView";
    import Feature from "./childComps/Feature";

    import TabController from "../../components/content/tabController/TabController";
    import Goods from "../../components/content/goods/Goods";

    import {debounce} from "../../common/Utils";

    export default {

        name: "Home",

        components: {
            NavBar,
            Swiper,
            RecomendView,
            Feature,
            TabController,
            Goods,
            Scroll,
            BackTop
        },
        data: function () {
            return {
                banner: [],
                recommend: [],
                goods: {
                    "pop": {page: 0, data: []},
                    "new": {page: 0, data: []},
                    "sell": {page: 0, data: []}
                },
                type: "pop", // 当前加载的goods类型
                isShow:false, // 是否显示 去顶部图标
                distanctTopHegiht:0, // tabController2 距离 顶部的距离
                isFixed: false, // 是否显示隐藏的吸顶盒
                saveY:0,
            };
        },
        computed: {

            goodData() {
                return this.goods[this.type].data;
            }
        },
        created() {

            this.requestHome();

            this.requestHomeGoods("pop");
            this.requestHomeGoods("new");
            this.requestHomeGoods("sell");

        },
        mounted() {

            // 防抖进行刷新
            const fun = debounce(this.$refs.scroll.refresh);

            //  图片加载完成通知重新刷新Scroll滚动域
            this.$bus.$on("imgItemRefresh",() => {

                fun();

            });

        },
        // 激活时触发
        activated() {
            // 重新定位
            this.$refs.scroll.goTop(0, this.saveY, 0);

            this.$refs.scroll.refresh();

        },
        // 失效时触发
        deactivated() {
            // 记录离开时的位置
            this.saveY = this.$refs.scroll.getY();
        },
        methods: {

            /**
             *
             * 事件有关的
             *
             */
            // 点击选项卡切换不同内容
            switchTabControll(index) {

                switch (index) {
                    case 0:
                        this.type = "pop";
                        break;
                    case 1:
                        this.type = "new";
                        break;
                    case 2:
                        this.type = "sell";
                        break;
                }
                // 同步点击的选项卡索引
                this.$refs.tabController1.currentIndex = index;
                this.$refs.tabController2.currentIndex = index;

            },
            // 点击回到顶部
            clickBack() {

                this.$refs.scroll.goTop(0,0,500);

            },
            // 滚动触发函数
            scrollContent(posistion) {

                this.isShow = ( - posistion.y) > 1000;

                // 滚动的距离 > tabController2 距离顶部的高度时
                if ((-posistion.y) > this.distanctTopHegiht) {
                    this.isFixed = true;
                }else {
                    this.isFixed = false;
                }

            },
            // 下拉加载更多
            loadMore() {

                this.requestHomeGoods(this.type);

                this.$refs.scroll.finishPullUp();
            },
            // swaiper图片加载完成 计算 tabController2 距离 顶部的距离
            calculationImgHeight() {

                this.distanctTopHegiht = this.$refs.tabController2.$el.offsetTop;

            },
            /**
             *
             * 发送网络请求的
             *
             */
            requestHome() {
                // 请求 banner | 分类数据
                requestHome((result) => {

                    let {banner, dKeyword, keywords, recommend} = result.data.data;

                    this.banner = banner.list.map(item => item.image);
                    this.dKeyword = dKeyword;
                    this.keywords = keywords;
                    this.recommend = recommend;

                }, (error) => {

                    console.log(error);

                });
            },
            // 请求首页tabController2 选择的商品的数据
            requestHomeGoods(type) {

                requestHomeGoods({type, page: this.goods[type].page + 1}, (result) => {

                    this.goods[type].data.push(...result.data.data.list);

                }, (error) => {

                    // console.log(error);
                });

                this.goods[type].page++;

            }
        }
    };
</script>

<style scoped lang="scss">

    #home {
        position: relative;
        left: 0;
        width: 100vw;
        height: 100vh;

        .nav-bar {
            font-size: 50px;
            text-align: center;
            color: white;
            background-color: pink;
            box-shadow: 1px 0 #666666;
        }

        .scroll{
            position: absolute;
            left: 0; right: 0;
            top: .8rem; bottom: 1rem;
            width: 100%;
            overflow: hidden;
        }

        .swiper-container {
            height: 3rem;
        }

        .tab-controller {
            // 粘性布局
            /*position: sticky;*/
            /*top: .8rem;*/
            height: .8rem;
            line-height: .8rem;
            padding-bottom: 10px;
            background-color: white;
        }

        .tab-controller-fixed {
            position: relative;
            left: 0;
            z-index: 10;
        }

    }

</style>