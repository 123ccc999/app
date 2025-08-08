<template>
    <div class="address">
        <Header title="地址管理" />
        <van-address-list :list="data.list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useStore()
const data = reactive({
    list: []
})
const init = () => {
    data.list = store.state.userAddress.map(item => {
        return {
            id: item.id,
            name:item.name,
            tel:item.tel,
            address:`${item.province}${item.city}${item.county}${item.addressDetail}`,
            isDefault:item.isDefault
        }

    })
}

onMounted(()=>{
    init()
})

const onAdd = (item)=>{
    router.push({
        path:'/addressedit',
        query:{
            type:'add'
        }
    })
}
const onEdit = (item)=>{
    router.push({
        path:'/addressedit',
        query:{
            id:item.id,
            type:'edit'
        }
    })
}

</script>

<style scoped lang="less">
/deep/ .van-button::before,
/deep/ .van-tag--primary
{
    background-color: #ffc400;
    border-color: #ffc400;
}

/deep/ .van-button--normal  {
    background-color: #ffc400;
}

/deep/ .van-radio__icon {
    display: none;
}
</style>