<template>

    <div class="cart-list">

        <cart-list-item v-for="(item,index) in cartList"
                        :key="index"
                        :product="item"
        >
        </cart-list-item>

        <p> {{ cartList.length }} </p>

    </div>

</template>

<script>

    import CartListItem from "./CartListItem";

    import { mapGetters } from "vuex";

    export default {
        name: "CartList",
        components:{
            CartListItem
        },
        computed: {
            ...mapGetters("cartModule",["cartList"])
        }
    }
</script>

<style scoped lang="scss">

    .cart-list{
        width: 100%;
    }

</style>