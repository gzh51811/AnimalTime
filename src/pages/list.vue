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
          <li @click="moren()">默认</li>
          <li>销量</li>
          <li @click="check()" :text="text">价格</li>
          <li>筛选</li>
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
    <div class="nav" :start="start1">
      <ul>
        <li v-for="(list,idx) in lists" :key="idx" @click.stop="gotolist(list.id)">
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
    <div class="nav-bottom">
      <div :class="node == true ? 'jiazai' :'meiyou'">正在加载更多数据</div>
      <div :class="node == true ? 'meiyou' :'jiazai'">没有更多数据了</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: ["品牌", "类型", "家庭便捷", "适用猫厕"],
      goods: false,
      lists: {},
      page: 0,
      length: 10,
      start: true,
      start1: true,
      text: true,
      node: true
    };
  },
  methods: {
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
    //点击升序降序
    check() {
      if (this.text == true)
        this.$axios
          .get("http://localhost:5200/api/lists", {
            params: {
              zi: "paixu"
            }
          })
          .then(res => {
            // console.log(res);
            let arr = res.data;
            // this.goodslist=[];
            this.lists = arr;
            // console.log(this.goodslist)
          });
      else {
        this.$axios
          .get("http://localhost:5200/api/lists", {
            params: {
              zi: "jiangxu"
            }
          })
          .then(res => {
            // console.log(res);
            let arr = res.data;
            // this.goodslist=[];
            this.lists = arr;
            // console.log(this.goodslist)
          });
      }
      if (this.text == true) {
        this.text = "xxx";
      } else {
        this.text = true;
      }
    },
    moren() {
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
    },
    goto() {
      this.$router.push("app/lists");
    },
    gotolist(id, list) {
      console.log(id);
      // this.$router.push("/goods?id=" + id);
      this.$router.push({ name: "Goods", query: { id }, params: { id } });
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
      if (
        this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <=
        0
      ) {
        // console.log(this.length);
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
                this.node = false;
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
  // 跳转回去分类页面
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
<style>
@import url(../style/list.css);
</style>
