import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { name: '首页', path: '/home', component: '../view/home/Home.vue' },
    { name: '分类', path: '/category', component: '../view/category/Category.vue' },
    { name: '订单', path: '/order', component: '../view/order/Order.vue' },
    { name: '搜索', path: '/search', component: '../view/search/Search.vue' },
    { name: '我的', path: '/profile', component: '../view/profile/Profile.vue' },
].map(item => {
    return {
        path: item.path,
        name: item.name,
        component: () => import(item.component)
    }
});
routes.push(
    {
        path: '/',
        redirect: '/home'
    },
)

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
