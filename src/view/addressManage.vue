<template>
  <div>
    <div class="address-manage-title">
      <span>收货地址管理
        <span class="add-address">新增地址</span>
      </span>
    </div>
    <div v-for="item in addressInfo" :key="item.id" class="address-info">
      <span class="user-name">{{ item.name }}</span>
      <span class="phone">{{ item.mobile }}</span>
      <img v-if="item.isDefault" src="../img/default.png" alt="" class="default">
      <span class="address" :class="item.isDefault? 'default-address':''">{{ item.province }}{{ item.city }}{{ item.district }}{{ item.detail }}</span>
      <div class="break" />
      <span class="edit">编辑</span>
    </div>
  </div>
</template>

<script>
import { queryList } from '@/api/user.js'
export default {
  name: 'AddressManage',
  components: {},
  data () {
    return {
      addressInfo: []
    }
  },
  created () {
    this.funqueryList()
  },
  methods: {
    funqueryList () {
      const par = {}
      queryList(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.addressInfo = res.data.data.list
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
.address-manage-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
    position: relative;
}
.add-address {
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    right: 27px;
}
.address-info {
    width: 96.13%;
    height: 179px;
    background: #fff;
    margin-top: 15px;
    margin-left: 2.14%;
    border-radius: 10px;
    position: relative;
}
.user-name {
    font-size: 28px;
    color: #1A1A1A;
    margin-left: 32px;
    position: relative;
    top: 15px;
}
.phone {
    font-size: 24px;
    color: #9E9E9E;
    position: relative;
    top: 15px;
}
.default {
    width: 70px;
    height: 34px;
    position: absolute;
    left: 33px;
    top: 85px;
}
.address,.default-address {
    font-size: 26px;
    color: #1A1A1A;
    position: absolute;
    left: 33px;
    top: 80px;
    margin-right: 159px;
}
.default-address {
    left: 113px;
}
.break {
    width: 2px;
    height: 60px;
    position: absolute;
    right: 109px;
    border: 2px solid #E7E7E7
}
.edit {
    font-size: 26px;
    color: #9E9E9E;
    position: absolute;
    right: 34px;
    margin-top: 65px;
}
</style>
