<template>
  <!-- 我的店铺 -->
  <div>
    <div class="my-fans-title">
      <span>我的粉丝
        <span class="select" @click="show=true">筛选</span>
      </span>
    </div>
    <div class="header">
      <span>团队总人数
        <span class="num">10</span>
      </span>
    </div>
    <div class="team-box">
      <mu-col span="12" lg="4" sm="6" class="time1">
        <mu-date-input v-model="time1" solo label-float icon="today" full-width />
      </mu-col>
      <span class="to">至</span>
      <mu-col span="12" lg="4" sm="6" class="time2">
        <mu-date-input v-model="time2" solo label-float icon="today" full-width />
      </mu-col>
      <div class="teams">
        <div v-for="(item,index) in teams" :key="index" class="team">
          <img :src="item.pic" alt="" class="goods-pic">
          <span class="team-name">{{ item.team_name }}</span>
          <span class="reference">推荐人：{{ item.reference }}</span>
          <span class="team-num">团队人数：{{ item.team_members }}</span>
          <span class="time">{{ item.time }}</span>
        </div>
      </div>
    </div>
    <div v-if="show" class="nav">
      <div v-for="(items,index) in category" :key="index" class="nav-select">
        <div class="mutil-query-title">
          {{ items.name }}
        </div>
        <ul v-if="items.items.length" class="contents">
          <li v-for="(item,key) in items.items" :key="key">
            <div :class="item.active?'active':'content'" @click="handle(index,key)">
              {{ item.name }}
            </div>
          </li>
        </ul>
      </div>
      <button class="delay" @click="show=false">
        × 取消
      </button>
      <button class="confirm" @click="show=false">
        √ 确定
      </button>
    </div>
  </div>
</template>

<script>
import pic from '../img/good_pic.png'
export default {
  name: 'MyFans',
  components: {},
  data () {
    return {
      count: 0,
      show: false,
      time1: '2019-01-13',
      time2: '2019-05-15',
      team_num: 10,
      teams: [{
        pic: pic,
        team_name: '耿衬',
        reference: '斌',
        team_members: 0,
        time: '2019-5-19 16:09:43'
      }, {
        pic: pic,
        team_name: '王佳',
        reference: '斌',
        team_members: 0,
        time: '2019-5-19 16:09:43'
      }, {
        pic: pic,
        team_name: '张凯',
        reference: '斌',
        team_members: 0,
        time: '2019-5-19 16:09:43'
      }, {
        pic: pic,
        team_name: '高希明',
        reference: '斌',
        team_members: 0,
        time: '2019-5-19 16:09:43'
      }, {
        pic: pic,
        team_name: '杨怀胜',
        reference: '斌',
        team_members: 0,
        time: '2019-5-19 16:09:43'
      }, {
        pic: pic,
        team_name: '陶荣',
        reference: '斌',
        team_members: 0,
        time: '2019-5-19 16:09:43'
      }, {
        pic: pic,
        team_name: '客无忧小助手3',
        reference: '斌',
        team_members: 0,
        time: '2019-5-19 16:09:43'
      }],
      category: [
        {
          name: '推荐形式',
          items: [
            {
              name: '直推用户',
              active: false
            },
            {
              name: '间接用户',
              active: false
            }
          ]
        },
        {
          name: '是否领取',
          items: [
            {
              name: '领取',
              active: false
            },
            {
              name: '未领取',
              active: false
            }
          ]
        },
        {
          name: '用户领取',
          items: [
            {
              name: '粉丝',
              active: false
            },
            {
              name: '店铺',
              active: false
            },
            {
              name: 'V1店铺',
              active: false
            },
            {
              name: 'V2店铺',
              active: false
            },
            {
              name: 'V3店铺',
              active: false
            }
          ]
        }
      ]
    }
  },
  methods: {
    handle: function (index, key) {
      this.category[index].items[key].active = !this.category[index].items[key].active
    }

  }
}
</script>

<style>
.my-fans-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
    position: relative;
}
.select {
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    right: 27px;
}
.header {
    width: 93.6%;
    height: 120px;
    background: #fff;
    border-radius: 8px;
    font-size: 28px;
    color: #1A1A1A;
    margin-left: 3.2%;
    margin-top: 24px;
    line-height: 120px;
    padding-left: 24px;
    font-weight:bold;
    box-shadow:0px 0px 10px 0px rgba(191,188,188,0.25);
}
.num {
    font-size: 36px;
    color: #F04E6F;
    margin-left: 10px;;
}
.team-box {
    width: 93.6%;
    height: auto;
    background: #fff;
    margin-top: 24px;
    margin-left: 3.2%;
    border-radius: 8px;
    position: relative;
    box-shadow:0px 0px 10px 0px rgba(191,188,188,0.25);
}
.time1 {
    width: 52%;
    /* margin-left: -15px; */
    top: 12px;
    position: relative;
    right: 0px;
}
.mu-popover {
    max-width: 100%;
}
.material-icons {
    font-size: 44px;
}
.mu-input.has-icon {
    padding-left: 85px;
}
.to {
    font-size: 28px;
    color: #898D90;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -58px;
}
.time2 {
    width: 52%;
    /* margin-left: 50%; */
    top: 12px;
    right: 0px;
    position: absolute;
}
.team {
    width: 100%;
    height: 130px;
    border-top: 1px solid #e7e7ee;
    position: relative;
}
.teams {
    width: 96%;
    /* border-top: 1px solid #e7e7e7; */
    margin-top: -10px;
    margin-left: 2%;
    margin-bottom: 20px;
}
.goods-pic {
    width:64px;
    height:64px;
    border-radius:10px;
    margin-left: 24px;
    margin-top: 33px;
}
.team-name {
    font-size: 28px;
    color: #1A1A1A;
    margin-left: 13px;
    position: relative;
    top: -36px;
}
.reference {
    font-size: 24px;
    color: #AAA8A8;
    position: absolute;
    left: 115px;
    top: 70px;
}
.team-num {
    font-size: 28px;
    color: #333333;
    position: absolute;
    right: 25px;
    top: 30px;
}
.time {
    font-size: 24px;
    color: #AAA8A8;
    right: 25px;
    position: absolute;
    top: 75px;
}
.nav {
    width: 70%;
    height: 100%;
    background: #fff;
    position: fixed;
    right: 0;
    top: 0;
}
.nav-select {
    margin-left: 40px;
    margin-top: 62px;
}
.mutil-query-title {
    font-size: 26px;
    color: #918E8E;
}
.contents {
    list-style: none;
    color: #333333;
    font-size: 28px;
    display: flex;
    justify-content:flex-start;
    flex-flow: wrap;
    margin-left: -115px;
}
.content {
    width: 140px;
    height: 60px;
    background: #ECECEC;
    margin-bottom: 20px;
    line-height: 60px;
    text-align: center;
    margin-left: 20px;
}
.active {
  width: 140px;
  height: 60px;
  background: #DDC294;
  margin-bottom: 20px;
  line-height: 60px;
  text-align: center;
  margin-left: 20px;
}
.delay {
  width: 43.4%;
  height: 80px;
  background: #D1D0D0;
  color: #fff;
  font-size: 28px;
  border: none;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  position: absolute;
  bottom: 20px;
  margin-left: 40px;
}
.confirm {
  width:43.4%;
  height: 80px;
  background: #F55A7A;
  color: #fff;
  font-size: 28px;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  position: absolute;
  bottom: 20px;
  margin-left: 51%;
}
</style>
