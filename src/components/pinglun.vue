<template>
  <div class="pinlun">
    <div class="wap-top-bar hide" style="display: block;">
        <header class="ftc head-top bgfff zcolor rela">
            <div class="">
                <a href="javascript:void(0)" class="aback page-top go-back left-more">
                </a>
                <span class="ft18 topbar-title">萌爪联盟</span>
                <div class="zfont ft16 block">
                    <a class="zcolor topbar-link ">
                    </a>
                </div>
                <span class="mla pull-right Jbur ml J_bur right-more">
                </span>
            </div>
        </header>
        <div class="header-quick header-quicknew  hide Jtk" style="display:block">
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
    <div id="qpetMain">
        <div class="imgBox relative">
            <div class="qpetHeader imgBox">
                <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/mz_logo.png" style="width: 26.6667%;">
                <div class="flex flex-ac qpetTit pl15 pr15">
                    <div class="it1">
                        <a href="javascript:" class="go-back">
                            <span class="icon-left-open-big ft18"></span>
                        </a>
                    </div>
                    <a href="https://wap.epet.com/union/trials_intr_main.html" class="ft14">
                        <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/join.png" style="width: 30px;">
                    </a>
                </div>
            </div>
            <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/bg_img_trial.jpg">
            <div class="qIndex1 pl15 pr15">
                <div class="qIndexInfo bgfff flex pt15 relative qpetRound">
                    <div class="it1 ftc">
                        <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/left_trial.png" style="width: 50px;">
                        <p class="ft20">517</p>
                    </div>
                    <div class="it1 ftc">
                        <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/right_trial.png" style="width: 50px;">
                        <p class="ft20">2301</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="qpetIndexBox relative">
            <div class="bgfff qpetRound1 pt10 pb10">
                <div class="pl15 pr15">
                    <span class="qpetIco2 vertical mr5"></span>
                    <span class="ft14 vertical">排行榜</span>
                </div>
                <div class="flex pl15 pr15 pt10">
                    <div class="it1">
                        <ul class="qpetList1">
                            <li>
                                <a href="https://wap.epet.com/union/trials_other_main.html?uid=380803&amp;fw=0" class="qpetBox1 block ftc">
                                    <div class="imgBox relative">
                                        <img src="https://img1.epetbar.com/2014-09/17/853bee151bcf871503bcaab61413770f.gif?x-oss-process=style/fill&amp;$1=150&amp;$2=150"
                                            lazy="loaded">
                                    </div>
                                    <p class="ft12 textover">qqrr819</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://wap.epet.com/union/trials_other_main.html?uid=616230&amp;fw=0" class="qpetBox1 block ftc">
                                    <div class="imgBox relative">
                                        <img src="https://img1.epetbar.com/2015-04/07/f65932ac458a39490f96e3ecbaceb677.jpg?x-oss-process=style/fill&amp;$1=150&amp;$2=150"
                                            lazy="loaded">
                                    </div>
                                    <p class="ft12 textover">心字成灰</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://wap.epet.com/union/trials_other_main.html?uid=450574&amp;fw=0" class="qpetBox1 block ftc">
                                    <div class="imgBox relative">
                                        <img src="https://img1.epetbar.com/2018-09/15/10/1277e5ff2b7599307b126177a82e7e47.jpg?x-oss-process=style/fill&amp;$1=150&amp;$2=150"
                                            lazy="loaded">
                                    </div>
                                    <p class="ft12 textover">苏苏、</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://wap.epet.com/union/trials_other_main.html?uid=1629766&amp;fw=0" class="qpetBox1 block ftc">
                                    <div class="imgBox relative">
                                        <img src="https://img1.epetbar.com/2017-04/10/08/85b939110918a67e0cdccc62c3dc10b5.jpg?x-oss-process=style/fill&amp;$1=150&amp;$2=150"
                                            lazy="loaded">
                                    </div>
                                    <p class="ft12 textover">serenasmh</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://wap.epet.com/union/trials_score_rank.html" class="qpetBox1 block ftc">
                                    <div class="imgBox relative">
                                        <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/more_rank.png" lazy="loaded">
                                    </div>
                                    <p class="ft12 textover">更多</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bgfff mt5 pt15 pb15 border-b relative">
                <label for="switchCP" class="qpetSelect">
                    <input id="switchCP" checked="checked" type="checkbox" value="狗狗" class="weui-switch-cp__input">
                    <div class="qpetSelectBox relative ftc ft12">
                        <div>狗狗</div>
                        <div>猫猫</div>
                    </div>
                </label>
                <div class="swiper-container qpetMenu pt15 pl15 swiper-container-horizontal">
                    <div class="swiper-wrapper">
                        <div indexitem="0" class="swiper-slide textover active swiper-slide-active" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/all.png">
                            <span class="vertical">全部</span>
                        </div>
                        <div indexitem="1" class="swiper-slide textover swiper-slide-next" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://static.epetbar.com/static_web/wap/src/images/qpet/app/trial/handpick.png">
                            <span class="vertical">精选</span>
                        </div>
                        <div indexitem="2" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/09/3f04c26a090de46ce6d11abea6f37f7d.png">
                            <span class="vertical">主粮</span>
                        </div>
                        <div indexitem="3" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/09/41fda4a6a885c469a53a90f9e7765433.png">
                            <span class="vertical">零食</span>
                        </div>
                        <div indexitem="4" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/09/94204f6bcda3b256b3b19f68192875d7.png">
                            <span class="vertical">玩具</span>
                        </div>
                        <div indexitem="5" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/11/b5984812aafc4a212e84388cac7b5bf0.png">
                            <span class="vertical">保健</span>
                        </div>
                        <div indexitem="6" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/11/f14dfe5f9b85137cdbc17405c16a0efe.png">
                            <span class="vertical">医疗</span>
                        </div>
                        <div indexitem="7" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/11/215dfed5fd7f2b81d2d0e2e676becb96.png">
                            <span class="vertical">日用</span>
                        </div>
                        <div indexitem="8" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/11/ca00aa378295aaa0ea5172023741b658.png">
                            <span class="vertical">出行</span>
                        </div>
                        <div indexitem="9" class="swiper-slide textover" style="width: 68.3333px; margin-right: 15px;">
                            <img src="https://img2.epetbar.com/nowater/2018-01/31/11/005c5e4e02ad90aa3f05919f8c67a1fb.png">
                            <span class="vertical">香波</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul class="qpetList2">
                    <li>
                        <a href="https://wap.epet.com/union/trials_other_main.html?uid=3128268&amp;newTarget=true&amp;fw=0" class="flex pad15 flex-ac">
                            <div class="mr10">
                                <div class="imgBox qpetImg1">
                                    <img src="https://img1.epetbar.com/2018-12/01/17/71b0c55fa6c545f5ab016aa943ab43c0.jpg?x-oss-process=style/fill&amp;$1=150&amp;$2=150"
                                        lazy="loaded">
                                </div>
                            </div>
                            <div class="it1 mr10">
                                <div class="ft14 textover">眉眼如墨</div>
                                <span class="qpetDj" style="background: rgb(228, 249, 227); color: rgb(111, 200, 176);">体验师</span>
                            </div>
                            <div class="c666 ft12 it2 ftr textover">金毛 1岁23天</div>
                        </a>
                        <a href="https://wap.epet.com/union/trials_report_detail.html?trid=2727&amp;newTarget=true" class="block pl15 pr15 qpetImg2">
                            <div class="imgBox">
                                <img src="https://img1.epetbar.com/2019-03/14/17/b5a3540379f0f04effe15100e717ed3f.jpg" lazy="loaded">
                            </div>
                            <p class="ft14 textover pt10 pb10">休普小脚丫-始于颜值陷于质量忠于实用</p>
                        </a>
                        <div class="relative border-t pt10 ml15 mr15 pb15 flex flex-ac">
                            <div class="ft12 c999">27分钟前</div>
                            <div class="it1 ftr qpetColor">
                                <a href="" class="tu1">
                                  <img src="../img/tu1.png" alt=""> 71</a>
                                <a href="" class="tu2"><img src="../img/tu2.png" alt=""> 0</a>
                                <a href="" class="tu3">
                                  <img src="../img/tu3.png" alt=""> 0</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    created() {
      // console.log(this);
      // axios.get('https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&keyword=&page=10&curpage=1')
      this.$axios
        .get("https://www.nanshig.com/mobile/index.php", {
          params: {
            act: "goods",
            op: "goods_list",
            keyword: "",
            page: 10,
            curpage: 1
          }
        })
        .then(res => {
          // console.log(res);
          let data = res.data;
          this.goodslist = data.datas.goods_list;

          // console.log(data.datas.goods_list);
        });
    }
  }
};
</script>
<style scoped>
@import url(../style/pinlun.css);
</style>

