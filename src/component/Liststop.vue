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
        .get("http://localhost:5200/api/listss", {
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
      .get("http://localhost:5200/api/listss", {
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
      .get("http://localhost:5200/api/lists", {
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
.box {
  background: #ccc;
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 1.2rem;
  background: white;
  border-bottom: 1px solid #ccc;
  position: fixed;
}
.left {
  width: 50%;
  text-align: right;
  background: white;
  height: 100%;
  float: left;
}
.one {
  line-height: 1.2rem;
  padding-right: 0.266667rem;
  font-size: 14px;
  display: inline-block;
  width: 1rem;
  height: 1.1rem;
  border-bottom: 0.1rem solid #ed4044;
  color: #ed4044;
  font-weight: 600;
  cursor: pointer;
}
.right {
  width: 50%;
  text-align: left;
  background: white;
  height: 100%;
  float: left;
}
.right img {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  right: 0.3rem;
  top: 0.4rem;
}
.two {
  line-height: 1.2rem;
  padding-left: 0.4rem;
  font-size: 14px;
  cursor: pointer;
}
.leftbox {
  width: 20%;
  height: 90%;
  position: fixed;
  top: 1.2rem;
  left: 0;
  padding-bottom: 45px;
  border-right: 5px solid #f3f4f5;
  background: white;
}
.leftbox li {
  padding: 0.2rem 0;
  border-bottom: 1px solid #f3f4f5;
  width: 100%;
  height: 1rem;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  line-height: 1rem;
}
li.active {
  background: #f3f4f5;
  color: #ed4044;
}
.rightbox {
  width: 78%;
  height: 100%;
  background: #f3f4f5;
  position: fixed;
  top: 1.2rem;
  right: 0;
  padding-top: 5px;
}
.rightbox ul {
  width: 100%;
  height: 100%;
  background: white;
}
.rightbox li {
  width: 29%;
  padding: 0 5px;
  height: 3rem;
  text-align: center;
  float: left;
}
.rightbox li img {
  width: 2rem;
  height: 2rem;
}
.rightbox p {
  padding-top: 5px;
}
.leftbox-top {
  height: 1.2rem;
  background: white;
  line-height: 1.2rem;
}
.leftbox-top p {
  padding-left: 0.3rem;
  color: #ccc;
}
</style>


