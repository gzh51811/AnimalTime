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
          v-for="(lefts,idx) in left"
          :key="idx"
          @click="check(idx)"
          :class="{active:fiexd===idx}"
        >{{lefts}}</li>
      </ul>
    </div>
    <div class="rightbox">
      <div class="leftbox-top">
        <a href @click="check(idx)">{{aaa}}</a>
      </div>
      <ul>
        <li v-for="lasts in list" :key="lasts.name" @click="goto()">
          <!-- 加一个点击事件跳转 -->
          <!-- <div> -->
          <img :src="lasts.photo" alt>
          <!-- </div> -->
          <p>{{lasts.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      left: [
        "猫咪清洁",
        "猫咪装扮",
        "猫咪窝点",
        "猫咪主粮",
        "猫咪零食",
        "猫咪日用",
        "猫咪玩具"
      ],
      fiexd: 0,
      aaa: "猫咪清洁",
      list: [
        {
          name: "进口猫粮",
          photo:
            "https://img2.epetbar.com/nowater/2016-07/21/14/24857d999c8c62a85110c66f1ebcf3ac.jpg"
        },
        {
          name: "美毛化毛",
          photo:
            "https://img2.epetbar.com/nowater/2016-08/20/14/db87afdd8179689ef67c0e352e7c2183.jpg"
        },
        {
          name: "体内驱虫",
          photo:
            "https://img2.epetbar.com/nowater/cates/2014-03/24/2da82a732a1b0df918dfeb38f6b32621.jpg"
        },
        {
          name: "罐头湿粮",
          photo:
            "https://img2.epetbar.com/nowater/2017-05/26/10/209951b1f61083be7bba561de378316c.jpg"
        },
        {
          name: "强化免疫",
          photo:
            "https://img2.epetbar.com/nowater/2016-08/20/14/c122bda1f10770c115fe2c765f5b9e83.jpg"
        },
        {
          name: "猫咪猫砂",
          photo:
            "https://img2.epetbar.com/nowater/2018-01/25/19/4c26cffc418644a72a54f9d9bdedfa1b.jpg"
        }
      ]
    };
  },
  methods: {
    check(idx) {
      this.fiexd = idx;
      // 要this 一下让能把值赋值给aaa
      this.aaa = this.left[idx];
    },
    goto() {
      console.log(1);
      this.$router.push("/List");
    }
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
.leftbox-top a {
  padding-left: 0.3rem;
  color: #ccc;
}
</style>


