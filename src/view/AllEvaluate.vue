<template>
  <div class="evaluate">
    <div class="eva-header">
      <span>评价详情</span>
    </div>
    <!-- <div class="eva-tabs">
      <div class="all-btn" :class="{active:cur===0}" @click="cur=0">
        <span>全部</span>
      </div>
      <div class="last-btn" :class="{active:cur===1}" @click="cur=1">
        <span>最新</span>
      </div>
      <div class="add-btn" :class="{active:cur===2}" @click="cur=2">
        <span>追加</span>
      </div>
      <div class="pic-btn" :class="{active:cur===3}" @click="cur=3">
        <span>有图</span>
      </div>
    </div> -->
    <div v-for="eva in evaluates" :key="eva.id" class="tab-contents">
      <div class="tab-content">
        <div>
          <img :src="eva.face" alt="" class="avatar">
          <span class="user-name">{{ eva.nickname }}</span>
        </div>
        <div class="eva-time">
          {{ eva.humanTime }}
          <span class="goods-spec">规格：{{ eva.sepcVal }}</span>
        </div>
        <div class="eva-content">
          <span>{{ eva.body }}</span>
        </div>
        <div v-for="(pic,indx) in eva.commentPicsArray" :key="indx" class="pic">
          <img :src="pic" alt="" class="eva-pic" :class="eva.commentPicsArray.length ===1? 'eva-pic1':'eva-pic2'">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { queryGoods } from '@/api/goods.js'
export default {
  name: 'AllEvaluate',
  components: {},
  data () {
    return {
      cur: 0,
      evaluates: []
    }
  },
  created () {
    this.funqueryGoods(this.$route.query.id)
  },
  methods: {
    funqueryGoods (id) {
      const par = {
        'condition': {
          'goodsId': id
        },
        'pageSize': 10,
        'page': 3
      }
      queryGoods(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.evaluates = res.data.data.list
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
<style scoped>
.evaluate {
    background: #fff;
    width: 100%;
    margin: 0;
}
.eva-header {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.eva-tabs {
    height: 119px;
    width: 100%;
    position: relative;
    /* float: left; */
}
.all-btn,.last-btn,.add-btn,.pic-btn{
    width: 15.5%;
    height: 60px;
    line-height:60px;
    text-align: center;
    font-size:26px;
    font-weight:500;
    background: #F3F3F3;
    color: #333333;
    position: absolute;
    margin-top: 30px;
    margin-left: 2.59%;
}
.active{
    margin-left: 2.59%;
    background: #DD2F37;
    color:rgba(255,255,255,1);
}
.last-btn {
    margin-left: 22.13%;
}
.add-btn {
  width: 21.3%;
  margin-left: 41.67%;
}
.pic-btn {
  width: 22.67%;
  margin-left: 67%;
}
.tab-content {
  margin-top: 9px;
  margin-left: 24px;
  width: 93.6%;
  border-top: 1px solid #E0E0E0;
  position: relative;
  /* margin-bottom: 30px; */
  height: 484px;
  overflow: hidden;
}

.avatar {
  width: 64px;
  height: 64px;
  margin-top: 31px;
  border-radius: 32px;
}
.user-name {
  font-size:28px;
  font-weight:bold;
  color:rgba(51,51,51,1);
  position: relative;
  top: -20px;
  margin-left: 14px;
}
.eva-time {
  font-size:26px;
  font-weight:bold;
  color:rgba(115,115,115,1);
  position: relative;
}
.goods-spec {
  margin-left: 20px;
}
.eva-content {
  font-size:28px;
  font-weight:bold;
  color:rgba(51,51,51,1);
  position: relative;
  /* margin-left: -310px; */
  top: 15px;
}
.eva-pic {
  width: 30.134%;
  height: 226px;
  position: relative;
  top: 35px;
  border-radius: 8px;
}
.eva-pic1 {
  width: 344px;
  height: 344px;
}
.eva-pic2 {
  float: left;
  padding-right: 10px;
}
</style>
