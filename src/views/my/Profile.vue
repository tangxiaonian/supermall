<template>
    <div class="profile">

        <profile-nav-bar></profile-nav-bar>

        <user-info></user-info>

        <section class="account">
            <div class="account-item">
                <div class="number">
                    <span class="balance">0.00</span>元
                </div>
                <div class="account-info">我的余额</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的优惠</div>
            </div>
            <div class="account-item">
                <div class="number">
                    <span class="balance">0</span>分
                </div>
                <div class="account-info">我的积分</div>
            </div>
        </section>

        <list-view :data-list="orderList"></list-view>
        <list-view :data-list="serviceList"></list-view>

    </div>
</template>

<script>

    import UserInfo from "./childCompos/UserInfo";
    import ProfileNavBar from "./childCompos/ProfileNavBar";
    import ListView from "./childCompos/ListView";

    export default {
        name: "Profile",
        components:{
            UserInfo,
            ProfileNavBar,
            ListView
        },
        data() {
            return {
                orderList: [
                    {icon: "icon-yonghu", text: "我的消息"},
                    {icon: "icon-jifen", text: "积分商城"},
                    {icon: "icon-huiyuan", text: "会员卡"}
                ],
                serviceList: [
                    {icon: "icon-gouwu", text: "我的购物车"},
                    {icon: "icon-gouwu", text: "下载购物APP"}
                ]
            };
        }
    }
</script>

<style scoped>

    .profile{
        width: 100%;
        height: 100vh;
        background-color: #f6f6f6;
    }

    .account {
        display: flex;
        height: 1.5rem;
    }

    .account-item {
        width: 100%;
        height: 100%;
        padding-top: 0.4rem;
        background-color: #fff;
        text-align: center;
    }

    .account-item:last-of-type {
        margin-right: 0;
    }

    .account-item {
        color: #666;
        font-size: .3rem;
    }

    .account-item .balance {
        font-size: .3rem;
        font-weight: 700;
        color: #ff5f3e;
    }

    .account-info {
        margin-top: 6px;
    }

</style>