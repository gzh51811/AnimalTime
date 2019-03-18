<template>
  <div class="box">
    <section class="header">
      <!-- 头部 -->
      <section class="top">
        <div class="img1" @click=" goto()"></div>
        <div class="center">
          <span>商品列表</span>
        </div>
        <div class="img2"></div>
      </section>
      <!-- 头部下面的隐藏按钮 (有时间就做) -->
    </section>
    <!-- 搜索框 -->
    <section class="suo">
      <section class="search">
        <section class="search-img"></section>
        <input type="text" placeholder="点解搜索产品" class="font">
      </section>
    </section>
    <!-- 功能栏 -->
    <section id="goo">
      <ul class="goo-top">
        <li
          v-for="(lefts,idx) in list"
          :key="idx"
          @click="check(idx)"
          :class="{active:car===idx}"
        >{{lefts}}</li>
      </ul>
      <ul class="goo-bottom">
        <li v-for="days in day" :key="days">
          <img src="../img/icon.png" alt>
          <span class="font">{{days}}</span>
        </li>
      </ul>
    </section>
    <!-- 下面的渲染部分 -->
    <div class="nav">
      <ul>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="libox">
            <div class="liimg">
              <img src="../img/logo.png" alt>
            </div>
            <div class="liright">
              <h1>伟嘉 精选带鱼味妙鲜包 成猫
                <p>85g*12袋</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥39.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(98%好评)</span>
                <span class="bottom1">售出1298</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
window.onload = () => {
  var top = document.querySelector("#goo");
  console.log(top);
  //这个是JS的方法
  var top1 = top.offsetTop;
  // 获取box2盒子距离顶部的距离
  window.onscroll = function() {
    var top2 = window.scrollY;
    console.log(top2);
    //获取window垂直滚动框的高度
    if (top2 >= top1) {
      top.className = "menu";
    } else {
      top.className = "";
    }
  };
};
export default {
  data() {
    return {
      list: ["默认", "销量", "价格", "筛选"],
      car: 0,
      day: ["品牌", "类型", "家庭便捷", "适用猫厕"]
    };
  },
  methods: {
    check(idx) {
      this.car = idx;
    },
    goto() {
      this.$router.push("app/lists");
    }
  }
};
</script>
<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
}
.bottoms .bottom1 {
  margin-left: 0.1rem;
  color: #999;
}
.bottoms .top1 {
  color: #999;
}
.bottoms {
  margin-top: 0.133333rem;
}
.wenzi span {
  color: red;
}
.liright img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.133333rem;
}
.liright {
  width: 70%;
  height: 100%;
  background: white;
  float: left;
}
.liimg {
  width: 30%;
  height: 100%;
  background: white;
  position: relative;
  float: left;
}
.liimg img {
  width: 80%;
  height: 100%;
  position: absolute;
  left: 10%;
}
.libox {
  width: 98%;
  height: 95%;
  background: white;
  margin: auto;
  margin-top: 0.1rem;
}
.nav {
  width: 100%;
  background: white;
}
.nav ul {
  width: 100%;
  height: 100%;
}
.nav ul li {
  width: 100%;
  height: 3.333333rem;
  background: white;
  border-bottom: 1px solid #ccc;
}
.box {
  background: wheat;
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 1.333333rem;
  background: white;
  border-bottom: 1px solid #ccc;
}
.top {
  width: 90%;
  height: 100%;
  margin: auto;
  background: white;
  position: relative;
}
.img1 {
  margin: 0;
  position: absolute;
  /* left: 0.04rem; */
  width: 1rem;
  height: 1rem;
  top: 0.2rem;
  background: url(../img/topIco.png) no-repeat;
  background-size: 100%;
  background-position: 0 0;
}
.center {
  width: 100%;
  height: 100%;
  line-height: 1.333333rem;
  text-align: center;
  font-size: 20px;
}
.img2 {
  margin: 0;
  position: absolute;
  right: 0.2rem;
  width: 1rem;
  height: 1rem;
  top: 5%;
  background: url(../img/topIco.png) no-repeat;
  background-size: 100%;
  background-position: 0 -1.9rem;
}
.suo {
  width: 100%;
  height: 1.6rem;
  background: white;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.search {
  width: 90%;
  background: #f6f6f6;
  height: 1.066667rem;
  border-radius: 0.133333rem;
  -webkit-border-radius: 0.133333rem;
  -moz-border-radius: 0.133333rem;
  flex: 1;
  -webkit-flex: 1;
  position: absolute;
  top: 0.25rem;
  left: 5%;
}
#goo {
  width: 100%;
  height: 2.4rem;
  background: red;
  z-index: 99999;
}
.search-img {
  background: url(../img/search-ico.png) no-repeat;
  background-size: 100%;
  width: 0.533333rem;
  height: 0.533333rem;
  position: absolute;
  top: 25%;
  left: 5%;
}
.font {
  height: 1.066667rem;
  border-radius: 0.08rem;
  border: none;
  background: #f6f6f6;
  font-family: "Microsoft Yahei", tahoma, arial;
  padding: 0px;
  outline: none;
  width: 90%;
  text-indent: 5px;
  margin-left: 1rem;
}
.goo-top {
  width: 100%;
  height: 1.4rem;
  background: white;
  border-bottom: 1px solid #ccc;
}
.goo-top li {
  width: 25%;
  height: 100%;
  line-height: 1.4rem;
  text-align: center;
  float: left;
  font-size: 14px;
}
.goo-bottom {
  width: 100%;
  height: 1rem;
  background: white;
  border-bottom: 1px solid #ccc;
}
.goo-bottom li {
  width: 25%;
  height: 100%;
  float: left;
}
.goo-bottom li .font {
  color: black;
  display: block;
  width: 100%;
  margin: auto;
  height: 0.8rem;
  background: #f6f6f6;
  margin-top: 0.1rem;
  line-height: 0.8rem;
  text-align: center;
}
.goo-bottom li img {
  background: url(../img/icon.png) no-repeat;
  float: right;
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 10%;
  margin-right: 10%;
}
.active {
  color: #ea5858;
}
</style>


