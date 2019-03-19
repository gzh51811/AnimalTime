<template>
  <section>
    <div class="left">
      <div>
        <img src="../img/星星空.png" alt>
      </div>
      <span>收藏</span>
    </div>
    <div class="right">
      <div class="enen">
        <img src="../img/111.png" alt>
      </div>
      <span>购物车</span>
    </div>
    <div class="bottom22">加入购物车</div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.bottom22 {
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 1.8rem;
  color: white;
  background: #f03e3e;
  font-size: 18px;
  float: right;
}
section {
  width: 100%;
  height: 1.8rem;
  background: white;
  position: absolute;
  bottom: 0;
  position: fixed;
}
.left {
  width: 25%;
  height: 100%;
  background: white;
}
.left div {
  width: 25px;
  height: 25px;
  margin: auto;
  margin-top: 10px;
}
.left div img {
  widows: 100%;
  height: 100%;
}
.right {
  width: 25%;
  height: 100%;
  background: white;
  position: relative;
}
span {
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 7px;
}
.right .enen {
  width: 25px;
  height: 25px;
  margin: auto;
  margin-top: 10px;
}
.right .enen img {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 20px;
  top: 7px;
}
</style>

