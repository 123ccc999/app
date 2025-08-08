<template>
    <div class="login">
        <Header title="注册" />
        <div class="img">米团</div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="data.username" name="user" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="data.password" type="password" name="pass" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" autocomplete="off" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" color="#ffc400">
                    注册
                </van-button>
                <van-button round block type="info" native-type="submit" color="#ffc400" @click="toLogin"
                    class="register">
                    去登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { showSuccessToast, showFailToast } from 'vant';

const router = useRouter()

const data = reactive({
    username: '',
    password: ''
})
const onSubmit = (value) => {
    if (localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        if (userInfo['user'] === value['user']) {
            showFailToast('该用户已存在')
            return
        }
    } else {
        register(value)
    }
}

const register = (value) => {
    localStorage.setItem('userInfo', JSON.stringify(value))
    showSuccessToast('注册成功')
    router.push('/login')
}

const toLogin = () => {
    router.push('/login')
}

</script>

<style lang="less" scoped>
.login {
    .img {
        width: 200px;
        height: 200px;
        background-color: #ffc400;
        font-size: 80px;
        line-height: 200px;
        text-align: center;
        border-radius: 40px;
        margin: 20px auto;
    }

    .register {
        margin-top: 20px;
    }
}
</style>