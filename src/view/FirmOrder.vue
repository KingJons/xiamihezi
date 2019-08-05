<template>
  <div>
    <div class="firm-order-title">
      <span>确认订单</span>
    </div>
    <div class="user-info">
      <span class="name-phone">
        {{ orderInfo.userAddr.name }} <span class="phone">{{ orderInfo.userAddr.mobile }}</span>
      </span>
      <div class="address">
        <img src="../img/map.png" alt="" class="map">
        <span>{{ orderInfo.userAddr.province }}{{ orderInfo.userAddr.city }}
          {{ orderInfo.userAddr.ditrict }}{{ orderInfo.userAddr.detail }}
        </span>
        <img src="../img/break.png" alt="" class="break">
        <img src="../img/address_arrow.png" alt="" class="arorw">
      </div>
    </div>
    <div v-for="item in orderInfo" :key="item.shopId" class="good-box">
      <div class="shop">
        <img src="../img/shop_icon.png" alt="" class="shop-icon">
        <span class="shop-name">{{ item.shopName }}</span>
        <img src="../img/shop_arrow.png" alt="" class="shop_arrow">
      </div>
      <div v-for="tab in item.buyGoods" :key="tab.goodsId" class="goods-info">
        <div class="good-info">
          <img :src="item.skuPhoto" alt="" class="good-pic">
          <span class="good-title">{{ tab.title }}</span>
          <span class="good-price">¥ {{ tab.yuanPrice }}</span>
          <span class="good-spec">{{ tab.specVal }}</span>
          <span class="good-num">× {{ tab.quantity }}</span>
        </div>
      </div>
      <div class="fright">
        <span>运费
          <span class="fright-price">¥ {{ item.yuanCartShopFreight }}</span>
        </span>
        <img src="../img/break_bottom.png" alt="" class="fright-break">
      </div>
      <div class="sum-price">
        <div class="integral">
          <span>积分
            <span class="num">{{ num }}.00</span>
          </span>
          <img src="../img/break_bottom.png" alt="" class="fright-break">
        </div>
        <div class="actual-price-title">
          <span>实付金额
            <span class="actual-price">¥ {{ item.yuanCartShopFreight }}</span>
          </span>
          <img src="../img/break_bottom.png" alt="" class="fright-break">
        </div>
      </div>
      <div class="good-count">
        <span class="count">共{{ count }}件商品
          <span>小计 <span class="all-price">¥ {{ sum }}.00</span></span>
        </span>
      </div>
    </div>
    <div class="totol-box">
      <span class="amount">总计
        <span class="amount-price">¥ {{ sum }}</span>
      </span>
      <mu-button color="#DD3038" class="count-btn">
        结算
      </mu-button>
    </div>
  </div>
</template>

<script>
import { buyNow } from '@/api/order'
export default {
  name: 'FirmOrder',
  components: {},
  data () {
    return {
      fright_price: 15,
      num: 0,
      actual_price: 0,
      orderInfo: {}

    }
  },
  computed: {
    sum () {
      var actual_price = 0
      for (let i = 0; i < this.orderInfo.buyShops.length; i++) {
        for (let j = 0; j < this.orderInfo.buyShops.buyGoods.length; i++) {
          actual_price += this.orderInfo.buyShops[i].buyGoods[j].yuanPrice * this.orderInfo.buyShops[i].buyGoods[j].quantity
        }
      }
      actual_price += this.orderInfo.buyShops.yuanCartShopFreight
      return actual_price
    },
    count () {
      var count = 0
      for (let i = 0; i < this.orderInfo.buyShops.length; i++) {
        for (let j = 0; j < this.orderInfo.buyShops.buyGoods.length; i++) {
          count += this.orderInfo.buyShops[i].buyGoods[j].quantity
        }
      }
      return count
    }
  },
  created () {
    this.funbuyNow(this.$route.query.quantity, this.$route.query.id)
  },
  methods: {
    funbuyNow (num, id) {
      const par = {
        quantity: num,
        goodsId: id
      }
      buyNow(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.orderInfo = res.data.data.obj
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
.firm-order-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.user-info {
    width: 93.6%;
    height: 160px;
    background: #fff;
    margin-left: 3.2%;
    margin-top: 21px;
    border-radius: 8px;
    box-shadow:0px 0px 10px 0px rgba(191,188,188,0.25);
}
.name-phone {
    position: relative;
    font-size: 32px;
    color: #1A1A1A;
    margin-left: 30px;
    top: 23px;
}
.phone {
    font-size: 28px;
}
.address {
    /* position: relative; */
    margin-left: 30px;
    margin-top: 34px;

}
.address span {
    font-size: 24px;
    color: #1A1A1A;
    position: relative;
    top: -3px;
}
.map {
    width: 24px;
    height: 28px;
    font-size: 24px;
    color: #1A1A1A;
}
.break {
    width: 100%;
    margin-left: -17px;
    position: relative;
    top: -16px;
}
.arorw {
    width: 15px;
    height: 27px;
    margin-left: 88%;
    position: relative;
    top: -140px;
}
.good-box {
    width: 93.6%;
    height: 862px;
    background: #fff;
    border-radius: 8px;
    box-shadow:0px 0px 10px 0px rgba(191,188,188,0.25);
    margin-left: 3.2%;
    margin-top: 24px;
    margin-bottom: 120px;
}
.goods-info {
    margin-left: 31px;
    margin-bottom: -100px;
}
.shop-icon {
    width: 39px;
    height: 36px;
    margin-top: 30px;
}
.shop {
    margin-left: 31px;
    margin-top: 30px;
}
.shop-name {
    font-size: 26px;
    color: #191919;
    position: relative;
    top: -5px;
}
.shop_arrow {
    width: 13px;
    height: 23px;
    position: relative;
    top: -5px;
}
.good-info {
    margin-top: 22px;
    position: relative;
}
.good-pic {
    width: 156px;
    height: 156px;
}
.good-title {
    font-size: 30px;
    color: #333333;
    position: relative;
    top: -150px;
    left: 166px;
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
    font-size: 24px;
    color: #959595;
    margin-left: 170px;
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
.fright ,.sum-price {
    font-size: 28px;
    color: #7D8082;
    margin-left: 33px;
    margin-top: 68px;
    position: relative;
}
.fright-break {
    width: 93.6%;
}
.sum-price,.integral,.actual-price-title,.good-count {
    margin-top: 20px;
    position: relative;
}
.num,.actual-price,.fright-price {
    right: 7.3%;
    position: absolute;
    top: 5px;
}
.count {
    font-size: 28px;
    color: #333333;
    position: absolute;
    right: 6.5%;
    top: 10px;
}
.all-price {
    color: #DD3038;
    font-size: 30px;
    font-weight: bold
}
.totol-box {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 110px;
    background: #fff;
}
.amount {
    font-size: 28px;
    margin-left: 30px;
    font-weight:bold;
    color:rgba(221,48,56,1);
    line-height:100px;
}
.amount-price {
    font-size:44px;
    margin-left: 19px;
    position: relative;
    top: 3px;
}
.count-btn {
    position:absolute;
    right: 20px;
    top: 20px;
}
</style>
