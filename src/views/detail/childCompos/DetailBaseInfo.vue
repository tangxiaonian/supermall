<template>
    <div class="detail-base-info"  v-if="Object.keys(goodBaseInfo).length > 0">
        <p class="top">{{goodBaseInfo.title}}</p>
        <div class="center">
            <span>{{goodBaseInfo.price}}</span>
            <span>{{goodBaseInfo.oldPrice}}</span>
            <span>{{goodBaseInfo.discountDesc}}</span>
        </div>
        <div class="bottom">
            <span v-for="(item,index) in goodBaseInfo.columns" :key="index">
                {{item}}
            </span>
        </div>
        <div class="bottom-service">
            <div v-for="(item,index) in goodBaseInfo.services" :key="index">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        name: "DetailBaseInfo",

        props:{
            goodBaseInfo:{
                type:Object,
                default() {
                    return {};
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .detail-base-info{

        .top{
            margin: .1rem;
            font-size: .45rem;
            color: #333333;
        }

        .center{

            font-size: .25rem;
            margin: .1rem;

            span{
                display: inline-block;
                margin: .08rem;
            }

            :first-child{
                font-size: .4rem;
                color: #ff5777;
            }

            :nth-child(2){
                text-decoration:line-through;
            }

            :last-child{
                padding: .05rem;
                margin-bottom: .05rem;
                color: white;
                background-color: red;
                border-radius: 10%;
            }
        }

        .bottom,.bottom-service{
            display: flex;
            justify-content: space-between;
            padding: .05rem;margin: .3rem .1rem;
            font-size: .25rem;
        }

        .bottom-service{
           color: #333333;
            div{
                display: flex;
                align-items: center;
            }

        }

    }

</style>