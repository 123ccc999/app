<template>
    <div class="cart">
        <Header title="购物车" :edit="true"/>
        <div class="content">
            <CartDetail v-if="notEmpty" :changeShow="changeShow"/>
            <Empty v-else></Empty>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Empty from '@/components/Empty.vue';
import Header from '@/components/Header.vue';
import CartDetail from './components/CartDetail.vue';
import { ref,onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const notEmpty = ref(true)
const init = ()=>{
    if(store.state.cartList.length == 0){
        notEmpty.value = false
    }
}
onMounted(()=>{
    init()
})

const changeShow = ()=>{
    notEmpty.value = false
}

</script>


<style lang="less" scoped>
.cart {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }
}
</style>