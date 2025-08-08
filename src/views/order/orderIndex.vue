<template>
    <div class="order">
        <Header title="订单"></Header>
        <div class="content">
            <van-tabs v-model:active="active" color="#ffc400">
                <van-tab :title="item" v-for="(item, index) in data.tabList" :key="index" >
                    <div v-for="(item1, index1) in $store.state.orderListEnd" :key="index1" 
                    v-if="item==='全部'&& $store.state.orderListEnd.length"
                    >
                        <van-card :num="item1.num" :price="item1.price" :title="item1.title"
                            :thumb="item1.pic" />
                    </div>
                    <div v-else>
                        <Empty></Empty>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';
import Empty from '@/components/Empty.vue';

const store = useStore()
const data = reactive({
    tabList: [
        '全部',
        '交易完成',
        '待付款',
        '待发货',
        '已发货',
    ]
})

</script>


<style lang="less" scoped>
.order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>