<template>
  <div class="login" :style="bg">
    <mu-container class="loginBox">
      <div class="login-logo">
        <img src="../img/logo.png" alt="虾米盒子">
      </div>
      <mu-form :model="form" class="mu-demo-form">
        <div class="form-container">
          <mu-form-item label="请输入手机号" prop="username" full-width label-float>
            <mu-text-field v-model="form.username" prop="username" />
          </mu-form-item>
          <mu-form-item label="请输入验证码" prop="password" full-width label-float>
            <mu-text-field v-model="form.password" prop="password" />
            <mu-button middle color="rgba(48,48,48,0.8)" @click="sendcode">
              {{ countDownOne.beginStop?"获取验证码" : countDownOne.seconds+"秒后重发" }}
            <!-- 获取验证码 -->
            </mu-button>
          </mu-form-item>
        </div>
        <mu-form-item class="btnBox">
          <mu-button full-width large color="rgba(185,151,80,0.8)" @click="login">
            登录/注册
          </mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
    <div class="flex-bottom">
      <span class="flex-title"><span class="flex-line" />第三方登录<span class="flex-line" /></span>
      <span class="flex-img"><img src="../img/icon_wx.png" class="icon-wx"></span>
    </div>
  </div>
</template>
<script>
import { getCode, getToken } from '@/api/login'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      countDownOne: {
        beginStop: true,
        seconds: 60
      },
      myInterval: function () {},
      bg: 'background:url(' + require('@/img/loginBg.png') + ') no-repeat; background-size: cover;'
    }
  },
  created () {
    // this.funApi()
  },
  methods: {
    CheckDataIsNull (val) {
      if (val == null || val === '') {
        return false
      } else return true
    },
    sendcode () {
      const countDown = this.countDownOne
      if (countDown.beginStop) {
        const username = this.form.username
        if (!/^1(3|4|5|7|8|6|9)\d{9}$/.test(username)) {
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
            clearInterval(this.myInterval)
          }
        }, 1000)
        countDown.beginStop = false
      }
    },
    // 获取验证码
    code () {
      const par = {
        phone: this.form.username,
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
    // 登录
    login () {
      console.log('登录')
      if (this.form.username !== '') {
        if (!/^1(3|4|5|7|8|6|9)\d{9}$/.test(this.form.username)) {
          this.$toast.error('请输入正确的手机号码')
          return false
        } else if (this.form.password === '') {
          this.$toast.error('请输入验证码')
          return false
        } else {
          const par = {
            username: this.form.username,
            userType: 1,
            loginType: 2,
            code: this.form.password
          }
          getToken(par).then(res => {
            if (res.data.result === 1) {
              this.$router.replace('/')
              localStorage.setItem('userInfo', JSON.stringify(res.data.data.obj))
              localStorage.setItem('token', res.data.data.obj.token)
              console.log(JSON.parse(localStorage.userInfo).userName)
              console.log(localStorage.getItem('token'))
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
    }
  }
}

</script>
<style scoped lang="less">
  .loginBox {
    padding: 28% 5% 0 5%;
  }
  .login{
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .login-logo{
    width: 20%;
    margin: 0 auto;
  }
  .login-logo img{
    width: 100%;
    // background: @menuBg;
  }
  .form-container{
    background: rgba(255,255,255,0.5);
    margin-top:60px;
    height: 140px;/*no*/
    padding: 0 5%;
  }
  .form-container .mu-form-item{
    color:#fff;
    margin-bottom: 0;
    padding-bottom:0;
  }
  .form-container{
    .mu-form-item__focus{
      color:#fff;
    }
    .mu-input__focus{
      color:#fff;
    }
    .mu-form-item__has-label{
      min-height: 60px;
    }
  }
  .form-container .mu-button{
    margin-left: 65%;
    margin-top: -40px; /*no*/
    color: #fff;
  }
  .btnBox{
    padding: 5% 0;
    .mu-button{
      margin: 0;
      height: 100px;
      font-size: 40px;
      font-weight: normal;
      letter-spacing: 5px;
    }
    .mu-button-wrapper{
      letter-spacing: 5px;
    }
  }
  .flex-bottom{
    position: relative;
    bottom: 4%;
    width: 100%;
    text-align: center;
    color: rgba(255,255,255,0.8);
    .flex-title{
      display: inline-block;
      width: 100%;
      height: 20px;/*no*/
      line-height: 20px;/*no*/
      font-size: 22px;
    }
    .flex-line{
      display: inline-block;
      height: 1px;/*no*/
      width: 70px;
      background: rgba(255,255,255,0.8);
      margin: 5px 10px;
    }
    .flex-img{
      display: block;
      height: 64px;
      width: 64px;
      margin:10px auto;;
      .icon-wx{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
