import { createRouter,createWebHashHistory } from "vue-router";
import { showFailToast } from 'vant';

const router = createRouter({
    history:createWebHashHistory(),
    routes:[{
        path:'/',
        component:()=>import('../views/home/homeIndex.vue')
    },{
        path:'/home',
        component:()=>import('../views/home/homeIndex.vue')
    },{
        path:'/cart',
        component:()=>import('../views/cart/cartIndex.vue'),
        meta:{
            isAuth:true
        }
    },{
        path:'/order',
        component:()=>import('../views/order/orderIndex.vue'),
        meta:{
            isAuth:true
        }
    },{
        path:'/mine',
        component:()=>import('../views/mine/mineIndex.vue'),
        meta:{
            isAuth:true
        }
    },{
        path:'/store',
        component:()=>import('../views/store/storeIndex.vue')
    },{
        path:'/createorder',
        component:()=>import('../views/createOrder/createOrderIndex.vue'),
        meta:{
            isAuth:true
        }
    },{
        path:'/address',
        component:()=>import('../views/address/addressIndex.vue'),
        meta:{
            isAuth:true
        }
    },{
        path:'/addressedit',
        component:()=>import('../views/addressEdit/addressEdit.vue'),
        meta:{
            isAuth:true
        }
    },{
        path:'/userinfoedit',
        component:()=>import('../views/userinfoedit/userinfoeditIndex.vue'),
        meta:{
            isAuth:true
        }
    },{
        path:'/login',
        component:()=>import('../views/login/loginIndex.vue')
    },{
        path:'/register',
        component:()=>import('../views/register/registerIndex.vue')
    },]
})


router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        if(localStorage.isLogin == 'login'){
            next()
        }else{
            next('/login')
            showFailToast('请先登陆')
        }
    }else{
        next()
    }
})


export default router