<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <!--<tabbar></tabbar>-->
  </div>
</template>

<script>
 import tabbar from 'components/tabbar/tabbar'

 export default {
     components: {
         tabbar
     }
 }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";

  #app{
    width: 100%;
    height: 100%;
    background: @color-background;
  }
</style>
