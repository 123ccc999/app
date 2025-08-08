<template>
    <div class="create-order">
        <Header title="生成订单"></Header>
        <van-contact-card type="edit" :tel="data.tel" :name="data.name" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in $store.state.orderList" :key="index">
                <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic" />
            </div>
        </div>
        <div class="pay-wrap">
            <div>
                <span>金额</span>
                <span>￥{{ data.totalPrcie }}</span>
            </div>
            <div class="pay-btn">
                <van-button type="primary" block color="#ffc400" @click="handleCreateOrder">生成订单</van-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { showDialog } from 'vant';
import { useRouter,useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()
const store = useStore()
const data = reactive({
    tel: '123456789',
    name: 'ikun',
    totalPrcie: 0
})

const onEdit = () => {
    router.push('/address')
}

const initPrice = () => {
    let price = 0
    if (store.state.orderList.length) {
        store.state.orderList.forEach(item => {
            price += item.price * item.num
        })
    }
    data.totalPrcie = price
}

const initUser = () => {
    store.state.userAddress.forEach(item => {
        if (item.isDefault) {
            data.name = item.name
            data.tel = item.tel
        }
    })
}

const handleCreateOrder = () => {
    showDialog({
        title: '提示',
        message: '生成订单成功',
    }).then(() => {
        let newList = store.state.cartList.filter(item=>{
            return !route.query.list.includes(item.id+'')
        })
        store.commit('delete',newList)
        store.commit('orderListEd')
        router.push('/order')
    });
}

onMounted(() => {
    initPrice(),
        initUser()
})

</script>

<style scoped lang="less">
.create-order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay-wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay-btn {
            width: 90%;
            margin: 0 auto;
        }
    }
}
</style>