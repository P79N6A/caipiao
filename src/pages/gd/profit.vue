<template>
  <div id="profit">
    <header class="header">
      <span class="msg-icon" @click="backAction"></span>
      <nav class="title">
          <el-tabs class="box" v-model="activeName">
              <el-tab-pane class="hit" label="命中榜" name="first">
                  <hit-user />
              </el-tab-pane>
              <el-tab-pane class="return" label="盈利榜" name="second">
                  <return-user />
              </el-tab-pane>
            </el-tabs>
      </nav>
    </header>
  </div>
</template>

<script>
  import {
    hotprofitList
  } from '@/request/api';
  import hitUser from './components/hituserlist';
  import returnUser from './components/returnuserlist';
  export default {
    data() {
      return {
        titleList: [{
          title: '命中榜'
        }, {
          title: '盈利榜'
        }],
        profitList: [],
        showHit: true,
        showReturn: false,
        selectIndex: 0,
        activeName: 'first'
      }
    },
    metaInfo: {
      title: '热门榜单'
  	},
    components: {
      hitUser,
      returnUser
    },
    methods: {
      backAction() {
        this.$router.push('/gd');
      },
      changeIndex(index) {
        this.selectIndex = index;
        this.currentView = index;
      }
    },
    created() {
      hotprofitList().then(res => {
        this.profitList = res;
      })
    }
  }

</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: .88rem;
    position: relative;
    top: 0;
    bottom: 0;
    border-bottom: 1px solid #EEEEEE;

    .msg-icon {
      position: absolute;
      top: .32rem;
      left: .4rem;
      width: 0.36rem;
      height: 0.36rem;
      background: url('../../assets/img/gd/back.png');
      background-size: contain;
      z-index: 99;
    }

    .title {
      width: 100%;
      margin: 0 auto;
      height: 100%;
      ul {
        width: 100%;
        height: 100%;
        li {
          line-height: .88rem;
          text-align: center;
          font-size: 0.38rem;
          font-family: '宋体';
          font-weight: 700;
          color: #999999;
          float: left;
 
        }
        li:nth-of-type(1) {
          margin-right: 1.2rem;
        }
      }
    }
  }
  .active {
            color: #000000;
            border-bottom: 2px solid #d81d36;
          }

  .list {
    position: relative;
    border-bottom: 1px solid #EEEEEE;

    .clearfix:after {
      content: '';
      display: block;
      clear: both;
      height: 0;
      visibility: hidden;
    }

    .list_t {
      padding: 0.28rem 0.4rem 0.28rem 0.32rem;
      width: 100%;
      height: 1.4rem;
      box-sizing: border-box;

      #content_l {
        float: left;
        width: 0.86rem;
        height: 0.86rem;
        box-sizing: border-box;

        .crow {
          width: 0.4rem;
          height: 0.36rem;
          position: absolute;
          top: 0.04rem;
          left: 0.9rem;
          background: url('../../assets/img/hg.png') no-repeat;
          background-size: cover;
        }

        img {
          width: 0.86rem;
          height: 0.86rem;
          border-radius: 50%;
          vertical-align: top;
        }
      }

      #content_l1 {
        float: left;
        height: 0.86rem;
        margin-left: 0.2rem;

        span {
          display: inline-block;
          text-align: center;
          vertical-align: text-top;
          font-size: 0.24rem;
          line-height: 0.24rem;
        }

        p {
          height: 0.6rem;

          span {
            font-size: 0.26rem;
            line-height: 0.26rem;
            margin-top: 0.08rem;
            margin-bottom: 0.25rem;

            i {
              font-style: normal;
            }
          }

          span:nth-of-type(2) {
            display: inline-block;
            width: 1rem;
            height: 0.3rem;
            margin: 0;
            color: #d81d36;
            margin-top: 0.08rem;
            margin-left: 0.2rem;
            background-color: #fee4e8;
            border-radius: 50px;
          }
        }

        .org {
          color: #666666;

          .red {
            color: #d81d36;
            font-style: normal;
            font-weight: normal;
          }
        }
      }

      #btn1 {
        width: 1.12rem;
        height: 0.48rem;
        float: right;
        border-radius: 50px;
        border: 1px solid #d81d36;
        background-color: #FFFFFF;
        color: #d81d36;
        margin-top: 0.22rem;
      }

      .cirl {
        position: absolute;
        display: block;
        width: 0.3rem;
        height: 0.3rem;
        top: 0.4rem;
        right: 0.3rem;
        background-color: #d81d36;
        border-radius: 50%;
        font-size: 0.22rem;
        color: #FFFFFF;
        text-align: center;
        line-height: 0.3rem;
      }
    }

  }

</style>

<style lang="scss">
  .el-tabs__header {
    width: 100%;
    height: 100%;
    padding: 0;
    position: relative;
    margin-bottom: 0.1rem;
  }
  /* .el-tabs__nav-wrap {
    overflow: hidden;
    height: 100%;
    margin-bottom: 0;
    position: relative;
} */
  /* .el-tabs__nav-scroll{
    overflow: hidden;
  } */
  .el-tabs__active-bar{
    background-color: #d81d36;
    /* margin: 0 .5rem; */
  }
  
  .el-tabs__nav{
    height: 100%;
    margin-left: 2rem;
  }
  /* .el-tabs, .box, .el-tabs--top {
    width: 100%;
  } */
  .el-tabs__item{
    color: #999;
    font-size: 0.38rem;
    font-family: '宋体';
    font-weight: 700;
    text-align: center;
    line-height: 0.88rem;
    /* margin-left: 1.16rem; */
  }
  .el-tabs__item.is-active{
    color: #000;
    /* margin-right: .2rem; */
    height: 100%;
  } 
  .el-tabs__nav-wrap::after{
    background-color: #fff;
  }
</style>
