<template>
  <div>
    <div class="publish-title">
      <span>发表评价
        <span class="publish">发布</span>
      </span>
    </div>
    <div class="goods-comments">
      <div class="select-grade">
        <img src="../img/goods.jpg" alt="" class="goods-pic">
        <div class="grade">
          <div class="good-grade" @click="changeColor1()">
            <img src="../img/good_grade_icon.png" alt="" class="good-grade-icon">
            <span class="good-grade-title" :class="good_active? 'active':''">好评</span>
          </div>
          <div class="middle-grade" @click="changeColor2()">
            <img src="../img/middle_grade_icon.png" alt="" class="middle-grade-icon">
            <span class="middle-grade-title" :class="middle_active? 'active':''">中评</span>
          </div>
          <div class="low-grade" @click="changeColor3()">
            <img src="../img/low_grade_icon.png" alt="" class="low-grade-icon">
            <span class="low-grade-title" :class="low_active? 'active':''">差评</span>
          </div>
        </div>
      </div>
      <div class="comments-content">
        <textarea type="text" class="content" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧" style="width:100%;height:205px;" />
        <div class="add-pic">
          <img src="../img/camera.png" alt="" class="camera">
          <span class="title">添加图片</span>
        </div>
        <div class="break" />
      </div>
      <div class="comments-bottom">
        <img src="../img/comm_select.png" alt="" class="selected">
        <span class="anonymous">匿名</span>
        <span class="message">你的评价能帮助其他小伙伴哦</span>
      </div>
    </div>
    <div class="shop-comments">
      <div class="shop-comments-title">
        <img src="../img/my_shop_icon.png" alt="" class="shop-icon">
        <span class="comments-title">店铺评分</span>
      </div>
      <div class="evaStar">
        <span class="describ">描述相符</span>
        <ul class="star">
          <li v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item" track-by="index" @click="stars(index)" />
        </ul>
        <span class="describ">物流服务</span>
        <ul class="star">
          <li v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item" track-by="index" @click="stars(index)" />
        </ul>
        <span class="describ">服务态度</span>
        <ul class="star">
          <li v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item" track-by="index" @click="stars(index)" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PublishComments',
  components: {},
  data () {
    return {
      good_active: false,
      middle_active: false,
      low_active: false,
      score: 4
    }
  },
  computed: {
    itemClasses () {
      const result = []
      const score = Math.floor(this.score * 2) / 2
      const integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push('on')
      }
      while (result.length < 5) {
        result.push('off')
      }
      return result
    }
  },
  methods: {
    changeColor1 () {
      this.good_active = !this.good_active
      this.middle_active = false
      this.low_active = false
    },
    changeColor2 () {
      this.middle_active = !this.middle_active
      this.good_active = false
      this.low_active = false
    },
    changeColor3 () {
      this.low_active = !this.low_active
      this.middle_active = false
      this.good_active = false
    },
    stars (index) {
      this.score = index + 1
    }
  }
}
</script>
<style scoped>
.publish-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
    position: relative;
}
.publish {
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    right: 27px;
}
.goods-comments {
    width: 100%;
    height: 600px;
    background: #fff;
}
.select-grade {
    margin-left: 24px;
    height: 100px;
    /* float: left; */
    /* margin-top: 16px; */
}
.goods-pic {
    width: 68px;
    height: 68px;
    margin-top: 16px;
}
.grade {
    display: flex;
    /* width: 80.8%; */
    justify-content: space-around;
}
.good-grade,.middle-grade,.low-grade {
    position: relative;
    margin-left: 110px;
    top: -65px;
}
.middle-grade,.low-grade {
    margin-left: 50px;
}
.good-grade-icon,.middle-grade-icon,.low-grade-icon {
    width: 40px;
    height: 40px;
    /* float: left; */
}
.good-grade-title,.middle-grade-title,.low-grade-title {
    font-size:30px;
    font-weight:600;
    color:#C1BFC7;
    margin-left: 10px;
    position: relative;
    top: -10px;
    /* float: left; */
}
.active {
    color:#F04E6F;
}
.comments-content {
  width: 100%;
  height: 410px;
  background: #fff;
  border-top: 1px solid #E7E7E7;
  /* margin-top: 102px; */
}
textarea {
  resize:none;
  border: none;
  outline: none;
}
.content {
  font-size: 28px;
  padding-left: 24px;
  padding-top: 24px;
}
.add-pic {
  width: 162px;
  height: 162px;
  border: 1px dashed #E7E7E7;
  margin-left: 24px;
  position: relative;
  top: -230px;
}
.camera {
  width: 50px;
  height: 44px;
  margin-left: 57px;
  margin-top: 44px;
}
.title {
  font-size:22px;
  font-weight:400;
  color:rgba(207,207,209,1);
  line-height:44px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}
.break {
  width: 93.6%;
  height: 1px;
  border: 1px solid #E7E7E7;
  margin-left: 24px;
  position: relative;
  top: -185px;
}
.comments-bottom {
  width: 100%;
  height: 90px;
  position: relative;
}
.selected {
  width: 36px;
  height: 36px;
  margin-left: 26px;
  margin-top: 26px;
}
.anonymous {
  font-size:30px;
  font-weight:bold;
  color:rgba(33,32,31,1);
  position: relative;
  top: -8px;
  margin-left: 18px;
}
.message {
  position: absolute;
  font-size:28px;
  font-weight:400;
  color:rgba(170,171,178,1);
  right: 27px;
  margin-top: 20px;
}
.shop-comments {
  width: 100%;
  height: 582px;
  background: #fff;
  margin-top: 24px;
}
.shop-comments-title {
  margin-left: 28px;
}
.shop-icon {
  margin-top: 29px;
  width: 32px;
  height: 30px;
}
.comments-title {
  font-size: 30px;
  color: #333333;
  font-weight:bold;
  position: relative;
  top: -3px;
}
.evaStar{
/* float: right */
/* padding-top: .34rem; */
  margin-left: 28px;
  margin-top: 47px;
}
.describ {
  font-size: 28px;
  color: #676767;
}
.star{
  font-size: 0;
  margin-left: 67px;
}
.star-item{
  display: inline-block;
  background-repeat: no-repeat;
  width: 38px;
  height: 38px;
  margin-left: 22px;
  background-size: 100%;
  position: relative;
  top: -45px;
}
.star-item.on{
background-image: url(../img/on.png);
}

.star-item.off{
background-image: url(../img/off.png);
}
</style>
