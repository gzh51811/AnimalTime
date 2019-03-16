<template>
  <div class="axb">
    <ul>
      <li>
        <router-link to="/app/home">
          <img src="../img/首页.png" alt>
          <a href>首页</a>
        </router-link>
      </li>
      <li>
        <router-link to="/app/lists">
          <img src="../img/02包裹、发货.png" alt>
          <a href>分类</a>
        </router-link>
      </li>
      <li>
        <router-link to="/app/pinglun">
          <img src="../img/应用中心.png" alt>
          <a href>萌爪联盟</a>
        </router-link>
      </li>
      <li>
        <router-link to="/app/cart">
          <img src="../img/mall.png" alt>
          <a href>购物车</a>
        </router-link>
      </li>
      <li>
        <router-link to="/app/mybar">
          <img src="../img/个人中心 (1).png" alt>
          <a href>我的E宝</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.axb {
  width: 100%;
  height: 1.386667rem;
  background: white;
  position: absolute;
  bottom: 0;
  position: fixed;
}
li {
  list-style: none;
  width: 20%;
  float: left;
  height: 1.386667rem;
  text-align: center;
}
img {
  width: 0.9rem;
  height: 0.8rem;
}
a {
  display: block;
  width: 100%;
  height: 0.266667rem;
  height: 100%;
  color: black;
  text-decoration: none;
}
</style>


