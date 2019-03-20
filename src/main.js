// 这里是引入的模块集合文件  创建store 也要在这里引入
import Vue from 'vue'

import './style/app.css'
import './js/1.js'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);
Vue.use(ElementUI);
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h('router-view'),
  router
}).$mount('#app')
