<template>

    <div class="tabController">

        <div class="tab-controller-item" v-for="(item,index) in titles" :key="index" @click="clickMe(index)">
            <span :class="{'active-item': currentIndex === index }">{{item}}</span>
        </div>

    </div>

</template>

<script>
    export default {
        name: "TabController",
        props:{
            titles:{
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {
                currentIndex:0
            };
        },
        computed:{
        },
        methods:{
            clickMe(index) {
                this.currentIndex = index;
                this.$emit("switchTabControll", index);
            }
        }
    }
</script>

<style scoped lang="scss">

    .tabController{

        display: flex;
        text-align: center;
        font-size: 50px;

        .tab-controller-item{

            flex: 1;

            .active-item{
                color: #ff8198;
                padding-bottom: 2px;
                border-bottom: 5px solid var(--color-high-text);
            }
        }
    }

</style>