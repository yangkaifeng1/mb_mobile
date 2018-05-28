<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home_page">
        <img slot="icon" src="../../components/tabbar/image/home_page.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="touzi">
        <img slot="icon" src="../../components/tabbar/image/touzi.png">
        投资
      </mt-tab-item>
      <mt-tab-item id="fuli">
        <img slot="icon" src="../../components/tabbar/image/fuli.png">
        福利
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../../components/tabbar/image/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';

  export default{
    data() {
      return {
        selected: 'home_page'
      };
    }
  }
</script>

<style class="less" scoped>

</style>
