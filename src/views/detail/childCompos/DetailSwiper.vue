<template>

    <swiper
            :banner="topImage"
            class="swiper">
    </swiper>

</template>

<script>
    import Swiper from "../../../components/common/swiper/Swiper";

    export default {
        name: "DetailSwiper",
        props: {
            topImage:{
                type:Array,
                default() {
                    return [];
                }
            }
        },
        data() {
            return {};
        },
        components:{
            Swiper
        }
    }
</script>

<style scoped lang="scss">

    .swiper{

        height: 8rem;

    }


</style>