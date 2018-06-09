<template>
  <div class="company-des" @touchmove.prevent>
    <mt-header fixed title="公司简介">
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <scroll class="scroll-con">
      <div class="con">
        <p>
          满宝金服（ www.zjmb158.com)是由浙江满宝投资管理有限公司创立的互联网金融信息中介平台，即P2P信息平台，总部位于浙江杭州，注册资本5800万元人民币。成立伊始，便被中国电子商务协会信用管理委员会授予“中国互联网金融行业优秀示范企业”称号。
        </p>
        <p>
          2017年8月，满宝金服平台正式上线，同年12月，顺利获取ICP经营许可证。
        </p>
        <p>
          上线以来，平台相继与富友支付、阿里云等机构展开合作，并积极接洽银行存管事项。平台始终坚持合法合规运营，始终把安全放在首位。采用业界最先进的加密技术，对用户的注册信息、账户收支信息进行高强度加密处理，设立第三方资金托管，专户专款专用，严格隔离资金流。
        </p>
        <p>
          平台产品特点小额分散，资产类型多样化，包括实地走访、审核调查后的实地认证标，第三方机构信用担保的机构担保标，实物财产抵押的质押车贷标等，更有多种专属定制的增值服务。通过大数据智能化分析，为投资人精准匹配金融产品。
        </p>
        <p>
          公司秉承“大众创业、万众创新”的经营理念，以风险控制为核心，通过多方位的风控尽调及风险数据分析模型，实现完整的风险控制闭环，建立银行级风控体系。
        </p>
        <p>
          我们力致以诚信、创新、严谨、专业的态度，向借款人和出借人提供信息搜集、信息公布、信息交互、借贷撮合等优质服务，打造一个安全、透明、诚信、高效、极致体验的互联网金融服务平台，树立互联网金融行业新标杆，为有贷款需求和理财需求的客户提供专业、可靠的金融服务，帮助实现财富梦想。
        </p>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Blank10 from 'base/blank/blank10'
  import Scroll from 'base/scroll/scroll'

  export default{
    methods: {
      back () {
        return this.$router.go(-1);
      },
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

  .company-des {
    position: fixed;
    background: @color-background;
    z-index: 10;
    width: 100%;
    top: 0;
    bottom: 0;
    .mint-header {
      color: @color-text-f;
    }
    .scroll-con{
      position: absolute;
      width: 100%;
      top: 54px;
      bottom: 0;
      .con {
        background: @color-text-f;
        padding: 12px 16px;
        .blank10{
          background: @color-background;
        }
        p{
          text-indent: 2em;
          font-size: @font-size-medium;
          line-height: 26px;
          color: @color-text;
        }
      }

    }
  }
</style>
