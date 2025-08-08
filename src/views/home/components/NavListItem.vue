<template>
    <div class="item" @click="toStore">
        <img :src="itemContent.pic" />
        <div class="item-right">
            <div class="title">{{ itemContent.title }}</div>
            <div class="sales">{{ itemContent.sales }}</div>
            <div class="price">{{ itemContent.price }}</div>
            <div class="label">
                <div v-for="(i, index) in itemContent.label" :key="index">{{ i }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps({
    itemContent: {
        type: Object,
        default: {}
    }
})
const toStore = ()=>{
    router.push("/store")
}
</script>

<style lang="less" scoped>
.item {
    display: flex;
    padding: 10px;
    border-radius: 10px;
    background-color: white;

    img {
        width: 120px;
        height: 120px;
        border-radius: 10px;
        margin-right: 20px;
    }

    .item-right {
        display: flex;
        flex-flow: column;
        justify-content: space-between;

        .title {
            font-size: 16px;
        }

        .label {
            display: flex;
            div {
                background-color: #ffc400;
                padding: 2px 5px;
                border-radius: 10px;
            }
            div:first-child{
                margin-right: 5px;
            }

        }
    }
}
.item:not(:first-child){
    margin-top: 10px;
}
</style>