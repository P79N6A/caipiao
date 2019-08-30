<template>
  <div class="originator">
    <div class="top">
      <!-- 头部 -->
      <header class="header">
        <i class="msg-icon" @click="backAction"></i>
        <h1>{{deailList.cnickname}}</h1>
      </header>
      <!-- 用户信息 -->
      <div class='info'>
        <div class='logo'>
          <img :src="'/api'+deailList.imageUrl" alt="">
        </div>
        <ul class="userTit" style="display: block;">
          <!-- <li v-for="value in deailList.usertitles">{{value.usertitle}}</li> -->
          <li>{{deailList.usertitles.usertitle}}</li>
        </ul>
        <p class='name'>{{deailList.cnickname}}</p>
        <p class='desc'>
          <span class='fans'>粉丝:{{deailList.ifoucsnum}}</span>
          <span class='att'>关注:{{deailList.fsum}}</span>
        </p>
        <p class='money clearfix'>
          <span style='float: left'>累计发单中奖：<span class='yellow fd'>{{deailList.icopyaward}}</span>元</span>
          <span style='float: right'>累计跟单中奖：<span class='yellow zj'>{{deailList.iaward}}</span>元</span>
        </p>
      </div>
    </div>
    <!-- 近期战绩 -->
    <div class='content'>
      <div class='per-box'>
        <img src="../../assets/img/gd/2.png" alt="">
        <ul class='res'>
          <li>
            <p class='red week'>{{deailList.avgreturn}}%</p>
            <p>7日盈利</p>
          </li>
          <li>
            <p class='red month'>{{deailList.avgreturnmonth}}%</p>
            <p>30日盈利</p>
          </li>
          <li>
            <p class='red hit'>{{deailList.allnum}}中{{deailList.hitnum}}</p>
            <p>7日命中</p>
          </li>
        </ul>
      </div>
      <div class='near-box'>
        <span>近5期</span>
        <ul class="fnow" >
          <li v-for="(value, index) in ismoneyList" :key="value.period" :class="value.ismoney!=1 ? '' : 'nohit'">
          </li>
        </ul>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list-wrap">
      <div class="infos">
        <ul class="every">
          <router-link to='/gd/gdxq'>
            <li class="gditem" data-gid="70" data-projid="CP70150747454" data-iupload="1" v-for="item in userList"
              :key="item.projid">
              <div class="aticle">
                <div class="aticle_t"><img src="../../assets/img/gd/zuqiu.png"><span>{{item.league}}</span><span
                    class="jiezhi">截止</span><span class="shijian">{{item.cendtime}}</span></div>
                <div class="aticle_z">{{item.note}}</div>
                <div class="aticle_x">
                  <div class="div1">
                    <p>1.52<span>倍</span></p>
                    <p>预计回报</p>
                  </div>
                  <div class="div2">
                    <p>{{item.money}}<span>元</span></p>
                    <p>自购金额</p>
                  </div>
                  <div class="div3">
                    <p>{{item.canCopyNum}}<span>人</span></p>
                    <p>跟单人数</p>
                  </div>
                  <p v-if="item.isover != 0" class="ykj_2">
                    <span>¥{{item.winMoney}}</span>
                  </p>
                  <input v-if="item.isover == 0" type="button" class="btn1" id="btn1" value="立即跟单">
                </div>
              </div>
            </li>
          </router-link>
        </ul>
      </div>

    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="foot_left">
        <img src="../../assets/img/gd/fot3.png" />
        <span class="guanzhu red">关注</span>
      </div>
      <!-- <div class="foot_left" v-else="showWgz">
          <img src="../../assets/img/gd/fot1.png" />
          <span class="guanzhu red">已关注</span>
        </div> -->
      <router-link to="/gd/dzgd">
        <div class="foot_right">
          <img src="../../assets/img/gd/fot4.png" />
          <span class="dzgd">定制跟单</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    followUserDetail,
    userInfo,
    myrecord
  } from '@/request/api';
  export default {
    data() {
      return {
        deailList: [],
        userList: [],
        ismoneyList: [],
        showWgz: true,

        userUid: '',
        userInfo: new Object()
      }
    },
    metaInfo: {
      title: '发单人详情'
  	},
    methods: {
      backAction() {
        this.$router.push('/gd');
      }
    },
    created() {
      console.log(this.$route.params)
      //用户详情
      userInfo({
        "fid": "u_ainfo"
      }).then(res => {
        //console.log(res)
        this.userUid = res.Resp.row.userid
      })
      myrecord({
          'owner': 12984808
        }).then(res => {
          //console.log(this.deailList)
          this.deailList = res.Resp.row;
          this.ismoneyList = res.Resp.row.result;
          
        }),
        //跟单详情
          followUserDetail({
            'owner': 13047662,
            'pn': 1
          }).then(res => {
            this.userList = res.Resp.rows.row
            //console.log(res)
          })
    },
    mounted() {
      console.log(this.$route.params)
    }
  }

</script>

<style lang="scss" scoped>
  .top {
    width: 100%;
    height: 5rem;
    display: block;
    background: url('../../assets/img/1.jpg') no-repeat;
    background-size: 100% 6.15rem;
    font-size: 0.16rem;

    .header {
      width: 100%;
      height: .88rem;
      top: 0;
      bottom: 0;
      position: fixed;
      z-index: 100000;
      /* opacity: 0.4; */

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
          line-height: 100%;
        }

        li:nth-child(1) {
          width: 1rem;
          height: 1rem;
          font-size: 0.22rem;
          top: -0.3rem;
          right: 1.84rem;
          padding-left: 1%;
          padding-top: 3%;
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

      .fnow {
        overflow: hidden;
        /* box-sizing:border-box; */
        padding-left: 0.76rem;
        padding-top: 0.36rem;
        height: 0.52rem;

        .word-wrap {
          margin: 0 0 0 .05rem;
        }

        .nohit {
        /* float: left;
          font-size: 0.26rem;
          color: #fff;
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.45rem;
          border-radius: 50%;
          box-sizing: border-box;
          margin-right: 0.62rem;
          position: relative;
          line-height: 0.4rem; */
          border: 3px solid #999;
          background: #999
      }

        li {
          float: left;
          font-size: 0.26rem;
          color: #fff;
          width: 0.5rem;
          height: 0.5rem;
          text-align: center;
          line-height: 0.45rem;
          border-radius: 50%;
          box-sizing: border-box;
          margin-right: 0.62rem;
          position: relative;
          line-height: 0.4rem;
          border: 3px solid #f66;
          background: #f66;
        }

        li::after {
          content: '';
          width: 0.7rem;
          height: 1px;
          position: absolute;
          background: #eee;
          top: 0.22rem;
          left: 0.44rem;
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

  .list-wrap {
    margin-bottom: .9rem;

    .infos {
      /*height:10rem;*/
      width: 100%;
      position: relative;
      overflow: hidden;
      display: block;

      .gditem {
        position: relative;
        /* height: 3.1rem; */
        border-bottom: 1px solid #eeeeee;

        .aticle {
          display: block;
          width: 100%;

          .aticle_t {
            display: block;
            height: 0.7rem;
            padding: 0.27rem 0 0 0.3rem;
            box-sizing: border-box;
            position: relative;

            img {
              width: 0.33rem;
              height: 0.31rem;
              float: left;
            }

            span:nth-of-type(1) {
              margin-left: 0.28rem;
              font-size: 0.24rem;
              float: left;
              line-height: 0.35rem;
            }

            .jiezhi {
              color: #999999;
              float: right;
              margin-right: 0.2rem;
              font-size: 0.24rem;
              margin-left: 0.13rem;
              line-height: 0.35rem;
            }

            .shijian {
              color: #999999;
              float: right;
              font-size: 0.24rem;
              margin-left: 0.13rem;
              line-height: 0.35rem;
            }
          }

          .aticle_z {
            width: 100%;
            font-size: 0.26rem;
            padding-left: 0.3rem;
            padding-right: 0.2rem;
            margin-bottom: 0.3rem;
            overflow: hidden;
            line-height: 0.4rem;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            color: #999999;
            box-sizing: border-box;
          }

          .aticle_x {
            display: block;
            width: 100%;
            height: 0.68rem;
            font-size: 0.26rem;
            padding-left: 0.4rem;
            margin-bottom: 0.3rem;
            box-sizing: border-box;

            div {
              display: block;
              height: 0.62rem;
              float: left;
              margin-left: 0.68rem;

              p:nth-of-type(1) {
                display: block;
                font-size: 0.28rem;
                color: #d81d36;
                text-align: center;

                span {
                  color: #999999;
                }
              }

              p:nth-of-type(2) {
                display: block;
                font-size: 0.22rem;
                margin-top: 0.16rem;
                color: #999999;
              }
            }

            .div1 {
              margin-left: 0rem;
            }

            .ykj_2 {
              display: block;
              position: absolute;
              right: 0.5rem;
              bottom: 0.35rem;
              width: 1.34rem;
              height: 1.08rem;
              background: url('../../assets/img/gd/prize.png') no-repeat;
              background-size: 100%;

              span {
                font-size: 0.27rem;
                color: #d81d36;
                line-height: 1.08rem;
                display: block;
                transform: rotate(15deg);
                text-align: center;
              }
            }

            #btn1 {
              width: 1.74rem;
              height: 0.48rem;
              border: 1px solid #d81d36;
              background: #FFFFFF;
              color: #d81d36;
              border-radius: 50px;
              position: absolute;
              right: 0.2rem;
            }
          }
        }
      }
    }

  }

  .bottom {
    display: block;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 0.65rem;
    padding: 0.14rem 0;
    border-top: 1px solid #cccccc;
    background-color: #f5f5f5;
    z-index: 9999;

    .foot_left {
      display: block;
      width: 3.75rem;
      height: 0.65rem;
      float: left;
      border-right: 1px solid #cccccc;

      img {
        width: 0.41rem;
        height: 0.43rem;
        display: block;
        float: left;
        margin-left: 1.25rem;
        margin-top: 0.1rem;
      }

      .guanzhu {
        font-size: 0.32rem;
        display: block;
        float: left;
        line-height: 0.65rem;
        margin-left: 0.27rem;
      }
    }

    .foot_right {
      display: block;
      width: 3.72rem;
      height: 0.65rem;
      float: left;

      img {
        width: 0.35rem;
        height: 0.43rem;
        display: block;
        float: left;
        margin-left: 1.25rem;
        margin-top: 0.1rem;
      }

      .dzgd {
        font-size: 0.32rem;
        color: #666666;
        display: block;
        float: left;
        line-height: 0.65rem;
        margin-left: 0.27rem;
      }
    }
  }

</style>
