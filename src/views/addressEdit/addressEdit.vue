<template>
    <div class="adressEdit">
        <Header :title="address" />
        <van-address-edit :area-list="data.areaList" show-delete show-set-default :address-info="data.addressInfo"
            show-search-result :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { computed, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { showSuccessToast, showFailToast } from 'vant';

const store = useStore()
const route = useRoute()
const router = useRouter()
const data = reactive({
    areaList: {
        province_list: {
            110000: "广东省",
            120000: "浙江省",
        },
        city_list: {
            110100: "广州市",
            110200: "深圳市",
            120100: "杭州市",
            120200: "宁波市",
        },
        county_list: {
            110101: "天河区",
            110102: "海珠区",
            120102: "上城区",
            130102: "下城区",
        }
    },
    addressInfo: {}
})

const init = () => {
    store.state.userAddress.forEach(item => {
        if (item.id === Number(route.query.id)) {
            data.addressInfo = item
        }
    })
}
const address = computed(() => {
    return route.query.type == 'add' ? '地址新增' : '地址编辑'
})

const onSave = (content) => {
    if (route.query.type == 'add') {
        store.commit('addaddress', content)
    } else {
        store.commit('editaddress', content)
    }
    showSuccessToast("保存成功")
    setTimeout(() => {
        router.back()
    }, 1000)
}

const onDelete = (content) => {
    store.commit('deleteAddress', content)
    showSuccessToast("删除成功")
    setTimeout(() => {
        router.back()
    }, 1000)
}

onMounted(() => {
    init()
})

</script>

<style scoped lang="less">
/deep/ .van-button:before {
    background-color: #ffc400;
    border-color: #ffc400;
}

/deep/ .van-button--primary {
    background-color: #ffc400;
}
</style>