<template>
    <div class="detail-common-info" v-if="Object.keys(comments).length > 0">

        <h3>用户评价</h3>

        <div class="content">

            <div class="user-info-top">
                <img :src="comments.list[0].user.avatar" alt="">
                &nbsp;
                <span>{{comments.list[0].user.uname}}</span>
            </div>

            <div class="user-info-content">
                <p>{{comments.list[0].content}}</p>
                <p>
                    <span>{{ comments.list[0].created | formateDate}}</span>
                    &nbsp;&nbsp;
                    <span>{{comments.list[0].style}}</span>
                </p>
            </div>

            <div class="user-info-imgs" v-if="comments.list[0].images">
                <img :src="comments.list[0].images[0]" alt="">
            </div>

        </div>

    </div>
</template>

<script>
    import {formateDate} from "../../../common/Utils";

    export default {
        name: "DetailCommentInfo",
        props:{
            comments:{
                type:Object,
                default() {
                    return {};
                }
            }
        },
        filters:{

            formateDate(value) {

                return formateDate(new Date(value*1000),"yyyy-MM-dd HH:mm:ss");

            }
        }
    }
</script>

<style scoped lang="scss">

    h3{
        margin-top: .1rem;
        font-size: .4rem;
    }

    p{
        margin: .2rem 0;
    }

    .content{
        margin: .2rem 0;
        font-size: .3rem;
        border-top: 1px solid #333333;
        border-bottom: 1px solid #333333;

        .user-info-top{
            display: flex;
            align-items: center;
            margin: 0 .05rem;

            img{
                border-radius: 50%;
            }

        }

        .user-info-content{

            :first-child{
                margin-left: .1rem;
                margin-right: .1rem;
            }

        }

    }

</style>