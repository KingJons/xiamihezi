<template>
  <!-- 个人中心 -->
  <div>
    <div class="header">
      <img src="../img/bg.png" alt="" class="header-bg">
    </div>
    <div class="user-info">
      <img :src="userInfo.face" alt="" class="user-avatar">
      <img src="../img/shop_grade_bg.png" alt="" class="shop-grade">
      <span class="grade">V1 店铺</span>
      <span class="user-name">{{ userInfo.nickname }}</span>
      <img src="../img/upgrade.png" alt="" class="up-grade">
      <span class="user-id">ID：{{ userInfo.userId }}
        <span class="reference">推荐人：{{ userInfo.recommendId }}</span>
      </span>
      <div class="shop-integral">
        <div class="shop-revenue" @click="goToShopRevenue(userInfo.userId)">
          <img src="../img/shop_revenue.png" alt="" class="shop-revenue-icon">
          <span class="shop-revenue-title">店铺收益</span>
        </div>
        <div class="integral" @click="goToMyIntegral">
          <img src="../img/my_integral.png" alt="" class="integral-icon">
          <span class="integral-title">我的积分</span>
        </div>
        <div class="data-center">
          <img src="../img/data_center.png" alt="" class="data-center-icon">
          <span class="data-center-title">数据中心</span>
        </div>
      </div>
    </div>
    <div class="my-order">
      <div class="my-order-title" @click="goToMyAllOrder">
        <span>我的订单
          <span class="my-all-order">查看全部订单 ></span>
        </span>
      </div>
      <div class="unfinish-box">
        <div class="obligation" @click="goToDetailsPage">
          <img src="../img/obligation.png" alt="" class="obligation-icon">
          <span class="obligation-title">待付款</span>
        </div>
        <div class="dispatched" @click="goToDetailsPage">
          <img src="../img/dispatched.png" alt="" class="dispatched-icon">
          <span class="dispatched-title">待发货</span>
        </div>
        <div class="shipped" @click="goToDetailsPage">
          <img src="../img/dispatched.png" alt="" class="shipped-icon">
          <span class="shipped-title">待收货</span>
        </div>
        <div class="to-be-evaluate" @click="goToDetailsPage">
          <img src="../img/to_be_evaluate.png" alt="" class="to-be-evaluate-icon">
          <span class="to-be-evaluate-title">待付款</span>
        </div>
      </div>
    </div>
    <div class="tool-flex">
      <div class="tool-title">
        <span>常用工具</span>
      </div>
      <mu-flex class="tools-flex-wrapper" align-items="center">
        <mu-flex class="my-plaine" justify-content="center" fill>
          <img src="../img/Plaine.png" alt="" class="my-plaine-icon">
          <span class="my-plaine-title">我的分享</span>
        </mu-flex>
        <mu-flex class="my-favourite" justify-content="center" fill>
          <img src="../img/favourite.png" alt="" class="my-favourite-icon">
          <span class="my-favourite-title">我的收藏</span>
        </mu-flex>
        <mu-flex class="system-setting" justify-content="center" fill @click="goToSystremSetting(userInfo.userId)">
          <img src="../img/system_setting.png" alt="" class="system-setting-icon">
          <span class="system-setting-title">系统设置</span>
        </mu-flex>
        <mu-flex class="system-message" justify-content="center" fill>
          <img src="../img/tips.png" alt="" class="system-message-icon">
          <span class="system-message-title">系统消息</span>
        </mu-flex>
        <mu-flex class="address" justify-content="center" fill @click="goToAddress">
          <img src="../img/location.png" alt="" class="address-icon">
          <span class="address-title">收货地址</span>
        </mu-flex>
        <mu-flex class="my-shop" justify-content="center" fill @click="goToMyFans">
          <img src="../img/my_shop_icon.png" alt="" class="my-shop-icon">
          <span class="my-shop-title">我的店铺</span>
        </mu-flex>
      </mu-flex>
    </div>
    <div v-if="upGrade" class="upGrade-bg">
      <div class="bg" @click.self="upGrade=false" />
      <div class="box">
        <img src="../img/upgrade_bg.png" alt="" class="upgrade-bg">
        <img src="../img/upgrade_avatar.png" alt="" class="upgrade-avatar">
        <span class="congratuation">恭喜您·兜兜</span>
        <span class="upgrade-title">升级成为V1店铺</span>
        <div class="OK-btn" @click="upGrade=false">
          <span>好的哦</span>
        </div>
      </div>
    </div>
    <FlexTabbar :shift="shift" />
  </div>
</template>
<script>
import { getUsersInfo } from '@/api/user.js'
import FlexTabbar from '@/components/flexTabbar'
export default {
  name: 'Personal',
  components: { FlexTabbar },
  data () {
    return {
      upGrade: true,
      shift: 'person',
      userInfo: {}
    }
  },
  created () {
    this.fungetUsersInfo(JSON.parse(localStorage.userInfo).userId)
  },
  methods: {
    goToMyAllOrder () {
      this.$router.push('/myAllOrder')
    },
    goToSystremSetting (id) {
      this.$router.push({
        path: '/systemSetting',
        query: { id: id }
      })
    },
    goToShopRevenue (id) {
      this.$router.push({
        path: '/shopRevenue',
        query: { id: id }
      })
    },
    goToMyIntegral () {
      this.$router.push('/myIntegral')
    },
    goToDetailsPage () {
      this.$router.push('/myOrder')
    },
    goToAddress () {
      this.$router.push('/addressManage')
    },
    goToMyFans () {
      this.$router.push('/myFans')
    },
    fungetUsersInfo (id) {
      const par = {
        userId: id
      }
      getUsersInfo(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.userInfo = res.data.data.obj
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
.header {
    width: 100%;
}
.header-bg {
    width: 100%;
    height: 429px;
    /* margin-top: -145px; */
}
.user-info {
    width: 93.6%;
    margin-left: 3.2%;
    margin-top: -220px;
    background: #fff;
    height: 377px;
    position: relative;
    border-radius: 8px;
}
.user-avatar {
    width: 160px;
    height: 160px;
    margin-left: 38%;
    position: absolute;
    top: -80px;
    border-radius: 80px;
}
.shop-grade {
    width: 110px;
    height: 39px;
    margin-left: 58.1%;
    position: relative;
    top: 60px;
}
.grade {
    font-size:14px;
    font-weight:bold;
    color:rgba(234,59,3,1);
    line-height:39px;
    text-align: center;
    margin-left: -110px;
    position: relative;
    top: 50px;
}
.user-name {
    font-size:32px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    position: relative;
    margin-left: 36.7%;
    top: 69px;
}
.up-grade {
    width: 110px;
    height: 40px;
    margin-left: 10px;
    position: relative;
    top: 77px;
}
.user-id {
    display: flex;
    font-size:28px;
    font-weight:400;
    color:rgba(114,99,91,1);
    /* margin-left: 23%; */
    position: relative;
    top: 89px;
    justify-content: center;
    align-items: center;
}
.reference {
    margin-left: 10px;
}
.shop-integral {
    display: flex;
    justify-content: space-around;
}
.shop-revenue,.integral,.data-center {
    position: relative;
    top: 119px;
}
.shop-revenue-icon,.integral-icon,.data-center-icon {
    width: 60px;
    height: 60px;
}
.shop-revenue-title,.integral-title,.data-center-title {
    font-size:24px;
    font-weight:400;
    color:rgba(51,51,51,1);
    position: relative;
    top: 30px;
    margin-left: -90px;
}
.my-order {
    width: 93.6%;
    height: 249px;
    background: #fff;
    margin-left: 3.2%;
    margin-top: 15px;
    border-radius: 8px;
}
.my-order-title,.tool-title {
    font-size:28px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin-left: 28px;
    top: 24px;
    position: relative;
}
.my-all-order, .all-tool {
    font-size:26px;
    font-weight:400;
    color:rgba(159,159,159,1);
    position: absolute;
    right: 2%;
}
.unfinish-box {
  display: flex;
  justify-content: space-around;

  /* margin-left: 8.8%; */
}
.obligation,.dispatched,.shipped, .to-be-evaluate,.refund{
  position: relative;
  top: 70px;
  margin-left: 7.55%;
}
.obligation-icon,.dispatched-icon,.shipped-icon, .to-be-evaluate-icon,.refund-icon {
  width: 46px;
  height: 46px;
}
.obligation-title,.dispatched-title,.shipped-title, .to-be-evaluate-title,.refund-title {
  font-size:26px;
  font-weight:400;
  color:rgba(51,51,51,1);
  position: relative;
  top: 50px;
  margin-left: -78px;
}
.refund-title {
  margin-left: -82px;
}
.tool-flex {
  width: 93.6%;
  height: 419px;
  background: #fff;
  margin-left: 3.2%;
  position: relative;
  /* top: -60px; */
  top: 15px;
  border-radius: 8px;
  margin-bottom: 150px;
}
.tools-flex-wrapper {
  width: 100%;
  position: relative;
  top: 62px;
  flex-wrap: wrap-reverse;
  margin-left: 10px;
}
.system-message,.address,.my-shop,.my-plaine,.my-favourite,.system-setting {
  margin-bottom: 110px;
  width: 33.3%;
}
.system-message-icon,.address-icon,.my-shop-icon,.my-plaine-icon,.my-favourite-icon,.system-setting-icon {
  width: 50px;
  height: 50px;
  position: relative;
}
.system-message-title,.address-title,.my-shop-title,.my-plaine-title,.my-favourite-title,.system-setting-title {
  font-size:26px;
  font-weight:400;
  color:rgba(51,51,51,1);
  position: relative;
  top: 70px;
  margin-left: -80px;
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

.upGrade-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 99;

}
.upGrade-bg .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: #000;
    z-index: -1;
}
.upgrade-bg {
  width: 95%;
  height: 855px;
  margin-left: 3%;
  margin-top: 24%;
}
.upgrade-avatar {
  width: 200px;
  height: 254px;
  position: relative;
  margin-left: 35%;
  top: -880px;
}
.congratuation {
  font-size: 40px;
  color: #fff;
  line-height:40px;
  text-shadow:2px 3px 5px rgba(179,145,88,0.49);
  display: flex;
  justify-content: center;
  align-items: center;
  top: -840px;
  position: relative;
}
.upgrade-title {
  font-size:56px;
  font-family:FZLTTHJW--GB1-0;
  font-weight:normal;
  color:rgba(255,255,255,1);
  text-shadow:2px 3px 5px rgba(179,145,88,0.49);
  display: flex;
  justify-content: center;
  align-items: center;
  top: -780px;
  position: relative;
}
.OK-btn {
  width: 46.7%;
  height: 70px;
  color: #fff;
  border-radius: 35px;
  margin-left: 28%;
  top: -550px;
  position: relative;
  background: #DBBF8F;
  line-height: 70px;
  text-align: center;
}
</style>
