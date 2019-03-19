<template>
    <div class="cart">
        <!-- 这是购物车 -->
        <div class="wap-top-bar hide" style="display: block;">
            <header class="ftc head-top bgfff zcolor rela">
                <div class="">
                    <a href="javascript:void(0)" class="aback page-top go-back left-more">
                    </a>
                    <span class="ft18">购物车</span>
                    <router-link to="/app/cart" class="ft18 edit">完成</router-link>
                    <img src="../img/imgtk-new.png" alt="" class="rttop">
                </div>
            </header>
            <div class="header-quick header-quicknew  hide Jtk">
                <a href="https://wap.epet.com/">
                    <span class="icon1"></span>
                    <p>首页</p>
                </a>
                <a href="https://wap.epet.com/category.html">
                    <span class="icon2"></span>
                    <p>商品分类</p>
                </a>
                <a href="https://wap.epet.com/cart/">
                    <span class="icon4" id="getCartNum"></span>
                    <p>购物车</p>
                </a>
                <a href="https://wap.epet.com/app/user">
                    <span class="icon5"></span>
                    <p>我的e宠</p>
                </a>
            </div>
        </div>
        <div id="CartBox">
            <div class="mycart" data-reactid=".0">
                <div data-reactid=".0.0">
                    <noscript data-reactid=".0.0.0"></noscript>
                    <div class="mycart-li mt bgfff" data-reactid=".0.0.1:0" style="opacity: 1; z-index: 3;">
                        <div class="ordertip-h" data-reactid=".0.0.1:0.0" style="height: 45px;">
                            <div class="ordertip" data-replace="0" data-reactid=".0.0.1:0.0.0">
                                <span data-reactid=".0.0.1:0.0.0.0"></span>
                                <span data-reactid=".0.0.1:0.0.0.1"></span>
                                <div class="checkbox mycart-tit pad10 bgfff" data-reactid=".0.0.1:0.0.0.2">
                                    <input type="checkbox" value="1" name="order" id="checkboxInputWid1" data-reactid=".0.0.1:0.0.0.2.0">
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
                        <div class="checkbox-order1 overflow" :key="idx" v-for="(item,idx) in goodlist" data-reactid=".0.0.1:0.1:0">
                            <div class="checkbox mycart-pro pl" data-reactid=".0.0.1:0.1:0.0">
                                <span data-reactid=".0.0.1:0.1:0.0.0"></span>
                                <span data-reactid=".0.0.1:0.1:0.0.1"></span>
                                <input type="checkbox" value="201091" name="goods" id="goodsCheck201091" data-reactid=".0.0.1:0.1:0.0.2">
                                <div class="cart-proli pb10" data-reactid=".0.0.1:0.1:0.0.3">
                                    <div class="spli1 rela" data-reactid=".0.0.1:0.1:0.0.3.0">
                                        <div class="cart-img rela overflow loadimg-fixed" data-reactid=".0.0.1:0.1:0.0.3.0.0">
                                            <a href="/goods/201091.html" class="block" data-reactid=".0.0.1:0.1:0.0.3.0.0.0">
                                                <img :src="item.img" class="image" data-reactid=".0.0.1:0.1:0.0.3.0.0.0.0">
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
                                            <div class="mt c89" data-reactid=".0.0.1:0.1:0.0.3.0.1.2">
                                                <b class="mr3" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.0">
                                                    <span class="ft12" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.0.0">¥</span>
                                                    <span class="ft15" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.0.1">{{item.price}}.00</span>
                                                </b>
                                                <div class="buynum-wrap clearfix fr" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.1">
                                                    <span class="fl subnum bold" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.1.0">─</span>
                                                    <div class="text buynum ftc fl cart_buynum_txt" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.1.1">
                                                        <input type="text" :value="item.qty" size="2" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.1.1.0">
                                                    </div>
                                                    <span class="fl addnum ft18" data-reactid=".0.0.1:0.1:0.0.3.0.1.2.1.2">+</span>
                                                </div>
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
                                <input type="checkbox" value="0" name="order" id="checkAllGoods" data-reactid=".0.0.3.0.0.0">
                                <label data-reactid=".0.0.3.0.0.1">
                                    <div class="c666" data-reactid=".0.0.3.0.0.1.0">
                                        <span class="ft14" data-reactid=".0.0.3.0.0.1.0.0">总额：</span>
                                        <b class="ft14 cred" data-reactid=".0.0.3.0.0.1.0.1">
                                            <span data-reactid=".0.0.3.0.0.1.0.1.0">¥</span>
                                            <span data-reactid=".0.0.3.0.0.1.0.1.1">0.00</span>
                                        </b>
                                    </div>
                                    <div class="c666 ft12" data-reactid=".0.0.3.0.0.1.1">
                                        <span data-reactid=".0.0.3.0.0.1.1.0"></span>
                                    </div>
                                </label>
                            </div>
                            <div class="no-buy fr ftc" data-reactid=".0.0.3.0.1">
                                <a href="javascript:;" class="afff ft14" data-reactid=".0.0.3.0.1.0">
                                    <span data-reactid=".0.0.3.0.1.0.0">去结算(</span>
                                    <span data-reactid=".0.0.3.0.1.0.1">7</span>
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
export default {
  data() {
    return {
      shuju: "",
      goodlist: {}
    };
  },
  created() {
    this.$axios
      .get("http://localhost:5200/api/cart", {
        params: {
          shuju: "xl"
        }
      })
      .then(res => {
        // console.log(2, res);
        let data = res.data;
        // console.log(data);
        this.goodlist = data;
        console.log(this.goodlist);
      });
  }
};
</script>

<style scoped>
@import url(../style/editcart.css);
</style>
