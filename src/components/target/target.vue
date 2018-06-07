<template>
  <div class="target">
    <div ref="targetpar">
      <mt-header title="项目" fixed></mt-header>
      <div class="target-con">
        <mt-navbar>
          <mt-tab-item id="1">类型</mt-tab-item>
          <mt-tab-item id="2">期限</mt-tab-item>
          <mt-tab-item id="3">年化</mt-tab-item>
        </mt-navbar>
        <blank10></blank10>
        <div class="target-list">
          <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="80">
            <li class="item" v-for="(item, index) in list" @click="selectItem(index)">
              <target-item></target-item>
            </li>
            <div class="spinner">
              <mt-spinner type="triple-bounce" color="#F29200"></mt-spinner>
            </div>
            <div></div>
          </ul>

        </div>
      </div>
      <tabbar></tabbar>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
//  import { Header, Navbar, TabItem, Spinner } from 'mint-ui'
  import targetItem from 'components/target-item/target-item'
  import tabbar from 'components/tabbar/tabbar'
  import blank10 from 'base/blank/blank10'

  export default{
    data () {
        return {
            loading: false,
            list: [1,2,3,4,5,6,7,8,9,10]
        }
    },
    methods : {
      selectItem (id) {
        this.$router.push ({
          path: `/target/${id}`
        })
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }

    },

    components: {
      targetItem,
      tabbar,
      blank10
    }
  }
</script>

<style lang="less" scoped>
  .target{
    .target-con{
      margin: 44px 0 47px;
      .spinner{
        height: 30px;
        position: relative;
      }
    }
  }


</style>
