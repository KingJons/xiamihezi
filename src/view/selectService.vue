<template>
  <div>
    <div class="select-service-header">
      <span>选择服务类型</span>
    </div>
    <div class="goods-info">
      <img :src="goodsInfo.goods_pic" alt="" class="goods-img">
      <span class="goods-name">{{ goodsInfo.goods_name }}</span>
      <span class="goods-spec">{{ goodsInfo.spec }}</span>
    </div>
    <div class="select-service">
      <div class="refund">
        <img src="../img/price_icon.png" alt="" class="refund-icon">
        <span class="select-refund">我要退款(无需退货)</span>
        <span class="refund-reason">没收到货，或与卖家协商同意不同退货只退款</span>
      </div>
      <div class="return-goods">
        <img src="../img/refund_icon.png" alt="" class="refund-icon">
        <span class="select-refund">我要退款退货</span>
        <span class="refund-explain">已收到货，需要退还收到的货物</span>
      </div>
    </div>
  </div>
</template>

<script>
import pic from '../img/good_pic.png'
export default {
  name: 'SelectService',
  components: {},
  data () {
    return {
      goodsInfo: {
        goods_pic: pic,
        goods_name: 'TNN玻尿酸补水蚕丝面膜',
        spec: '急救补水'
      }
    }
  }
}
</script>

<style>
.select-service-header {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.goods-info {
    width: 100%;
    height: 170px;
    background: #fff;
}
.goods-img {
    width: 138px;
    height: 138px;
    margin-left: 24px;
    margin-top: 16px;
}
.goods-name {
    font-size: 24px;
    color: #333333;
    margin-left: 14px;
    position: relative;
    top: -100px;
}
.goods-spec {
    font-size: 22px;
    color: #888888;
    margin-left: -275px;
    top: -60px;
    position: relative;
}
.select-service {
    width: 100%;
    height: 242px;
    background: #fff;
    margin-top: 24px;
}
.refund {
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #E8E8E8;
}
.refund-icon {
    width: 44px;
    height: 44px;
    margin-left: 22px;
    margin-top: 24px;
}
.select-refund {
    font-size: 26px;
    color: #333333;
    position: relative;
    margin-left: 14px;
    top: -20px;
}
.refund-reason,.refund-explain {
    font-size: 22px;
    color: #818181;
    position: relative;
    top: 20px;
    margin-left: -240px;
}
.refund-explain {
    margin-left: -170px;
}
</style>
