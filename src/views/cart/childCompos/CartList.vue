<template>

    <div class="cart-list">

        <cart-list-item v-for="(item,index) in carts"
                        :key="index"
                        :product="item"
        >
        </cart-list-item>

    </div>

</template>

<script>

    import CartListItem from "./CartListItem";

    import { mapState } from "vuex";

    export default {
        name: "CartList",
        components:{
            CartListItem
        },
        computed: {
            ...mapState("cartModule",["carts"])
        }
    }
</script>

<style scoped lang="scss">

    .cart-list{
        width: 100%;
    }

</style>