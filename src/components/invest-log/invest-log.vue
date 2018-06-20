<template>
  <transition name="slider">
    <div class="invest-log" @touchmove.prevent>
      <mt-header fixed title="投资记录">
        <router-link to="/mine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

        <div class="con">

              <div class="top" ref="topbanner">
                <div class="des">在投金额（元）</div>
                <div class="num">1000.00</div>
              </div>
              <mt-navbar v-model="selected" ref="navbar">
                <mt-tab-item id="1">待满标</mt-tab-item>
                <mt-tab-item id="2">待回款</mt-tab-item>
                <mt-tab-item id="3">已结束</mt-tab-item>
              </mt-navbar>
              <blank10></blank10>
          <scroll class="con-box"
                  :listenScroll="listenScroll"
                  :probeType="probeType"
                  @scroll="scroll"
                  ref="list">
            <div class="con-des">
              <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1" >
                  <ul>
                    <li class="item" v-for="(item, index) in 20" @click="selectItem(index)">
                      <invest-log-item></invest-log-item>
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
  import investLogItem from 'components/invest-log-item/invest-log-item'

  export default{
    data() {
      return {
        selected: '1',
        scrollY: 0
      };
    },
    created () {
      this.probeType = 3
      this.listenScroll = true
    },
    mounted () {
      this.topHeight = this.$refs.topbanner.clientHeight
    },
    methods: {
      scroll (pos) {
        this.scrollY = pos.y
        this.$refs.topbanner.style.height = `${this.topHeight + this.scrollY}px`
        if(this.scrollY <= -140) {
          this.$refs.topbanner.style.height = "0px"
        }
      }
    },
    components: {
      Blank10,
      Scroll,
      investLogItem
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .invest-log{
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
        .con-des{;
          padding-bottom: 50px;
          .log-box{
            background: @color-text-f;

          }
        }

      }

    }

  }

  .slider-enter-active, .slider-leave-active{
    transition: all .3s
  }
  .slider-enter, .slider-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
