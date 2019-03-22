<template>
    <div>
  <div class="backico"><a href="#/app/mybar"></a></div>
    <div class="padmain">
        <p class="bold c333 ft20 mt10 mb10 delay1 animated bounceInRight">快速注册</p> 
        <div>
            <input v-model="user" type="text" placeholder="用户名" maxlength="11" class="inputStyle block mb10 delay2 animated bounceInRight"> 
            <div class="rela delay3 animated bounceInRight rela">
                <div id="popup-captcha"></div>
            </div> 
            <div class="rela delay4 animated bounceInRight">
                <input v-model="password" id="password" name="formhash" type="password" placeholder="请输入6-20位密码" maxlength="20" class="inputStyle block mb10"> 
                <a href="javascript:;" class="close-eye psdtype abs" :class="{'light-green-bg':(user.length>0&&password.length>0)}"></a>
            </div>
        </div> 
        <div>
            <a @click="register()" href="javascript:;" class="dark-btn ft16 round5 block ftc delay5 animated bounceInRight nextStep">下一步</a>
        </div>
    </div>
    <p class="ft10 ftc c333 delay5 animated bounceInRight pad10">点击"下一步", 即表示您阅读并同意
        <a href="javascript:;" class="cf0">《E宠商城用户协议》</a>
    </p>
</div>
</template>


<script>
import { ServerUrl } from "../router/ServerUrl.js";
import qs from "qs";
export default {
  name: "register",
  data() {
    return {
      user: "",
      password: "",
      details: "",
    };
  },
  methods: {
    register() {
      let user = this.user;
      let psw = this.password;
      if (this.user.trim().length > 0 && this.password.trim().length > 0) {
        this.$axios
          .post(
            "http://47.103.65.186:5200/api/register",{
                user,
                psw
            })
            
            .then(res => {
            // console.log(res.config.data)
            if (res.status == "200") {
              alert('注册成功')
            this.$router.push("/login");
            } else{
              alert('账号注册失败');
            }
          });
        } 
      } 
    }

  }

</script>
<style scoped>
@import url(../style/reg.css);
@import url(../style/qq.css);
</style>
