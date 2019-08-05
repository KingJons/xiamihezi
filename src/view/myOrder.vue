<template>
  <!-- 我的订单 -->
  <div>
    <div class="order-header">
      <img v-if="state === paied" src="../img/paied_bg.png" alt="" class="header-bg">
      <img v-if="state === unpay" src="../img/unpay_bg.png" alt="" class="header-bg">
      <img v-if="state === close" src="../img/close_bg.png" alt="" class="header-bg">
      <img v-if="state === success" src="../img/success_bg.png" alt="" class="header-bg">
      <img v-if="state === shipped" src="../img/shipped_bg.png" alt="" class="header-bg">
      <img v-if="state === refund" src="../img/refund_bg.png" alt="" class="header-bg">
      <img v-if="state === refunding" src="../img/refund_bg.png" alt="" class="header-bg">
      <span class="header-title">我的订单</span>
      <span v-if="state === paied" class="header-title1">{{ paied }}</span>
      <span v-if="state === unpay" class="header-title1">{{ unpay }}</span>
      <span v-if="state === close" class="header-title1">{{ close }}</span>
      <span v-if="state === success" class="header-title1">{{ success }}</span>
      <span v-if="state === shipped" class="header-title1">{{ shipped }}</span>
      <span v-if="state === refund" class="header-title1">{{ refund }}</span>
      <span v-if="state === refunding" class="header-title1">{{ refunding }}</span>
    </div>
    <div v-if="state !== refund">
      <div class="logistics-info">
        <img src="../img/logistics_icon.png" alt="" class="logistics-icon">
        <div class="logistics-place">
          <span>{{ logisticsInfo.pre_place }} 已发出，下一站{{ logisticsInfo.next_place }}</span>
        </div>
        <div class="logistics-time">
          <span>{{ logisticsInfo.time }}</span>
        </div>
        <img src="../img/arrow3.png" alt="" class="logistics-arrow">
      </div>
      <div class="break" />
      <div class="user-info">
        <img src="../img/address_icon.png" alt="" class="address-icon">
        <div class="user">
          <span>{{ userInfo.name }}
            <span class="phone">{{ userInfo.phone }}</span>
          </span>
        </div>
        <div class="address">
          <span>{{ userInfo.address }}</span>
        </div>
        <img src="../img/break.png" alt="" class="user-break">
      </div>
      <div class="good-box">
        <div class="shop">
          <img src="../img/shop_icon.png" alt="" class="shop-icon">
          <span class="shop-name">{{ goodInfo.shop }} </span>
          <img src="../img/arrow3.png" alt="" class="shop_arrow">
        </div>
        <div class="good-info">
          <img :src="goodInfo.good_pic" alt="" class="good-pic">
          <span class="good-title">{{ goodInfo.title }}</span>
          <span class="good-price">¥ {{ goodInfo.price }}</span>
          <span class="good-spec">{{ goodInfo.spec }}</span>
          <span class="good-num">× {{ goodInfo.num }}</span>
          <div class="order-details">
            <div class="fright">
              <span>运费
                <span class="fright-price">¥ {{ goodInfo.fright }}.00</span>
              </span>
            </div>
            <div class="order-sum">
              <span>订单总计
                <span class="order-price">¥ {{ sum }}.00</span>
              </span>
            </div>
            <div class="integral">
              <span>积分
                <span class="integral-num">{{ integral }}.00</span>
              </span>
            </div>
            <div class="actual">
              <span>实付金额
                <span class="actual-price">¥ {{ sum }}.00</span>
              </span>
            </div>
            <div class="pay-way">
              <span>支付方式
                <span class="way">{{ goodInfo.pay_way }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="order-info">
        <div>
          <img src="../img/order_icon.png" alt="" class="order-icon">
          <span class="info-title">订单信息</span>
        </div>
        <div class="order-info-details">
          <div class="order-number">
            <span>订单编号：
              <span class="number">{{ orderInfo.orderNum }}</span>
            </span>
          </div>
          <div class="creat-time">
            <span>创建时间：
              <span class="time1">{{ orderInfo.creatTime }}</span>
            </span>
          </div>
          <div class="pay-time">
            <span>付款时间：
              <span class="time2">{{ orderInfo.payTime }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="contact-service">
        <span>联系客服</span>
      </div>
    </div>
    <div v-if="state===refund" class="refund-box">
      <div class="refund-header">
        <span class="refund-title">退款总金额</span>
        <span class="refund-price">￥{{ goodInfo.price }}.00</span>
        <div class="refund-break" />
        <span class="refund-way-title">退回银行卡</span>
        <span class="refund-way-price">￥{{ goodInfo.price }}.00</span>
      </div>
      <div class="refund-message">
        <div class="message-title">
          <span>退款信息</span>
        </div>
        <div class="goods">
          <img :src="goodInfo.good_pic" alt="" class="goods-pic">
          <span class="goods-title">{{ goodInfo.title }}</span>
          <span class="goods-num">× {{ goodInfo.num }}</span>
        </div>
        <div class="refund-details">
          <div class="refund-reason">
            退款原因：
            <span>{{ orderInfo.reason }}</span>
          </div>
          <div class="refund-price1">
            退款金额：
            <span>{{ goodInfo.price }}.00</span>
          </div>
          <div class="apply-time">
            申请时间：
            <span>{{ orderInfo.applyTime }}</span>
          </div>

          <div class="refund-num">
            退款编号：
            <span>{{ orderInfo.orderNum }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pic from '../img/good_pic.png'
export default {
  name: 'MyOrder',
  components: {},
  data () {
    return {
      state: '买家已付款',
      paied: '买家已付款',
      unpay: '买家未付款',
      shipped: '卖家已发货',
      success: '交易成功',
      close: '交易关闭',
      refund: '退款成功',
      refunding: '退款/售后 受理中...',
      integral: 0,
      logisticsInfo: {
        pre_place: '广东省广州市白云区三元里公司',
        next_place: '广东省广州市白云区三元里机场西分部',
        time: '2019-5-18 16:34:00'
      },
      userInfo: {
        name: '王小米',
        phone: '13487650953',
        address: '广东省广州市 白云区 云城东路559-571号 云璟汇 2307'
      },
      goodInfo: {
        shop: '虾米盒子自营店',
        good_pic: pic,
        title: 'TNN 玻尿酸补水蚕丝面膜',
        spec: '急救补水',
        price: 108,
        num: 1,
        fright: 0,
        pay_way: '支付宝'
      },
      orderInfo: {
        orderNum: '9887572621727471800',
        creatTime: '2019-5-19 14:32',
        payTime: '2019-5-20 09:52',
        reason: '快递一直未送到',
        applyTime: '2019-05-20 09:52'

      }
    }
  },
  computed: {
    sum () {
      var sum = 0
      sum = this.goodInfo.price * this.goodInfo.num
      return sum
    }
  }
}
</script>
<style scoped>
.order-header {
    margin: 0;
    padding: 0;
    position: relative;
}
.header-bg {
    width: 100%;
}
.header-title1 {
  font-size:32px;
  font-weight:400;
  color:rgba(255,255,255,1);
  top: -130px;
  margin-left: 82px;
  position: relative;
}
.header-title{
    position: absolute;
    color: #fff;
    font-size:38px;
    top: 67px;
    left: 40%;
}
.logistics-info {
    background: #fff;
    width: 100%;
    height: 170px;
    margin-top: -63px;
}
.logistics-icon, .address-icon {
    width: 64px;
    height: 64px;
    margin-left: 25px;
    margin-top: 53px;
}
.logistics-place {
    font-size:28px;
    font-weight:bold;
    color:rgba(65,119,208,1);
    position: relative;
    margin-left: 111px;
    top: -110px;
    width: 73.8%;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.logistics-time {
    font-size:24px;
    font-weight:400;
    color:rgba(157,159,160,1);
    position: relative;
    margin-left: 111px;
    top: -90px;
}
.logistics-arrow {
    width: 15px;
    height: 28px;
    position: relative;
    margin-left: 93%;
    top: -170px;
}
.break {
    height:2px;
    background:#E7E7E7;
    width: 93.6%;
    margin-left: 23px;
}
.user-info {
    width: 100%;
    height: 189px;
    background: #fff;
}
.user-break {
    width: 100%;
    position: relative;
    top: -95px;
}
.user {
    font-size:28px;
    font-weight:bold;
    color:rgba(26,26,26,1);
    position: relative;
    margin-left: 111px;
    top: -100px;
}
.phone {
    font-size:26px;
    font-weight:400;
    color:rgba(104,104,104,1);
}
.address {
    font-size:28px;
    font-weight:400;
    color:rgba(26,26,26,1);
    position: relative;
    margin-left: 111px;
    top: -80px;
    width: 82%;
}
.good-box {
    width: 100%;
    height: 610px;
    background: #fff;
    margin-top: 14px;
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
.shop_arrow {
    width: 13px;
    height: 23px;
    position: relative;
    top: -2px;
}
.good-info {
    margin-top: 22px;
    position: relative;
    margin-left: 24px;
}
.good-pic {
    width: 156px;
    height: 156px;
}
.good-title {
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
.good-price {
    font-size: 28px;
    right: 7.3%;
    position: absolute;
    top: 25px;
}
.good-spec {
    font-size: 26px;
    color: #959595;
    margin-left: 180px;
    position: relative;
    top: -150px;
}
.good-num {
    font-size: 24px;
    color: #959595;
    right: 7.3%;
    position: absolute;
    top: 75px;
}
.order-details {
    font-size:28px;
    font-weight:400;
    color:rgba(125,128,130,1);
    position: relative;
    top: -50px;
}
.fright,.order-sum,.integral,.actual,.pay-way {
    position: relative;
}
.fright-price,.order-price,.integral-num,.actual-price,.way {
    position: absolute;
    right: 7.3%;
}
.order-sum {
    top: 25px;
}
.integral {
    top: 45px;
}
.actual{
    top: 65px;
}
.pay-way{
    top: 85px;
}
.order-info {
    width: 100%;
    height: 280px;
    background: #fff;
    margin-top: 24px;
}
.order-icon {
    width: 4px;
    height: 24px;
    margin-left: 24px;
    margin-top: 38px;
}
.info-title {
    font-size: 26px;
    color: #191919;
    position: relative;
    top: -4px;
}
.order-info-details {
    margin-top: 37px;
    margin-left: 26px;
    font-size:28px;
    font-weight:400;
    color:rgba(125,128,130,1);
}
.order-number, .creat-time, .pay-time {
    top: -15px;
    position: relative;
}
.creat-time {
    top: 10px;
}
.pay-time {
    top: 30px;
}
.number, .time1, .time2 {
    position: absolute;
    left: 23.6%;
    top: 6px;
}
.contact-service {
    width: 100%;
    height: 100px;
    background: #fff;
    margin-top: 24px;
    margin-bottom: 30px;
    font-size:30px;
    font-weight:400;
    color:rgba(26,26,26,1);
    line-height: 100px;
}
.contact-service span {
    margin-left: 24px;
}
.refund-header {
  width: 100%;
  height: 200px;
  background: #fff;
  margin-top: -60px;
  position: relative;
}
.refund-title, .refund-way-title {
  font-size: 30px;
  color: #333333;
  margin-left: 24px;
  position: relative;
  top: 24px;
}
.refund-break {
  height:2px;
  background:#E7E7E7;
  width: 93.6%;
  margin-left: 23px;
  position: relative;
  top: 45px;
}
.refund-way-title {
  position: relative;
  top: 60px;
}
.refund-price,.refund-way-price {
  position: absolute;
  right: 23px;
}
.refund-price {
  font-size: 36px;
  color: #DD2F37;
  top: 33px;
}
.refund-way-price {
  font-size: 30px;
  color: #333333;
  top: 130px;
}
.refund-message {
  width: 100%;
  height: 550px;
  background: #fff;
  margin-top: 27px;
}
.message-title {
  font-size: 30px;
  color: #333333;
  margin-left: 24px;
  position: relative;
  top: 31px;
}
.goods {
  width:100%;
  height:204px;
  background:rgba(250,250,250,1);
  margin-top: 55px;
  position: relative;
}
.goods-pic {
  width: 156px;
  height: 156px;
  margin-top: 24px;
  margin-left: 24px;
}
.goods-title {
  font-size: 26px;
  color: #333333;
  margin-left: 10px;
  position: relative;
  top: -120px;
}
.goods-num {
  font-size: 22px;
  color: #959595;
  position: absolute;
  right: 24px;
  top: 50px;
}
.refund-details {
  margin-left: 24px;
  margin-top: 29px;
  font-size: 26px;
  color: #7D8082;
}
.refund-price1,.apply-time,.refund-num {
  margin-top: 15px;
}
</style>
