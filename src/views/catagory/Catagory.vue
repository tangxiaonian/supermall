<template>

    <Scroll class="wrap">

        <li>分类1</li>
        <li>分类2</li>
        <li>分类3</li>
        <li>分类4</li>
        <li>分类5</li>
        <li>分类6</li>
        <li>分类7</li>
        <li>分类8</li>

    </Scroll>


</template>

<script>

    import Scroll from "../../components/common/scroll/Scroll";

    export default {
        name: "Catagory",
        mounted() {


        },
        components:{
            Scroll
        }
    }
</script>

<style scoped>

    .wrap{
        height: 5rem;
        background-color: red;
        overflow: hidden;
    }

</style>