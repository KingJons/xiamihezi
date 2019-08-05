<template>
  <div>
    <div class="comm-header">
      <span>评价详情</span>
    </div>
    <div v-for="(item,index) in commentsInfo" :key="index" class="comments-body">
      <div class="user-info">
        <img :src="userInfo.face" alt="" class="user-avatar">
        <span class="user-name">{{ userInfo.nickname }}</span>
      </div>
      <div class="comments-info">
        <span class="comments-time">{{ item.goodsComment.creatTime }}</span>
        <span class="comments-goods-name">{{ item.orderGoodsVO.title }}</span>
        <span class="goods-num">规格：{{ item.orderGoodsVO.specVal }}盒</span>
        <span class="comments-content">{{ item.goodsComment.body }}</span>
      </div>
      <div class="goods-info">
        <img :src="item.orderGoodsVO.photo" alt="" class="goods-pic">
        <span class="goods-name">{{ item.orderGoodsVO.title }}</span>
        <span class="goods-price">￥{{ item.orderGoodsVO.goodsPrice }}</span>
      </div>
      <div class="comments-bottom">
        <span class="view">浏览{{ item.orderGoodsVO.commentsCount }}次</span>
        <span class="point">点赞{{ item.orderGoodsVO.integral }}次</span>
        <span class="comments_num">评论{{ item.orderGoodsVO.isComment }}次</span>
        <img src="../img/review_btn.png" alt="" class="review-btn">
      </div>
    </div>
  </div>
</template>
<script>
import { queryPersone } from '@/api/goods.js'
export default {
  name: 'CommentsDetails',
  components: {},
  data () {
    return {
      commentsInfo: [],
      userInfo: []
    }
  },
  created () {
    this.funqueryPersone()
  },
  methods: {
    funqueryPersone () {
      const par = {
        'pageSize': 10,
        'page': 1
      }
      queryPersone(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.commentsInfo = res.data.data.list
          this.userInfo = res.data.data.obj
          console.log(res.data.data.list)
        } else {
          this.$toast.error(res.data.message)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<style scoped>
.comm-header {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.comments-body {
    width: 100%;
    height: 486px;
    background: #fff;
    margin-bottom: 30px;
}
.user-info {
    width: 100%;
    height: 107px;
    margin-left: 24px;
    /* margin-top: 23px; */
}
.user-avatar {
    width: 56px;
    height: 56px;
    margin-top: 23px;
}
.user-name {
    font-size: 32px;
    color: #333333;
    position: relative;
    margin-left: 13px;
    top: -15px;
}
.comments-info {
  width: 100%;
  /* display: inline-block; */
  margin-left: 24px;
  font-size: 24px;
  color: #999999;
  position: relative;
}
.comments-content {
  font-size: 30px;
  color: #333333;
  position: absolute;
  top: 50px;
  left: 4px;
}
.goods-info {
  width: 93.6%;
  height: 150px;
  background: #F8F8F8;
  margin-top: 95px;
  margin-left: 3.2%;
}
.goods-pic {
    width: 146px;
    height: 146px;
}
.goods-name {
  font-size: 28px;
  color: #333333;
  position: relative;
  top: -100px;
}
.goods-price {
  font-size: 26px;
  color: #333333;
  margin-left: 156px;
  position: relative;
  top: -70px;
}
.comments-bottom {
  width: 100%;
  margin-left: 24px;
  font-size: 24px;
  color: #999999;
  line-height: 100px;
  letter-spacing: 2px;
  position: relative;
}
.review-btn {
  width: 140px;
  height: 40px;
  position: absolute;
  right: 44px;
  margin-top: 25px;
}
</style>
