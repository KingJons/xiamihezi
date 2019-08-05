<template>
  <div>
    <div class="pay-success-title">
      <span>付款成功</span>
    </div>
    <div class="pay-details">
      <div class="pay-success-notice">
        <img src="../img/pay_icon.png" alt="" class="pay-icon">
      </div>
      <div class="pay-success-mes">
        付款成功
      </div>
      <div class="prepare-goods">
        努力配货中
      </div>
      <div class="exchange-hour">
        <span>交易时间：
          <span class="time">{{ getDate }}</span>
        </span>
      </div>
      <div class="pay-price">
        <span>支付金额：
          <span class="price">¥ {{ price }}</span>
        </span>
      </div>
    </div>
    <div class="view-order">
      <span>查看订单</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaySuccess',
  components: {},
  data () {
    return {
      price: 108
    }
  },
  computed: {
    getDate () {
      var date = new Date()
      var seperator1 = '-'
      var seperator2 = ':'
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
			' ' + date.getHours() + seperator2 + date.getMinutes() +
			seperator2 + date.getSeconds()
      return currentdate
    }
  }
}
</script>
<style scoped>
.pay-success-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.pay-details {
    width: 96%;
    height: 519px;
    background: #fff;
    border-radius: 8px;
    margin: 15px;
}
.pay-success-notice {
    display: flex;
    justify-content: center;
    align-items: center;
}
.pay-icon {
    width: 126px;
    height: 126px;
    margin-top: 69px;
}
.pay-success-mes, .prepare-goods {
    font-size: 40px;
    color: #1A1A1A;
    font-weight:bold;
    margin-top: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.prepare-goods {
    font-size:30px;
    font-weight: 400;
}
.exchange-hour, .pay-price {
    font-size: 26px;
    color: #767676;
    position: relative;
    margin-left: 28px;
    top: 77px;
}
.time, .price {
    position: absolute;
    right: 25px;
}
.pay-price {
    top: 87px;
}
.view-order {
    width: 96%;
    height: 119px;
    background: #fff;
    margin-left: 15px;
    margin-top: 5px;
    border-radius: 8px;
    font-size: 32px;
    text-align: center;
    line-height: 119px;
    color: #1A1A1A;
}
</style>
