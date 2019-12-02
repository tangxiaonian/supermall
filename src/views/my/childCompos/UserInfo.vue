<template>
    <div class="user-info">

        <div class="left">
            <slot>
                <i class="iconfont icon-yonghu"></i>
            </slot>
        </div>

        <div class="center">
            <slot>
                <p>登录/注册</p>
                <p>暂无绑定手机号</p>
            </slot>
        </div>
        <div class="right">
            <slot>
                <i class="iconfont icon-icon1"></i>
            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped lang="scss">

    .user-info {

        display: flex;

        justify-content: center;
        align-items: center;

        height: 2rem;

        color: white;
        font-size: .3rem;
        background-color: var(--color-tint);

        .left {

            border-radius: 50%;

            i{
                color: white;
                font-size: 1.5rem;

            }
        }

        .center{
            flex: 1;

            p:last-child{
                font-size: .25rem;
            }
        }

        .right i{
            font-size: .8rem;
        }

    }

</style>