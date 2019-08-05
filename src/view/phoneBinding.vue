<template>
  <!-- 手机号绑定 -->
  <div class="container">
    <div class="phone-binding-title">
      <span>手机号绑定</span>
    </div>
    <div v-show="replace" class="current-phone">
      <span>当前手机号：{{ mobile.value }}</span>
    </div>
    <mu-flex justify-content="center" align-items="center">
      <mu-button v-show="replace" full-width color="#000000" class="logout" @click="replace=false">
        更换手机号
      </mu-button>
    </mu-flex>
    <div v-show="!replace" class="replace-phone">
      <mu-text-field v-model="form.phone" full-width prefix="+86" type="number" />
      <mu-text-field v-model="form.code" full-width />
      <mu-button flat class="code-btn" @click="sendcode">
        {{ countDownOne.beginStop?"获取验证码" : countDownOne.seconds+"秒后重发" }}
      </mu-button>
    </div>
    <div v-show="!replace" :class="save? 'btn-active':'binding-phone'">
      <span @click="bind">绑定新号码</span>
    </div>
  </div>
</template>
<script>
import { getCode, getToken } from '@/api/login'
import { showPhone } from '@/api/user'
export default {
  name: 'PhoneBinding',
  components: {},
  data () {
    return {
      mobile: {},
      form: {
        phone: '',
        code: ''
      },
      replace: true,
      countDownOne: {
        beginStop: true,
        seconds: 60
      }
    }
  },
  computed: {
    save () {
      var active = false
      if (this.form.phone !== '' && this.form.code !== '') {
        active = true
        console.log(active)
      } else {
        active = false
        console.log(active)
      }
      return active
    }
  },
  created () {
    this.funshowPhone(this.$route.query.id, this.$route.query.mobile)
  },
  methods: {
    bind () {
      console.log('绑定')
      if (this.form.phone !== '') {
        if (!/^1(3|4|5|7|8|6|9)\d{9}$/.test(this.form.phone)) {
          this.$toast.error('请输入正确的手机号码')
          return false
        } else if (this.form.code === '') {
          this.$toast.error('请输入验证码')
          return false
        } else {
          const par = {
            phone: this.form.phone,
            userType: 1,
            loginType: 2,
            code: this.form.code
          }
          getToken(par).then(res => {
            if (res.data.result === 1) {
              this.$router.push('/systemSetting')
              localStorage.setItem('userInfo', JSON.stringify(res.data.data.obj))
              console.log(JSON.parse(localStorage.userInfo).phone)
            } else {
              this.$toast.error(res.data.message)
            }
          }).catch(e => {
            console.log(e)
          })
        }
      } else {
        this.$toast.error('请输入手机号码')
        return false
      }
    },
    sendcode () {
      const countDown = this.countDownOne
      if (countDown.beginStop) {
        const phone = this.form.phone
        if (!/^1(3|4|5|7|8|6|9)\d{9}$/.test(phone)) {
          this.$toast.error('请输入正确的手机号码')
          return false
        }
        this.code()
        // 倒计时
        this.myInterval = setInterval(function () {
          if (countDown.seconds !== 0) {
            countDown.seconds = countDown.seconds - 1
            this.countDownOne = countDown
          } else {
            countDown.beginStop = true
            countDown.seconds = 60
            this.countDownOne = countDown
          }
        }, 1000)
        countDown.beginStop = false
      }
    },
    // 获取验证码
    code () {
      const par = {
        phone: this.form.phone,
        type: 'FAST_LOGIN'
      }
      getCode(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.$toast.success('验证码已发送')
        } else {
          this.$toast.error(res.data.message)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    funshowPhone (id, mobile) {
      const par = {
        userId: id,
        value: mobile
      }
      showPhone(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.mobile = res.data.data
          console.log(res.data.data)
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
.container {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    height: 100%;
}
.phone-binding-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
    position: relative;
}
.current-phone {
    width: 100%;
    height: 200px;
    background: #fff;
    font-size: 32px;
    color: #B5B5B5;
    position: relative;
    top: -370px;
}
.current-phone span {
    margin-left: 22.4%;
    position: relative;
    top: 70px;
}
.logout {
    width: 93.6%;
    position: relative;
    top: -740px;
}
.replace-phone {
    margin-left: 4%;
    position: absolute;
    top: 180px;
    width: 85%;
}
.code-btn {
    position: absolute;
    right: 30px;
    top: 110px;
}
.mu-input__focus {
    color: #e7e7e7;
}
.binding-phone {
    width: 93.6%;
    height: 88px;
    background: #B2B2B2;
    margin-left: 3.6%;
    position: absolute;
    top: 460px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    border-radius: 8px;
}
.btn-active {
    width: 93.6%;
    height: 88px;
    background: #000000;
    margin-left: 3.6%;
    position: absolute;
    top: 460px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    border-radius: 8px;
}
</style>
