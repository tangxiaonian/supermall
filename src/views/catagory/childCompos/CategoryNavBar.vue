<template>
    <div class="category-navbar">
        <nav-bar>
            <template v-slot:center>
                <div class="category-navbar-center">
                    分类
                </div>
            </template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../../components/common/navbar/NavBar";

    export default {
        name: "CategoryNavBar",
        components: {
            NavBar
        }
    }
</script>

<style scoped lang="scss">

    .category-navbar {
        font-size: .4rem;
        background-color: #ff8198;

        .category-navbar-center{
            color: white;
            text-align: center;
        }

    }

</style>