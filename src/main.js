import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import '@/assets/common.css'; //公共样式
import '@/assets/font/font.css';
import '@/assets/iconfont/iconfont.css'
import { common } from './assets/common.js'
import './filter'
import { Toast } from 'vant'
import { Dialog } from 'vant';
import Mock from '@/mock'

// import echarts from 'echarts'
// import Vconsole from "vconsole"
import { watch } from "less";
import $ from 'zepto'
// Vue.prototype.$echarts = echarts;
// Vue.prototype.$vConsole = new Vconsole();
Vue.use(common);
Vue.use(Toast);
Vue.use(Dialog);

// router.beforeEach((to, from, next) => {
//     // 进入首页隐藏返回组件
//     if (to.fullPath == "/") {
//         store.commit("updated", {
//             key: "backHomeShow",
//             value: false
//         })
//     } else {
//         store.commit("updated", {
//             key: "backHomeShow",
//             value: true
//         })
//     }



//     /* 路由发生变化修改页面title */
//     if (to.meta.title) {
//         document.title = to.meta.title
//     }
//     next()
// })

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");