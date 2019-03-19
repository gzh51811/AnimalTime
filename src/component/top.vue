<template>
  <section>
    <!-- 头部 -->
    <header>
      <div class="img"></div>
      <span class="ft18">
        <div class="httptop">
          <span>商品</span>
          <span>详情</span>
          <span>评论</span>
        </div>
      </span>
      <div class="img1"></div>
    </header>
    <!-- 轮播图 -->
    <section class="lunbo">
      <mt-swipe :auto="2000" style="height:100%;width:100%">
        <mt-swipe-item>
          <img style="height:100%;width:100%" src="../img/banner1.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../img/1.png" alt style="height:100%;width:100%">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../img/2.png" alt style="height:100%;width:100%">
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <div class="shitu">
      <div class="shitu-left">
        <div class="left11">
          <div class="left11-top">
            <span class="blod">
              ￥
              <span class="bbb">41.00</span>
            </span>
            <span class="bload">315优惠专场</span>
          </div>
          <div class="left11-bottom">
            <span>
              价格
              <del>55.00</del>
            </span>
          </div>
        </div>
      </div>
      <div class="shitu-right">
        <span>{{list}}</span>
      </div>
    </div>
    <div class="sss"></div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      times: 15252532704502 - 13698720000000,
      list: {}
    };
  },
  mounted() {
    setInterval(() => {
      var aaa = parseInt(this.times);
      console.log(aaa);
      var bbb = new Date().getTime();
      var rightTime = aaa - bbb;
      if (rightTime > 0) {
        var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
        var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
        var mm = Math.floor((rightTime / 1000 / 60) % 60);
        var ss = Math.floor((rightTime / 1000) % 60);
      }
      this.list = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
    }, 1000);
  }
};
</script>
<style scoped>
.shitu-right {
  width: 40%;
  float: left;
  height: 100%;
  text-align: center;
  color: white;
  font-size: 14px;
  line-height: 1.866667rem;
}
.left11-bottom span {
  color: white;
  font-size: 14px;
}
.left11-bottom {
  width: 100%;
  height: 50%;
}
.bload {
  margin-left: 0.3rem;
  color: white;
  font-size: 16px;
}
.bbb {
  font-size: 16px;
  height: 100%;
  border-radius: 0.08rem;
  border: none;
  /* font-family: "Microsoft Yahei", tahoma, arial; */
  outline: none;
  text-indent: 5px;
  margin-left: 0.1rem;
}
.left11-top .blod {
  font-weight: 700;
  /* float: right; */
  color: rgb(230, 182, 134);
}
.left11-top {
  width: 100%;
  height: 50%;
}
.left11 {
  width: 90%;
  height: 80%;
  margin: auto;
  margin-top: 2.5%;
}
.shitu-left {
  width: 60%;
  height: 100%;
  float: left;
}

/* / */
.sss {
  widows: 100%;
  height: 10rem;
  background: pink;
}
.section {
  width: 100%;
  height: 100%;
}
.shitu {
  width: 100%;
  height: 1.866667rem;
  background: url(https://static.epetbar.com/static_web/wap/src/images/activity/brand-daybg1.png);
}
.lunbo {
  width: 100%;
  height: 10rem;
  background: purple;
}
header {
  width: 100%;
  height: 1.8rem;
  background: white;
  border-bottom: 1px solid #ccc;
}
.img {
  margin: 0;
  position: absolute;
  /* left: 0.04rem; */
  width: 1rem;
  height: 1rem;
  top: 2%;
  left: 0.2rem;
  background: url(../img/topIco.png) no-repeat;
  background-size: 100%;
  background-position: 0 0;
}
.ft18 {
  width: 90%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin: 0 auto;
  background: white;
  height: 100%;
}
.httptop {
  width: 90%;
  margin: auto;
  text-align: center;
  height: 100%;
  line-height: 1.8rem;
}
.httptop span {
  margin: 5px;
}
.img1 {
  margin: 0;
  position: absolute;
  right: 0.2rem;
  width: 1rem;
  height: 1rem;
  top: 2%;
  background: url(../img/topIco.png) no-repeat;
  background-size: 100%;
  background-position: 0 -1.9rem;
}
</style>


