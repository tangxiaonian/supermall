<template>

    <div id="recomend-view">

        <div class="recomend-item" v-for="(item,index) in data" :key="index">

            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>

        </div>

    </div>

</template>

<script>

    export default {
        name:"RecomendView",
        data:function () {
            return {};
        },
        props:{
            data:{
                type:Array
            }
        }
    };

</script>

<style scoped lang="scss">

    #recomend-view {
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        font-size: .3rem;
        text-align: center;
    }

</style>