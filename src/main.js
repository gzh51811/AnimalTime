// 这里是引入的模块集合文件  创建store 也要在这里引入
import Vue from 'vue'

import './style/app.css'
import './js/1.js'
import router from './router';
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);


Vue.config.productionTip = false

new Vue({
  render: h => h('router-view'),
  router
}).$mount('#app')
