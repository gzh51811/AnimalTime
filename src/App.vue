<template>
  <div class="app">
    <router-view></router-view>
    <Buttom/>
  </div>
</template>

<script>
// import axios from "axios";
// import MintUI from "mint-ui";
// import "mint-ui/lib/style.css";
// Vue.use(MintUI);
// Vue.prototype.$axios = axios;
import Buttom from "./component/bottom";

export default {
  name: ".app",
  components: {
    Buttom
  }
};
</script>

<style scoped>
</style>
