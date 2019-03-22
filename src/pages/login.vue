<template>
<div>
  <div class="backico"><a href="#/app/mybar"><</a></div>

    <div class="padmain">
        <p class="bold c333 ft20 mt10 mb10 delay1 animated bounceInRight">快速登录</p> 
        <div>
            <input type="text" v-model="user" placeholder="用户名" maxlength="11" class="inputStyle block mb10 delay2 animated bounceInRight"> 
            <div class="rela delay3 animated bounceInRight rela">
                <div id="popup-captcha"></div>
            </div> 
            <div class="rela delay4 animated bounceInRight">
                <input v-model="password" id="password" name="formhash" type="password" placeholder="请输入6-20位密码" maxlength="20" class="inputStyle block mb10"> 
                <a href="javascript:;" class="close-eye psdtype abs"></a>
            </div>
        </div> 
        <div>
            <a @click="login" href="javascript:;" class="dark-btn ft16 round5 block ftc delay5 animated bounceInRight nextStep">登录</a>
        </div>
    </div>



    <p class="ft12 c333 mt15 delay5 animated bounceInRight overflow">
        <a class="fl">账号密码登录</a> 
        <a href="https://wap.epet.com/app/register?fw=0" class="fr">新用户注册</a>
    </p>




    <div class="bottom-text padmain delay5 animated bounceInRight" style="margin-top: 100px;">
        <img src="../img/other.png" class="w100"> 
        <div class="loginther flex flex-pc mt20 mb20">
            <a href="https://passport.epet.com/Oauth.html?type=2&amp;returnurl=https://wap.epet.com/app/user">
                <img src="../img/qq.png"></a> 
                <a href="https://passport.epet.com/Oauth.html?type=4&amp;returnurl=https://wap.epet.com/app/user">
                    <img src="../img/zhifubao.png"></a>
                </div> 
                <p class="ft10 ftc c333 mb15">
                    <span>登录代表您阅读并同意</span>
                    <a href="https://wap.epet.com/article.html?do=userAgreement&amp;fw=0" class="cf0">《E宠商城用户协议》
                    </a>
                </p>
    </div>
    </div>
</template>

<script>
import { ServerUrl } from "../router/ServerUrl.js";
import qs from "qs";
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
  

    login() {
      let user = this.user;
      let psw = this.password;
      if (this.user.trim().length > 0 && this.password.trim().length > 0) {
        console.log(1)
        this.$axios
          .post(
            "http://47.103.65.186:5200/api/logins",{
                user,
                psw
            })

          .then(res => {
            // console.log(res.config.data)
            if (res.data.msg == "success") {
              localStorage.setItem("user", this.user);
              localStorage.setItem("token", res.data._token);
              location.hash = "#/app/mybar";
            } else {
              this.user = "";
              this.password = "";
            }
          })  
      } 
    }
  }
}
</script>


<style scoped>
@import url(../style/log.css);
@import url(../style/qq.css);
</style>
