<template>
  <!-- 店铺收益 -->
  <div>
    <div class="my-header-bg">
      <img src="../img/bg.png" alt="" class="header-bg">
      <div class="my-header-title">
        <span>店铺收益</span>
      </div>
    </div>
    <div class="my-revenue">
      <img src="../img/integral_bg.png" alt="" class="revenue-bg">
      <span class="title">账户余额</span>
      <span class="revenue-num">{{ balance.money }}</span>
      <span class="unsettled">待结算
        <span class="unsettled-price">{{ balance.pendingSettlement }}</span>
      </span>
      <span class="settled">已结算
        <span class="unsettled-price">{{ balance.settled }}</span>
      </span>
    </div>
    <div class="time-line-box">
      <mu-col span="12" lg="4" sm="6" class="time1">
        <mu-date-input v-model="balance.startTime" solo label-float icon="today" full-width />
      </mu-col>
      <span class="to">至</span>
      <mu-col span="12" lg="4" sm="6" class="time2">
        <mu-date-input v-model="balance.endTime" solo label-float icon="today" full-width />
      </mu-col>
      <img src="../img/revenue_details.png" alt="" class="revenue-details">
      <span class="revenue-details-title">收益明细</span>
      <span class="count">统计：
        <span class="price">3.00</span>
      </span>
      <div v-for="item in revenues" :key="item.orderId" class="revenue-details-box">
        <div class="revenue-box">
          <span class="order-name">来自{{ item.fromNickname }}的订单(粉丝ID:{{ item.fromUserId }})</span>
          <span :class="item.state==='已结算'? 'order-state-settled':'order-state'">{{ item.isSettlment }}</span>
          <span class="order-num">订单号：{{ item.orderNo }}</span>
          <span class="order-price">订单金额：
            <span class="price"> {{ item.yuanOrderMoney }}</span>
          </span>
          <span class="order-reward">赏金：
            <span class="price"> {{ item.yuanRewardMoney }}</span>
          </span>
          <span class="order-time">{{ item.createTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findDetail } from '@/api/store'
export default {
  name: 'ShopRevenue',
  components: {},
  data () {
    return {
      balance: {},
      revenues: []
    }
  },
  created () {
    this.funfindDetail(this.$route.query.id)
  },
  methods: {
    funfindDetail (id) {
      const par = {
        id: id,
        pageSize: 10,
        page: 1
      }
      findDetail(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.balance = res.data.data.obj
          this.revenues = res.data.data.list
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

<style>
.my-header-bg {
    width: 100%;

}
.header-bg {
    width: 100%;
    height: 348px;
}
.my-header-title {
    position: fixed;
    /* left: 40%; */
    color: #fff;
    top: 0;
    font-size: 38px;
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
}
.my-revenue {
    width: 100%;
    margin-top: -250px;
    position: relative;
}
.revenue-bg {
    width: 100%;
    height: 360px;
}
.my-revenue .title {
    font-size: 26px;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:60px;
    text-shadow:0px 2px 6px rgba(218,184,113,1);
    position: relative;
    margin-left: 60px;
    top: -350px;
}

.revenue-num {
   font-size:80px;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:60px;
    text-shadow:0px 2px 6px rgba(218,184,113,1);
    position: relative;
    margin-left: -120px;
    top: -220px;
}
.withdraw {
    font-size:26px;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:60px;
    text-shadow:0px 2px 6px rgba(218,184,113,1);
    position: absolute;
    right: 40px;
    top: 45px;
}
.unsettled, .settled {
    font-size:26px;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:60px;
    text-shadow:0px 2px 6px rgba(218,184,113,1);
}
.unsettled {
    position: relative;
    margin-left: -280px;
    top: -150px;
}
.settled {
    position: absolute;
    right: 40px;
    bottom: 150px;
}
.time-line-box {
    width: 93.6%;
    height: auto;
    background: #fff;
    margin-left: 3.2%;
    margin-top: -74px;
    position: relative;
}
.time1 {
    width: 52%;
    /* margin-left: -15px; */
    top: 12px;
    position: relative;
    right: 0px;
}
.mu-popover {
    max-width: 100%;
}
.material-icons {
    font-size: 44px;
}
.mu-input.has-icon {
    padding-left: 85px;
}
.to {
    font-size: 28px;
    color: #898D90;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -58px;
}
.time2 {
    width: 52%;
    /* margin-left: 50%; */
    top: 12px;
    right: 0px;
    position: absolute;
}
.revenue-details {
    width: 28px;
    height: 30px;
    margin-left: 30px;
    position: relative;
    top: -10px;

}
.revenue-details-title {
    font-size: 30px;
    color: #D6BB86;
    position: relative;
    top: -15px;
}
.count {
    font-size: 26px;
    color: #817F7F;
    position: absolute;
    right: 30px;
}
.count .price {
    color: #D6BB86;
    font-size: 30px;
}
.revenue-details-box {
    margin-top: 30px;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
}
.revenue-box {
    margin-top: 10px;
    margin-left: 24px;
    position: relative;
    height: 200px;
    bottom: 10px;
}
.order-name {
    font-size: 28px;
    color: #333333;
}
.order-state {
    font-size: 28px;
    color: #F04E6F;
    position: absolute;
    right: 30px;
    margin-top: 10px;
}
.order-state-settled {
    font-size: 28px;
    color: #D6BB86;
    position: absolute;
    right: 30px;
    margin-top: 10px;
}
.order-num,.order-price,.order-reward {
    position: absolute;
    left: 0px;
    margin-top: 80px;
    font-size: 22px;
    color: #7F8487;
}
.order-price {
    margin-top: 120px;
}
.order-price .price,.order-reward .price {
    color: #F04E6F;
}
.order-reward {
    margin-top: 160px;
}
.order-time {
    font-size: 22px;
    color: #A7A9AA;
    position: absolute;
    right: 30px;
    margin-top: 160px;
}
</style>
