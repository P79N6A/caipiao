<template>
  <div class="bottom-wrap">
    <el-tabs class="box" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="follow" label="我的关注" name="first">
        <!-- <p>暂无关注用户</p> -->
        <ul class='my-watch'>
          <router-link to="/gd/originator">
            <li class='clearfix wdgz' v-for="(item,index) in copyList" :key="item.uid" v-show="showList">
              <div class='touxiang'>
                <img :src="'/api' + item.imageUrl" alt="" class='tx'>
                <img src="../../../assets/img/hg.png" class='hg' alt="">
              </div>
              <div class='userInfo'>
                <div><span class='username'>{{item.cnickname}}</span> <span
                    class='hit'>{{item.allnum}}中{{item.hitnum}}</span></div>
                <div><span>7日盈利率：<s>{{item.profit}}%</s></span><span>粉丝：<s>{{item.ifoucsnum}}</s></span></div>
              </div>
              <div class='delete' @click="clearAction(index)">
              </div>
            </li>
          </router-link>
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
</template>

<script>
  import myCustomized from './recordCustomized'
  import {
    copyFollowList,
    webFollowRecord
  } from '@/request/api'
  export default {
    components: {
      myCustomized
    },
    data() {
      return {
        activeName: 'first',
        copyList: [],
        followList: [],
        showList: true
      };
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      },
      clearAction(index) {
        let li_list = document.getElementsByClassName('my-watch').querySelectorAll('li');
        li_list(index).remove();
      }
    },
    created() {
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
  };

</script>

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
          background: url('../../../assets/img/gd/icon-clear.png') no-repeat center;
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
              background: url('../../../assets/img/gd/zuqiu.png') no-repeat;
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
              background: url('../../../assets/img/gd/jiantou.png') no-repeat;
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
