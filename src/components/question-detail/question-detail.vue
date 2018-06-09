<template>
  <div class="question-detail" @touchmove.prevent>
    <mt-header fixed :title="title">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <scroll class="scroll" ref="scroll">
      <div class="con">
        <ul>
          <li class="que-item" v-for="(item, index) in question" @click="showcon(index)">
            <!--{{item}}-->
            <mt-cell :title="item.que" is-link :class="{nowrap: curIndex !== index}"></mt-cell>
            <div class="item-con" :class="{show: curIndex === index}">
              <ul>
                <li v-for="smitem in item.con">

                  <span>{{smitem.rank}}</span>
                  <p>{{smitem.del}}</p>
                  <div class="table-box" v-show="smitem.bank">
                    <div class="table-item">
                      <div class="item-cell">
                        <div>工商银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95888</div>
                        <div>每月限额<span>5万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>农业银行</div>
                        <div>单笔限额<span>——</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>——</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95599</div>
                        <div>每月限额<span>——</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>中国银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>10万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95566</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>建设银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>10万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95533</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>邮政储蓄银行</div>
                        <div>单笔限额<span>5000元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5000元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：11185</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>平安银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95511</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>光大银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95888</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>广发银行</div>
                        <div>单笔限额<span>10万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>20万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95508</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>中信银行</div>
                        <div>单笔限额<span>1000元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>1000元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95558</div>
                        <div>每月限额<span>2000元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>兴业银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95561</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>华夏银行</div>
                        <div>单笔限额<span>1000元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5000元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95577</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>招商银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95555</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>浦发银行</div>
                        <div>单笔限额<span>10万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>20万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95528</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>交通银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95559</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                    <div class="table-item">
                      <div class="item-cell">
                        <div>上海银行</div>
                        <div>单笔限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div></div>
                        <div>每日限额<span>5万元</span></div>
                      </div>
                      <div class="item-cell">
                        <div>热线电话：95594</div>
                        <div>每月限额<span>100万元</span></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
  import {Header, Cell} from 'mint-ui'
  import Blank10 from 'base/blank/blank10'
  import Scroll from 'base/scroll/scroll'
  import { questions } from 'common/js/question'

  export default{
    data () {
      return {
        clicked: false,
        curIndex: '',
        question: '',
        title: '',
        speItem: false
      }
    },
    computed: {

    },
    created () {
      let index =  this.getQuestion()
      this.title = questions.questions[index].title
      this.question = questions.questions[index].detail
    },
    methods: {
      getQuestion () {
        let pageUrl = this.$route.params.url
        let list = questions.questions
        return list.findIndex((item) => {
          return item.url === pageUrl
        })
      },
      back () {
        return this.$router.go(-1);
      },
      showcon (index) {
        this.clicked = !this.clicked
        this.curIndex = index
        this.$nextTick(function () {
          this.$refs.scroll.refresh()
          }
        )
      }
    },
    components: {
      Blank10,
      Scroll
    }
  }
</script>

<style lang="less" scoped>
  @import "~common/style/variable.less";
  @import "~common/style/mixin.less";

  .question-detail {
    position: fixed;
    background: @color-background;
    z-index: 10;
    width: 100%;
    top: 0;
    bottom: 0;
    .mint-header {
      color: @color-text-f;
    }
    .scroll{
      position: absolute;
      width: 100%;
      top: 54px;
      bottom: 0;
      .con {
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
            .table-box{
              .table-item{
                display: flex;
                font-size: @font-size-small;
                padding: 9px 10px;
                border: 1px solid @color-d2;
                border-bottom: 0;
                &:last-child{
                  border-bottom: 1px solid @color-d2;
                }
                .item-cell{
                  flex: 1;
                  div{
                    height: 26px;
                  }
                  span{
                    float: none;
                    color: @color-theme;
                  }
                }
              }
            }
          }
        }
      }
    }

  }
</style>
