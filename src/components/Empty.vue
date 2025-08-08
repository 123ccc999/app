<template>
    <div class="empty-content">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cart-empty"></use>
        </svg>
        <span>空空如也</span>
    </div>
</template>

<script setup>

</script>

<style lang='less' scoped>
.empty-content {
    flex: 1;
    margin: 20px;
    font-size: 16px;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    height: 72vh;

    .icon {
        margin-bottom: 10px;
    }
    span{
        font-size: 30px;
        font-weight: 500;
    }
}
</style>