<template>
    <div class="detail-size-info">

        <div class="top">

            <p>
                {{itemParams.info.key}}
            </p>

            <table border="1px solid #3333">
                <tr v-for="(item,index) in itemParams.info['set']"
                    :key="index">
                    <td>{{item.key}}</td>
                    <td>{{item.value}}</td>
                </tr>
            </table>

        </div>

        <div class="bottom">

            <p>{{itemParams.rule['key']}}</p>

            <table border="1px solid #3333">
                <tr v-for="(items,index) in itemParams.rule.tables[0]" :key="index">
                    <td v-for="(item,indey) in items" :key="indey">{{item}}</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
    export default {
        name: "DetaiSizeInfo",
        props:{
            itemParams:{
                type:Object,
                default() {
                    return {};
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .detail-size-info{

        font-size: .4rem;

        .top{

            tr{
                :last-child{
                    color: #ff5777;
                }
            }
        }

        p{
            margin-top: .1rem;
        }

        table{

            width: 100%;

            tr{

                width: 100%;
                margin: .5rem;

                td{

                    padding: .1rem;

                    text-align: center;

                    font-size: .3rem;

                }
            }

        }
    }

</style>