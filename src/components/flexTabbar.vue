<template>
  <!-- 底部tab -->
  <div>
    <mu-flex class="flex-tabbar" justify-content="center">
      <mu-container style="max-width: 400px; width:100%;padding:0;margin-bottom:0">
        <mu-bottom-nav :value="shift" shift color="#fff" style="height:66px" @change="changeNav()">
          <mu-bottom-nav-item value="index" title="商城" icon="home" to="/" :replace="true" />
          <mu-bottom-nav-item value="home" title="分类" icon="widgets" to="/home" :replace="true" />
          <mu-bottom-nav-item value="cart" title="购物车" icon="add_shopping_cart" to="/cart" :replace="true" />
          <mu-bottom-nav-item value="person" title="个人中心" icon="person_outline" to="/personal" :replace="true" />
        </mu-bottom-nav>
      </mu-container>
    </mu-flex>
  </div>
</template>
<script>
export default {
  props: {
    shift: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeNav () {
      const nav = this.shift
      if (nav === 'cart' || nav === 'person') {
        console.log(nav)
      }
    }
  }
}
</script>
<style lang="less" scoped>
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
</style>

