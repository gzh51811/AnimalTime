<template>
    <div>
  <div class="backico"></div>
    <div class="padmain">
        <p class="bold c333 ft20 mt10 mb10 delay1 animated bounceInRight">快速注册</p> 
        <div>
            <input type="text" placeholder="用户名" maxlength="11" class="inputStyle block mb10 delay2 animated bounceInRight"> 
            <div class="rela delay3 animated bounceInRight rela">

                <a href="javascript:;" id="getcodes" class="getCode block abs ft10">获取验证码</a> <!----> 
                <div id="popup-captcha"></div>
            </div> 
            <div class="rela delay4 animated bounceInRight">
                <input id="password" name="formhash" type="password" placeholder="请输入6-20位密码" maxlength="20" class="inputStyle block mb10"> 
                <a href="javascript:;" class="close-eye psdtype abs"></a>
            </div>
        </div> 
        <div>
            <a href="javascript:;" class="dark-btn ft16 round5 block ftc delay5 animated bounceInRight nextStep">下一步</a>
        </div>
    </div>
    <p class="ft10 ftc c333 delay5 animated bounceInRight pad10">点击"下一步", 即表示您阅读并同意
        <a href="javascript:;" class="cf0">《E宠商城用户协议》</a>
    </p>
</div>
</template>


<script>
import { setCookie, getCookie } from "../js/cookie.js";
export default {
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie("username")) {
      this.$router.push("/mybar");
    }
  },
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        /*接口请求*/
        this.$http
          .post("http://localhost/vueapi/index.php/Home/user/login", data)
          .then(res => {
            console.log(res);
            /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
            if (res.data == -1) {
              this.tishi = "该用户不存在";
              this.showTishi = true;
            } else if (res.data == 0) {
              this.tishi = "密码输入错误";
              this.showTishi = true;
            } else if (res.data == "admin") {
              /*路由跳转this.$router.push*/
              this.$router.push("/main");
            } else {
              this.tishi = "登录成功";
              this.showTishi = true;
              setCookie("username", this.username, 1000 * 60);
              setTimeout(
                function() {
                  this.$router.push("/home");
                }.bind(this),
                1000
              );
            }
          });
      }
    }
  }
};
</script>
<style scoped>
@import url(../style/reg.css);
@import url(../style/qq.css);
</style>
