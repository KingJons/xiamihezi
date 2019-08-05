<template>
  <div class="container">
    <!-- <img src="../img/bg.png" alt="" class="bg"> -->
    <div class="header">
      <span class="cart-num">共{{ num }}件宝贝</span>
      <span v-if="!isEdit" class="edit" @click="isEdit = true">编辑</span>
      <span v-if="isEdit" class="edit" @click="isEdit = false">完成</span>
    </div>
    <div class="box">
      <div v-for="item in cartList" :key="item.cart_id" class="cart-body">
        <div v-if="!item.cart_selected" class="select" @click="cart_selected(item.cart_id)" />
        <div v-if="item.cart_selected" class="selected">
          <img src="../img/selected.png" alt="" @click="cart_unselected(item.cart_id)">
        </div>
        <div class="business">
          <img class="business-img" src="../img/business.png">{{ item.business }}
        </div>
        <div v-for="good in item.goodsList" :key="good.id" class="goods-list">
          <div v-if="!good.good_selected" class="select" @click="good_selected(item.cart_id,good.id)" />
          <div v-if="good.good_selected" class="selected">
            <img src="../img/selected.png" alt="" @click="good_unselected(item.cart_id,good.id)">
          </div>
          <img :src="good.image" alt="" class="good-img">
          <span class="good-name">{{ good.name }}</span>
          <span class="good-spec">{{ good.spec }}</span>
          <span class="good-price">¥ {{ good.price }}</span>
          <span class="good-prime-price">¥ {{ good.prime_price }}</span>
          <div class="num-control">
            <div class="del" @click="delNum(item.cart_id,good.id)">
              -
            </div>
            <div class="num">
              {{ good.good_num }}
            </div>
            <div class="add" @click="addNum(item.cart_id,good.id)">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="good-sum">
      <div v-if="!selectAll" class="select" @click="good_selectAll" />
      <div v-if="selectAll" class="selected">
        <img src="../img/selected.png" alt="" @click="good_unselectAll">
      </div>
      <span class="select-title">全选</span>
      <div v-if="!isEdit" class="none-fright">
        <span>不含运费</span>
      </div>
      <span v-if="!isEdit" class="sum-title">总计：<span v-if="!isEdit" class="sum-price">¥ {{ sum_price }}.00</span></span>
      <button v-if="!isEdit" class="sum-button" @click="goToOrder">
        结算({{ cart_sum }})
      </button>
      <button v-if="isEdit" class="del-button" @click="delGood">
        删除
      </button>
    </div>
    <FlexTabbar :shift="shift" />
  </div>
</template>
<script>
import good_pic from '../img/good_pic.png'
import FlexTabbar from '@/components/flexTabbar'
export default {
  name: 'Cart',
  components: { FlexTabbar },
  data () {
    return {
      shift: 'cart',
      isEdit: false,
      select_sum: 0,
      selectAll: false,
      select_num: 0,
      num: 5,
      cart_sum: 0,
      sum_price: 0,
      cartList: [
        { cart_id: 1,
          cart_selected: false,
          business: '虾米盒子自营店',
          goodsList: [{
            good_selected: false,
            good_num: 1,
            id: 1,
            image: good_pic,
            name: '【虾米出品】 TNN 玻尿酸补水蚕丝面膜',
            spec: '玻尿酸保湿',
            price: 108,
            prime_price: 108
          },
          {
            good_selected: false,
            good_num: 1,
            id: 2,
            image: good_pic,
            name: '【虾米出品】 TNN 玻尿酸补水蚕丝面膜',
            spec: '玻尿酸保湿',
            price: 108,
            prime_price: 108
          }] },
        { cart_id: 2,
          cart_selected: false,
          business: '虾米盒子自营店',
          goodsList: [{
            good_selected: false,
            good_num: 1,
            id: 1,
            image: good_pic,
            name: '【虾米出品】 TNN 玻尿酸补水蚕丝面膜',
            spec: '玻尿酸保湿',
            price: 108,
            prime_price: 108
          }] },
        { cart_id: 3,
          cart_selected: false,
          business: '虾米盒子自营店',
          goodsList: [{
            good_selected: false,
            good_num: 1,
            id: 1,
            image: good_pic,
            name: '【虾米出品】 TNN 玻尿酸补水蚕丝面膜',
            spec: '玻尿酸保湿',
            price: 108,
            prime_price: 108
          }] }]
    }
  },
  methods: {
    delNum (cart_id, good_id) {
      console.log(good_id)
      console.log(this.cartList[cart_id - 1])
      if (this.cartList[cart_id - 1].goodsList[ good_id - 1].good_num > 1) {
        this.cartList[cart_id - 1].goodsList[good_id - 1].good_num--
      } else {
        this.$toast.error('数量不能小于1')
      }
      this.sum()
      this.cart_sumgood()
    },
    addNum (cart_id, good_id) {
      this.cartList[cart_id - 1].goodsList[good_id - 1].good_num++
      this.sum()
      this.cart_sumgood()
    },
    cart_selected (cart_id) {
      this.cartList[cart_id - 1].cart_selected = true
      this.select_sum++
      console.log(this.select_sum)
      for (var i = 0; i < this.cartList[cart_id - 1 ].goodsList.length; i++) {
        this.cartList[cart_id - 1].goodsList[i].good_selected = true
      }
      if (this.select_sum === this.cartList.length) {
        this.selectAll = true
      }
      this.sum()
      this.cart_sumgood()
    },
    cart_unselected (cart_id) {
      this.cartList[cart_id - 1].cart_selected = false
      this.select_sum--
      for (var i = 0; i < this.cartList[cart_id - 1 ].goodsList.length; i++) {
        this.cartList[cart_id - 1].goodsList[i].good_selected = false
      }
      if (this.select_sum !== this.cartList.length) {
        this.selectAll = false
      }
      this.sum()
      this.cart_sumgood()
    },
    good_selected (cart_id, good_id) {
      // console.log(good_id)
      // console.log(this.cartList[cart_id - 1].goodsList[good_id - 1])
      this.cartList[cart_id - 1].goodsList[good_id - 1].good_selected = true
      // console.log(this.cartList[cart_id - 1 ].goodsList.length)
      this.select_num++
      console.log(this.select_num)
      if (this.select_num === this.cartList[cart_id - 1 ].goodsList.length) {
        this.cartList[cart_id - 1].cart_selected = true
        this.select_sum++
        if (this.select_sum === this.cartList.length) {
          this.selectAll = true
        }
        this.select_num = 0
      }
      this.sum()
      this.cart_sumgood()
    },
    good_unselected (cart_id, good_id) {
      console.log(good_id)
      console.log(this.cartList[cart_id - 1].goodsList[good_id - 1])
      this.cartList[cart_id - 1].goodsList[good_id - 1].good_selected = false
      this.select_num--
      if (this.select_num !== this.cartList[cart_id - 1 ].goodsList.length) {
        this.cartList[cart_id - 1].cart_selected = false
        this.select_sum--
        if (this.select_sum !== this.cartList.length) {
          this.selectAll = false
        }
        this.select_num = 0
      }
      this.sum()
      this.cart_sumgood()
    },
    good_selectAll () {
      this.selectAll = true
      for (var i = 0; i < this.cartList.length; i++) {
        this.cartList[i].cart_selected = true
        for (var j = 0; j < this.cartList[i].goodsList.length; j++) {
          this.cartList[i].goodsList[j].good_selected = true
        }
      }
      this.sum()
      this.cart_sumgood()
    },
    good_unselectAll () {
      this.selectAll = false
      for (var i = 0; i < this.cartList.length; i++) {
        this.cartList[i].cart_selected = false
        for (var j = 0; j < this.cartList[i].goodsList.length; j++) {
          this.cartList[i].goodsList[j].good_selected = false
        }
      }
      this.sum_price = 0
      this.cart_sumgood()
    },
    sum () {
      var sum_price = 0
      for (var i = 0; i < this.cartList.length; i++) {
        for (var j = 0; j < this.cartList[i].goodsList.length; j++) {
          if (this.cartList[i].goodsList[j].good_selected === true) {
            sum_price += this.cartList[i].goodsList[j].good_num * this.cartList[i].goodsList[j].price
          }
        }
      }
      this.sum_price = sum_price
    },
    cart_sumgood () {
      var cart_sumgood = 0
      for (var i = 0; i < this.cartList.length; i++) {
        for (var j = 0; j < this.cartList[i].goodsList.length; j++) {
          if (this.cartList[i].goodsList[j].good_selected === true) {
            cart_sumgood += this.cartList[i].goodsList[j].good_num
          }
        }
      }
      this.cart_sum = cart_sumgood
    },
    delGood () {
      for (var i = 0; i < this.cartList.length; i++) {
        for (var j = 0; j < this.cartList[i].goodsList.length; j++) {
          if (this.cartList[i].goodsList[j].good_selected === true) {
            this.cartList[i].goodsList.splice(j, 1)
            if (this.cartList[i].goodsList.length === 0) {
              this.cartList.splice(i, 1)
              this.cartList[i].cart_id - 1
              console.log(this.cartList[i].cart_id - 1)
              const gid = this.cartList[i].cart_id
              console.log(gid.goodsList)
            }
          }
        }
      }
    },
    goToOrder () {
      this.$router.push('/FirmOrder')
    }
  }

}
</script>
<style scoped>
.container {
    margin: 0;
    padding: 0 0 106px 0;
    /* margin-bottom: 60px; */
}
.header {
    position: fixed;
    width: 100%;
    height: 100px;
    background: #21201F;
    z-index: 1;
}

.header .cart-num {
    position: fixed;
    font-size: 26px;
    color: #fff;
    margin-left: 30px;
    /* margin-top: 71px; */
    top: 40px;
    z-index: 0;
}
.header .edit {
    font-size: 34px;
    margin-left: 85%;
    position: fixed;
    top: 32px;
    color: #fff;
}
.box {
  margin-top: 120px;
  margin-bottom: 160px;
}
.cart-body{
    width: 93.6%;
    background: #fff;
    /* height: 270px; */

    margin-left: 20px;
    border-radius: 8px;
    /* margin-bottom: -50px; */
    position: relative;
}

.select{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #999999;
    margin-left: 20px;
    margin-top: 20px;
    position: relative;
    top: 20px;
}
.selected{
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-top: 20px;
  position: relative;
  top: 20px;
}
.selected img{
  width: 40px;
  height: 40px;
}
.business-img {
  width: 52px;
  height: 28px;
  margin-left: -60px;
  margin-right: 10px;
  position: relative;
  top: 4px;
}
.business {
    font-size: 26px;
    margin-left: 138px;
    top: -16px;
    position: relative;
}
.goods-list {
    margin-top: 90px;
    /* margin-bottom: 20px; */
}

.good-img {
    width: 176px;
    height:176px;
    margin-left: 80px;
    margin-top: -120px;
    position: relative;
    margin-bottom: -10px;
}
.good-name {
    font-size: 26px;
    color: #333333;
    position: absolute;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: -180px;
    left: 280px;
    margin-right: 20px;
}
.good-spec {
    font-size: 22px;
    color: #B2B2B2;
    position: relative;
    top: -70px;
    left: 10px;
}
.good-price {
    font-size: 22px;
    color: #F10D3B;
    position: relative;
    left: -120px;
    top: -20px;
}
.good-prime-price {
    font-size: 20px;
    color: #7E7E7E;
    position: relative;
    left: -190px;
    top: 10px;
    text-decoration: line-through;
}
.num-control {
    width: 172px;
    height: 48px;
    display: flex;
    margin-left:70%;
    top: -40px;
    position: relative;
    border-top: 1px solid #cccccc;
    /* border-bottom: 1px solid #cccccc; */
}
.del, .add {
    width: 48px;
    height: 48px;
    background: #ffffff;
    color: #999999;
    text-align: center;
    line-height: 48px;
    font-size: 48px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
}
.num {
    width: 76px;
    height: 48px;
    background: #ffffff;
    color: #333333;
    text-align: center;
    line-height: 48px;
    font-size: 28px;
    border-bottom: 1px solid #cccccc;
    /* border-left: 1px solid #cccccc; */
    /* border-right: 1px solid #cccccc; */
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
.good-sum {
  width: 100%;
  height: 112px;
  background: #fff;
  margin-top: 40px;
  border: 1px solid #f6f6f6;
  position: fixed;
  bottom: 104px;
}
.select-title {
  font-size: 30px;
  color: #333333;
  position: relative;
  margin-left: 90px;
  top: -28px;
  width: 60px;
}

.none-fright {
  font-size: 22px;
  color: #999999;
  position: relative;
  margin-left: 30%;
  top: -68px;
}
.sum-title {
  font-size: 24px;
  color: #333333;
  position: relative;
  top: -114px;
  margin-left: 46%;
}
.sum-price {
  font-size: 28px;
  color: #F10D3B;
}
.sum-button,.del-button {
  width: 20%;
  height: 60px;
  position: absolute;
  right: 40px;;
  top: 20px;
  font-size: 30px;
  background: #DD3038;
  border: none;
  color: #fff;
}

</style>

