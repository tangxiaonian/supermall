<template>
    <div class="toast" v-show="isShow">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data() {
            return {
                message: "",
                duration: 0,
                isShow:false
            };
        },
        methods:{
            show(message,duration = 1500) {
                this.isShow = true;
                this.message = message;
                this.duration = duration;

                setTimeout(() => {
                    this.isShow = false;
                    this.message = "";
                },duration);
            }
        }
    }
</script>

<style scoped lang="scss">

    .toast{

        position: fixed;
        z-index: 999;

        left: 50%;top: 50%;

        padding: .07rem;

        color: white;
        text-align: center;
        font-size: .35rem;
        border-radius: 5%;
        background-color: #333333;
        opacity: .6;

        transform: translate(-50%,-50%);

        p{
            color: white;
        }

    }

</style>