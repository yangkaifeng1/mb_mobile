<template>
 <div class="about">
   <mt-header fixed title="关于">
     <mt-button icon="back" slot="left" @click="back"></mt-button>
   </mt-header>
   <div class="con">
     <blank10></blank10>
     <mt-cell title="公司简介" is-link to="/mine/about/companydes"></mt-cell>
     <mt-cell title="联系我们" is-link to="/mine/about/contact"></mt-cell>
     <blank10></blank10>
     <mt-cell title="版本" is-link></mt-cell>
   </div>
   <router-view></router-view>
 </div>
</template>

<script>
  import Blank10 from 'base/blank/blank10'

  export default{
    methods: {
      back () {
        return this.$router.go(-1);
      },
    },
    components: {
      Blank10
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .about {
    position: fixed;
    background: @color-background;
    z-index: 10;
    width: 100%;
    top: 0;
    bottom: 0;
    .mint-header {
      color: @color-text-f;
    }
    .con {
      position: absolute;
      width: 100%;
      top: 44px;
      bottom: 0;
    }
  }


</style>
