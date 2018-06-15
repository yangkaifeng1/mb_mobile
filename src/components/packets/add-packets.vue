<template>
  <div class="packets">
    <mt-header fixed title="我的红包">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  import {Header} from 'mint-ui'
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

</style>
