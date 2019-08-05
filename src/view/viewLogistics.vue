<template>
  <div>
    <div class="logistics-header">
      <span>查看物流</span>
    </div>
    <div class="goods-shipped">
      <img src="../img/goods.jpg" alt="" class="goods-pic">
      <span class="log-title">运输中</span>
    </div>
    <div class="express">
      <img src="../img/express_icon.png" alt="" class="express-icon">
      <span class="express-name">圆通速递</span>
      <span class="express-phone">官方电话 95554 ></span>
    </div>
    <div class="express-num">
      <span>圆通速递 765295170007690</span>
    </div>
    <div class="package-status">
      <div class="status-box">
        <ul class="status-list">
          <li class="latest">
            <div class="status-content-latest">
              [收货地址] 广东省广州市白云区 云城东路云璟汇 2307
            </div>
            <div class="status-line" />
          </li>
          <li class="active">
            <div class="status-content-active">
              <span class="title1">运输中</span>
              <span class="title2">广州转运中心公司 已发出 下一站 广州市白云区三元里</span>
            </div>
            <div class="status-time-active">
              05-17 16:01
            </div>
            <div class="status-line" />
          </li>
          <li>
            <div class="status-content-before">
              广州转运中心公司 已收入
            </div>
            <div class="status-time-before">
              05-16 23:51
            </div>
            <div class="status-line" />
          </li>
          <li>
            <div class="status-content-before">
              揭阳转运中心公司 已发出 下一站 广州转运中心
            </div>
            <div class="status-time-before">
              05-16 23:51
            </div>
            <div class="status-line" />
          </li>
          <li class="second">
            <div class="status-content-second">
              已揽件
            </div>
            <div class="status-time-second">
              05-15 16:01
            </div>
            <div class="status-line" />
          </li>
          <li class="first">
            <div class="status-content-first">
              已发货
            </div>
            <div class="status-time-first">
              05-14 14:34
            </div>
            <div class="status-line" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ViewLogistics',
  components: {},
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.logistics-header {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.goods-shipped {
    width: 93.6%;
    height: 110px;
    background: #fff;
    border-radius: 8px;
    margin-left: 24px;
    margin-top: 24px;
}
.goods-pic {
    width: 64px;
    height: 64px;
    border-radius: 10px;
    margin-left: 24px;
    margin-top: 23px;
}
.log-title {
    position: relative;
    top: -15px;
    font-size:34px;
    font-weight:bold;
    color:rgba(26,26,26,1);
    line-height:110px;
}
.express {
    width:93.6%;
    height:140px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 10px 0px rgba(191,188,188,0.25);
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    margin-left: 24px;
    margin-top: 23px;
}
.express-icon {
    width: 88px;
    height: 88px;
    margin-top: 26px;
    margin-left: 24px;
}
.express-name,.express-phone {
    font-size:28px;
    font-weight:400;
    color:rgba(51,51,51,1);
    position: relative;
    top: -50px;
    margin-left: 20px;
}
.express-phone {
    font-size:22px;
    top: -10px;
    margin-left: -125px;
}
.express-num {
    width: 93.6%;
    height: 60px;
    background: #FAFAFA;
    margin-left: 24px;
    border-radius:0px 0px 10px 10px;
}
.express-num span {
    font-size:22px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:60px;
    margin-left: 24px;
}
.package-status {
    width: 93.6%;
    height: 730px;
    background: #fff;
    margin-left: 24px;
    margin-top: 24px;
    margin-bottom: 80px;
}
ul li {
    list-style: none;
}
.package-status .status-list {
    margin: 0;
    padding: 0;
    /* margin-top: -5px; */
    padding-left: 19.1%;
    list-style: none;
    margin-top: 50px;
    padding-right: 10px;
}
.package-status .status-list>li {
    border-left: 2px solid #CBCBCB;
    text-align: left;
    height: auto;
    /* width: 80%; */
}
.package-status .status-list>li.first {
    border-left: none;
    text-align: left;
    height: auto;
    /* width: 80%; */
}
.package-status .status-list>li::before{
    content: '';
    border: 3px solid #cbcbcb;
    background-color: #CBCBCB;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-left: -12px;
    margin-right: 10px;
    position: relative;
    top: -30px;
}
.package-status .status-list>li.active::before,
.package-status .status-list>li.latest::before,
.package-status .status-list>li.second::before,
.package-status .status-list>li.first::before {
    background-image: url('../img/log_shipped_icon.png');
    width: 46px;
    height: 46px;
    border-radius: 20px;
    background-size: contain;
    margin-top: 70px;
    margin-left: -25px;
    background-color: #fff;
    border: none;
}
.package-status .status-list>li.latest::before {
    background-image: url('../img/take_delivery.png');
    margin-top: 30px;
}
.package-status .status-list>li.second::before {
    background-image: url('../img/package.png');
    margin-top: 30px;
}
.package-status .status-list>li.first::before {
    background-image: url('../img/deliver.png');
    margin-top: 30px;
}
.package-status .status-box {
    overflow: hidden;
    position: relative;
}
 /* .package-status .status-box ::before{
    content: '';
    background-color: #f65c7c;
    display: block;
    position: absolute;
    top: -8px;
     left: 20px;
     width: 10px;
    height: 4px;
} */
.status-list>li:not(:first-child) {
    padding-top: -10px;
}
.status-content-before,.status-content-active,.status-content-latest,.status-content-second,.status-content-first {
    text-align: left;
    margin-left: 25px;
    margin-top: -70px;
    font-size: 26px;
    /* display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden; */
    color: #9A9A9A;
}
.status-content-active {
    margin-left: 35px;
    color: #333333;
    font-size: 30px;
    margin-top: -90px;
}
.status-content-latest {
    margin-left: 35px;
    margin-top: -90px;
}
.status-content-second {
    margin-left: 35px;
    margin-top: -80px;
}
.status-content-first {
    margin-left: 35px;
    margin-top: -80px;

}
.status-content-active .title2 {
    display: -webkit-box;
}
.status-time-before,.status-time-second,.status-time-first,.status-time-active {
    text-align: left;
    margin-left: -95px;
    font-size: 10px;
    top: -65px;
    position: relative;
    color: #9A9A9A;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 18%;
}
.status-time-active {
    margin-left: -100px;
    color: #333333;
    font-size: 26px;
    top: -125px;
    position: relative;
}
.status-time-second {
    margin-left: -100px;
    top: -45px;
    position: relative;
}
.status-time-first {
    margin-left: -100px;
    top: -45px;
    position: relative;
}
/* .list {
    padding: 0 30px;
    background-color: #F8F8F8;
    margin: 10px 0 0 25px;
    border: 1px solid #ebebeb;
} */
/* .list li {
    line-height: 30px;
    color: #616161;
} */
</style>
