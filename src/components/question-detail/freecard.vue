<template>
  <div class="freecard">
    <mt-header fixed title="解绑银行卡">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <div class="con">
      <blank10></blank10>
      <ul>
        <li class="que-item" v-for="(item, index) in question" @click="showcon(index)">
          <!--{{item}}-->
          <mt-cell :title="item.que" is-link></mt-cell>
          <div class="item-con" :class="{show: curIndex === index}">
            <ul>
              <li v-for="smitem in item.con">
                <span>{{smitem.rank}}</span>
                <p>{{smitem.del}}</p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Header, Cell} from 'mint-ui'
  import Blank10 from 'base/blank/blank10'
  import { questions } from 'common/js/question'

  export default{
    data () {
      return {
        clicked: false,
        curIndex: '',
        question: questions.questions[6].detail
      }
    },
    methods: {
      back () {
        return this.$router.go(-1);
      },
      showcon (index) {
        this.clicked = !this.clicked
        this.curIndex = index
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

  .freecard {
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
      .que-item{
        .item-con{
          padding: 0 20px 14px;
          background: @color-text-f;
          color: @color-text-l;
          font-size: @font-size-medium;
          line-height: 26px;
          display: none;
          &.show{
            display: block;
          }
          p{
            padding-left: 22px;
          }
          span{
            float: left;
          }
        }
      }
    }
  }
</style>
