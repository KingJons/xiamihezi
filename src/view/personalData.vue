<template>
  <!-- 个人信息 -->
  <div>
    <div class="personal-data-title">
      <span>个人信息
        <span class="save-data" @click="save">保存</span>
      </span>
    </div>
    <div class="user-info">
      <img :src="userInfo.face" alt="" class="avatar">
    </div>
    <div class="setting-bottom">
      <div class="caption">
        更换头像
      </div>
    </div>
    <input type="file" accept="image/*" class="hiddenInput">
    <div class="personal-data">
      <mu-text-field v-model="userInfo.nickname" class="name" prefix="昵称" full-width />
      <mu-text-field v-model="userInfo.sex" prefix="性别" full-width />
    </div>
  </div>
</template>
<script>
import { modifyInfo } from '@/api/user.js'
export default {
  name: 'PersonalData',
  components: {},
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.funmodifyInfo(this.$route.query.id, this.$route.query.name, this.$route.query.face, this.$route.query.sex)
  },
  methods: {
    save () {
      this.$route.query.sex = this.userInfo.sex
      this.$router.push('/systemSetting')
    },
    funmodifyInfo (id, name, face, sex) {
      const par = {
        id: id,
        nickname: name,
        face: face,
        sex: sex
      }
      modifyInfo(par).then(res => {
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
.personal-data-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
.save-data {
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    right: 27px;
}
.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  height:504px;
  width: 93.6%;
  margin-left: 3.2%;
  margin-top: 24px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.avatar {
    width: 200px;
    height: 200px;
    margin-top: -220px;
    border-radius: 100px;
}
.setting-bottom {
  display: flex;
  height: 37px;
  justify-content: center;
  align-items: center;
  margin-top: -250px;
}
.caption {
  font-size: 30px;
  color: #F04E6F;
  font-weight:bold;
}
.hiddenInput{
  display: none;
}
.personal-data {
    width: 85%;
    margin-left: 8%;
}
.mu-input__focus {
    color: #e7e7e7;
}
</style>
