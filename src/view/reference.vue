<template>
  <!-- 邀请人手机号 -->
  <div class="reference-box">
    <span class="reference-title">邀请人手机号</span>
    <mu-text-field v-model="phone" label="请输入邀请人手机号" />
    <img src="../img/underline.png" alt="" class="underLine">
    <span class="cope-text">长按粘贴邀请人手机号</span>
    <div class="confirm-btn" @click="show=true">
      <span>确定</span>
    </div>
    <div v-if="show" class="reference-info">
      <div class="bg" @click.self="show=false" />
      <div class="box">
        <img :src="referenceInfo.avatar" alt="" class="avatar">
        <span class="name">{{ referenceInfo.name }}</span>
        <span class="prompt">确认绑定Ta为你的邀请人?</span>
        <span class="caution">绑定后将无法修改</span>
        <div class="delay-btn" @click="show=false">
          <span>取消</span>
        </div>
        <div class="define-btn" @click="show=false">
          <span>确定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '../img/avatar1.png'
export default {
  name: 'Reference',
  components: {},
  data () {
    return {
      show: false,
      phone: '',
      referenceInfo: {
        avatar: avatar,
        name: '溪'
      }
    }
  }
}
</script>

<style>
.reference-box {
    background: #151515;
    width: 100%;
    height: 100%;
}
.reference-title {
    color: #fff;
    font-size: 42px;
    margin-left: 89px;
    position: relative;
    top: 177px;
}
.mu-input {
    color: #696969;
    font-size: 36px;
    position: relative;
    top: 370px;
    margin-left: -265px;
}
.mu-text-field-input {
    color: #fff;
    position: relative;
    top: 80px;
    height: 220px;
}
.underLine {
    width: 76.8%;
    margin-left: 11.6%;
    position: relative;
    top: 280px;
}
.cope-text {
    font-size: 30px;
    color: #696969;
    margin-left: -79%;
    position: relative;
    top: 330px;
}
.confirm-btn {
    width: 76.8%;
    height: 104px;
    background: linear-gradient(45deg,rgba(247, 204, 124, 1),rgba(236, 195, 118, 1),rgba(201, 164, 95, 1));
    border-radius: 8px;
    color: #fff;
    line-height: 104px;
    text-align: center;
    margin-left: 11.6%;
    position: relative;
    top: 360px;
}
.reference-info {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 99;
}
.reference-info .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: #000;
    z-index: -1;
}
.reference-info .box {
    position: absolute;
    width: 73.87%;
    height: 430px;
    margin-left: 13.5%;
    background: #fff;
    border-radius: 10px;
    top: 35.53%;
}
.avatar {
    width: 126px;
    height: 126px;
    margin-left: 38%;
    position: relative;
    top: -63px;
}
.name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 46px;
    color: #333333;
    margin-top: -50px;
}
.prompt,.caution {
    font-size: 30px;
    color: #494949;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.delay-btn,.define-btn {
    width: 42.42%;
    height: 82px;
    border-radius: 40px;
    line-height: 82px;
    text-align: center;
    font-size: 36px;
    color: #494949;
    position: absolute;
    bottom: 44px;
}
.delay-btn {
    border: 1px solid #8F8F8F;
    left: 32px;
}
.define-btn {
    background: #E6C386;
    right: 32px;
}
</style>
