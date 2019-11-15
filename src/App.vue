<template>

    <div id="app">

        <keep-alive exclude="GoodDetail">

            <router-view/>

        </keep-alive>

        <main-tabbar/>

    </div>

</template>

<script>

    import MainTabBar from "./components/content/mainTabBar/MainTabBar";

    export default {
        name: 'app',
        components: {
            "main-tabbar":MainTabBar
        }
    }
</script>

<style>

    @import "assets/css/base.css";

    .active {
        color: red;
    }

</style>
