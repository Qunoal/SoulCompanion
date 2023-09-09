import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"

const app = createApp(App);

app.use(router);
app.provide('$router', router); // 确保提供了路由实例
app.mount('#app');