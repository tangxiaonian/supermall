<template>
    <div class="list-view">

        <div class="list-view-item" v-for="(item,index) in dataList" :key="index">
            <i :class="'iconfont ' + item.icon"></i>
            {{item.text}}
        </div>

    </div>
</template>

<script>
    export default {
        name: "ListView",
        props:{
            dataList:{
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .list-view{

        margin-top: .3rem;
        font-size: .35rem;

        .list-view-item{
            padding: .2rem;
            background-color: white;
            border-bottom: 1px solid #f1f1f1;

            i{
                font-size: .4rem;
            }

        }

    }

</style>