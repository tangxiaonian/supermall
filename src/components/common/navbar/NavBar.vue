<template>

    <div id="navbar">

        <div class="left">
            <slot name="left"></slot>
        </div>

        <div class="center">
            <slot name="center"></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">

    #navbar {
        display: flex;
        width: 100%;
        height: .8rem;
        line-height: .8rem;

        .left,.right {
            width: 1rem;
            /*background-color: yellow;*/
        }
        .center{
            flex: 1;
            /*background-color: red;*/
        }
    }

</style>