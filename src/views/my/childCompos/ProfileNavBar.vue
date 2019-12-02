<template>
    <div class="profile-navbar">
        <NavBar>
            <template v-slot:center>
                我的信息
            </template>
        </NavBar>
    </div>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";

    export default {
        name: "ProfileNavBar",
        components:{
            NavBar
        }
    }
</script>

<style scoped lang="scss">

    .profile-navbar{
        color: white;
        text-align: center;
        font-size: .35rem;
        background-color: #ff8198;
    }

</style>