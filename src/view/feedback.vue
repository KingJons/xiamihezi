<template>
  <!-- 反馈与意见 -->
  <div>
    <div class="feedback-title">
      <span>反馈与意见</span>
    </div>
    <div class="content">
      <textarea v-model="text" type="text" class="content-text" placeholder="请输入您的反馈与意见(120字以内)" style="width:100%;height:255px;" />
    </div>
    <div :class="send? 'active':'send-btn'">
      <span>发送</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  components: {},
  data () {
    return {
      text: ''
    }
  },
  computed: {
    send () {
      var active = false
      if (this.text !== '') {
        active = true
      } else {
        active = false
      }
      return active
    }
  }
}
</script>

<style>
.feedback-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
}
textarea {
  resize:none;
  border: none;
  outline: none;
}
.content-text {
    font-size: 28px;
    padding-left: 24px;
    padding-top: 24px;
}
.send-btn {
    width: 93.6%;
    height: 88px;
    background: #B2B2B2;
    margin-left: 3.2%;
    margin-top: 20px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    border-radius: 8px;
}

.active {
    width: 93.6%;
    height: 88px;
    margin-left: 3.2%;
    margin-top: 20px;
    font-size: 36px;
    color: #fff;
    text-align: center;
    line-height: 88px;
    background: #76D672;
    border-radius: 8px;
}
</style>
