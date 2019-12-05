<template>
    <div class="cart">

        <cart-nav-bar></cart-nav-bar>

        <Scroll class="scroll" ref="scroll">

            <cart-list></cart-list>

        </Scroll>

        <cart-bottom-bar></cart-bottom-bar>

    </div>
</template>

<script>

    import CartNavBar from "./childCompos/CartNavBar";
    import CartList from "./childCompos/CartList";

    import { mapState } from "vuex";
    import Scroll from "../../components/common/scroll/Scroll";
    import CartBottomBar from "./childCompos/CartBottomBar";

    export default {

        name: "Cart",

        components:{
            Scroll,
            CartNavBar,
            CartList,
            CartBottomBar
        },
        computed:{
            ...mapState("cartModule",["count"])
        },
        activated() {
            this.$refs.scroll.refresh();
        }
    }
</script>

<style scoped lang="scss">

    .cart{
        position: relative;
        left: 0;
        font-size: .35rem;

        height: calc(100vh - 1rem - .8rem);

        .scroll{
            height: calc(100vh - .8rem - 1rem - .8rem);
            overflow: hidden;
        }

    }


</style>