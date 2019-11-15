<template>

    <div class="swiper">

        <swiper :options="swiperOption">

            <swiper-slide class="swiper-item" v-for="(item,index) in banner" :key='index'>
                <img class='swiper-img' :src='item' width="100%" height="100%" @load="imgLoadFinish"/>
            </swiper-slide>

            <div id="pagination" class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>

        </swiper>

    </div>

</template>

<script>

    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {

        name: "Swiper",
        props: {
            banner: {
                type: Array
            }
        },
        data: function () {
            return {
                swiperOption: {
                    // 参数选项,显示小点
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    //循环
                    loop: true,
                    //每张播放时长3秒，自动播放
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                    //滑动速度
                    speed: 1000,
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                flage: false
            }
        },
        components: {
            swiper, swiperSlide
        },
        methods: {
            imgLoadFinish() {
                if (!this.flage) {
                    this.$emit("calculationImgHeight");
                }

                this.flage = true;
            }
        },
        mounted() {

        }
    };
</script>

<style scoped lang="scss">

    @import '~swiper/css/swiper.css';

    .swiper-container {
        width: 100%;
        height: 100%;
    }


</style>