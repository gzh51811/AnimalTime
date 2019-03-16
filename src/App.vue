<template>
  <div class="app">
    <router-view></router-view>
    <Buttom/>
  </div>
</template>

<script>
import Buttom from "./component/bottom";

export default {
  components: {
    Buttom
  }
};
</script>

<style>
</style>
