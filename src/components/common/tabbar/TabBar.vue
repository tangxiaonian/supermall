<template>

    <div id="tabbar">

       <slot></slot>

    </div>

</template>

<!--
    封装的 TabBar
-->

<script>
    export default {
        name: "TabBar",
    }
</script>

<style scoped lang="scss">

    #tabbar{
        position: fixed;
        display: flex ;
        justify-content: space-around;
        align-items: center;
        left: 0;bottom: 0;
        width: 100vw;height: 1rem;
        font-size: 35px;
        background-color: #f6f6f6;
        box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    }

</style>