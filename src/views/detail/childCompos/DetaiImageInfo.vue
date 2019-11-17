<template>
    <div class="detail-image-info">
        <p>{{detailImage.key}}</p>
        <img :src="item" width="100%"
             v-for="(item,index) in detailImage.list"
             :key="index"
        />
    </div>
</template>

<script>
    export default {
        name: "DetaiImageInfo",
        props:{
            detailImage:{
                type:Object,
                default() {
                    return {};
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .detail-image-info{
        p{
            font-size: .35rem;
            margin: .1rem;
        }
    }

</style>