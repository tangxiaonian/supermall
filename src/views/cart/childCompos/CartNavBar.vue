<template>

    <nav-bar class="cart-nav-bar">
        <template v-slot:center>
            <div class="cart-nav-bar-center">购物车</div>
        </template>
    </nav-bar>

</template>

<script>

    import NavBar from "../../../components/common/navbar/NavBar";

    export default {
        name: "CartNavBar",
        components:{
            NavBar
        }
    }
</script>

<style scoped lang="scss">

    .cart-nav-bar{
        background: pink;
    }

    .cart-nav-bar-center{
        color: white;
        text-align: center;
    }

</style>