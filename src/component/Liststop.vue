<template>
  <div class="box">
    <div class="top">
      <div class="left">
        <span class="one">分类</span>
      </div>
      <div class="right">
        <span class="two">品牌</span>
        <img src="../img/search-ico.png" alt>
      </div>
    </div>
    <div class="leftbox">
      <ul>
        <li
          v-for="(lefts,idx) in goodlist"
          :key="idx"  
          @click.stop="check(idx)"
          :class="{active:fiexd===idx}"
        >{{lefts.names}}</li>
      </ul>
    </div>
    <div class="rightbox">
      <div class="leftbox-top">
        <p>{{aaa.names}}</p>
      </div>
      <ul>
        <li @click="goto()" v-for="(link,idx) in right" :key="idx">
          <!-- 加一个点击事件跳转 -->
          <img :src="link.photo" alt>
          <p>{{link.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fiexd: 0,
      goodlist: [],
      right: [],
      aaa: "猫咪装扮"
    };
  },
  methods: {
    check(idx) {
      this.fiexd = idx;
      // 要this 一下让能把值赋值给aaa
      this.aaa = this.goodlist[idx];
      let center = {};
      this.$axios
        .get("http://47.103.65.186:5200/api/listss", {
          params: {
            id: this.fiexd
          }
        })
        .then(res => {
          console.log(1, res);
          let data = res.data;
          console.log(data);
          this.right = data;
          console.log(this.right);
        });
    },
    goto() {
      this.$router.push("/List");
    }
  },
  created() {
    this.$axios
      .get("http://47.103.65.186:5200/api/listss", {
        params: {
          id: 0
        }
      })
      .then(res => {
        // console.log(1, res);
        let data = res.data;
        // console.log(data);
        this.right = data;
        // console.log(this.right);
      });
    this.$axios
      .get("http://47.103.65.186:5200/api/lists", {
        params: {
          zi: "xuanran"
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
@import url(../style/Liststop.css);
</style>


