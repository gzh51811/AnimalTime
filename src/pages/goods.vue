<template>
  <section>
    <!-- 头部 -->
    <header>
      <div class="img" @click="gotolist()"></div>
      <span class="ft18">
        <div class="httptop">
          <span>商品</span>
          <span>详情</span>
        </div>
      </span>
      <div class="img1"></div>
    </header>
    <!-- 轮播图 -->
    <section class="lunbo">
      <mt-swipe :auto="2000" style="height:100%;width:100%">
        <mt-swipe-item>
          <img style="height:100%;width:100%" :src="goodslist[0].photo" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../img/1.png" alt style="height:100%;width:100%">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../img/2.png" alt style="height:100%;width:100%">
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <!-- 轮播图下面的 -->
    <div class="shitu">
      <div class="shitu-left">
        <div class="left11">
          <div class="left11-top">
            <span class="blod">
              ￥
              <span class="bbb">{{goodslist[0].price}}.00</span>
            </span>
            <span class="bload">315优惠专场</span>
          </div>
          <div class="left11-bottom">
            <span class="router">
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
    <!-- 白条 -->
    <div class="baitiao"></div>
    <!-- 促销 -->
    <div class="sss">
      <div class="red">促销</div>
      <div class="reds">多件优惠</div>
      <span>买的多，省的多</span>
    </div>
    <!-- 白条 -->
    <div class="baitiao"></div>
    <div class="dapei">
      <div class="throught">
        <div class="dapei-left">超值搭配</div>
        <div class="dapei-right">E仔推荐</div>
      </div>
    </div>
    <!-- 搭配推荐 -->
    <div class="dapei-bottom">
      <ul>
        <li>
          <img
            src="https://img1.epetbar.com/2018-06/12/13/900489656de7177e6af74ad3197e35ce.jpg@!300w-b"
            alt
          >
          <p>￥102.82</p>
          <span>省￥23.23</span>
        </li>
        <li>
          <img
            src="https://img1.epetbar.com/2018-06/20/15/5c52201ca11106e2e866545a6beb3084.jpg@!300w-b"
            alt
          >
          <p>￥200.00</p>
          <span>省￥199.23</span>
        </li>
        <li>
          <img
            src="https://img1.epetbar.com/2018-12/07/09/5f3edfa7b5c77ef4a5474a2e12c04545.jpg@!300w-b"
            alt
          >
          <p>￥56.82</p>
          <span>省￥55.00</span>
        </li>
      </ul>
    </div>
    <!-- 白条 -->
    <div class="baitiao"></div>
    <div class="froms">
      <div class="froms-1">
        <div class="font-1">购买数量</div>
        <!-- <div class="prev" @click="prev(val)">+</div>
        <input type="text" :value="val" min="1" max="30">
        <div class="pre" @click="pre(val)">-</div>-->
        <el-input-number
          v-model="num1"
          @change="handleChange"
          :min="1"
          :max="30"
          label="描述文字"
          size="small"
          style="margin-top:5%"
        ></el-input-number>
      </div>
      <div class="baitiao1"></div>
      <div class="froms-2">
        <div>
          <img src="../img/正.png" alt>
          <span>正品保证</span>
        </div>
        <div>
          <img src="../img/正.png" alt>
          <span>99蚊包优</span>
        </div>
        <div>
          <img src="../img/正.png" alt>
          <span>30日退货</span>
        </div>
      </div>
    </div>
    <div class="baitiao"></div>
    <!-- 评论的区域 -->
    <div class="pinglun">
      <div class="pinglun-left">
        宠友评价
        <span>(99)</span>
      </div>
      <div class="pinglun-right">好评 99%</div>
    </div>
    <div class="enen1">
      <ul>
        <li>
          <div class="li-left">
            <div class="li-img">
              <img src="../img/tang.png" alt>
            </div>
          </div>
          <div class="li-right">
            <p class="nihao">汤某某</p>
            <span>加入萌宠250天</span>
            <p>一直都买萌宠上的东西 非常不错,令我非常满意,下次我会继续买</p>
            <div class="li-rightimg">
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
            </div>
            <img src="../img/Vip8.png" alt class="imgne">
          </div>
        </li>
        <li>
          <div class="li-left">
            <div class="li-img">
              <img src="../img/tang.png" alt>
            </div>
          </div>
          <div class="li-right">
            <p class="nihao">汤某某</p>
            <span>加入萌宠250天</span>
            <p>一直都买萌宠上的东西 非常不错,令我非常满意,下次我会继续买</p>
            <div class="li-rightimg">
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
            </div>
            <img src="../img/Vip8.png" alt class="imgne">
          </div>
        </li>
        <li>
          <div class="li-left">
            <div class="li-img">
              <img src="../img/tang.png" alt>
            </div>
          </div>
          <div class="li-right">
            <p class="nihao">汤某某</p>
            <span>加入萌宠250天</span>
            <p>一直都买萌宠上的东西 非常不错,令我非常满意,下次我会继续买</p>
            <div class="li-rightimg">
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
            </div>
            <img src="../img/Vip8.png" alt class="imgne">
          </div>
        </li>
        <li>
          <div class="li-left">
            <div class="li-img">
              <img src="../img/tang.png" alt>
            </div>
          </div>
          <div class="li-right">
            <p class="nihao">汤某某</p>
            <span>加入萌宠250天</span>
            <p>一直都买萌宠上的东西 非常不错,令我非常满意,下次我会继续买</p>
            <div class="li-rightimg">
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
            </div>
            <img src="../img/Vip8.png" alt class="imgne">
          </div>
        </li>
        <li>
          <div class="li-left">
            <div class="li-img">
              <img src="../img/tang.png" alt>
            </div>
          </div>
          <div class="li-right">
            <p class="nihao">汤某某</p>
            <span>加入萌宠250天</span>
            <p>一直都买萌宠上的东西 非常不错,令我非常满意,下次我会继续买</p>
            <div class="li-rightimg">
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
            </div>
            <img src="../img/Vip8.png" alt class="imgne">
          </div>
        </li>
        <li>
          <div class="li-left">
            <div class="li-img">
              <img src="../img/tang.png" alt>
            </div>
          </div>
          <div class="li-right">
            <p class="nihao">汤某某</p>
            <span>加入萌宠250天</span>
            <p>一直都买萌宠上的东西 非常不错,令我非常满意,下次我会继续买</p>
            <div class="li-rightimg">
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
              <img src="../img/星星.png" alt>
            </div>
            <img src="../img/Vip8.png" alt class="imgne">
          </div>
        </li>
      </ul>
      <div class="lingwai"></div>
      <div class="color"></div>
    </div>

    <!-- 这里是购物车 -->
    <section class="name">
      <div class="left">
        <div>
          <img src="../img/星星空.png" alt>
        </div>
        <span class="ft">收藏</span>
      </div>
      <div class="right">
        <div class="enen">
          <img src="../img/111.png" alt>
        </div>
        <span class="ft">购物车</span>
      </div>
      <div class="bottom22" @click="golist()">加入购物车</div>
    </section>
    <div v-show="fes" class="black"></div>
    <div v-show="fes" class="menu">
      <div class="menu-top">商品已成功加入购物车</div>
      <div class="menu-bottom">
        <div class="menu-left" @click="goliss()">继续购物</div>
        <div class="menu-right" @click=" goto(goodslist[0].id,num1)">去购物车</div>
      </div>
    </div>
  </section>
</template>
 <script>
export default {
  data() {
    return {
      times: 15252532704502 - 13698720000000,
      list: {},
      //       // 上面的倒计时的
      goodslist: [],
      num1: 1,
      fes: false
    };
  },
  methods: {
    async getData() {
      let { id: id } = this.$route.query;
      let goodslist = await this.$axios.get("http://localhost:5200/api/goods", {
        params: {
          id: id
        }
      });
      var data = goodslist.data;
      console.log(data);
      this.goodslist = data;
    },
    handleChange(value) {
      console.log(value);
    },
    golist() {
      if (this.fes == true) {
        this.fes = false;
      } else {
        this.fes = true;
      }
    },
    goliss() {
      if (this.fes == true) {
        this.fes = false;
      } else {
        this.fes = true;
      }
    },
    goto(id, num1) {
      this.$router.push({ name: "Cart", query: { id }, params: { id }, num1 });
    },
    gotolist() {
      this.$router.push("/list");
    }
  },

  created() {
    this.getData();
    setInterval(() => {
      var aaa = parseInt(this.times);
      var bbb = new Date().getTime();
      var rightTime = aaa - bbb;
      // console.log(rightTime);
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
* {
  margin: 0;
  padding: 0;
}
.color {
  width: 100%;
  height: 100px;
}
.lingwai {
  width: 100%;
  height: 113px;
  background: url(../img/11111111111.png) no-repeat;
  background-size: 100%;
}
.imgne {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 25%;
  right: 3%;
}
.li-rightimg {
  width: 110px;
  height: 20px;
  position: absolute;
  top: 5%;
  right: 1%;
}
.li-rightimg img {
  width: 20px;
  height: 20px;
}
.li-right .nihao {
  font-size: 15px;
  margin-top: 10px;
}
.li-right p {
  margin-left: 10px;
  margin-top: 10px;
}
.li-right span {
  width: 100%;
  height: 20px;
  margin-left: 10px;
  color: #ccc;
}
.li-right {
  width: 80%;
  height: 100%;
  background: white;
  float: left;
  position: relative;
}
.li-img img {
  width: 100%;
  height: 100%;
}
.li-img {
  width: 70%;
  height: 40%;
  border: 1px solid white;
  border-radius: 5px;
  position: absolute;
  top: 20%;
  left: 15%;
}
.li-left {
  width: 20%;
  height: 100%;
  background: white;
  position: relative;
  float: left;
}
.enen1 li {
  width: 100%;
  height: 4rem;
  background: red;
}
.pinglun-left {
  width: 30%;
  height: 100%;
  float: left;
  background: white;
}
.pinglun-left span {
  font-size: 10px;
  color: #ccc;
}
.pinglun-right {
  width: 30%;
  height: 100%;
  float: right;
  background: white;
  color: #ccc;
}
.pinglun {
  width: 100%;
  height: 1.333333rem;
  background: white;
  text-align: center;
  line-height: 1.3rem;
  border-bottom: 1px solid #ccc;
}
.froms-2 div {
  width: 33.33%;
  height: 100%;
  text-align: center;
  float: left;
  margin-top: 5%;
}
.menu-bottom {
  width: 100%;
  height: 40%;
  font-size: 16px;
  text-align: center;
  line-height: 1.5rem;
}
.menu-right {
  width: 50%;
  height: 100%;
  float: left;
  color: #58bc58;
}
.menu-left {
  width: 50%;
  height: 100%;
  border-right: 1px solid #ccc;
  float: left;
}
.menu-top {
  width: 100%;
  height: 60%;
  border-bottom: 1px solid #ccc;
  color: #ccc;
  font-size: 16px;
  text-align: center;
  line-height: 2.5rem;
}
.black {
  width: 100%;
  height: 50rem;
  background: black;
  position: absolute;
  top: 0;
  opacity: 0.6;
  z-index: 9998;
}
.menu {
  width: 80%;
  height: 4rem;
  background: white;
  position: absolute;
  top: 200px;
  opacity: 1;
  left: 10%;
  z-index: 9999;
  border-radius: 10px;
  border: 1px solid #ccc;
  position: fixed;
}
/* 这里上面是点击购物车按钮出现的盒子*/
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
.name {
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
  text-align: center;
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
  text-align: center;
}
.router {
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
.baitiao1 {
  width: 100%;
  height: 5%;
  background: whitesmoke;
  float: left;
}
.froms-2 {
  width: 100%;
  height: 45%;
  background: white;
  float: left;
}
.pre {
  width: 30px;
  height: 30px;
  float: left;
  border: 1px solid #ccc;
  margin-top: 6%;
  border-left: none;
  text-align: center;
  line-height: 25px;
  cursor: pointer;
}
input {
  width: 70px;
  height: 30px;
  margin: auto;
  margin-top: 6%;
  padding-left: 8%;
  float: left;
}
.prev {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  float: left;
  text-align: center;
  line-height: 25px;
  margin-top: 6%;
  margin-left: 10px;
  border-right: none;
  cursor: pointer;
}
.font-1 {
  width: 20%;
  height: 100%;
  background: white;
  float: left;
  text-align: center;
  line-height: 2rem;
  font-size: 14px;
}
.froms-1 {
  width: 100%;
  height: 50%;
  background: white;
  float: left;
}
.froms {
  width: 100%;

  height: 4rem;
  background: red;
}
.dapei-bottom ul li span {
  color: orange;
}
.dapei-bottom ul {
  width: 100%;
}
.dapei-bottom ul li {
  width: 33.33%;
  height: 100%;
  margin: auto;
  text-align: center;
  float: left;
}
.dapei-bottom ul li img {
  width: 76%;
  height: 100%;
}
.dapei-bottom ul li p {
  color: red;
}
.dapei-bottom {
  widows: 100%;
  height: 4rem;
  background: white;
}
.dapei-right {
  width: 30%;
  height: 100%;
  float: right;
  background: white;
  text-align: center;
  line-height: 1.2rem;
  color: #ccc;
}
.dapei-left {
  width: 30%;
  height: 100%;
  text-align: center;
  line-height: 1.2rem;
  background: white;
  float: left;
}
.throught {
  width: 100%;
  height: 100%;
  background: white;
  float: left;
}
.dapei {
  width: 100%;
  height: 1.2rem;
  background: red;
}
.sss span {
  display: block;
  width: 30%;
  height: 60%;
  background: white;
  float: left;
  margin-left: 10px;
  text-align: center;
  margin-top: 1.7%;
}
.reds {
  width: 20%;
  height: 60%;
  margin-left: 10px;
  background: white;
  float: left;
  text-align: center;
  border: 1px solid red;
  margin-top: 1.7%;
}
.red {
  width: 15%;
  height: 100%;
  background: white;
  text-align: center;
  line-height: 1.066667rem;
  color: #ccc;
  font-size: 14px;
  font-weight: 700;
  float: left;
}
.sss {
  widows: 100%;
  height: 1.066667rem;
  background: white;
}
.enen1 {
  width: 100%;
  height: 10rem;
  background: pink;
}
.baitiao {
  width: 100%;
  height: 10px;
  background: whitesmoke;
}
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
  outline: none;
  text-indent: 5px;
  margin-left: 0.1rem;
}
.left11-top .blod {
  font-weight: 700;
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

.section {
  width: 100%;
  height: 100%;
  background: #ccc;
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




