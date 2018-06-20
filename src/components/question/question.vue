<template>
  <transition name="slider-row">
    <div class="question">
    <mt-header fixed title="常见问题">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="con">
      <blank10></blank10>
      <ul>
        <li v-for="(item, index) in question" @click="selected(item)">
          <mt-cell :title="item.title" is-link></mt-cell>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
  </transition>
</template>

<script>
  import {Header, Cell} from 'mint-ui'
  import Blank10 from 'base/blank/blank10'
  import { questions } from 'common/js/question'

  export default{
    data () {
      return {
        question: questions.questions
      }
    },
    methods: {
      back () {
        return this.$router.go(-1);
      },
      selected (item) {
          this.$router.push({
            path: `/mine/question/${item.url}`
          })
      }
    },
    components: {
      Blank10
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .question {
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
      top: 42px;
      bottom: 0;
    }
  }
</style>
