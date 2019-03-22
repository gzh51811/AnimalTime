<template>
  <div class="pinlun">
    <div class="wap-top-bar hide" style="display: block;">
        <header class="ftc head-top bgfff zcolor rela">
            <div class="">
                <router-link to="/app/home" class="aback page-top go-back left-more">
                </router-link>
                <span class="ft18 topbar-title">萌爪联盟</span>
                <div class="zfont ft16 block">
                    <a class="zcolor topbar-link ">
                    </a>
                </div>
                <span class="mla pull-right Jbur ml J_bur right-more" @click="change">
                </span>
            </div>
        </header>
        <div class="header-quick header-quicknew Jtk" v-show="showNav">
            <a href="javascript:;">
                <span class="icon1"></span>
                <p>首页</p>
            </a>
            <a href="javascript:;">
                <span class="icon2"></span>
                <p>商品分类</p>
            </a>
            <a href="javascript:;">
                <span class="icon4" id="getCartNum"></span>
                <p>购物车</p>
            </a>
            <a href="javascript:;">
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
                    <a href="javascript:;   " class="ft14">
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
            <div>
                <ul class="qpetList2">
                    <li v-for="(ka,idx) in goodlist" :key="idx">
                        <a href="javascript:;" class="flex pad15 flex-ac">
                            <div class="mr10">
                                <div class="imgBox qpetImg1">
                                    <img :src="ka.img"
                                        lazy="loaded">
                                </div>
                            </div>
                            <div class="it1 mr10">
                                <div class="ft14 textover">{{ka.tilte}}</div>
                                <span class="qpetDj" style="background: rgb(228, 249, 227); color: rgb(111, 200, 176);">{{ka.title1}}</span>
                            </div>
                            <div class="c666 ft12 it2 ftr textover">{{ka.petmsg}}</div>
                        </a>
                        <a href="javascript:;" class="block pl15 pr15 qpetImg2">
                            <div class="imgBox">
                                <img :src="ka.img" lazy="loaded">
                            </div>
                            <p class="ft14 textover pt10 pb10">{{ka.title}}</p>
                        </a>
                        <div class="relative border-t pt10 ml15 mr15 pb15 flex flex-ac">
                            <div class="ft12 c999">{{ka.showtime}}</div>
                            <div class="it1 ftr qpetColor">
                                <a href="" class="tu1">
                                  <img src="../img/tu1.png" alt="">{{ka.view}}</a>
                                <a href="" class="tu2"><img src="../img/tu2.png" alt="">{{ka.zan}}</a>
                                <a href="" class="tu3">
                                  <img src="../img/tu3.png" alt="">{{ka.zank}}</a>
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
  data() {
    return {
      shuju: "",
      goodlist: {},
      showNav: false
    };
  },
  created() {
    this.$axios
      .get("http://47.103.65.186:5200/api/pinlun", {
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
  },
  methods:{
    change() {
      this.showNav = !this.showNav;
    }
  }
};
</script>
<style scoped>
@import url(../style/pinlun.css);
</style>

