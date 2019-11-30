<template>

    <div class="category">

        <category-nav-bar class="category-menu"></category-nav-bar>

        <div class="category-content">

            <category-menu
                    :categorys="categorys"
                    @changeIndex="changeIndex"
            ></category-menu>

            <div class="category-content-right">
                <category-grid
                        :grid-data="gridData"
                ></category-grid>

                <category-list></category-list>
            </div>

        </div>

    </div>

</template>

<script>

    import Scroll from "../../components/common/scroll/Scroll";

    import CategoryNavBar from "./childCompos/CategoryNavBar";
    import CategoryMenu from "./childCompos/CategoryMenu";
    import CategoryGrid from "./childCompos/CategoryGrid";
    import CategoryList from "./childCompos/CategoryList";

    import {requestCategoryMenu,requestCategoryGrid,requestCategoryList} from "../../network/category/CategoryRequest";


    export default {
        name: "Catagory",
        data() {
            return {
                categorys: [],
                gridData: [],
                listData: [],
                index:0
            };
        },
        async created() {

            await this.requestCategoryMenu();

            await this.requestCategoryGrid();

            await this.requestCategoryList();
        },
        methods:{

            // 事件
            changeIndex(index) {
                this.index = index;
            },

            // 请求菜单数据
            async requestCategoryMenu(){

                 await new Promise((resolve, reject)=>{

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
        components:{
            Scroll,
            CategoryNavBar,
            CategoryMenu,
            CategoryGrid,
            CategoryList
        }
    }
</script>

<style scoped lang="scss">

    .category{

        .category-content{
            display: flex;
            position: relative;
            left: 0;top: 0;
            bottom: 1rem;right: 0;

            width: 100%;
            height: calc(100vh - .8rem - 1rem);

            .category-scroll{

                flex: 1;

                width: 100%;
                height: 100%;

                overflow: hidden;
            }

            .category-content-right{
                width: 100%;
                height: 100%;
            }

        }

    }

</style>