<template>
  <div>
    <div class="refund-header">
      <span>退款/售后</span>
    </div>
    <div v-if="refund_num !== 0" class="pay-goods-details">
      <div v-for="(item,index) in goodInfo" :key="index" class="order">
        <div class="shop">
          <img src="../img/shop_icon.png" alt="" class="shop-icon">
          <span class="shop-name">{{ item.shop_name }} ></span>
        </div>
        <div class="goods">
          <img :src="item.pic" alt="" class="goods-pic">
          <span class="goods-title">{{ item.name }}</span>
          <span class="goods-price">¥ {{ item.price }}</span>
          <span class="goods-spec">{{ item.spec }}</span>
          <span class="goods-num">× {{ item.num }}</span>
        </div>
        <img src="../img/refund_icon.png" alt="" class="price-icon">
        <span class="refund-state">仅退款 退款成功</span>
        <div class="unline" />
        <div class="button">
          <div class="eva-btn">
            <span>售后评价</span>
          </div>
          <div class="view-btn">
            <span>查看详情</span>
          </div>
        </div>
        <div v-if="refund_num === 0" class="goods-detailes">
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
  name: 'Refund',
  components: {},
  data () {
    return {
      refund_num: 1,
      goodInfo: [{
        shop_name: '虾米盒子自营店',
        pic: goods_pic,
        name: 'TNN 玻尿酸补水蚕丝面膜',
        spec: '急救补水',
        state: '待发货',
        price: 108,
        num: 1
      }, {
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

<style>
.refund-header {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.goods-details,.pay-goods-details {
  width: 100%;
  height: auto;
  background: #fff;
  /* margin-left: 24px; */
  /* margin-top: 24px; */
  border-radius: 8px;
}
.order {
    width: 100%;
    height: 500px;
}
.shop-icon {
    width: 33px;
    height: 30px;
    margin-top: 30px;
}
.shop {
    margin-left: 24px;
    /* margin-top: 35px; */
}
.shop-name {
    font-size: 24px;
    color: #191919;
    position: relative;
    top: -5px;
}
.goods {
    margin-top: 25px;
    position: relative;
    /* margin-left: 24px; */
    background: #FAFAFA;
    height: auto;
    width: 100%;
    /* margin-bottom: -20px; */
}
.goods-pic {
    width: 156px;
    height: 156px;
    margin-top: 25px;
    margin-left: 24px;
    margin-bottom: -60px;
}
.goods-title {
    font-size: 28px;
    color: #333333;
    position: relative;
    top: -90px;
    left: 200px;
    width: 46.8%;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.goods-price {
    font-size: 28px;
    right: 6.3%;
    position: absolute;
    top: 48px;
}
.goods-spec {
    font-size: 26px;
    color: #959595;
    margin-left: 203px;
    position: relative;
    top: -90px;
}
.goods-num {
    font-size: 24px;
    color: #959595;
    right: 7.3%;
    position: absolute;
    top: 98px;
}

.unline {
  width: 93.6%;
  position: relative;
  top: 30px;
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
  top: 15px;
  margin-left: 24px;
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
.eva-btn {
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
  top: 20px;
}
.view-btn {
  width: 152px;
  height: 54px;
  /* background: #F04E6F; */
  border-radius: 26px;
  border:1px solid #F04E6F;
  font-size:28px;
  font-weight:400;
  color:#F04E6F;
  line-height:54px;
  text-align: center;
  position: absolute;
  right: 20px;
  top: 20px;
}
.price-icon {
    width: 32px;
    height: 32px;
    margin-left: 24px;
    position: relative;
    top: 15px;
}
.refund-state {
    font-size: 28px;
    color: #21201F;
    position: relative;
    top: 10px;
}
</style>
