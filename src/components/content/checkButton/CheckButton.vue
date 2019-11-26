<template>
    <div :class="{active:isActive}" class="default">
        <img src="../../../assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
            isActive:{
                type:Boolean,
                default() {
                    return true;
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .default{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #333333;
    }

    .active{

        background-color: #ff5777;

        img {

            width: 100%;
            height: 100%;
        }

    }


</style>