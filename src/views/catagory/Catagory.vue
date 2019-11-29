<template>

    <div class="category">

        <category-nav-bar class="category-menu"></category-nav-bar>

        <div class="category-content">

            <category-menu :categorys="categorys"></category-menu>

            <category-grid></category-grid>

            <category-list></category-list>

        </div>

    </div>

</template>

<script>

    import Scroll from "../../components/common/scroll/Scroll";

    import CategoryNavBar from "./childCompos/CategoryNavBar";
    import CategoryMenu from "./childCompos/CategoryMenu";

    import {requestCategoryMenu} from "../../network/category/CategoryRequest";
    import CategoryGrid from "./childCompos/CategoryGrid";
    import CategoryList from "./childCompos/CategoryList";

    export default {
        name: "Catagory",
        data() {
            return {
                categorys:[]
            };
        },
        created() {
            this.requestCategoryMenu();
        },
        methods:{
            // 请求菜单数据
            requestCategoryMenu(){

                requestCategoryMenu((result) => {

                    console.log(result);

                    this.categorys = result.data.data.category.list;

                }, (fail) => {

                    console.log(fail);

                });
            },
            // 请求表格数据

            // 请求列表数据

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

        }

    }

</style>