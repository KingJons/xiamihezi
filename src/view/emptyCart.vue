<template>
  <div>
    <div class="cart-header">
      <span>购物车</span>
    </div>
    <div class="body">
      <img src="../img/empty_cart.png" alt="" class="body-img">
      <span class="body-message">您的购物车空空如也</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmptyCart'
}
</script>
<style scoped>
.cart-header {
  width: 100%;
  height: 128px;
  background: #21201F;
  font-size: 38px;
  color: #fff;
  line-height: 128px;
  text-align: center;
}
.body {
  width: 100%;
}
.body-img {
  width: 100%;
}
.body-message {
  font-size:30px;
  font-weight:400;
  color:rgba(160,160,160,1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -500px;
}
</style>
