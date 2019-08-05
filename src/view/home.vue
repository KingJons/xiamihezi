<template>
  <div>
    <div class="home-class">
      <div class="home-banner">
        <img src="@/img/banner.png">
      </div>
      <div class="home-sign">
        <img src="@/img/everyday_sign.png" class="image-sign">
      </div>
      <div class="home-shop">
        <img src="@/img/owner.png" class="image-shop">
      </div>
      <div class="home-activity">
        <div class="activity-type">
          <div class="activity-today">
            <mu-icon size="16" value="access_time" color="#333333" class="access-time" /><span>爆款抢购</span>
            <span class="countdown">00</span>
            <span class="countdown-after">:</span>
            <span class="countdown">00</span>
            <span class="countdown-after">:</span>
            <span class="countdown">00</span>
            <div class="activity-btn">
              明日预热
              <mu-icon size="12" value="trending_flat" color="#fff" class="trending-flat" />
            </div>
          </div>
        </div>
        <div class="activity-list">
          <div v-if="show" class="goods-lists">
            <div v-for="(item,index) in goodsMs" :key="index" class="goods-list-item">
              <div @click="goToDetail(item.goodsId)">
                <div>
                  <img :src="item.photo" alt="" class="goods-list-item-img">
                </div>
                <div style="margin-left:10px">
                  <span class="goods-list-item-title"> <img src="../img/icon_bg.png" :alt="item.title"> {{ item.title }}</span>
                  <span class="goods-list-item-specification">
                    <img v-if="item.activityDesc !==''" src="../img/icon_tip.png" class="icon-tip">{{ item.activityDesc }}</span>
                  <div class="progress-bar">
                    <div class="progress-bar-out">
                      <span class="progress-bar-sale">已抢{{ item.productSales }}件</span>
                      <div class="progress-bar-in" :style="'width:'+item.percentageSpike+'%'" />
                      <span class="progress-bar-percentage">{{ item.percentageSpike }}%</span>
                    </div>
                  </div>
                  <span class="goods-list-item-price"><span class="goods-list-item-rmb">¥</span>{{ item.yuanGoodsPrice }}
                    <div class="goods-list-price-activity">
                      <span>¥{{ item.yuanGoodsMallPrice }}</span>
                    </div></span>
                  <span class="goods-list-item-btn">马上抢</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <mu-flex class="flex-wrapper" justify-content="center">
      <mu-container style="max-width: 400px; width:100%;padding:0;margin-bottom:0">
        <mu-bottom-nav :value.sync="shift" shift color="#fff" style="height:66px">
          <mu-bottom-nav-item value="home" title="商城" icon="home" />
          <mu-bottom-nav-item value="sort" title="分类" icon="widgets" />
          <mu-bottom-nav-item value="cart" title="购物车" icon="add_shopping_cart" />
          <mu-bottom-nav-item value="person" title="个人中心" icon="person_outline" />
        </mu-bottom-nav>
      </mu-container>
    </mu-flex> -->
    <FlexTabbar :shift="shift" />
  </div>
</template>
<script>
import FlexTabbar from '@/components/flexTabbar'
export default {
  components: { FlexTabbar },
  data () {
    return {
      shift: 'home',
      show: true,
      goodsMs: [{
        'goodsId': 931,
        'title': '预热商品 -- 限时秒杀',
        'cateId': 144,
        'shopId': 1,
        'photo': 'http://xiamihezi.oss-cn-shenzhen.aliyuncs.com/images/5d1a22bc660ec.jpg',
        'price': 5900,
        'mallPrice': 0,
        'stockNum': 8000,
        'soldNum': 0,
        'soldNumAdd': 533,
        'views': 132,
        'activityDesc': '限时秒杀',
        'processRatio': 0,
        'activity': 1,
        'yuanGoodsPrice': '59.00',
        'yuanGoodsMallPrice': '0.00',
        'yuanVipPrice': '49.00',
        'yuanFreight': '0.00',
        'skuPrice': 5900,
        'skuVipPrice': 4900,
        'specVal': '4片',
        'percentageSpike': '0.07',
        'productSales': 533
      }]
    }
  },
  methods: {
    goToDetail (id) {
      this.$route.push({
        path: '/goodsDetails',
        id: id
      })
    }
  }
}
</script>
<style scoped>
.container{
  padding: 0!important;
}
.home-class{
    width: 100%;
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
  width: 130px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: rgba(254,64,66,1);
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
.mu-bottom-item {
  color:#333!important;
}
.mu-bottom-item-active{
  color:#F10D3B!important;
}
.flex-wrapper{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.goods-lists{
  width: 96%;
  margin: 35px auto 0;
}
.goods-list-item{
  position: relative;
  width: 100%;
  height: 290px;
  margin: 0 auto;
  background: #fff;
  border-bottom:1px solid #F1F1F1;
  /* display: inline-block; */
  float: left;
  padding: 20px;
}
.goods-list-item-img{
    float: left;
    width: 250px;
    height: 250px;
    border-radius: 4px;
}
.goods-list-item-title{
    /* width: 12.625rem; */
    height: 60px;
    display: inline-block;
    color: #333;
    /* margin-top: 1.5625rem; */
    font-size: 28px;
    /* margin-left: 8.75rem; */
    /* position: absolute; */
    /* top: -0.625rem; */
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.goods-list-item-title img {
    width: 60px;

}
.goods-list-item-specification{
    display: inline-block;
    color: #000;
    font-size: 26px;
    font-weight: bold;
    margin-left: 10px;
    /* top: 2.5rem;
    position: absolute; */
}
.icon-tip{
  width: 20px;
  height: 20px;
  /* position: relative;
  left: -0.3125rem; */
}
.progress-bar {
  width: 7.5rem;
  height: 1rem;
  background-color: #F6CBC6;
  position: absolute;
  bottom: 3.75rem;
  left: 9.0625rem;
  display: inline-block;
  border-radius: .75rem;
  z-index: 0;
}
.progress-bar-out {
  font-size: xx-small;
  margin-left: .3125rem;
  color: #ffffff;
  line-height: 1rem;
  z-index: 1;
}
.progress-bar-in {
  background-color: #F09639;
  height: 1rem;
  border-radius: .75rem;
  position: relative;
  top: -1rem;
  left: -0.3125rem;
  z-index: -1;
}
.progress-bar-percentage {
  position: relative;
  left: 5rem;
  top: -2rem;
  color: #EB4E3E;
}
.goods-list-item-price{
    color:#DD2F37;
    font-size: 1.125rem;
    font-weight: bold;
    position: absolute;
    left: 9.25rem;
    bottom: 0.5rem;
}
.goods-list-item-rmb{
    font-size: .75rem;
    margin-right: .25rem;
}
.goods-list-item-btn{
    position: absolute;
    bottom: .625rem;
    right: 0.9rem;
    color: #EB4E3E;
    background: #ffffff;
    width: 14%;
    height: 1.5rem;
    display: inline-block;
    border-radius: .75rem;
    border-color: #EB4E3E;
    border: .0625rem solid;
    text-align: center;
    line-height: 1.5rem;
    font-size: .75rem;
    font-family: PingFang-SC-Bold;
}
.goods-list-item-btn1{
    position: absolute;
    bottom: .625rem;
    right: 0.6rem;
    color: #64B93A;
    background: #ffffff;
    width: 19%;
    height: 1.5rem;
    display: inline-block;
    border-radius: .75rem;
    border-color: #64B93A;
    border: .0625rem solid;
    text-align: center;
    line-height: 1.5rem;
    font-size: .75rem;
    font-family: PingFang-SC-Bold;
}
.goods-list-price-activity {
  display: inline-block;
  text-decoration: line-through;
  color: #999;
  font-size:12px;
  width: auto;
  margin-left: .625rem;
  font-weight: normal;
}
</style>
<style>

</style>
