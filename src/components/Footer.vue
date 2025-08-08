<template>
    <div class="footer">
        <div class="item">
            <router-link to="/home" class="nav-item" active-class="nav-color">
                <van-icon name="wap-home-o" />
                首页
            </router-link>
        </div>
        <div class="item">
            <router-link to="/cart" class="nav-item" active-class="nav-color">
                <van-icon name="shopping-cart-o" />
                购物车
            </router-link>
        </div>
        <div class="item">
            <router-link to="/order" class="nav-item" active-class="nav-color">
                <van-icon name="orders-o" />
                订单
            </router-link>
        </div>
        <div class="item">
            <router-link to="/mine" class="nav-item" active-class="nav-color">
                <van-icon name="user-o" />
                我的
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.footer{
    background-color: white;
    border-top: 1px solid #eee;
    display: flex;
    font-size:20px ;
    .item{
        flex: 1;
        .nav-color{
            color:#ffc400;
        }
        .nav-item{
            display: flex;
            flex-flow: column;
            align-items: center;
        }
    }
}
</style>