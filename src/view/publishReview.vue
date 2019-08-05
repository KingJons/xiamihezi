<template>
  <div>
    <div class="publish-title">
      <span>发表追评
        <span class="publish">发表追评</span>
      </span>
    </div>
    <div class="goods-comments">
      <div class="goods-info">
        <img src="../img/goods.jpg" alt="" class="goods-pic">
        <span class="goods-name">TNN玻尿酸保湿补水蚕丝面膜玻尿酸保湿补...</span>
      </div>
      <div class="comments-content">
        <textarea type="text" class="content" placeholder="宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧" style="width:100%;height:205px;" />
        <div class="add-pic">
          <img src="../img/camera.png" alt="" class="camera">
          <span class="title">添加图片</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PublishComments',
  components: {},
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.publish-title {
    width: 100%;
    height: 128px;
    background: #21201F;
    font-size: 38px;
    color: #fff;
    line-height: 128px;
    text-align: center;
    position: relative;
}
.publish {
    font-size:32px;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    right: 27px;
}
.goods-comments {
    width: 100%;
    height:510px;
    background: #fff;
}
.goods-info {
    margin-left: 24px;
    height: 100px;
    /* float: left; */
    /* margin-top: 16px; */
}
.goods-pic {
    width: 68px;
    height: 68px;
    margin-top: 16px;
}
.goods-name {
    font-size: 28px;
    color: #333333;
    position: relative;
    top: -60px;
    margin-left: 88px;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.comments-content {
  width: 100%;
  height: 409px;
  background: #fff;
  border-top: 1px solid #E7E7E7;
  /* margin-top: 102px; */
}
textarea {
  resize:none;
  border: none;
  outline: none;
}
.content {
  font-size: 28px;
  padding-left: 24px;
  padding-top: 24px;
}
.add-pic {
  width: 162px;
  height: 162px;
  border: 1px dashed #E7E7E7;
  margin-left: 24px;
  position: relative;
  top: -230px;
}
.camera {
  width: 50px;
  height: 44px;
  margin-left: 57px;
  margin-top: 44px;
}
.title {
  font-size:22px;
  font-weight:400;
  color:rgba(207,207,209,1);
  line-height:44px;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}

</style>
