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
      <div :class="goods == true ? 'menu' :''">
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
      </div>
    </section>
    <!-- 下面的渲染部分 -->
    <div class="nav">
      <ul>
        <li v-for="(list,idx) in lists" :key="idx">
          <div class="libox">
            <div class="liimg">
              <img :src="list.photo" alt>
            </div>
            <div class="liright">
              <h1>
                {{list.name}}
                <p>{{list.names}}</p>
              </h1>
              <img
                src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2016071303"
                alt
              >
              <div class="wenzi">
                <span>￥{{list.price}}.90</span>
              </div>
              <div class="bottoms">
                <span class="top1">互动:(90%好评)</span>
                <span class="bottom1">售出{{list.shoujia}}.01w</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="nav-bottom" :start="start1">加载更多数据</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["默认", "销量", "价格", "筛选"],
      car: 0,
      day: ["品牌", "类型", "家庭便捷", "适用猫厕"],
      goods: false,
      lists: {},
      page: 1,
      length: 10,
      start: true,
      start1: true
    };
  },
  methods: {
    // 高亮
    check(idx) {
      this.car = idx;
    },
    // 跳转回去分类页面
    goto() {
      this.$router.push("app/lists");
    },
    // 浮顶菜单
    goTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector("#goo").offsetTop;
      if (scrollTop > offsetTop) {
        this.goods = true;
      } else {
        this.goods = false;
      }
      console.log(offsetTop);
    },
    //懒加载
    getScrollTop() {
      // console.log(1);
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
      console.log(this.scrollTop);
    },
    // 获取当前可视范围的高度
    getClientHeight() {
      // console.log(1);
      var clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      } else {
        clientHeight = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      }
      return clientHeight;
    },

    // 获取文档完整的高度
    getScrollHeight() {
      // console.log(1);
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    },
    // 滚动事件触发下拉加载
    async onScroll() {
      //   console.log(111111)
      if (
        this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <
        0
      ) {
        //   console.log(this.length)
        if (this.start) {
          let res = await this.$axios
            .get("http://localhost:5200/api/lists", {
              params: {
                zi: "lanjiazai",
                page: ++this.page,
                length: this.length
              }
            })
            .then(res => {
              // console.log(res);
              console.log(1);
              let arr = res.data;
              // console.log(arr)
              // console.log(this.goodslist)
              setTimeout(() => {
                for (var i = 0; i < arr.length; i++) {
                  this.lists.push(arr[i]);
                }
              }, 2000);
            });
          // console.log(res)
        }
      }
    }
  },
  // 浮顶菜单
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
    window.addEventListener("scroll", this.goTop);
  },
  // 跳转页面的时候删除
  destroyed() {
    window.removeEventListener("scroll", this.goTop);
  },
  // 初始化数据
  created() {
    this.$axios
      .get("http://localhost:5200/api/lists", {
        params: {
          zi: "shuju"
        }
      })
      .then(res => {
        var data = res.data;
        this.lists = data;
        // console.log(this.lists);
      });
  }
};
</script>
<style scoped>
.nav-bottom {
  width: 100%;
  height: 1rem;
  background: #ccc;
}
.nav-bottom div {
  text-align: center;
  line-height: 1rem;
  width: 100%;
  height: 1rem;
}
.menu {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
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


