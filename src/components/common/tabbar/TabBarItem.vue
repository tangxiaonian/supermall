<template>

    <div id="tabBarItem">

        <div v-if="isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>

        <slot name="text"></slot>
    </div>

</template>

<!--
    封装的 TabBarItem
-->

<script>
    export default {

        name: "TabBarItem",

        props: {
            path:{
                type:String
            }
        },
        computed: {
            isActive() {
                return this.path !== this.$route.path;
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    #tabBarItem {
        text-align: center;
    }
</style>