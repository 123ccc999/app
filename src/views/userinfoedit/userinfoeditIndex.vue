<template>
    <div class="userinfoedit">
        <Header />
        <van-field v-model="data.name" label="昵称" placeholder="请输入用户名" />
        <van-field v-model="data.sign" label="个性签名" placeholder="个性签名" disabled/>
        <van-field v-model="data.pass" label="密码" placeholder="请输入密码" />
        <van-button type="primary" class="save-btn" color="#ffc400" block round @click="onSave">保存</van-button>
        <van-button type="primary" class="save-btn" color="#ffc400" block round @click="logOut">退出登录</van-button>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { reactive } from 'vue';
import { showSuccessToast, showFailToast } from 'vant';
import { useRouter } from 'vue-router';

const router = useRouter()
const data = reactive({
    name:'',
    sign:'米团外卖',
    pass:''
})
const onSave = ()=>{
    if(data.name && data.pass){
        let userInfo = JSON.parse(localStorage.userInfo)
        let newData = {
            user:data.name || userInfo.name,
            pass:data.pass || userInfo.pass
        }
        localStorage.setItem('userInfo',JSON.stringify(newData))
        showSuccessToast('修改成功')
        router.push('/mine')
    }else{
        showFailToast("请输入用户名和密码")
    }
}

const logOut = ()=>{
    localStorage.removeItem('isLogin')
    router.push('/login')
    showSuccessToast('退出成功')
}

</script>

<style scoped lang="less">
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>