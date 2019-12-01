<template>

    <div class="category">

        <category-nav-bar class="category-menu"></category-nav-bar>

        <div class="category-content">

            <category-menu
                    :categorys="categorys"
                    @changeIndex="changeIndex"
            ></category-menu>

            <scroll class="category-scroll" ref="scroll">

                <category-grid :grid-data="gridData">
                </category-grid>

                <p class="list">列表</p>
                <category-list :list-data="listData">
                </category-list>

            </scroll>

        </div>

    </div>

</template>

<script>

    import Scroll from "../../components/common/scroll/Scroll";

    import CategoryNavBar from "./childCompos/CategoryNavBar";
    import CategoryMenu from "./childCompos/CategoryMenu";
    import CategoryGrid from "./childCompos/CategoryGrid";
    import CategoryList from "./childCompos/CategoryList";

    import {
        requestCategoryMenu,
        requestCategoryGrid,
        requestCategoryList
    } from "../../network/category/CategoryRequest";

    import {mixin} from "../../common/mixins";

    export default {
        name: "Catagory",
        components: {
            Scroll,
            CategoryNavBar,
            CategoryMenu,
            CategoryGrid,
            CategoryList
        },
        data() {
            return {
                categorys: [],
                gridData: [],
                listData: [],
                index: 0
            };
        },
        created() {
            this.requestData();
        },
        mounted() {

        },
        mixins: [mixin],
        methods: {

            // 事件
            changeIndex(index) {

                this.index = index;

                this.requestData();
            },

            async requestData() {

                await this.requestCategoryMenu();

                await this.requestCategoryGrid();

                await this.requestCategoryList();
            },

            // 请求菜单数据
            async requestCategoryMenu() {

                await new Promise((resolve, reject) => {

                    requestCategoryMenu((result) => {

                        this.categorys = result.data.data.category.list;

                        resolve(this.categorys);

                    }, (fail) => {

                        console.log(fail);

                    });
                });
            },
            // 请求表格数据
            async requestCategoryGrid() {

                await new Promise((resolve, reject) => {

                    let maitKey = this.categorys[this.index]["maitKey"];

                    requestCategoryGrid({maitKey}, (result) => {

                        this.gridData = result.data.data.list;

                        resolve();

                    }, (fail) => {

                        console.log(fail);

                    })
                });

            },
            // 请求列表数据
            async requestCategoryList() {

                await new Promise((resolve, reject) => {

                    let params = {
                        miniWallkey: this.categorys[this.index].miniWallkey,
                        type: "pop"
                    };

                    requestCategoryList(params, (result) => {

                        this.listData = result.data;

                        resolve();

                    }, (fail) => {

                        console.log(fail);

                    })
                });

            }
        },
        activated() {
            this.$refs.scroll.refresh();
        },
        deactivated() {

            console.log("解绑事件....");

            this.$bus.$off("imgItemRefresh", this.itemImgListener);
        }
    }
</script>

<style scoped lang="scss">

    .category {

        .category-content {
            display: flex;
            position: relative;
            left: 0;
            top: 0;
            bottom: 1rem;
            right: 0;

            height: calc(100vh - .8rem - 1rem);
            width: 100%;

            .category-scroll {

                flex: 1;

                width: 100%;
                height: calc(100vh - .8rem - 1rem);

                overflow: hidden;

                .list {

                    margin: .1rem;

                    font-size: .3rem;
                }
            }

        }

    }

</style>