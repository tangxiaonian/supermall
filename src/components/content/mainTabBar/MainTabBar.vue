<template>

    <tabbar>

        <router-link to="/" exact>

            <tabbar-item path="/">

                <template v-slot:item-icon>
                    <img src='../../../assets/img/tabbar/home.svg' alt="home">
                </template>

                <template v-slot:item-icon-active>
                    <img src='../../../assets/img/tabbar/home_active.svg' alt="home">
                </template>

                <template v-slot:text>
                    <div>首页</div>
                </template>

            </tabbar-item>

        </router-link>

        <router-link to="/catagory" exact>

            <tabbar-item path="/catagory">

                <template v-slot:item-icon>
                    <img src='../../../assets/img/tabbar/category.svg' alt="catagory">
                </template>

                <template v-slot:item-icon-active>
                    <img src='../../../assets/img/tabbar/category_active.svg' alt="catagory">
                </template>

                <template v-slot:text>
                    <div>分类</div>
                </template>

            </tabbar-item>

        </router-link>

        <router-link to="/cart" exact>
            <tabbar-item path="/cart">

                <template v-slot:item-icon>
                    <img src='../../../assets/img/tabbar/shopcart.svg' alt="cart">
                </template>

                <template v-slot:item-icon-active>
                    <img src='../../../assets/img/tabbar/shopcart_active.svg' alt="cart">
                </template>

                <template v-slot:text>
                    <div>购物车</div>
                </template>

            </tabbar-item>
        </router-link>

        <router-link to="/my" exact>

            <tabbar-item path="/my">

                <template v-slot:item-icon>
                    <img src='../../../assets/img/tabbar/profile.svg' alt="home">
                </template>

                <template v-slot:item-icon-active>
                    <img src='../../../assets/img/tabbar/profile_active.svg' alt="home">
                </template>

                <template v-slot:text>
                    <div>我的</div>
                </template>

            </tabbar-item>
        </router-link>

    </tabbar>

</template>

<script>

    import TabBar from "../../common/tabbar/TabBar";
    import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {

        name: "MainTabBar",

        components: {
            "tabbar": TabBar,
            "tabbar-item": TabBarItem,
        }
    }
</script>

<style scoped>

</style>