<template>
  <div class="cart">
    <!-- 这是购物车 -->
    <div class="wap-top-bar">
      <header class="ftc head-top bgfff zcolor rela">
        <div class="">
          <router-link to="/app/home" class="aback page-top go-back left-more">
          </router-link>
          <span class="ft18">购物车</span>
          <router-link to="/editcart" class="ft18 edit">编辑</router-link>
          <img src="../img/imgtk-new.png" alt="" class="rttop" @click="change">
        </div>
      </header>
      <div class="header-quick header-quicknew Jtk" v-show="showNav">
        <router-link to="/app/home">
          <span class="icon1"></span>
          <p>首页</p>
        </router-link>
        <router-link to="/app/lists">
          <span class="icon2"></span>
          <p>商品分类</p>
        </router-link>
        <router-link to="/app/cart">
          <span class="icon4" id="getCartNum"></span>
          <p>购物车</p>
        </router-link>
        <router-link to="/app/mybar">
          <span class="icon5"></span>
          <p>我的e宠</p>
        </router-link>
      </div>
    </div>
    <div id="CartBox">
        <div class="m-emptycoupon  ftc bgfff" data-reactid=".0.0" :style="{display:(this.goodlist.length==0)?'block':'none'}">
    <div class="emptydiv" data-reactid=".0.0.0">
      <div data-reactid=".0.0.0.0">
        <span class="u-emtcoupon" data-reactid=".0.0.0.0.0">&nbsp;</span>
      </div>
      <div class="ftc emttip ft16 c666 mt" data-reactid=".0.0.0.1">您的购物车空空如也</div>
      <div class="emt-a mt20" data-reactid=".0.0.0.2">
        <router-link to="/app/home" class="c999 ft16 mr5" data-reactid=".0.0.0.2.0">随便逛逛</router-link>
      </div>
    </div>
  </div>
      <div class="mycart" data-reactid=".0" :style="{display:(this.goodlist.length==0)?'none':'block'}">
        <div data-reactid=".0.0">
          <noscript data-reactid=".0.0.0"></noscript>
          <div class="mycart-li mt bgfff" data-reactid=".0.0.1:0" style="opacity: 1; z-index: 3;">
            <div class="ordertip-h" data-reactid=".0.0.1:0.0" style="height: 45px;">
              <div class="ordertip" data-replace="0" data-reactid=".0.0.1:0.0.0">
                <span data-reactid=".0.0.1:0.0.0.0"></span>
                <span data-reactid=".0.0.1:0.0.0.1"></span>
                <div class="checkbox mycart-tit pad10 bgfff" data-reactid=".0.0.1:0.0.0.2">
                  <input type="checkbox" v-model="checkAll" value="1" name="order" id="checkboxInputWid1" data-reactid=".0.0.1:0.0.0.2.0">
                  <label for="checkboxInputWid1" data-reactid=".0.0.1:0.0.0.2.1">
                    <span class="afff mr5 fl store" data-reactid=".0.0.1:0.0.0.2.1.0">E宠西部中央仓</span>
                  </label>
                  <a href="javascript:;" data-reactid=".0.0.1:0.0.0.2.2">
                    <b class="bold ftc fl cartc-btn helpico" data-reactid=".0.0.1:0.0.0.2.2.0">?</b>
                  </a>
                  <em data-reactid=".0.0.1:0.0.0.2.3"></em>
                  <div class="clear" data-reactid=".0.0.1:0.0.0.2.4"></div>
                  <em data-reactid=".0.0.1:0.0.0.2.5"></em>
                </div>
              </div>
            </div>
            <div class="checkbox-order1 overflow" :key="idx"  v-for="(item,idx) in goodlist" data-reactid=".0.0.1:0.1:0">
              <div class="checkbox mycart-pro pl" data-reactid=".0.0.1:0.1:0.0">
                <span data-reactid=".0.0.1:0.1:0.0.0"></span>
                <span data-reactid=".0.0.1:0.1:0.0.1"></span>
                <input type="checkbox"  @click="select(idx)" v-model="selected" :value="idx"  name="goods" id="goodsCheck201091" data-reactid=".0.0.1:0.1:0.0.2">
                <div class="cart-proli pb10" data-reactid=".0.0.1:0.1:0.0.3">
                  <div class="spli1 rela" data-reactid=".0.0.1:0.1:0.0.3.0">
                    <div class="cart-img rela overflow loadimg-fixed" data-reactid=".0.0.1:0.1:0.0.3.0.0">
                      <a href="/goods/201091.html" class="block" data-reactid=".0.0.1:0.1:0.0.3.0.0.0">
                        <img :src="item.photo" class="image" data-reactid=".0.0.1:0.1:0.0.3.0.0.0.0">
                        <span data-reactid=".0.0.1:0.1:0.0.3.0.0.0.1"></span>
                      </a>
                    </div>
                    <div class="cart-font pr" data-reactid=".0.0.1:0.1:0.0.3.0.1">
                      <a href="/goods/201091.html" class="block" data-reactid=".0.0.1:0.1:0.0.3.0.1.0">
                        <h1 class="c333" data-reactid=".0.0.1:0.1:0.0.3.0.1.0.0">
                          <span data-reactid=".0.0.1:0.1:0.0.3.0.1.0.0.1"></span>
                          <span data-reactid=".0.0.1:0.1:0.0.3.0.1.0.0.2">{{item.title}}</span>
                        </h1>
                      </a>
                      <span data-reactid=".0.0.1:0.1:0.0.3.0.1.1"></span>
                      <div class="mt c89 bb" data-reactid=".0.0.1:0.1:0.0.3.0.1.2" style="position: relative; height:80px">
                        <b class="mr3" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.0" style="position: absolute;left:0;top:5px">
                          <span class="ft12" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.0.0">¥</span>
                          <span class="ft15" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.0.1">{{item.price}}.00</span>
                        </b>
                        <el-input-number v-model="item.qty" @change="handleChange(item.qty,item.id)" :min="1" :max="999" style="position: absolute;right:0;top:0"></el-input-number>
                      </div>
                    </div>
                  </div>
                  <span data-reactid=".0.0.1:0.1:0.0.3.1"></span>
                </div>
              </div>
              <div class="delete-pro cfff ft15" data-reactid=".0.0.1:0.1:0.1">
                <div class="move-del" data-reactid=".0.0.1:0.1:0.1.0">
                  <div class="move-delfont" data-reactid=".0.0.1:0.1:0.1.0.0">删除</div>
                </div>
              </div>
            </div>
          </div>
          <span data-reactid=".0.0.2"></span>
          <div class="cart-float" data-reactid=".0.0.3">
            <div class="cart-footer bgfff clearfix pad10 cart-twocenter" data-reactid=".0.0.3.0">
              <div class="checkbox all-price fl" data-reactid=".0.0.3.0.0">
                <input type="checkbox"  v-model="checkAll" value="0" name="order" id="checkAllGoods" data-reactid=".0.0.3.0.0.0">
                <label data-reactid=".0.0.3.0.0.1">
                  <div class="c666" data-reactid=".0.0.3.0.0.1.0">
                    <span class="ft14" data-reactid=".0.0.3.0.0.1.0.0">总额：</span>
                    <b class="ft14 cred" data-reactid=".0.0.3.0.0.1.0.1">
                      <span data-reactid=".0.0.3.0.0.1.0.1.0">¥</span>
                      <span data-reactid=".0.0.3.0.0.1.0.1.1">{{totalprice()}}.00</span>
                    </b>
                  </div>
                  <div class="c666 ft12" data-reactid=".0.0.3.0.0.1.1">
                    <span data-reactid=".0.0.3.0.0.1.1.0"></span>
                  </div>
                </label>
              </div>
              <div class="no-buy ftc pp" data-reactid=".0.0.3.0.1" :style="{background:(this.selected.length>0)?'red':'#bdbdbd'}">
                <a href="javascript:;" class="afff ft14" data-reactid=".0.0.3.0.1.0">
                  <span data-reactid=".0.0.3.0.1.0.0">去结算(</span>
                  <span data-reactid=".0.0.3.0.1.0.1">{{totalnum()}}</span>
                  <span data-reactid=".0.0.3.0.1.0.2">)</span>
                </a>
              </div>
              <span class="ft13 fr mt5 discount mr5" data-reactid=".0.0.3.0.2">
                <span data-reactid=".0.0.3.0.2.0"></span>
                <b class="ml5" data-reactid=".0.0.3.0.2.1"></b>
              </span>
            </div>
            <span data-reactid=".0.0.3.1"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*引入公共方法*/

import { setCookie, getCookie } from "../js/cookie.js";
export default {
  data() {
    return {
      shuju: "",
      selected: [],
      goodlist: [],
      showNav: false,
      scrollTop: 0,
      name: ""
    };
  },
  computed: {
    checkAll: {
      get() {
        return this.goodlist.every((item, idx) => this.selected.includes(idx));
      },
      set(checked) {
        this.selected = checked ? this.goodlist.map((item, idx) => idx) : [];
      }
    }
  },
  created() {    
    // console.log(localStorage.getItem("token"))
    if (localStorage.getItem("token")==null) {
      this.$router.push("/login");
    }
    this.$axios
      .get("http://47.103.65.186:5200/api/cart", {
        params: {
          shuju: "xl"
        }
      })
      .then(res => {
        let data = res.data;
        this.goodlist = data;
      });
  },
  methods: {
    change() {
      this.showNav = !this.showNav;
    },
    select(idx) {
      // 获取idx在数组中的位置

      let index = this.selected.indexOf(idx);
      if (index >= 0) {
        // 如果当前已勾选，则取消勾选
        this.selected.splice(index, 1);
      } else {
        this.selected.push(idx);
      }
    },
    totalprice() {
      let total = 0;

      this.selected.forEach(item => {
        total += this.goodlist[item].price * this.goodlist[item].qty;
      });
      return total;
    },

    totalnum() {
      let num = 0;
      this.selected.forEach(item => {
        num += this.goodlist[item].qty;
      });
      return num;
    },
    handleChange(value, id) {
      this.$axios.get("http://47.103.65.186:5200/api/cart", {
        params: {
          shuju: "update",
          value,
          id
        }
      });
    }
  }
  
};
</script>

<style scoped>
@import url(../style/cart.css);
</style>
