<template>
  <div class="signcontainer">
    <img src="../img/top.png" alt="" class="top-img">
    <mu-container>
      <div class="sign-page">
        <mu-stepper :active-step="vactiveStep" orientation="vertical">
          <mu-step>
            <mu-step-label>
              星期一<div>
                <span>{{ content.name }}</span>
              </div>
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              星期二
              <div>
                <span>{{ content.name }}</span>
              </div>
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              星期三
              <div>
                <span>{{ content.name }}</span>
              </div>
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              星期四
              <div>
                <span>{{ content.name }}</span>
              </div>
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              星期五
              <div>
                <span>{{ content.name }}</span>
              </div>
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              星期六
              <div>
                <span>{{ content.name }}</span>
              </div>
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              星期日
              <div>
                <span>{{ content.name }}</span>
              </div>
            </mu-step-label>
          </mu-step>
        </mu-stepper>
        <mu-button v-if="active" full-width color="#D6BB86" class="demo-step-button" @click="vhandleNext">
          签到
        </mu-button>
        <mu-button v-if="!active" disabled full-width color="#D6BB86" class="demo-step-button" @click="vhandleNext">
          已签到
        </mu-button>
      </div>
    </mu-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: true,
      content: {
        img: '../img/money.png',
        img_disable: '../img/money.png',
        name: '积分+1'
      },
      vactiveStep: -1
    }
  },
  computed: {

  },

  methods: {
    vhandleNext () {
      this.active = false
      this.vactiveStep++
      //   var myDate = new Date()
      setInterval(() => {
        this.active = true
      }, 5000)
    },

    vreset () {
      this.vactiveStep = 0
    }
  }
}
</script>
<style scoped>

.top-img {
    height: 126px;
    width: 66%;
    margin-left: 17.3%;
    margin-top: 130px;
    z-index: 21;
    position: relative;
}
.sign-page {
    width: 84%;
    height: 862px;
    background: #fff;
    margin-left: 8%;
    margin-top: -50px;
    z-index: 20;

}
.sign-page .mu-stepper {
    margin-top: 94px;
    margin-left: 15%;
}
.sign-page .mu-step-label{
    font-size: 28px;
    /* color: #ED5C5C; */
    height: 90px;
    margin-bottom: -24px;
}
.sign-page .mu-step-label span {
    margin-left: 60px;
}
.demo-step-button {
    width:70%;
    margin-left: 15%;
    margin-top: 40px;
    border-radius: 40px;
}
</style>

