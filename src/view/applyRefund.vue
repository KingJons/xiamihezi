<template>
  <!-- 申请退款 -->
  <div>
    <div class="apply-refund-header">
      <span>申请退款</span>
    </div>
    <div v-if="isEdit" class="select-goods">
      <div v-for="(item,index) in goodsInfo" :key="index" class="goods">
        <img v-if="!item.select" src="../img/comm_select.png" alt="" class="select-icon" @click="select(index)">
        <img v-if="item.select" src="../img/refund_select.png" alt="" class="select-icon" @click="unSelect(index)">
        <img :src="item.goods_pic" alt="" class="goods-pic">
        <span class="goods-name">{{ item.goods_name }}</span>
        <span class="goods-price">￥{{ item.price }}.00</span>
        <span class="goods-spec">{{ item.spec }}</span>
        <span class="goods-num">×{{ item.num }}</span>
        <span class="goods-state">{{ item.state }}</span>
      </div>
      <div class="select-btn">
        <div class="select-all-btn">
          <img v-if="!isSelect" src="../img/comm_select.png" alt="" class="select-icon" @click="selectAll">
          <img v-if="isSelect" src="../img/refund_select.png" alt="" class="select-icon" @click="unSelectAll">
          <span class="select-all">全选</span>
        </div>
        <div class="confirm-btn" @click="isEdit = false">
          <span>确定</span>
        </div>
      </div>
    </div>
    <div v-if="!isEdit">
      <div class="goods-details">
        <span class="refund-goods">退款商品</span>
        <div class="edit-btn" @click="isEdit=true">
          <span>添加和编辑</span>
        </div>
        <div v-if="select_num === 1" class="goods-list-one">
          <img :src="goodsInfo[0].goods_pic" alt="" class="goods-pic">
          <span class="goods-name">{{ goodsInfo[0].goods_name }}</span>
          <span class="goods-spec">{{ goodsInfo[0].spec }}</span>
        </div>
        <div v-if="select_num > 1" class="goods-list-more">
          <div v-for="(item,index) in goodsInfo" :key="index" class="goods-list">
            <img :src="item.goods_pic" alt="" class="goods-pic">
            <div class="goods-price">
              <span>￥{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="select-state-reason">
        <mu-text-field v-model="state" class="select-goods-state" full-with solo prefix="货物状态" />
        <mu-button flat class="please-select" @click="state_show=true">
          请选择 >
        </mu-button>
        <div class="break" />
        <mu-text-field v-model="reason" class="refund-reason" full-with solo prefix="退款原因" />
        <mu-button flat class="please-select1" @click="reason_show=true">
          请选择 >
        </mu-button>
      </div>
      <div class="refund-details">
        <span class="refund-price">退款金额：
          <span class="price">￥{{ goodsInfo[0].price }}</span>
        </span>
        <div class="break" />
        <mu-text-field v-model="reason" class="refund-explain" full-with solo prefix="退款说明：" placeholder="选填" />
      </div>
      <div class="upload-vouchers">
        <span class="upload-title">上传凭证</span>
        <div class="add-pic">
          <img src="../img/camera.png" alt="" class="camera">
          <span class="title">添加图片</span>
        </div>
      </div>
      <mu-button full-width class="submit" color="#DD2F37" style="height:45px;">
        提交
      </mu-button>
    </div>
    <div v-if="state_show" class="goods-state-box">
      <div class="bg" @click.self="state_show=false" />
      <div class="box">
        <div class="box-title">
          <span>货物状态</span>
        </div>
        <div v-for="(item,index) in states" :key="index" class="box-body">
          <span class="state-title">{{ item.state }}</span>
          <input v-model="state" type="radio" name="gender" :value="item.state">
        </div>
        <mu-button class="submit-btn" full-width color="#DD2F37" @click="state_show = false">
          提交
        </mu-button>
      </div>
    </div>
    <div v-if="reason_show" class="goods-state-box">
      <div class="bg" @click.self="reason_show=false" />
      <div class="box">
        <div class="box-title">
          <span>退款原因</span>
        </div>
        <div v-for="(item,index) in reasons" :key="index" class="box-body">
          <span class="reason-title">{{ item.reason }}</span>
          <input v-model="reason" type="radio" name="gender" :value="item.reason">
          <div class="break" />
        </div>
        <mu-button class="submit-btn" full-width color="#DD2F37" @click="reason_show = false">
          提交
        </mu-button>
      </div>
    </div>
  </div>
</template>

<script>
import pic from '../img/good_pic.png'
export default {
  name: 'ApplyRefund',
  components: {},
  data () {
    return {
      reason_show: false,
      state_show: false,
      state: '',
      reason: '',
      explain: '',
      isEdit: true,
      isSelect: false,
      stateSelect: false,
      states: [{ state: '未收到货', select: false }, { state: '已收到货', select: false }],
      reasons: [{
        reason: '我不想要了',
        select: false
      }, {
        reason: '退运费',
        select: false
      }, {
        reason: '外观/型号/参数等与描述不符',
        select: false
      }, {
        reason: '质量问题',
        select: false
      }, {
        reason: '少发/漏发',
        select: false
      },
      {
        reason: '包装/商品破损/污渍',
        select: false
      }],
      goodsInfo: [{
        goods_pic: pic,
        goods_name: 'TNN玻尿酸补水蚕丝面膜',
        spec: '急救补水',
        price: 108,
        num: 1,
        state: '已发货',
        select: false
      }, {
        goods_pic: pic,
        goods_name: 'TNN玻尿酸补水蚕丝面膜',
        spec: '急救补水',
        price: 108,
        num: 1,
        state: '已发货',
        select: false
      },
      {
        goods_pic: pic,
        goods_name: 'TNN玻尿酸补水蚕丝面膜',
        spec: '急救补水',
        price: 108,
        num: 1,
        state: '已发货',
        select: false
      }]
    }
  },
  computed: {
    select_num () {
      var select = []
      for (let i = 0; i < this.goodsInfo.length; i++) {
        if (this.goodsInfo[i].select === true) {
          select.push(this.goodsInfo[i])
        }
      }
      console.log(select.length)
      return select.length
    }
  },
  methods: {
    select (index) {
      this.goodsInfo[index].select = true
    },
    unSelect (index) {
      this.goodsInfo[index].select = false
    },
    selectAll () {
      for (let i = 0; i < this.goodsInfo.length; i++) {
        this.goodsInfo[i].select = true
      }
      this.isSelect = true
    },
    unSelectAll () {
      for (let i = 0; i < this.goodsInfo.length; i++) {
        this.goodsInfo[i].select = false
      }
      this.isSelect = false
    },
    state_select (index) {
      this.states[index].select = true
      this.state = this.states[index].state
    },
    reason_select (index) {
      this.reasons[index].select = true
      this.reason = this.reasons[index].reason
      for (let i = 0; i < this.states.length && i !== index; i++) {
        this.states[i].select = false
        console.log(index)
        console.log(i)
      }
    },
    state_unSelect (index) {
      this.states[index].select = false
      this.state = ''
      for (let i = 0; i < this.states.length && i !== index; i++) {
        this.states[i].select = false
        console.log(index)
        console.log(i)
      }
    },
    reason_unSelect (index) {
      this.reasons[index].select = false
      this.reason = ''
    }
  }
}
</script>

<style>
.apply-refund-header {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.select-goods {
    width: 100%;
    height: auto;
    background: #fff;
    position: relative;
}
.select-icon {
    width: 40px;
    height: 40px;
    left: 20px;
    margin-top: 69px;
    position: absolute;
}
.goods-pic {
    width: 138px;
    height: 138px;
    margin-top: 31px;
    margin-left: 80px;
    /* position: relative; */
}
.goods-name {
    font-size: 24px;
    color: #333333;
    left: 240px;
    position: absolute;
    margin-top: 44px;
}
.goods-spec {
    font-size: 22px;
    color: #888888;
    position: absolute;
    /* margin-left: -275px;
    top: -55px; */
    margin-top: 85px;
    left: 240px;
}
.goods-state {
    font-size: 24px;
    color: #C33C30;
    left: 240px;
    margin-top: 125px;
    position: absolute;
}
.goods-price {
    font-size: 24px;
    color: #333333;
    position: absolute;
    margin-top: 45px;
    right: 30px;
}
.goods-num {
    font-size: 24px;
    color: #888888;
    position: absolute;
    margin-top: 90px;
    right: 30px;
}
.select-btn {
    width: 100%;
    height: 90px;
    position: fixed;
    bottom: 0;
}
.select-all-btn {
    width: 50%;
    height: 90px;
    background: #fff;
}
.select-all-btn .select-icon {
    margin-top: 25px;
}
.select-all {
    font-size: 30px;
    color: #333333;
    line-height: 90px;
    margin-left: 70px;
}
.confirm-btn {
    width: 50%;
    height: 90px;
    background: #DD2F37;
    position: relative;
    top: -90px;
    margin-left: 50%;
    color: #fff;
    font-size: 30px;
    line-height: 90px;
    text-align: center
}
.goods-details {
  width: 100%;
  height: 254px;
  background: #fff;
  position: relative;
}
.refund-goods {
  font-size: 26px;
  color: #333333;
  margin-left: 24px;
  margin-top: 26px;
}
.edit-btn {
  width: 174px;
  height: 54px;
  border:2px solid rgba(178,178,178,1);
  border-radius:4px;
  font-size: 26px;
  color: #595959;
  line-height: 54px;
  text-align: center;
  position: absolute;
  right: 24px;
  top: 12px;
}
.goods-list-one .goods-pic {
  margin-left: 24px;
}
.goods-list-one .goods-name,.goods-list-one .goods-spec {
  margin-left: -60px;
}
.goods-list-more {
  display: flex;
  justify-content: flex-start;
  margin-left: -48px;

}
.goods-list {
  width: 138px;
  margin-right: 20px;
  position: relative;
}

.goods-list .goods-price {
  width:100px;
  height:40px;
  background:rgba(0,0,0,1);
  opacity:0.4;
  border-radius:0px 0px 4px 0px;
  position: absolute;
  left: 115px;
  top: 83px;
  color: #fff;
  line-height: 40px;
  text-align: center
}
.select-state-reason {
  width: 100%;
  height: 242px;
  background: #fff;
  margin-top: 24px;
  position: relative;
}
.select-goods-state,.refund-reason {
  font-size: 26px;
  color: #333333;
  margin-left: 24px;
  position: relative;
  /* top: 24px; */
}
.please-select,.please-select1 {
  font-size: 26px;
  color: #888888;
  position: absolute;
  right: 40px;
  margin-top: 16px;
}
.break {
  width: 93.6%;
  height: 1px;
  border: 1px solid #E8E8E8;
  margin-left: 24px;
  position: relative;
  top: -10px;
}
.refund-reason {
  top: -10px;
  position: relative;
}
.refund-reason .mu-text-field-input {
  margin-top:55px;
  position: absolute;
}
.please-select1 {
  margin-top: -10px;
}
.mu-input-prefix-text, .mu-input-suffix-text {
  color: #333333;
}
.refund-details {
  width: 100%;
  height: 180px;
  background: #fff;
  margin-top: 24px;
}
.refund-price {
  font-size: 26px;
  color: #333333;
  margin-left: 24px;
  top: 23px;
  position: relative;
}
.price {
  color: #DD2F37;
}
.refund-details .break {
  position: relative;
  top: 40px;
}
.refund-explain {
  font-size: 26px;
  margin-left: 24px;
  margin-top: 30px;
}
.upload-vouchers {
  width: 100%;
  height: 260px;
  background: #fff;
  margin-top: 24px;
  margin-bottom: 120px;
}
.upload-title {
  font-size: 26px;
  color: #333333;
  margin-left: 24px;
  position: relative;
  top: 23px;
}
.add-pic {
  width: 140px;
  height: 140px;
  border: 1px dashed #E7E7E7;
  margin-left: 24px;
  position: relative;
  /* top: -230px; */
  top: 43px;
}
.camera {
  width: 50px;
  height: 44px;
  margin-left: 45px;
  margin-top: 44px;
}
.title {
  font-size:22px;
  font-weight:400;
  color:rgba(207,207,209,1);
  line-height:44px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}
.submit {
  position: fixed;
  bottom: 0;
}
.goods-state-box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 99;
}
.goods-state-box .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: #000;
    z-index: -1;
}
.goods-state-box .box {
    position: absolute;
    width: 100%;
    height: 750px;
    bottom: 0;
    background: #fff;
    border-radius: 5px 5px 0 0;
}
.box-title {
  font-size: 30px;
  color: #333333;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: 24px;
}
.box-body {
  margin-top: 68px;
  margin-left: 24px;
  margin-bottom: -50px;
  position: relative;
}

.state-title,.reason-title {
  font-size: 30px;
  color: #333333;
  position: relative;
}
.box-body .break {
  margin-top: 20px;
  width: 100%;
  margin-left: 0px;
}
.box-body>input {
  position: absolute;
  right: 30px;
  top: 20px;
  width: 30px;
  height: 30px;
}
.submit-btn {
  position: fixed;
  bottom: 0px;
  height: 90px;
}
</style>
