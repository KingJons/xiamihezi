<template>
  <div class="hearder">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button slot="left" icon @click="open = !open">
        <mu-icon value="menu" />
      </mu-button>
      爱读

      <mu-button slot="right" flat>
        <mu-icon value="search" />
      </mu-button>
    </mu-appbar>

    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <router-link v-if="!userinfo" to="/">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="登陆">
              <mu-icon value="person_outline" />
            </mu-list-item-action>
            <mu-list-item-title>登陆</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link v-if="userinfo" to="/">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="个人中心">
              <mu-avatar>
                <img :src="userinfo.PicUrl">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>{{ userinfo.UsereName }}</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <mu-divider />
        <router-link to="/">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="阅读历史">
              <mu-icon value="import_contacts" />
            </mu-list-item-action>
            <mu-list-item-title>阅读历史</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link to="/">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="我的书架">
              <mu-icon value="local_library" />
            </mu-list-item-action>
            <mu-list-item-title>我的书架</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link to="/">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="分类">
              <mu-icon value="view_comfy" />
            </mu-list-item-action>
            <mu-list-item-title>查看分类</mu-list-item-title>
          </mu-list-item>
        </router-link>
        <router-link to="/">
          <mu-list-item button :ripple="false">
            <mu-list-item-action title="关于">
              <mu-icon value="priority_high" />
            </mu-list-item-action>
            <mu-list-item-title>关于</mu-list-item-title>
          </mu-list-item>
        </router-link>
      </mu-list>
    </mu-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      docked: false,
      open: false,
      position: 'left',
      userinfo: {}
    }
  },
  mounted () {
    // if (this.isEmptyProperty(localStorage.userInfo)) {
    //   this.userinfo = JSON.parse(localStorage.userInfo)
    // }

  }

}
</script>
