<template>
  <div id="wdzj">
    <div class="top">
      <!-- 头部 -->
      <header class="header">
        <i class="msg-icon" @click="backAction"></i>
        <h1>我的战绩</h1>
      </header>
      <!-- 用户信息 -->
      <div class='info'>
        <div class='logo'>
          <img :src="'/api' + infList.imageUrl" alt="">
        </div>
        <ul class="userTit">
          <li v-for="item in infList.usertitles">{{item.usertitle}}</li>
          <!-- <li>7连红</li>
          <li>9连红</li>
          <li>牛人榜第一</li>
          <li>推荐大神</li> -->
        </ul>
        <p class='name'>{{infList.cnickname}}</p>
        <p class='desc'>
          <span class='fans'>粉丝:{{infList.ifoucsnum}}</span>
          <span class='att'>关注:{{infList.fsum}}</span>
        </p>
        <p class='money clearfix'>
          <span style='float: left'>累计发单中奖：<span class='yellow fd'>{{infList.icopyaward}}</span>元</span>
          <span style='float: right'>累计跟单中奖：<span class='yellow zj'>{{infList.iaward}}</span>元</span>
        </p>
      </div>
    </div>
    <!-- 近期战绩 -->
    <div class='content'>
      <div class='per-box'>
        <img src="../../assets/img/gd/2.png" alt="">
        <!-- <div class='res'>
                <p><span class='red'>120%</span> <span class='red'>108%</span> <span class='red'>9中7</span></p>
                <p><span>7日盈利</span><span>30日盈利</span><span>7日命中</span></p>
            </div> -->
        <ul class='res'>
          <li>
            <p class='red week'>{{infList.avgreturn}}%</p>
            <p>7日盈利</p>
          </li>
          <li>
            <p class='red month'>{{infList.avgreturnmonth}}%</p>
            <p>30日盈利</p>
          </li>
          <li>
            <p class='red hit'>{{infList.allnum}}中{{infList.hitnum}}</p>
            <p>7日命中</p>
          </li>
        </ul>
      </div>
      <div class='near-box'>
        <span>近5期</span>
        <ul class='fnow'>
          <li class="white">中</li>
          <li class="white">中</li>
          <li class="white">中</li>
          <li class="white">中</li>
          <li class="white">中</li>
        </ul>
      </div>
    </div>
    <!-- <recordBottom /> -->
    <div class="bottom-wrap">
        <el-tabs class="box" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane class="follow" label="我的关注" name="first">
            <ul class='my-watch'>
                <li class='clearfix wdgz' v-for="(item2,index) in copyList" :key="item2.uid" v-show="showList" @click="toAction">
                  <div class='touxiang'>
                    <img :src="'/api' + item2.imageUrl" alt="" class='tx'>
                    <img src="../../assets/img/hg.png" class='hg' alt="">
                  </div>
                  <div class='userInfo'>
                    <div><span class='username'>{{item2.cnickname}}</span> <span
                        class='hit'>{{item2.allnum}}中{{item2.hitnum}}</span></div>
                    <div><span>7日盈利率：<s>{{item2 .profit}}%</s></span><span>粉丝：<s>{{item2.ifoucsnum}}</s></span></div>
                  </div>
                  <div class='delete' @click.stop="clearAction(index)">
                  </div>
                </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane class="customized" label="我的定制" name="second">
            <myCustomized />
          </el-tab-pane>
          <el-tab-pane class="documentary" label="我的跟单" name="third">
            <ul class="my-copy">
              <router-link to="/gd/gdxq">
              <li class='wdgd clearfix' style='height:1.5rem;padding:0' v-for="item3 in followList">
                <span class='time'>7月08</span>
                <div class='record  clearfix'>
                  <div class='rename'>
                    <p><em></em>跟单<s>{{item3.money}}</s>元</p>
                    <p>发单人：{{item3.cnickname}}</p>
                  </div>
                  <span class='usercode' v-if="item3.winMoney === 0">{{item3.result}}<i></i></span>
                  <span class='usercode' v-if="item3.winMoney !== 0"style="color: #d81d36">{{item3.result}}{{item3.winMoney}}元<i></i></span>
                </div>
              </li>
            </router-link>
            </ul>
          </el-tab-pane>
          <el-tab-pane class="programme" label="我的方案" name="fourth">
            <p>暂无数据</p>
          </el-tab-pane>
        </el-tabs>
      </div>
    
  </div>
</template>

<script>
    import myCustomized from './components//recordCustomized'
  import recordBottom from './components/myRecordBottom'
  import {
    myrecord,
    copyFollowList,
    webFollowRecord
  } from '@/request/api'
  export default {
    components: {
      recordBottom,
      myCustomized
      
    },
    data() {
      return {
        infList: [],
        activeName: 'second',
        copyList: [],
        followList: [],
        showList: true
      }
    },
    methods: {
      backAction() {
        this.$router.push('/gd');
      },
      handleClick(tab, event) {
        //console.log(tab, event);
      },
      toAction() {
        this.$router.push('/gd/originator')
      },
      clearAction(index) {
        console.log('点击了')
        this.copyList.splice(index, 1);
      }

    },
    created() {
      myrecord().then(res => {
        this.infList = res.Resp.row;
        console.log(this.infList)
      }),
      copyFollowList({
        'pn': 1,
        'ps': 10
      }).then(res => {
        this.copyList = res.Resp.rows.row
        //console.log(res)
      }),
      webFollowRecord({
        'fid': 'w_gd_all',
        'pn': 1,
        'ps': 10
      }).then( res => {
        console.log(res)
        this.followList = res.Resp.rows.row
      })

    }
  }

</script>

<style lang="scss" scoped>
  .top {
    width: 100%;
    height: 6.15rem;
    display: block;
    background: url('../../assets/img/1.jpg') no-repeat;
    background-size: 100% 6.15rem;
    font-size: 0.16rem;

    .header {
      width: 100%;
      height: .88rem;
      position: relative;
      top: 0;
      bottom: 0;

      h1 {
        line-height: .88rem;
        text-align: center;
        font-size: 0.3rem;
        font-weight: bold;
        color: #fff;
      }

      .msg-icon {
        position: absolute;
        top: .32rem;
        left: .4rem;
        width: 0.36rem;
        height: 0.36rem;
        background: url('../../assets/img/gd/fh2.png');
        background-size: contain;
      }
    }

    .info {
      height: 5.4rem;
      width: 100%;
      position: relative;
      overflow: hidden;

      .logo img{
        width: 1.24rem;
        height: 1.2rem;
        border: 3px solid #fff;
        border-radius: 50%;
        box-sizing: border-box;
        margin-left: 3.2rem;
        margin-top: 1.2rem;
        overflow: hidden;
        /* background: url('../../assets/img/gd/hongren.png') no-repeat;
        background-size: 110%;
        background-position: center; */
      }

      .userTit {
        display: block;
        position: relative;

        li {
          position: absolute;
          text-align: center;
          border-radius: 50%;
          box-sizing: border-box;
          border: 0.05rem solid rgba(185, 197, 238, 0.15);
          background: rgba(255, 255, 255, 0.08);
          color: #b9c5ee;
          line-height:100%
        }

        li:nth-child(1) {
          width: 0.8rem;
          height: 0.8rem;
          font-size: 0.22rem;
          top: -0.05rem;
          right: 1.84rem;
          padding-top: 1%;
        }

        li:nth-child(2) {
          width: 1.02rem;
          height: 1.02rem;
          font-size: 0.24rem;
          top: -1.25rem;
          right: 1.6rem;
          padding-top: 2%;
          padding-left: 1%;
          padding-right: 1%;
        }

        li:nth-child(3) {
          width: 0.98rem;
          height: 0.98rem;
          font-size: 0.24rem;
          top: -2.3rem;
          right: 2.52rem;
          padding-top: 2%;
          padding-left: 1.5%;
          padding-right: 1.5%;
        }

        li:nth-child(4) {
          width: 0.98rem;
          height: 0.98rem;
          font-size: 0.24rem;
          top: -2.3rem;
          left: 2.52rem;
          padding-top: 2%;
          padding-left: 1.5%;
          padding-right: 1.5%;
        }

        li:nth-child(5) {
          width: 1.02rem;
          height: 1.02rem;
          font-size: 0.24rem;
          top: -1.25rem;
          left: 1.6rem;
          padding-top: 3%;
          padding-left: 1%;
          padding-right: 1%;
        }
      }

      .name {
        text-align: center;
        font-size: 0.3rem;
        color: #fff;
        margin-top: 0.32rem;
        margin-bottom: 0.2rem;
      }

      .desc {
        span {
          padding: 0 0.15rem;
          font-size: 0.22rem;
          color: #9bc5ee;
        }

        .fans {
          border-right: 2px solid #9bc5ee;
          margin-left: 2.75rem;
        }
      }

      .money {
        width: 95%;
        height: 0.42rem;
        text-align: center;
        background: #3c4564;
        margin: 0 auto;
        margin-top: 0.64rem;
        line-height: 0.42rem;
        font-size: 0.22rem;
        color: #b9c5ee;
        box-sizing: border-box;
        padding: 0 0.1rem;

        .yellow {
          margin: 0 0.05rem;
          color: #fcff00;
        }
      }
    }

  }

  .content {
    .per-box {
      font-size: 0.32rem;
      color: #d81d36;
      font-weight: bold;
      padding: 0.23rem 0 0.12rem 0;
      border-bottom: 2px solid #ccc;
      zoom: 1;

      img {
        padding: 0 0.22rem 0 0.22rem;
        float: left;
        border-right: 1px solid #ccc;
        width: 1.28rem;
      }

      .res {
        margin-left: .38rem;
        overflow: hidden;
        padding-left: 0.38rem;
        box-sizing: border-box;

        .red {
          font-size: 0.32rem;
          color: #d81d36;
          font-weight: bold;
          margin-top: 0.15rem;
          margin-bottom: 0.1rem;
          text-align: center;
        }

        li {
          float: left;

          p:nth-child(2) {
            font-size: 0.26rem;
            color: #333;
            font-weight: normal;
          }
        }

        li:nth-child(2) {
          margin-left: 0.95rem;
        }

        li:nth-child(3) {
          margin-left: 0.96rem;
        }
      }
    }

    .near-box {
      zoom: 1;
      height: 1.18rem;
      border-bottom: 0.2rem solid rgb(238, 238, 238);

      span {
        font-size: 0.28rem;
        color: #333;
        margin-left: 0.32rem;
        margin-top: 0.4rem;
        margin-bottom: 0.5rem;
        float: left;
      }

      ul {
        overflow: hidden;
        /* box-sizing:border-box; */
        padding-left: 0.76rem;
        padding-top: 0.36rem;
        height: 0.52rem;

        li {
          float: left;
          font-size: 0.26rem;
          color: #fff;
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.45rem;
          border: 3px solid #f66;
          border-radius: 50%;
          box-sizing: border-box;
          background: #f66;
          margin-right: 0.62rem;
          position: relative;
          line-height: 0.4rem;
        }

        li::after {
          content: '';
          width: 0.7rem;
          height: 1px;
          position: absolute;
          background: #eee;
          top: 0.22rem;
          left: 0.5rem;
        }

        li:nth-child(5)::after {
          background: none;
        }

        .white {
          float: left;
          font-size: 0.26rem;
          color: #fff;
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.45rem;
          border: 1px solid #EEEEEE;
          border-radius: 50%;
          box-sizing: border-box;
          background: #FFFFFF !important;
          margin-right: 0.62rem;
          position: relative;
        }
      }
    }
  }

</style>

<style lang="scss" scoped>
    .follow {
      p {
        text-align: center;
        font-size: 0.3rem;
      }
  
      .my-watch {
        width: 100%;
        overflow-x: hidden;
        font-size: 0.3rem;
        text-align: center;
  
        .wdgz {
          height: 1.6rem;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid #eee;
  
          .touxiang {
            position: relative;
            margin-top: 0.43rem;
            float: left;
            width: 0.88rem;
            height: 0.88rem;
            margin-left: 0.32rem;
  
            .tx {
              float: left;
              width: 0.88rem;
              height: 0.88rem;
              box-sizing: border-box;
              border: 1px solid #ccc;
              border-radius: 50%;
              overflow: hidden;
            }
  
            .hg {
              position: absolute;
              top: -0.17rem;
              left: 0.6rem;
              width: 0.4rem;
            }
          }
  
          .userInfo {
            float: left;
            font-size: 0.2rem;
            margin-left: 0.3rem;
            margin-top: 0.55rem;
  
            div {
              height: 0.4rem;
            }
  
            div:nth-child(1) {
              margin-top: -0.1rem;
              margin-bottom: 0.1rem;
            }
  
            div:nth-child(2) {
              font-size: 0.24rem;
              color: #666;
            }
  
            s {
              font-style: normal;
              color: #d81d36;
              text-decoration: none;
              margin-right: 0.3rem;
            }
  
            span {
              display: block;
              float: left;
              height: 0.3rem;
              line-height: 0.3rem;
            }
  
            .username {
              font-size: 0.26rem;
              color: #333;
  
            }
  
            .hit {
              color: #d81d36;
              margin-left: 0.2rem;
              font-size: 0.2rem;
              background: #fee4e8;
              border-radius: 0.13rem;
              text-align: center;
              padding: 0 0.1rem;
            }
  
          }
  
          .gd {
            float: right;
            margin-top: 0.5rem;
            width: 1.63rem;
            height: 0.48rem;
            box-sizing: border-box;
            border: 1px solid #d81d36;
            color: #d81d36;
            font-size: 0.26rem;
            text-align: center;
            line-height: 0.48rem;
            border-radius: 0.24rem;
            position: relative;
            margin-right: 0.2rem;
  
            div {
              position: absolute;
              height: 0.4rem;
              width: 0.4rem;
              box-sizing: border-box;
              text-align: center;
              line-height: 0.4rem;
              background: #d81d36;
              color: #fff;
              top: -0.24rem;
              right: 0.1rem;
              border-radius: 50%;
              font-size: 0.22rem;
            }
          }
  
          .delete {
            float: right;
            height: 1.6rem;
            width: 1.5rem;
            background: url('../../assets/img/gd/icon-clear.png') no-repeat center;
            background-size: 0.4rem 0.4rem;
            z-index: 999999;
          }
        }
      }
    }
  
    .documentary {
      .my-copy {
        width: 100%;
        font-size: 0.3rem;
        text-align: center;
  
        .wdgd {
          height: 1.6rem;
          width: 100%;
          box-sizing: border-box;
          border-bottom: 1px solid #eee;
  
          .time {
            width: 1rem;
            height: 0.88rem;
            font-size: 0.3rem;
            float: left;
            line-height: 0.4rem;
            color: #666;
            padding-left: 0.34rem;
            padding-top: 0.3rem;
            box-sizing: border-box;
          }
  
  
          .record {
            overflow: hidden;
            height: 100%;
            padding: 0.28rem 0.32rem 0.28rem 0.32rem;
            box-sizing: border-box;
  
            // border-bottom:1px solid #ccc;
            .rename {
              float: left;
              // line-height:0.5rem;
              // margin-left:0.4rem;
              font-size: 0.26rem;
  
              p:nth-child(1) {
                color: #999;
                padding-left: 0.58rem;
                position: relative;
                line-height: 0.3rem;
                text-align: left;
              }
  
              p:nth-child(2) {
                color: #666;
                line-height: 0.3rem;
                margin-top: 0.28rem;
              }
  
              p:nth-child(2) span {
                margin-right: 0.1rem;
              }
  
              em {
                font-style: none;
                width: 0.35rem;
                position: absolute;
                top: 0;
                left: 0;
                height: 0.33rem;
                background: url('../../assets/img/gd/zuqiu.png') no-repeat;
                background-size: 100%;
              }
  
              s {
                font-size: 0.24rem;
                color: #d81d36;
                text-decoration: none;
              }
  
            }
  
            .usercode {
              margin-top: .3rem;
              color: #999;
              font-size: 0.26rem;
              position: relative;
              float: right;
              margin-right: 0.6rem;
  
              i {
                font-style: none;
                position: absolute;
                width: 0.2rem;
                height: 0.32rem;
                background: url('../../assets/img/gd/jiantou.png') no-repeat;
                background-size: 100%;
                top: .02rem;
                right: -0.55rem;
              }
            }
          }
        }
  
      }
  
    }
  
    .programme {
      p {
        display: block;
        text-align: center;
        font-size: .3rem;
      }
    }
  
  </style>
  
  <style>
    .el-tabs__nav-scroll {
      overflow: hidden;
    }
  
    .el-tabs__active-bar {
      background-color: #d81d36;
      /* margin: 0 .5rem; */
    }
  
    .el-tabs__nav {
      width: 100%;
      margin: 0 .3rem;
    }
  
    .el-tabs__item.is-active {
      color: #000;
    }
  
    .el-tabs__item,
    .is-top,
    .is-active {
      color: #000;
    }
  
    .el-tabs__header {
      margin: 0;
    }
  
  </style>
  
  <style scoped>
  </style>
  