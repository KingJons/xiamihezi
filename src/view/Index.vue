<template>
  <div class="container">
    <div class="home-class">
      <div class="home-banner">
        <img src="@/img/banner.png">
      </div>
      <div class="home-sign" @click="showpage=true">
        <img src="@/img/everyday_sign.png" class="image-sign">
      </div>
      <div v-if="showpage" class="sign-page">
        <div class="bg" @click.self="showpage=false" />
        <div class="signcontainer">
          <img src="../img/top.png" alt="" class="top-img">
          <mu-container>
            <div class="sign-page1">
              <mu-stepper :active-step="vactiveStep" orientation="vertical">
                <mu-step>
                  <mu-step-label>
                    星期一<div>
                      <span>{{ content.name }}</span>
                    </div>
                  </mu-step-label>
                </mu-step>
                <mu-step>
                  <mu-step-label>
                    星期二
                    <div>
                      <span>{{ content.name }}</span>
                    </div>
                  </mu-step-label>
                </mu-step>
                <mu-step>
                  <mu-step-label>
                    星期三
                    <div>
                      <span>{{ content.name }}</span>
                    </div>
                  </mu-step-label>
                </mu-step>
                <mu-step>
                  <mu-step-label>
                    星期四
                    <div>
                      <span>{{ content.name }}</span>
                    </div>
                  </mu-step-label>
                </mu-step>
                <mu-step>
                  <mu-step-label>
                    星期五
                    <div>
                      <span>{{ content.name }}</span>
                    </div>
                  </mu-step-label>
                </mu-step>
                <mu-step>
                  <mu-step-label>
                    星期六
                    <div>
                      <span>{{ content.name }}</span>
                    </div>
                  </mu-step-label>
                </mu-step>
                <mu-step>
                  <mu-step-label>
                    星期日
                    <div>
                      <span>{{ content.name }}</span>
                    </div>
                  </mu-step-label>
                </mu-step>
              </mu-stepper>
              <mu-button v-if="active" full-width color="#D6BB86" class="demo-step-button" @click="vhandleNext">
                签到
              </mu-button>
              <mu-button v-if="!active" disabled full-width color="#D6BB86" class="demo-step-button" @click="vhandleNext">
                已签到
              </mu-button>
            </div>
          </mu-container>
        </div>
      </div>
      <div class="home-shop">
        <img src="@/img/owner.png" class="image-shop">
      </div>

      <!-- <div v-if="show" class="home-activity">
        <div class="activity-type">
          <div class="activity-today">
            <mu-icon size="16" value="access_time" color="#333333" class="access-time" /><span>今日秒杀</span>
            <span class="countdown">00</span>
            <span class="countdown-after">:</span>
            <span class="countdown">00</span>
            <span class="countdown-after">:</span>
            <span class="countdown">00</span>
            <div class="activity-btn" @click="show = false">
              明日预热
              <mu-icon size="12" value="trending_flat" color="#fff" class="trending-flat" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="!show" class="home-activity">
        <div class="activity-type">
          <div class="activity-today">
            <mu-icon size="16" value="access_time" color="#333333" class="access-time" />
            <span class="today-seckill">明日预热</span>
          </div>
          <div class="back-todayMs" @click="show = true">
            <mu-icon size="12" value="trending_flat" color="#fff" class="trending-flat" />
            <span>返回今日秒杀</span>
          </div>
        </div>
      </div>
      <div v-if="show" class="goods-lists">
        <div v-for="item in goodsMs" :key="item.goodsId" class="goods-list-item">
          <div @click="goToDetail(item.goodsId)">
            <img :src="item.photo" alt="" class="goods-list-item-img">
            <span class="goods-list-item-title"> <img src="../img/icon_bg.png" alt=""> {{ item.title }}</span>
            <span class="goods-list-item-specification">
              <img v-if="item.specVal !==''" src="../img/icon_tip.png" class="icon-tip">{{ item.specVal }}</span>
            <div class="progress-bar">
              <div class="progress-bar-out">
                <span class="progress-bar-sale">已抢{{ item.soldNum }}件</span>
                <div class="progress-bar-in" :style="'width:'+item.processRatio+'%'" />
                <span class="progress-bar-percentage">{{ item.processRatio }}%</span>
              </div>
            </div>
            <span class="goods-list-item-price"><span class="goods-list-item-rmb">¥</span>{{ item.mallPrice }}
              <div class="goods-list-price-activity">
                <span>¥{{ item.price }}</span>
              </div></span>
            <span class="goods-list-item-btn">马上抢</span>
          </div>
        </div>
      </div>
      <div v-if="!show" class="goods-lists">
        <div v-for="item in goodsyr" :key="item.goodsId" class="goods-list-item">
          <div @click="goToDetail(item.goodsId)">
            <img :src="item.photo" alt="" class="goods-list-item-img">
            <span class="goods-list-item-title"> <img src="../img/icon_bg.png" alt=""> {{ item.title }}</span>
            <span class="goods-list-item-specification">
              <img v-if="item.affect !==''" src="../img/icon_tip.png" class="icon-tip">{{ item.activityDesc }}</span>
            <span class="goods-list-item-price1"><span class="goods-list-item-rmb">¥</span>{{ item.yuanGoodsPrice }}
              <div class="goods-list-price-activity">
                <span>¥{{ item.yuanGoodsMallPrice }}</span>
              </div></span>
            <span class="goods-list-item-btn1">即将开枪</span>
          </div>
        </div>
      </div> -->
      <div class="brand-title">
        <img src="../img/brand_icon.png" alt="" class="brand-icon_left">
        <span class="title">品牌专区</span>
        <img src="../img/brand_icon.png" alt="" class="brand-icon_right">
      </div>
      <div v-for="item in brandList" :key="item.id" class="brand-zone">
        <img class="brand-img" :src="item.logo" :alt="item.logo">
        <div v-if="item.goodsVOList.length === 1" class="brand-goods-list">
          <div class="brand-goods-list-one" @click="goToDetail(item.goodsVOList[0].goodsId)">
            <img :src="item.goodsVOList[0].photo" :alt="item.goodsVOList[0].title">
            <span class="one-title"> {{ item.goodsVOList[0].title }}</span><br>
            <span class="one-specifications">{{ item.goodsVOList[0].activityDesc }}</span>
            <div class="one-price">
              <span class="one-price-rmb">¥</span>
              <span>{{ level ? item.goodsVOList[0].yuanVipPrice : item.goodsVOList[0].yuanGoodsPrice }}</span>
            </div>
            <div class="one-button">
              <span>去看看</span>
            </div>
          </div>
        </div>
        <div v-if="item.goodsVOList.length === 2" class="brand-goods-list2">
          <div
            v-for="tab in item.goodsVOList"
            :key="tab.goodsId"
            class="brand-goods-list-ones"
            @click="goToDetail(tab.goodsId)"
          >
            <img :src="tab.photo" :alt="tab.title">
            <span class="one-title"> {{ tab.title }}</span><br>
            <span class="one-specifications">{{ tab.activityDesc }}</span>
            <div class="one-price">
              <span class="one-price-rmb">¥</span>
              <span>{{ level ? tab.yuanVipPrice : tab.yuanGoodsPrice }}</span>
            </div>
            <div class="one-button">
              去看看
            </div>
          </div>
        </div>
        <div v-if="item.goodsVOList.length !== 1&&item.goodsVOList.length !== 2" class="more-list">
          <div class="brand-goods-lists">
            <div v-for="tab in item.goodsVOList" :key="tab.goodsId" class="brand-goods-list-more" @click="goToDetail(tab.goodsId)">
              <img :src="tab.photo" :alt="tab.title">
              <span class="more-title"> {{ tab.title }}</span><br>
              <div class="more-price">
                <span class="one-price-rmb">¥</span>
                <span>{{ level ? tab.yuanVipPrice : tab.yuanGoodsPrice }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="brand-title2">
        <img src="../img/brand_icon.png" alt="" class="brand-icon_left">
        <span class="title">猜你喜欢</span>
        <img src="../img/brand_icon.png" alt="" class="brand-icon_right">
      </div>
      <div class="love-goods-lists">
        <div v-for="item in goodsList" :key="item.goodsId" class="love-goods-list-items">
          <div @click="goToDetail(item.goodsId)">
            <img :src="item.photo" class="love-goods-list-item-imgs">
            <span class="love-goods-list-item-titles">{{ item.title }}</span>
            <span class="love-goods-list-item-prices"><span class="love-goods-list-item-rmbs">¥</span>{{ item.price }}</span>
          </div>
        </div>
      </div>
      <!-- <mu-flex class="flex-tabbar" justify-content="center">
        <mu-container style="max-width: 400px; width:100%;padding:0;margin-bottom:0">
          <mu-bottom-nav :value.sync="shift" shift color="#fff" style="height:66px">
            <mu-bottom-nav-item value="index" title="商城" icon="home" to="/" />
            <mu-bottom-nav-item value="home" title="分类" icon="widgets" to="/home" />
            <mu-bottom-nav-item value="cart" title="购物车" icon="add_shopping_cart" to="cart" />
            <mu-bottom-nav-item value="person" title="个人中心" icon="person_outline" to="personal" />
          </mu-bottom-nav>
        </mu-container>
      </mu-flex> -->
      <FlexTabbar :shift="shift" />
    </div>
  </div>
</template>
<script>
import FlexTabbar from '@/components/flexTabbar'
// import brand_good_img from '../img/timg.jpg'

import {
  commoditycSpike, // 获取秒杀商品
  brandZone, // 品牌专区
  youMayAlsoLike, // 猜你喜欢
  armwUpTomorrow // 明日预热
} from '@/api/goods.js'

export default {
  name: 'Index',
  components: { FlexTabbar },
  data () {
    return {
      active: true,
      content: {
        img: '../img/money.png',
        img_disable: '../img/money.png',
        name: '积分+1'
      },
      vactiveStep: -1,
      showpage: false,
      shift: 'index',
      show: true,
      h: 0,
      m: 48,
      s: 39,
      goodsMs: [],
      goodsyr: [],
      brandList: [],
      goodsList: []
    }
  },
  computed: {
    level () {
      const level = localStorage.getItem('userInfo') ? JSON.parse(localStorage.userInfo).level : 0
      console.log(level)
      return level
    }
  },
  created () {
    this.funCommoditycSpike()
    this.funBrandZone()
    this.funYouMayAlsoLike()
    this.funarmwUpTomorrow()
  },
  methods: {
    vhandleNext () {
      this.active = false
      this.vactiveStep++
      //   var myDate = new Date()
      setInterval(() => {
        this.active = true
      }, 5000)
    },

    vreset () {
      this.vactiveStep = 0
    },
    goToDetail (id) {
      this.$router.push({
        path: '/goodsDetails',
        query: { id: id }
      })
    },
    // 获取秒杀列表
    funCommoditycSpike () {
      const par = {
        'pageSize': 10,
        'page': 1
      }
      commoditycSpike(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.goodsMs = res.data.data.list
          console.log(res.data.data.list)
        } else {
          this.$toast.error(res.data.message)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    // 获取明日预热
    funarmwUpTomorrow () {
      const par = {
        'pageSize': 10,
        'page': 1
      }
      armwUpTomorrow(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.goodsyr = res.data.data.list
          console.log(res.data.data.list)
        } else {
          this.$toast.error(res.data.message)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    // 获取品牌专区
    funBrandZone () {
      const par = {
        'goodsPageSize': 50,
        'goodsPage': 1,
        'brandPageSize': 50,
        'brandPage': 1
      }
      brandZone(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.brandList = res.data.data.list
        } else {
          this.$toast.error(res.data.message)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    // 获取猜你喜欢
    funYouMayAlsoLike () {
      const par = {
        'pageSize': 2,
        'page': 1
      }
      youMayAlsoLike(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.goodsList = res.data.data.list
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
.container {
  margin-bottom: 0;
}
.home-class{
    width: 100%;
    margin-bottom: 160px;
}
.home-banner{
    width: 96%;
    margin: 0 auto;
}
.home-banner img{
    width: 100%;
    border-radius: 10px;
}
.home-sign{
    width: 96%;
    margin: 0 auto;
    /* height: 80px; */
}
.image-sign{
    width: 100%;
    border-radius: 10px;
}
.bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: #000;
    z-index: -1;
}
.sign-page {
  position: absolute;
  /* margin-left: -7%; */
  top: -10px;
  z-index: 1
}
.home-shop{
    width: 96%;
    margin: 0 auto;
    /* height: 80px; */
}
.image-shop{
    width: 100%;
}
.home-activity{
    width: 98%;
    margin: 48px auto 24px;
}
.activity-type{
  width: 100%;
  position: relative;
}
.activity-today{
  font-size: 32px;
  height: 40px;
  line-height: 40px;
}
.access-time{
  position: relative;
  top:4px;
  margin-right: 4px;
}
.countdown{
  width: 32px;
  height: 32px;
  background: rgba(254,64,66,1);
  line-height: 32px;
  color: #fff;
  padding:4px;
  font-size: 24px;
  border-radius: 5px
}
.countdown-after{
  color:rgba(254,64,66,1);
}
.activity-btn{
  color: #fff;
  font-size: 20px;
  width: 140px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: linear-gradient(45deg,rgba(234,51,100,1),rgba(234,51,83,1),rgba(234,51,62,1));
  text-align: center;
  height: 40px;
  line-height: 45px;
  position: absolute;
  right: -8px;
  top:0;
}
.trending-flat{
  position: relative;
  top:4px;
}

.home-activity .back-todayMs {
  position: absolute;
  width: 180px;
  height: 40px;
  background: linear-gradient(45deg,rgba(234,51,100,1),rgba(234,51,83,1),rgba(234,51,62,1));
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  text-align: center;
  line-height: 40px;
  right: 0;
  top: 0;
  /* left: 1rem; */
  font-size: 20px;
  color: #fff;
  /* left: 78%; */
}

.goods-lists{
  width: 96%;
  margin: 35px auto 0;
}
.goods-list-item{
  position: relative;
  width: 100%;
  height: 290px;
  /* margin: .625rem  1.25rem  0 1.25rem ; */
  background: #fff;
  border-bottom: 1px solid #F1F1F1;
  display: inline-block;
  padding: 20px 26px 20px 20px;
  margin-bottom: 24px;
}
.goods-list-item-img{
    float: left;
    width: 250px;
    height: 250px;
    border-radius: .25rem;

}
.goods-list-item-title{
    display: inline-block;
    color: #333;
    font-size: 28px;
    margin-left: 270px;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.goods-list-item-title img {
    width: 72px
}
.goods-list-item-specification{
    display: inline-block;
    color: #000;
    font-size: 26px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 14px;
}
.icon-tip{
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.progress-bar {
  width: 240px;
  height: 26px;
  background-color: #F6CBC6;
  position: absolute;
  top: 125px;
  left: 290px;
  display: inline-block;
  border-radius: 10px;
  z-index: 0;
}
.progress-bar-out {
  font-size: 20px;
  margin-left: 12px;
  margin-top: 1px;
  color: #ffffff;
  line-height: 26px;
  text-align:start;
  z-index: 1;
}
.progress-bar-in {
  background-color: #F09639;
  height: 26px;
  border-radius:10px;
  position: relative;
  top: -27px;
  left: -12px;
  z-index: -1;
}
.progress-bar-percentage {
  position: relative;
  left: 170px;
  top: -51px;
  line-height: 26px;
  color: #EB4E3E;
}
.goods-list-item-price{
    color:#DD2F37;
    font-size: 36px;
    font-weight: bold;
    /* margin-left: 44px; */
    position: absolute;
    left: 294px;
    bottom: 16px;
}
.goods-list-item-price1{
    color:#64B93A;
    font-size: 36px;
    font-weight: bold;
    position: absolute;
    left: 294px;
    bottom: 16px;
}
.goods-list-item-rmb{
    font-size: 24px;
    margin-right: 8px;
}
.goods-list-item-btn{
    position: absolute;
    bottom: 14px;
    right: 20px;
    color: #EB4E3E;
    background: #ffffff;
    width: 114px;
    height: 48px;
    display: inline-block;
    border-radius: 24px;
    border-color: #EB4E3E;
    border: 2px solid;
    text-align: center;
    line-height: 48px;
    font-size: 24px;
    font-family: PingFang-SC-Bold;
}
.goods-list-item-btn1{
    position: absolute;
    bottom: 14px;
    right:10px;
    color: #64B93A;
    background: #ffffff;
    width: 140px;
    height: 48px;
    display: inline-block;
    border-radius: 24px;
    border-color: #64B93A;
    border: 2px solid;
    text-align: center;
    line-height: 48px;
    font-size: 24px;
    font-family: PingFang-SC-Bold;
}
.goods-list-price-activity {
  display: inline-block;
  text-decoration: line-through;
  color: #999;
  font-size:24px;
  margin-left: 2%;
  font-weight: normal;
}
.brand-title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 32px;
  font-weight: bold;
  padding-top: 35px;
  padding-bottom: 34px;
}
.brand-title .brand-icon_left {
  padding-right: 20px;
}
.brand-title .brand-icon_right {
  padding-left: 20px;
}
.brand-zone{
  width: 100%;
}
.brand-img {
  width: 100%;
  height: 320px;
}

 .brand-zone .brand-goods-list{
  border-radius: 10px;
  height: 290px;
  background: #fff;
  display: inline-flex;
  position: relative;
  /* margin-top: -20px; */
  top: -50px;
  width: 92%;
  margin-left: 4%;
  /* margin-bottom: 1.25rem; */
}
.brand-zone .brand-goods-list .brand-goods-list-one{
  padding:30px;
  position: relative;
}
.brand-zone .brand-goods-list .brand-goods-list-one img{
  width: 230px;
  height:230px;
  border-radius: 8px;
  margin-right:20px;
  /* float: left; */
}
.brand-goods-list-one .one-title{
  font-size: 26px;
  color:#333;
  /* top: -1.25rem; */
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 50.5%;
  margin-left: 250px;
  margin-top: -230px;
}
.brand-goods-list-one  .one-specifications{
  color: #808080;
  font-size: 22px;
  font-weight: 500;
  line-height: 37px;
  margin-left: 250px;
  position: relative;
  top: -50px;
}
.brand-goods-list-one  .one-price{
  color: #DD2F37;
  font-size: 32px;
  position: absolute;
  top: 210px;
  left: 283px;

}
.brand-goods-list-one  .one-price .one-price-rmb{
  font-size: 24px;
}
.brand-goods-list-one .one-button,.brand-goods-list-ones .one-button{
  width: 110px;
  height: 44px;
  color: #fff;
  font-size: 22px;
  position: absolute;
  background: #DD2F37;
  border-radius: 4px;
  left: 75%;
  top: 205px;
  text-align: center;
  line-height: 44px;
}
.brand-zone .brand-goods-lists{
  border-radius: 10px;
  height: 400px;
  background: #fff;
  display: inline-flex;
  margin-left: 30px;

}
.more-list{
  width: 100%;
  display: flex;
  overflow-x: hinden;
  overflow-y: hidden;
  top: -50px;
  position: relative;
}
.brand-zone .brand-goods-lists .brand-goods-list-more{
  padding: 20px;
}
.brand-zone .brand-goods-lists .brand-goods-list-more img{
  width: 200px;
  height: 200px;
  border-radius: 8px;
  margin-right: -10px;
}
.brand-goods-list-more .more-title{
  font-size: 26px;
  /* width: 5.75rem; */
  color:#333;
  padding-left: 9px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.brand-goods-list-more  .more-price{
  color: #DD2F37;
  font-size: 32px;
  position: relative;
  bottom: 55px;
  text-align: center;
  padding-top: 32px;
}
.brand-goods-list-more  .more-price .one-price-rmb{
  font-size: 24px;
}
.brand-zone .brand-goods-list2{
  width: 92%;
  margin: 0 auto;
  background: #fff;
  top: -40px;
  position: relative;
  height: 520px;
  border-radius: 40px;
}
.brand-zone .brand-goods-list2 .brand-goods-list-ones{
  height: 260px;
  background: #fff;
  padding:15px 30px;
  /* height: 240px ; */
  position: relative;
  /* margin-bottom: 20px; */
}
.brand-zone .brand-goods-list2 .brand-goods-list-ones img{
  width: 230px;
  height: 230px;
  border-radius: 10px;
  margin-right: 10px;
  float: left;
}
.brand-zone .brand-goods-list2 .brand-goods-list-ones .one-title {
  font-size: 26px;
  color:#333;
  /* top: -1.25rem; */
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 50.5%;
  margin-left: 250px;
  /* margin-top: -230px; */
}
.brand-goods-list-ones .one-button{

  right:  30px;
  top: 72%;
  position: absolute;
}
.brand-goods-list-ones  .one-specifications{
  color: #808080;
  font-size: 24px;
}
.brand-goods-list-ones  .one-price{
  color: #DD2F37;
  font-size: 32px;
  display: inline-block;
  position: absolute;
  left:  280px;
  bottom: 30px;
}
.brand-goods-list-ones  .one-price .one-price-rmb{
  font-size: 30px;
  margin-right: 5px;
}
.love-goods-lists{
    width: 100%;
    background: #f5f5f5;
}
.love-goods-list-items{
    width:44.8%;
    /* margin-top: 1.25rem; */
    margin-left: 3%;
    background: #fff;
    margin-bottom: 22px;
    border-radius: 10px;
    height: 522px;
    float: left;
    margin-right: 5px;
}
.love-goods-list-item-imgs{
    float: left;
    width: 100%;
    height: 336px;
    border-radius:10px 10px 0px 0px;
}
.love-goods-list-item-titles{
    width: 100%;
    float: right;
    padding-top: 24px;
    padding-left: 16px;
    color: #333;
    /* line-height: 48px; */
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 28px;
}

.love-goods-list-item-prices{
    color:#333333;
    font-size: 32px;
    font-weight: bold;
    position: relative;
    left: 34px;
    bottom: -20px;
}
.love-goods-list-item-rmbs{
    font-size: 24px;
    margin-right: 4px
}
.brand-title2 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 32px;
  font-family: PingFang-SC-Bold;
  line-height: 60px;
  height:30px;
  font-weight: bold;
  margin-bottom: 35px;
  margin-top: 19px;
}
.brand-title2 .brand-icon_left {
  padding-right: 20px;
}
.brand-title2 .brand-icon_right {
  padding-left: 20px;
}
.flex-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.mu-bottom-item {
  color:#333!important;
}
.mu-bottom-item-active{
  color:#F10D3B!important;
}
.top-img {
    height: 126px;
    width: 66%;
    margin-left: 17.3%;
    margin-top: 130px;
    z-index: 21;
    position: relative;
}
.sign-page1 {
    width: 84%;
    height: 862px;
    background: #fff;
    margin-left: 8%;
    margin-top: -50px;
    z-index: 20;

}
.sign-page .mu-stepper {
    margin-top: 94px;
    margin-left: 15%;
}
.sign-page .mu-step-label{
    font-size: 28px;
    /* color: #ED5C5C; */
    height: 90px;
    margin-bottom: -24px;
}
.sign-page .mu-step-label span {
    margin-left: 60px;
}
.demo-step-button {
    width:70%;
    margin-left: 15%;
    margin-top: 40px;
    border-radius: 40px;
}
</style>

