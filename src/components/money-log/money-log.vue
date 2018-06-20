<template>
  <transition name="slider-row">
    <div class="money-log" @scroll.prevent>
      <mt-header fixed title="资金记录">
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

        <div class="con">
          <scroll class="con-box">
            <div class="con-des">
              <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1" >
                  <ul>
                    <li class="item" v-for="(item, index) in 20">
                      <money-log-item></money-log-item>
                    </li>
                    <div class="spinner">
                      <mt-spinner type="triple-bounce" color="#F29200"></mt-spinner>
                    </div>
                  </ul>

                </mt-tab-container-item>


              </mt-tab-container>
            </div>

          </scroll>
        </div>
    </div>
  </transition>
</template>

<script>
  import { Header, Navbar, TabItem, TabContainer, TabContainerItem } from  'mint-ui'
  import Blank10 from 'base/blank/blank10'
  import Scroll from 'base/scroll/scroll'
  import moneyLogItem from 'components/money-log-item/money-log-item'

  export default{
    data() {
      return {
        selected: '1'
      };
    },
    created () {
    },
    methods: {
    },
    components: {
      Blank10,
      Scroll,
      moneyLogItem
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .money-log{
    position:fixed;
    top:0;
    bottom: 0;
    width: 100%;
    z-index: 10;
    background: @color-background;
    .con{
      position: absolute;
      width: 100%;
      top: 42px;
      bottom: 0;
      .top{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 140px;
        width: 100%;
        background: @color-theme;
        color: @color-text-f;
        .des{
          font-size: @font-size-small;
          line-height: 17px;
          margin-bottom: 3px;
        }
        .num{
          font-size: @font-size-large-xll;
          line-height: 42px;
        }
      }
      .con-box{
        overflow: hidden;
        height: 100%;
        margin-bottom: 57px;
        .con-des{
          .log-box{
            background: @color-text-f;

          }
        }

      }

    }

  }

  /*.slider-enter-active, .slider-leave-active{*/
    /*transition: all .3s*/
  /*}*/
  /*.slider-enter, .slider-leave-to{*/
    /*transform: translate3d(100%, 0, 0);*/
  /*}*/
</style>
