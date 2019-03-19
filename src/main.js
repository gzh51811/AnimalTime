// 这里是引入的模块集合文件  创建store 也要在这里引入
import Vue from 'vue'

import './style/app.css'
import './js/1.js'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(MintUI);
<<<<<<< HEAD
Vue.use(ElementUI);
import { Swipe, SwipeItem } from 'mint-ui';
=======

import { Swipe, SwipeItem } from 'mint-ui';[]
>>>>>>> f2474eaa55af069c926f383ea33d8dc62163f95d
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h('router-view'),
  router
}).$mount('#app')
