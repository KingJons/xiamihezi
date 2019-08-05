<template>
  <div>
    <div class="order-header">
      <span>我的订单</span>
    </div>
    <div class="tabs">
      <mu-tabs class="mu-tabs" :value.sync="active2" inverse color="#000" indicator-color="#F10D3B" full-width style="color:#858585;background:#fff;width:100%">
        <mu-tab>全部</mu-tab>
        <mu-tab>待付款</mu-tab>
        <mu-tab>待发货</mu-tab>
        <mu-tab>待收货</mu-tab>
        <mu-tab>待评价</mu-tab>
      </mu-tabs>
      <div v-if="active2 === 0" class="demo-text">
        <div v-if="all_num !==0" class="goods-details">
          <div v-for="(item,index) in goodInfo" :key="index" class="order">
            <div class="shop">
              <img src="../img/shop_icon.png" alt="" class="shop-icon">
              <span class="shop-name">{{ item.shop_name }} ></span>
              <span class="good-state">{{ item.state }}
              </span>
            </div>
            <div class="goods">
              <img :src="item.pic" alt="" class="goods-pic">
              <span class="goods-title">{{ item.name }}</span>
              <span class="goods-price">¥ {{ item.price }}</span>
              <span class="goods-spec">{{ item.spec }}</span>
              <span class="goods-num">× {{ item.num }}</span>
              <div class="line" />
            </div>
            <div class="count">
              <span>共{{ item.num }}件商品 总计：
                <span class="price-sum">￥{{ item.price*item.num }}</span>
              </span>
            </div>
          </div>
        </div>
        <div v-if="all_num === 0" class="goods-detailes">
          <img src="../img/empty_order.png" alt="" class="empty-order">
          <span class="none-order">您还没有相关订单</span>
        </div>
      </div>
      <div v-if="active2 === 1" class="demo-text">
        <div v-if="pay_num !== 0" class="pay-goods-details">
          <div v-for="(item,index) in goodInfo" :key="index" class="order">
            <div class="shop">
              <img src="../img/shop_icon.png" alt="" class="shop-icon">
              <span class="shop-name">{{ item.shop_name }} ></span>
              <span class="good-state">{{ item.state }}
              </span>
            </div>
            <div class="goods">
              <img :src="item.pic" alt="" class="goods-pic">
              <span class="goods-title">{{ item.name }}</span>
              <span class="goods-price">¥ {{ item.price }}</span>
              <span class="goods-spec">{{ item.spec }}</span>
              <span class="goods-num">× {{ item.num }}</span>
              <span class="uncount">共{{ item.num }}件商品 总计：
                <span class="price-sum">￥{{ item.price*item.num }}</span>
              </span>
              <div class="unline" />
              <div class="button">
                <div class="del-btn">
                  <span>取消订单</span>
                </div>
                <div class="time-btn">
                  <span>20:00:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pay_num === 0" class="goods-detailes">
          <img src="../img/empty_order.png" alt="" class="empty-order">
          <span class="none-order">您还没有相关订单</span>
        </div>
      </div>
      <div v-if="active2 === 2" class="demo-text">
        <div v-if="dispatch_num !== 0" class="goods-details">
          <div v-for="(item,index) in goodInfo" :key="index" class="order">
            <div class="shop">
              <img src="../img/shop_icon.png" alt="" class="shop-icon">
              <span class="shop-name">{{ item.shop_name }} ></span>
              <span class="good-state">{{ item.state }}
              </span>
            </div>
            <div class="goods">
              <img :src="item.pic" alt="" class="goods-pic">
              <span class="goods-title">{{ item.name }}</span>
              <span class="goods-price">¥ {{ item.price }}</span>
              <span class="goods-spec">{{ item.spec }}</span>
              <span class="goods-num">× {{ item.num }}</span>
              <div class="line" />
            </div>
            <div class="count">
              <span>共{{ item.num }}件商品 总计：
                <span class="price-sum">￥{{ item.price*item.num }}</span>
              </span>
            </div>
          </div>
        </div>
        <div v-if="dispatch_num === 0" class="goods-detailes">
          <img src="../img/empty_order.png" alt="" class="empty-order">
          <span class="none-order">您还没有相关订单</span>
        </div>
      </div>
      <div v-if="active2 === 3" class="demo-text">
        <div v-if="shipped_num !== 0" class="pay-goods-details">
          <div v-for="(item,index) in goodInfo" :key="index" class="order">
            <div class="shop">
              <img src="../img/shop_icon.png" alt="" class="shop-icon">
              <span class="shop-name">{{ item.shop_name }} ></span>
              <span class="good-state">{{ item.state }}
              </span>
            </div>
            <div class="goods">
              <img :src="item.pic" alt="" class="goods-pic">
              <span class="goods-title">{{ item.name }}</span>
              <span class="goods-price">¥ {{ item.price }}</span>
              <span class="goods-spec">{{ item.spec }}</span>
              <span class="goods-num">× {{ item.num }}</span>
              <span class="uncount">共{{ item.num }}件商品 总计：
                <span class="price-sum">￥{{ item.price*item.num }}</span>
              </span>
              <div class="unline" />
              <div class="button">
                <div class="del-btn">
                  <span>查看物流</span>
                </div>
                <div class="time-btn">
                  <span>确认收货</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="shipped_num === 0" class="goods-detailes">
          <img src="../img/empty_order.png" alt="" class="empty-order">
          <span class="none-order">您还没有相关订单</span>
        </div>
      </div>
      <div v-if="active2 === 4" class="demo-text">
        <div v-if="unevaluate_num !== 0" class="pay-goods-details">
          <div v-for="(item,index) in goodInfo" :key="index" class="order">
            <div class="shop">
              <img src="../img/shop_icon.png" alt="" class="shop-icon">
              <span class="shop-name">{{ item.shop_name }} ></span>
              <span class="good-state">待评价
              </span>
            </div>
            <div class="goods">
              <img :src="item.pic" alt="" class="goods-pic">
              <span class="goods-title">{{ item.name }}</span>
              <span class="goods-price">¥ {{ item.price }}</span>
              <span class="goods-spec">{{ item.spec }}</span>
              <span class="goods-num">× {{ item.num }}</span>
              <span class="uncount">共{{ item.num }}件商品 总计：
                <span class="price-sum">￥{{ item.price*item.num }}</span>
              </span>
              <div class="unline" />
              <div class="button">
                <div class="del-btn">
                  <span>查看物流</span>
                </div>
                <div class="time-btn">
                  <span>评价</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="unevaluate_num === 0" class="goods-detailes">
          <img src="../img/empty_order.png" alt="" class="empty-order">
          <span class="none-order">您还没有相关订单</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import goods_pic from '../img/good_pic.png'
export default {
  name: 'MyAllOrder',
  components: {},
  data () {
    return {
      all_num: 1,
      pay_num: 1,
      dispatch_num: 1,
      shipped_num: 1,
      unevaluate_num: 1,
      active2: 0,
      goodInfo: [{
        shop_name: '虾米盒子自营店',
        pic: goods_pic,
        name: 'TNN 玻尿酸补水蚕丝面膜',
        spec: '急救补水',
        state: '待发货',
        price: 108,
        num: 1
      }]
    }
  }
}
</script>
<style scoped>
.order-header {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.mu-tab {
  min-width: 20%;
  font-size: 26px;
}

.goods-details,.pay-goods-details {
  width: 93.6%;
  height: 380px;
  background: #fff;
  margin-left: 24px;
  margin-top: 24px;
  border-radius: 8px;
}
.pay-goods-details {
  height: 480px;
}
.shop-icon {
    width: 33px;
    height: 30px;
    margin-top: 30px;
}
.shop {
    margin-left: 24px;
    margin-top: 35px;
}
.shop-name {
    font-size: 24px;
    color: #191919;
    position: relative;
    top: -5px;
}
.good-state {
  right: 7.3%;
  position: absolute;
  font-size:26px;
  font-weight:bold;
  color:rgba(205,173,110,1);
  margin-top: 25px;
}
.goods {
    margin-top: 25px;
    position: relative;
    margin-left: 24px;
}
.goods-pic {
    width: 156px;
    height: 156px;
}
.goods-title {
    font-size: 28px;
    color: #333333;
    position: relative;
    top: -150px;
    left: 176px;
    width: 46.8%;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.goods-price {
    font-size: 28px;
    right: 7.3%;
    position: absolute;
    top: 25px;
}
.goods-spec {
    font-size: 26px;
    color: #959595;
    margin-left: 180px;
    position: relative;
    top: -150px;
}
.goods-num {
    font-size: 24px;
    color: #959595;
    right: 7.3%;
    position: absolute;
    top: 75px;
}
.line {
  width: 93.6%;
  position: relative;
  top: -60px;
  border: 1px solid #E7E6E6
}
.unline {
  width: 93.6%;
  position: relative;
  top: -10px;
  border: 1px solid #E7E6E6
}
.count {
  font-size:22px;
  font-weight:bold;
  color:rgba(33,32,31,1);
  margin-left: 55%;
  margin-top: -30px;
}
.uncount {
  font-size:22px;
  font-weight:bold;
  color:rgba(33,32,31,1);
  position: relative;
  top: -30px;
}
.price-sum {
  font-size:26px;
}
.empty-order {
    width: 61.067%;
    height: 288px;
    margin-left: 19.47%;
    margin-top: 140px;
}
.none-order {
    font-size:30px;
    font-weight:400;
    color:rgba(160,160,160,1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 121px;
}
.button {
  margin-top: 30px;
  position: relative;
}
.del-btn {
  width: 152px;
  height: 54px;
  border: 1px solid #959595;
  border-radius: 26px;
  font-size:28px;
  font-weight:400;
  color:rgba(149,149,149,1);
  line-height:54px;
  text-align: center;
  position: absolute;
  right: 192px;
}
.time-btn {
  width: 152px;
  height: 54px;
  background: #F04E6F;
  border-radius: 26px;
  font-size:28px;
  font-weight:400;
  color:#FFF;
  line-height:54px;
  text-align: center;
  position: absolute;
  right: 20px;
  top: 0px;
}
</style>
