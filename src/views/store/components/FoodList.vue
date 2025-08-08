<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="data.activeIndex" height="88vw" :items="data.items" @click-nav="navClick">
            <template #content>
                <div class="item-bg" v-for="(item,index) in data.rightData" :key="index">
                    <food-list-item :item="item" :handleAdd="handleAdd" :handleNum="handleNum"></food-list-item>
                </div>
            </template>
        </van-tree-select>
    </div>

    <div v-else>
        {{ itemContent.content }}
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import FoodListItem from './FoodListItem.vue';
import ListItem from '@/components/ListItem.vue';

let data = reactive({
    activeIndex: ref(0),
    items: [],
    rightData:[]
})

const props = defineProps({
    itemContent: {
        type: Object,
        default: {}
    },
    index: {
        type: Number,
        default: 0
    }
})

const initData = () => {
    let newArray = []
    props.itemContent?.items?.forEach((item, index) => {
        newArray.push({
            text: item.text
        })
        if(data.activeIndex == index){
            data.rightData = item.children
        }
        

    })
    data.items = newArray
}
initData()


const navClick = (i)=>{
    data.activeIndex = i
    initData()
}

const handleAdd = (id)=>{
    data.rightData.forEach((item,index)=>{
        if(id == item.id){
            item.add = false
            item.num += 1
        }
    })
}

const handleNum = (value,detail)=>{
    data.rightData.forEach(item=>{
        if(item.id == detail.name){
            item.num = value
        }
    })
    console.log(data.rightData);
    
}
</script>

<style scoped lang="less">
.food-list {
    margin-top: 20px;

    .item-bg {
        padding: 10px;
    }
}

/deep/ .van-tree-select__item--active {
    color: #ffc400;
}

/deep/ .van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>