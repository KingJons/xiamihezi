<template>
  <div class="container">
    <div class="swiper-container">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of goodsDetails.photoArray" :key="index">
          <img class="header-img" :src="item" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <div class="goods-details">
      <span class="goods-price"><span class="goods-rmb">¥</span>{{ goodsDetails.yuanGoodsPrice }}
        <span class="goods-vip-price"><span class="goods-rmb1">¥</span>{{ goodsDetails.yuanVipPrice }}</span>
        <img src="../img/vip_bg.png" alt="" class="vip-bg">
        <span class="vip-content">VIP 赚 10</span>
        <div class="goods-prime-price">
          <span>原价：{{ goodsDetails.price }}</span>
        </div>
      </span>
      <div class="goods-title">
        <div class="tagbox">
          自营品牌
        </div>
        <div class="title">
          {{ goodsDetails.title }}
        </div>
      </div>
    </div>
    <div class="good-delivery">
      <mu-row justify-content="start" align-items="start" class="deliverybox">
        <mu-col span="2">
          <div>发货</div>
        </mu-col>
        <mu-col span="3">
          <div class="place">
            <img src="../img/icon_place.png" class="icon_place" alt="">广东 广州
          </div>
        </mu-col>
        <mu-col span="3">
          <div class="fright">
            运费：{{ goodsDetails.yuanFreight }}
          </div>
        </mu-col>
        <mu-col span="4" align-self="end">
          <div class="sold-num">
            已售出：{{ goodsDetails.productSales }}
          </div>
        </mu-col>
      </mu-row>
      <img src="../img/break_bottom.png" alt="" class="break">
      <mu-row justify-content="start" align-items="start" class="guaranteebox">
        <mu-col span="2">
          <div class="guarantee">
            保障
          </div>
        </mu-col>
        <mu-col span="10">
          <div class="grid-cell">
            虾米严选·正品保证 极速发货
          </div>
        </mu-col>
      </mu-row>
    </div>
    <div v-if="goodsDetails.commentsCount !== 0" class="evaluatebox">
      <mu-row class="evalute-title">
        <mu-col span="4">
          <div class="guarantee2">
            <span>商品评价({{ goodsDetails.commentsCount }})</span>
          </div>
        </mu-col>
        <mu-col span="4" offset="4" align-self="start">
          <div class="guarantee-all" @click="goToAllEva(goodsDetails.goodsId)">
            查看全部评价 >
          </div>
        </mu-col>
      </mu-row>
      <div v-for="item in goodsDetails.goodsCommentList" :key="item.id" class="evalute-details">
        <div class="user">
          <img :src="item.face" alt="" class="avatar">
          <span class="username">{{ item.nickname }}</span>
        </div>
        <div class="user-content">
          <span class="content">{{ item.body }}</span>
        </div>
        <div v-for="(pic,index) in item.commentPicsArray" :key="index" class="pic">
          <img :src="pic" alt="" class="eva-pic">
        </div>
      </div>
    </div>
    <div v-if="goodsDetails.commentsCount === 0" class="empty-evaluate">
      <mu-row class="evalute-title">
        <mu-col span="4">
          <div class="guarantee2">
            <span>商品评价({{ goodsDetails.commentsCount }})</span>
          </div>
        </mu-col>
        <mu-col span="4" offset="4" align-self="start">
          <div class="guarantee-all" @click="goToAllEva">
            查看全部评价 >
          </div>
        </mu-col>
      </mu-row>
      <span class="empty">暂无评价</span>
    </div>
    <div class="good-detail">
      <span class="title">商品详情</span>
      <div class="details" v-html="goodsDetails.details">
        {{ goodsDetails.details }}
      </div>
    </div>
    <div class="tab-bar">
      <mu-row class="tab-bar-box" justify-content="center" align-items="center">
        <mu-col span="2">
          <div class="cart" @click="goToCart">
            <img src="../img/goods_cart.png" alt="">
            <span>购物车</span>
            <div class="cart-num">
              {{ cart_num }}
            </div>
          </div>
        </mu-col>
        <mu-col span="2">
          <div class="service">
            <img src="../img/service.png" alt="">
            <span>客服</span>
          </div>
        </mu-col>
        <mu-col span="2">
          <div v-if="!activity" class="love" @click="activity = true">
            <img src="../img/love.png" alt="">
            <span>收藏</span>
          </div>
          <div v-if="activity" class="love_activity" @click="activity = false">
            <img src="../img/love_activity.png" alt="">
            <span>已收藏</span>
          </div>
        </mu-col>
        <mu-col span="3">
          <div class="join-cart" @click="cartshow=true">
            <mu-button small full width color="#21201F" @click="joinCart">
              加入购物车
            </mu-button>
          </div>
        </mu-col>
        <mu-col span="3">
          <div class="buy" @click="buyshow=true">
            <mu-button small full width color="#F10D3B">
              立即购买
            </mu-button>
          </div>
        </mu-col>
      </mu-row>
    </div>
    <div v-if="cartshow" class="join-cart-box">
      <div class="bg" @click.self="cartshow=false" />
      <div class="box">
        <div class="good-box">
          <img :src="goodsDetails.photoArray[0]" alt="" class="good-pic">
          <span class="good-price">¥ {{ goodsDetails.yuanGoodsPrice }}
            <span class="good-vip-price">¥ {{ goodsDetails.yuanVipPrice }}</span>
            <img src="../img/vip_bg.png" alt="" class="vip-bg">
            <span class="vip-content1">VIP</span>
          </span>
          <span class="stoke">库存{{ goodsDetails.sku[0].stock }}件</span>
          <span class="explain">选择 规格</span>
        </div>
        <div class="spec-box">
          <span class="title">规格</span>
          <div v-if="changecolor" class="spec" @click="changecolor=false">
            <span>{{ goodsDetails.spec[0].val }}</span>
          </div>
          <div v-if="!changecolor" class="spec-activity" @click="changecolor=true">
            <span>{{ goodsDetails.spec[0].val }}</span>
          </div>
        </div>
        <div class="bottom-box">
          <span class="buy-title">购买数量</span>
          <div class="buy-num">
            <div class="del" @click="delNum">
              -
            </div>
            <div class="num">
              {{ num }}
            </div>
            <div class="add" @click="addNum">
              +
            </div>
          </div>
          <mu-button class="buy-button" full-width color="#21201F" @click="cartshow=false">
            确定
          </mu-button>
        </div>
      </div>
    </div>
    <div v-if="buyshow" class="join-cart-box">
      <div class="bg" @click.self="buyshow=false" />
      <div class="box">
        <div class="good-box">
          <img :src="goodsDetails.photoArray[0]" alt="" class="good-pic">
          <span class="good-price">¥ {{ goodsDetails.yuanPrice }}.00
            <span class="good-vip-price">¥ {{ goodsDetails.yuanVipPrice }}</span>
            <img src="../img/vip_bg.png" alt="" class="vip-bg">
            <span class="vip-content1">VIP</span>
          </span>
          <span class="stoke">库存{{ goodsDetails.sku[0].stock }}件</span>
          <span class="explain">选择 规格</span>
        </div>
        <div class="spec-box">
          <span class="title">规格</span>
          <div v-if="changecolor" class="spec" @click="changecolor=false">
            <span>{{ goodsDetails.spec[0].val }}</span>
          </div>
          <div v-if="!changecolor" class="spec-activity" @click="changecolor=true">
            <span>{{ goodsDetails.spec[0].val }}</span>
          </div>
        </div>
        <div class="bottom-box">
          <span class="buy-title">购买数量</span>
          <div class="buy-num">
            <div class="del" @click="delNum">
              -
            </div>
            <div class="num">
              {{ num }}
            </div>
            <div class="add" @click="addNum">
              +
            </div>
          </div>
          <mu-button class="buy-button" full-width color="#21201F" @click="goToFirm(num,goodsDetails.goodsId)">
            立即购买
          </mu-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { findDeatail } from '@/api/goods.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'GoodsDetails',
  components: { swiper, swiperSlide },
  data () {
    return {
      num: 1,
      changecolor: true,
      cartshow: false,
      buyshow: false,
      cart_num: 2,
      activity: false,
      swiperCurrent: 0,
      swiperOption: {
        loop: true
      },
      goodsDetails: {}
    }
  },
  created () {
    this.funfindDeatail(this.$route.query.id)
  },
  methods: {
    delNum () {
      if (this.num > 1) {
        this.num--
      } else {
        this.$toast.error('数量小于1')
      }
    },
    addNum () {
      this.num++
    },
    goToCart () {
      if (this.cart_num !== 0) {
        this.$router.push('/cart')
      } else {
        this.$router.push('/emptyCart')
      }
    },
    joinCart () {
      this.cart_num += this.num
    },
    goToFirm (num, id) {
      this.$router.push({
        path: '/FirmOrder',
        query: {
          quantity: num,
          id: id }
      })
    },
    goToAllEva (id) {
      this.$router.push({
        path: '/AllEvaluate',
        query: { id: id }
      })
    },
    funfindDeatail (id) {
      const par = {
        goodsId: id
      }
      findDeatail(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.goodsDetails = res.data.data.obj
          console.log(res.data.data.obj)
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
.container{
    margin: 0;
    padding: 0 0 65px 0;
}
.swiper-container {
    width: 100%;
    /* height: 375px; */
}
.header-img {
    width: 100%;
    height: 750px;
}
.goods-details {
    margin-top: -10px;
    width: 100%;
    height: 244px;
    background: #fff;
    position: relative;
}
.goods-price {
    position: absolute;
    font-size: 36px;
    margin-left: 30px;
    margin-top: 32px;
    color: #DD2F37;
}
.goods-rmb {
    font-size:24px;
    margin-right: 8px;
}
.goods-rmb1 {
    font-size: 22px;
    color: #333333;
    padding-left: 30px;
    margin-right: 8px;
}
.goods-vip-price {
    color: #333333;
    font-size: 32px;
}
.vip-bg {
    width: 125px;
    height: 32px;
}
.vip-content {
    font-size: 24px;
    font-weight:500;
    color:rgba(239,205,124,1);
    position: relative;
    left: -126px;
    top: -4px;
    line-height: 49px;
    text-align: center
}
.goods-prime-price {
    font-size: 24px;
    color: #9A9A9A;
    text-decoration: line-through;
    margin-top: 5px;
    /* margin-left: 30px;s */
}
.goods-title {
    margin-left: 30px;
    margin-top:129px;
}
.goods-title .tagbox {
    font-size: 22px;
    width: 100px;
    height: 32px;
    background: #DD2F37;
    line-height: 32px;
    text-align: center;
    color: #fff
}
.goods-title .title {
    font-size: 32px;
    margin-top: -36px;
    margin-left: 114px;
}
.goods-title .goods-spec {
    font-size: 32px;
    margin-top: 14px;
}
.good-delivery {
    width: 100%;
    height: 180px;
    background: #fff;
    margin-top: 24px;
}
.deliverybox {
    margin-left: 20px;
    margin-top: 32px;
    font-size: 28px;
    color: #666666;
}

.icon_place {
    width: 21px;
    height: 28px;
    margin-left: -20px;
    /* margin-left: 6%; */
    /* margin-right: 11px; */
}
.fright {
    position: relative;
    left: -10px;
}
.break {
    position: relative;
    width: 90%;
    height: 2px;
    margin-left: 30px;
    top: -15px;
}
.guaranteebox {
    margin-left: 30px;
    /* margin-top: 1rem; */
    font-size: 28px;
    color: #666666;
}
.grid-cell {
  color: #212121;
}
.evaluatebox {
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 24px;
}
.evalute-title {
    margin-left: 24px;
    margin-top: 30px;
}
.guarantee2 {
    font-size: 30px;
    color: #212121;
}
.guarantee-all {
    font-size: 24px;
    color: #666666;
}
.evalute-details {
    margin-left: 24px;
    margin-top: 42px;
    height: 330px;
}
.empty-evaluate {
  height: 200px;
  width: 100%;
  background: #fff;
  margin-top: 24px;
  font-size: 32px;
}
.empty-evaluate .empty {
  margin-left: 24px;
  position: relative;
  top: 20px;
}
.avatar {
   width: 40px;
   height: 40px;
   border-radius: 20px;
}
.username {
    font-size: 26px;
    color: #999999;
    position: relative;
    top: -5px;
}
.content {
    font-size: 28px;
    color: #333333;
}
.pic {
  float: left;

}
.eva-pic{
    width: 200px;
    height: 200px;
    padding: 10px;
    border-radius: 20px;
}
.good-detail {
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 24px;
    margin-bottom: 70px;
}
.good-detail .title {
    font-size: 30px;
    color: #212121;
    line-height: 90px;
    text-align: center;
    margin-left: 24px;
}
.details {
  width: 100%;
}
.details>>>img {
  width: 100%!important;
  object-fit: fill!important;
  height: 100%!important;
}
.tab-bar {
    width: 100%;
    height: 110px;
    background: #fff;
    /* margin-top: 30px; */
    position: fixed;
    bottom: 0;
}
.tab-bar-box {
    margin-left: 30px;
    margin-top: 10px;
    margin-right: 30%;
}
.cart,.service, .love {
    margin-top: 20px;
    height: 136px;
}

.cart img,.love img,.service img,.love_activity img{
    width: 42px;
    height:42px;
    position: relative;
    /* margin-bottom:-20px; */
}
.cart span,.love span,.service span,.love_activity span {
    font-size: 11px;
    /* padding-top: -5px; */
    display: inline-block;
    position: relative;
    top: -25px;
    /* margin-top: -100px; */
    margin-left: -5px;
}

.join-cart {
  margin-top: -50px;
  margin-left: 15%;
}
.buy {
    margin-left: 95%;
    margin-top: -50px;
}
.cart-num {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:rgba(241,13,59,1);
    /* margin-top: -100px; */
    font-size: 11px;
    line-height: 30px;
    text-align: center;
    margin-left: 20px;
    position: relative;
    color: #fff;
    top: -115px;
}
.join-cart-box {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 99;
}
.join-cart-box .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: #000;
    z-index: -1;
}
.join-cart-box .box {
    position: absolute;
    width: 100%;
    height: 718px;
    bottom: 0;
    background: #fff;
    border-radius: 5px 5px 0 0;
}
.good-box {
    width: 100%;
    height: 280px;
    position: relative;
}
.good-box .good-pic {
    width: 220px;
    height: 220px;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 4px;

}
.good-price {
    margin-left: 25px;
    font-size: 30px;
    position: relative;
    top: -77px;
    color: #F10D3B;
    width: 100%;
}
.good-vip-price{
    position: relative;
    font-size: 26px;
    color: #333333;
    margin-left: 10px;
    top: -2px;
}
.good-box .vip-bg {
    width:50px;
    height:26px;
    position: relative;
}
.good-box .vip-content1 {
    font-size: 20px;
    /* margin-left: 78px; */
    position: relative;
    margin-left: -50px;
    top: -2px;
    color: rgba(239,205,124,1);
    /* left: 175px; */
}
.good-box .stoke {
    font-size: 30px;
    color: #828282;
    left: 270px;
    position: absolute;
    top: 170px;
}
.good-box .explain {
    font-size: 28px;
    color: #333333;
    left: 270px;
    position: absolute;
    top: 215px;
}
.spec-box {
    margin-left: 20px;
    width: 93.6%;
    height: 181px;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
}
.spec-box .title {
    font-size: 28px;
    color: #333333;
    position: relative;
    top: 20px;
}
.spec-box .spec, .spec-activity {
    width:fit-content;
    width:-webkit-fit-content;
    width:-moz-fit-content;
    height: 64px;
    background: #F5F5F5;
    position: relative;
    top: 30px;
    padding: 0 10px 0 10px;
    border-radius: 6px;
    font-size: 24px;
    color: #333333;
    line-height: 64px;
    text-align: center;
}
.spec-box .spec-activity {
    background: #B7964F;
}
.bottom-box {
    margin-top: 54px;
    margin-left:22px;
}
.buy-title {
    font-size: 28px;
    color: #333333;
}
.buy-num {
    width: 212px;
    display: flex;
    justify-content: space-between;
    height:60px;
    margin-left: 65%;
    margin-top: -50px;
}
.del, .add {
    width: 66px;
    height: 60px;
    background: #FBFBFB;
    color: #999999;
    text-align: center;
    line-height: 60px;
    font-size: 48px;
}
.num {
    width: 76px;
    height: 60px;
    background: #F5F5F5;
    color: #333333;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
}
.buy-button {
    width: 96%;
    margin-top: 40px;
    border-radius: 40px;
}
</style>

