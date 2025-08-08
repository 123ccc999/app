<template>
    <div class="content-item">
        <div class="left">
            <van-checkbox v-if="props.showCheckBox" :name="item.id" checked-color="#ffc400"></van-checkbox>
            <img :src="item.pic">
            <div class="text">
                <div class="title">{{ item.title }}</div>
                <van-icon name="add-o" v-if="item.add" @click="handleAdd(item.id)" />
                <van-stepper v-else @change="handleNum" :name="item.id" />
            </div>
        </div>
        <div class="price">￥{{ item.price }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    item:{
        type:Object,
        default:{}
    },
    handleAdd:{
        type:Function,
        default:()=>{}
    },
    handleNum:{
        type:Function,
        default:()=>{}
    },
    showCheckBox:{
      type:Boolean,
      default:false
    }
})
</script>

<style scoped lang="less">
  .content-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .price {
      font-size: 16px;
      font-weight: 600;
    }
    .left {
      display: flex;
      align-items: center;
      flex: 1;
      img {
        margin-left: 10px;
        width: 60px;
        height: 60px;
        margin-right: 10px;
        border-radius: 10px;
      }
      .text {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: 100%;
        position: relative;
        flex: 1;
        .title {
          font-size: 16px;
        }
        .van-icon {
          color: red;
          font-size: 20px;
          position: absolute;
          right: 4px;
          bottom: 4px;
        }
      }
    }
  }

</style>