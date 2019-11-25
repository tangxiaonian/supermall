<template>
    <div class="cart">

        <cart-nav-bar></cart-nav-bar>

        <Scroll class="scroll">

            <cart-list></cart-list>

        </Scroll>

    </div>
</template>

<script>

    import CartNavBar from "./childCompos/CartNavBar";
    import CartList from "./childCompos/CartList";

    import { mapState } from "vuex";
    import Scroll from "../../components/common/scroll/Scroll";

    export default {

        name: "Cart",

        components:{
            Scroll,
            CartNavBar,
            CartList
        },
        computed:{
            ...mapState("cartModule",["count"])
        }
    }
</script>

<style scoped lang="scss">

    .cart{
        font-size: .35rem;

        .scroll{
            height: calc(100vh - .8rem - 1rem);
            overflow: hidden;
        }

    }


</style>