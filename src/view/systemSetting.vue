<template>
  <!-- 系统设置 -->
  <div>
    <div class="system-setting-title">
      <span>系统设置</span>
    </div>
    <div class="user-info">
      <img :src="userInfo.face" alt="" class="user-avatar">
      <span class="user-name">{{ userInfo.nickname }}</span>
      <img src="../img/woman_icon.png" alt="" class="sex-icon">
      <span class="user-id">ID：{{ userInfo.userId }}</span>
      <div class="edit" @click="goToEdit(userInfo.userId,userInfo.nickname,userInfo.face,userInfo.sex)">
        <span>编辑</span>
      </div>
    </div>
    <div class="about-comments">
      <span class="feedback" @click="goToFeedback">留言反馈</span>
      <img src="../img/arrow3.png" alt="" class="feedback-arrow" @click="goToFeedback">
      <div class="break" />
      <span class="reply">客服回复</span>
      <img src="../img/arrow3.png" alt="" class="reply-arrow">
    </div>
    <div class="about-system">
      <span class="help">帮助中心</span>
      <img src="../img/arrow3.png" alt="" class="help-arrow">
      <div class="break" />
      <span class="phone" @click="goToPhoneBinding">手机绑定</span>
      <img src="../img/arrow3.png" alt="" class="phone-arrow" @click="goToPhoneBinding(userInfo.userId,userInfo.mobile)">
    </div>
    <mu-flex justify-content="center" align-items="center">
      <mu-button full-width color="#F04E6F" class="logout" @click="logout">
        退出登录
      </mu-button>
    </mu-flex>
  </div>
</template>
<script>
import { getUsersInfo } from '@/api/user.js'
export default {
  name: 'SystemSetting',
  components: {},
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.fungetUsersInfo(this.$route.query.id)
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    goToPhoneBinding (id, mobile) {
      this.$router.push({
        path: '/phoneBinding',
        query: {
          id: id,
          mobile: mobile
        }
      })
    },
    goToEdit (id, name, face, sex) {
      this.$router.push({
        path: '/personalData',
        query: {
          id: id,
          name: name,
          face: face,
          sex: sex
        }
      })
    },
    goToFeedback () {
      this.$router.push('/feedback')
    },
    fungetUsersInfo (id) {
      const par = {
        userId: id
      }
      getUsersInfo(par).then(res => {
        console.log(res)
        if (res.data.result === 1) {
          this.userInfo = res.data.data.obj
          console.log(res.data.data.obj)
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
.system-setting-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
    position: relative;
}
.user-info {
    width: 93.6%;
    height: 239px;
    background: #fff;
    margin-left: 3.2%;
    margin-top: 24px;
    border-radius: 8px;
}
.user-avatar {
    width: 120px;
    height: 120px;
    margin-left: 30px;
    margin-top: 50px;
    border-radius: 60px;
}
.user-name {
    font-size: 32px;
    color: #1A1A1A;
    margin-left: 20px;
    position: relative;
    top: -70px;
}
.sex-icon {
    width: 22px;
    height: 22px;
    position: relative;
    top: -70px;
    margin-left: 20px;
}
.user-id {
    font-size: 26px;
    color: #A9A9A9;
    margin-left: -260px;
    position: relative;
    top: -20px;
}
.edit {
    width: 80px;
    height: 40px;
    border: 1px solid #F15D7A;
    border-radius: 8px;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #F15D7A;
    position: absolute;
    right: 55px;
    top: 250px;
}
.about-comments {
    width: 93.6%;
    height: 180px;
    background: #fff;
    border-radius: 8px;
    margin-left: 3.2%;
    margin-top: 24px;
    position: relative;
}
.feedback,.reply,.help,.phone {
    font-size: 32px;
    color: #1A1A1A;
    margin-left: 30px;
    position: relative;
    top: 22px;
}
.break,.phone-break {
    width: 95.4%;
    height: 1px;
    border: 1px solid #EDEDED;
    margin-left: 30px;
    top: 40px;
    position: relative;
}
.feedback-arrow,.reply-arrow,.help-arrow,.phone-arrow {
    width: 14px;
    height: 25px;
    position: absolute;
    right: 50px;
    top: 35px;
}
.reply-arrow,.phone-arrow {
    top: 125px;
}
.help-arrow {
    top: 35px;
}
.reply,.phone {
    top: 50px;
}
.phone-break {
    top: 70px;
}
.about-system {
    width: 93.6%;
    height: 180px;
    background: #fff;
    border-radius: 8px;
    margin-left: 3.2%;
    margin-top: 24px;
    position: relative;
}
.logout {
    position: fixed;
    bottom: 0;
}
</style>
