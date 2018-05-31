<template>
  <div class="invest-log">
    <mt-header fixed title="投资记录">
      <router-link to="/target" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
  import { Header } from  'mint-ui'

  export default{}
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";

  .invest-log{
    position:fixed;
    left:0;
    top:0;
    bottom: 0;
    right: 0;
    /*width: 100%;*/
    /*height: 100px;*/
    background: red;
  }
</style>
