<template>
  <div>
    <div class="eva-refund-title">
      <span>评价售后服务
        <span class="publish">发布</span>
      </span>
    </div>
    <div class="goods-comments">
      <div class="select-grade">
        <span class="service-title">评价服务</span>
        <ul class="star">
          <li v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item" track-by="index" @click="stars(index)" />
        </ul>
        <span class="grade">{{ scoreInfo }}</span>
      </div>
      <div class="comments-content">
        <textarea type="text" class="content" placeholder="描述具体情况，有助于商家优化服务" style="width:100%;height:205px;" />
        <div class="add-pic">
          <img src="../img/camera.png" alt="" class="camera">
          <span class="title">添加图片</span>
        </div>
        <div class="break" />
      </div>
      <div class="comments-bottom">
        <img v-if="!select" src="../img/comm_select.png" alt="" class="selected" @click="select = true">
        <img v-if="select" src="../img/refund_select.png" alt="" class="selected" @click="select = flase">
        <span class="anonymous">匿名</span>
        <span class="message">你的评价能帮助其他小伙伴哦</span>
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
      select: false,
      good_active: false,
      middle_active: false,
      low_active: false,
      score: 0,
      scoreInfo: '待点评'
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
    stars (index) {
      this.score = index + 1
      if (this.score === 1) {
        this.scoreInfo = '非常差'
      } else if (this.score === 2) {
        this.scoreInfo = '差'
      } else if (this.score === 3) {
        this.scoreInfo = '一般'
      } else if (this.score === 4) {
        this.scoreInfo = '好'
      } else if (this.score === 5) {
        this.scoreInfo = '非常好'
      } else if (this.score === 0) {
        this.scoreInfo = '待点评'
      }
    }
  }
}
</script>
<style scoped>
.eva-refund-title {
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
    position: relative;
}
.select-grade {
    margin-left: 24px;
    height: 100px;
    /* float: left; */
    /* margin-top: 16px; */
}
.service-title {
    font-size: 28px;
    color: #333333;
    line-height: 100px;
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
  top: -70px;
}
.star-item.on{
background-image: url(../img/on.png);
}

.star-item.off{
background-image: url(../img/off.png);
}
.grade {
    font-size: 28px;
    color: #AAABB2;
    position: absolute;
    right: 30px;
    top: 30px;
}
</style>
