<template>
    <div class="category-menu">

        <Scroll class="category-menu-scroll">

            <ul>

                <li v-for="(item,key) in categorys"
                    :class="{active:index === key}"
                    :key="key"
                    @click="changeIndex(key)"
                >
                    {{item.title}}
                </li>

            </ul>

        </Scroll>

    </div>
</template>

<script>

    import Scroll from "../../../components/common/scroll/Scroll";

    export default {
        name: "CategoryMenu",
        props: {
            categorys:{
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                index: 0
            }
        },
        components:{
            Scroll
        },
        methods:{
            changeIndex(index) {

                this.index = index;

                this.$emit("changeIndex", index);
            }
        }
    }
</script>

<style scoped lang="scss">

    .category-menu{

        width: 2.5rem;
        height: 100%;

        font-size: .3rem;

        background-color: #f1f1f1;

        .category-menu-scroll{

            width: 100%;
            height: 100%;
            overflow: hidden;

            ul{
                list-style: none;
                width: 100%;
                height: 100%;
            }

            ul>li{
                padding: .4rem 0;
                text-align: center;
            }

        }

        .active{
            color: #ff8198;
            background-color: white;
        }

    }

</style>