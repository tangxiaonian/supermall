<template>

    <div class="detail-navbar">

        <NavBar>

            <template v-slot:left>

                <div class="navbar-left" @click="back">
                    <img src="../../../assets/img/common/back.svg"
                         width="80px"
                         height="80px"
                         alt="">
                </div>

            </template>

            <template v-slot:center>

                <div class="center-content">
                    <div v-for="(item,index) in titles"
                         :class="{'active': index === currentIndex }"
                         :key="index"
                         @click="clickItem(index)">
                        {{item}}
                    </div>
                </div>

            </template>
        </NavBar>

    </div>

</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";

    export default {
        name: "DetailNavBar",
        components:{
            NavBar
        },
        data() {
            return {
                titles: ['商品','参数','评论','推荐'],
                currentIndex:0
            }
        },
        methods:{
            // 点击选项
            clickItem(index) {
                this.currentIndex = index;
            },
            back() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped lang="scss">

    .detail-navbar{

        position: relative;
        left: 0;
        z-index: 4;
        background-color: white;
        font-size: 45px;

        .navbar-left{

            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;

        }

        .center-content{
            display: flex;
            justify-content: space-around;
        }

        .active{
            color: var(--color-high-text);
        }

    }

</style>