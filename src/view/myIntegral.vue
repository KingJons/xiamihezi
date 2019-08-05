<template>
  <!-- 我的积分 -->
  <div>
    <div class="my-header-bg">
      <img src="../img/bg.png" alt="" class="header-bg">
      <div class="my-header-title">
        <span>我的积分</span>
      </div>
    </div>
    <div class="my-integral">
      <img src="../img/integral_bg.png" alt="" class="integral-bg">
      <span class="integral-num">900</span>
      <span class="current">当前积分</span>
    </div>
    <div class="time-line-box">
      <mu-col span="12" lg="4" sm="6" class="time1">
        <mu-date-input v-model="time1" solo label-float icon="today" full-width />
      </mu-col>
      <span class="to">至</span>
      <mu-col span="12" lg="4" sm="6" class="time2">
        <mu-date-input v-model="time2" solo label-float icon="today" full-width />
      </mu-col>
      <img src="../img/integral_details.png" alt="" class="integral-details">
      <div class="package-status">
        <div class="status-box">
          <ul v-for="(item,index) in timeLine" :key="index" class="status-list">
            <li>
              <div class="status-content-before">
                {{ item.act_name }}
              </div>
              <div class="status-time">
                {{ item.time }}
              </div>
              <span v-if="item.act_name==='签到'" class="change-integral">+100积分</span>
              <span v-if="item.act_name==='积分兑换商品'" class="change-integral">-500积分</span>
              <div class="status-time-before">
                {{ item.date }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyIntegral',
  components: {},
  data () {
    return {
      time1: '2019-01-13',
      time2: '2019-05-15',
      timeLine: [{
        act_name: '签到',
        time: '10:20:54',
        date: '5月17日'
      }, {
        act_name: '签到',
        time: '10:20:54',
        date: '5月17日'
      }, {
        act_name: '签到',
        time: '10:20:54',
        date: '5月17日'
      }, {
        act_name: '签到',
        time: '10:20:54',
        date: '5月17日'
      }, {
        act_name: '积分兑换商品',
        time: '10:20:54',
        date: '5月17日'
      }]
    }
  },
  computed: {

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
.my-integral {
    width: 100%;
    margin-top: -200px;
    position: relative;
}
.integral-bg {
    width: 100%;
    height: 360px;
}
.integral-num {
    font-size:80px;
    font-family:PingFang-SC-Medium;
    font-weight:bold;
    font-style:italic;
    color:rgba(255,255,255,1);
    line-height:60px;
    text-shadow:0px 2px 6px rgba(218,184,113,1);
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -250px;
}
.current {
    font-size:26px;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:60px;
    text-shadow:0px 2px 6px rgba(218,184,113,1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
.time-line-box {
    width: 93.6%;
    height: auto;
    background: #fff;
    margin-left: 3.2%;
    margin-top: 74px;
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
.integral-details {
    width: 170px;
    height: 40px;
    margin-left: 30px;
}
.package-status {
    width: 93.6%;
    height:auto;
    background: #fff;
    margin-left: 24px;
    margin-top: 12px;
    margin-bottom: 80px;
}
ul li {
    list-style: none;
}
.package-status .status-list {
    margin: 0;
    padding: 0;
    /* margin-top: -5px; */
    padding-left: 24%;
    list-style: none;
    margin-top: 50px;
    padding-right: 10px;
    margin-bottom: 50px;
}
.package-status .status-list>li {
    border-left: 2px solid #D9B97A;
    text-align: left;
    height: 120px;
    /* width: 80%; */
    margin-bottom: -50px;
}

.package-status .status-list>li::before{
    content: '';
    border: 3px solid #D9B97A;
    background-color: #fff;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-left: -12px;
    margin-right: 10px;
    position: relative;
    top: -30px;
}
.package-status .status-box {
    overflow: hidden;
    position: relative;
}

.status-list>li:not(:first-child) {
    padding-top: -10px;
}
.status-content-before  {
    text-align: left;
    margin-left: 45px;
    margin-top: -20px;
    font-size: 32px;
    color: #333333;
    position: relative;
}
.status-time {
    font-size: 26px;
    color: #888888;
    margin-left: 45px;
    margin-top: 10px;
}
.change-integral {
    font-size:30px;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(240,78,111,1);
    position: absolute;
    right: 20px;
    margin-top: -70px;
}
.status-time-before {
    text-align: left;
    margin-left: -130px;
    font-size: 10px;
    top: -130px;
    position: relative;
    color: #333333;
    font-size: 28px;
    width: 25%;
}
</style>
