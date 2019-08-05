<template>
  <div>
    <div class="edit-address-title">
      <span>修改收货地址
        <span class="del-address" @click="del">删除</span>
      </span>
    </div>
    <div class="address-info">
      <div class="receiver">
        <mu-text-field v-model="addressInfo[0].receiver" class="edit-receiver" prefix="收货人：" />
      </div>
      <div class="phone">
        <mu-text-field v-model="addressInfo[0].phone" class="edit-phone" prefix="手机号码：" />
      </div>
      <div class="area">
        <mu-text-field v-model="addressInfo[0].area" class="edit-area" prefix="所在地区：" />
      </div>
      <div class="spec-address">
        <mu-text-field v-model="addressInfo[0].spec_address" solo class="edit-spec-address" prefix="详细地址：" />
      </div>
    </div>
    <div class="default">
      <span>设置为默认地址
        <span class="ps-word">(注:每次下单都会使用该地址)</span>
      </span>
      <mu-switch v-model="docked" class="default-btn" />
    </div>
    <div :class="save? 'active':'save-edit'">
      <span>保存</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditAddress',
  components: {},
  data () {
    return {
      docked: false,
      addressInfo: [{
        receiver: '',
        phone: '15372876145',
        area: '广东省广州市白云区',
        spec_address: '云城东路云璟汇2307'
      }]
    }
  },
  computed: {
    save () {
      var active = false
      if (this.addressInfo[0].receiver !== '' && this.addressInfo[0].phone !== '' && this.addressInfo[0].area !== '' && this.addressInfo[0].spec_address !== '') {
        active = true
        console.log(this.addressInfo)
        console.log(active)
      } else {
        active = false
      }
      return active
    }
  },
  methods: {
    del () {
    }
  }
}
</script>
<style scoped>
.edit-address-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
    position: relative;
}
.del-address {
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    right: 27px;
}
.address-info {
    width: 93.6%;
    height: 519px;
    border-radius: 8px;
    background: #fff;
    margin-left: 3.2%;
    margin-top: 24px;
}
.receiver,.phone,.area,.spec-address {
    margin-left: 32px;
    position: relative;
    top: 15px;
}
.mu-input {
    font-size: 28px;
}
.mu-input__focus {
    color: #e7e7e7;
}

.phone {
    top: -15px;
}
.area {
    top: -35px;
}
.spec-address {
    top: -65px;
}
.default {
    width: 93.6%;
    height: 119px;
    background: #fff;
    border-radius: 8px;
    margin-top: 15px;
    margin-left: 3.2%;
    font-size: 28px;
    color: #1A1A1A;
    line-height: 119px;
    position: relative;
}
.default span {
    margin-left: 17px;
}
.ps-word {
    font-size: 22px;
    color: #9E9E9E;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: 50%;
    position: relative;
    left: 200px;
    top: -118px;
}
.default-btn {
    position: absolute;
    right: 20px;
    top: 30px;
}
.mu-switch-checked {
    color: #76D672;
}
.save-edit {
    width: 93.6%;
    height: 88px;
    background: #B2B2B2;
    margin-left: 3.6%;
    margin-top: 38px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
}

.active {
    width: 93.6%;
    height: 88px;
    margin-left: 3.6%;
    margin-top: 38px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    background: #76D672;
}
</style>
