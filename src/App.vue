<template>
  <div id="app">
    <!-- <hearder></hearder> -->
    <router-view />
  </div>
</template>

<script>
// import hearder from '@/components/hearder'
export default {
  name: 'App'
  // components: {
  //   hearder
  // }
}
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
  background-color:#F6F6F6;
  margin: 0;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
// html {
//   font-size:62.5%
// }
 body {font:normal 100% Arial,sans-serif;font-size:14px; font-size:1.4rem; }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
.container {
  margin-bottom: 4.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
