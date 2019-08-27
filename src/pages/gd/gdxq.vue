<template>
  <div class="gdxq">
    <!-- 头部 -->
    <header class="header">
      <i class="msg-icon-back" @click="backAction"></i>
      <h1>跟单详情</h1>
      <router-link to="/">
        <i class="msg-icon"></i>
      </router-link>
    </header>
    <!-- 用户 -->
    <div class='clearfix user'>
      <div class='touxiang'>
        <img :src="'/api' + copyDetailList.imageUrl" alt="" class='tx'>
        <img class='hg' src="../../assets/img/hg.png" alt="">
      </div>
      <div class='userInfo'>
        <div class='clearfix'><span class='username'>{{copyDetailList.nickname}}</span> <span
            class='pi'>{{copyDetailList.allnum}}中{{copyDetailList.hitnum}}</span><span>7日盈利率:<s>{{copyDetailList.ravgreturn}}%</s></span>
        </div>
        <div class='clearfix usertitle'>
          <span class="lh_7">7连红</span>
        </div>
      </div>
      <div class='guanzhu'>+关注</div>
    </div>
    <!-- 详情 -->
    <section class='gdxx'>
      <p class='clearfix'>
        <span class='type'>竞彩足球</span>
        <span class='chuan'></span>
        <span class='beishu'><s>{{copyDetailList.returnrate}}</s>倍</span>
        <span>预计回报</span>
      </p>
      <div class='clearfix match'>
        <span class='purple'>{{copyDetailList.league}}</span>
      </div>
      <span class='judgment'>{{copyDetailList.note}}</span>
      <div class='gdinfo'>
        <p><span>自购<i class='buy'>{{copyDetailList.money}}</i>元</span> <span>跟单<i
              class='follow'>{{copyDetailList.copysum}}</i>元</span><span class='permoney'>2元起投</span></p>
        <p><span class='gid'>{{copyDetailList.projid}}</span> <span
            class='openTime'>发单时间：{{copyDetailList.adddate}}</span></p>
      </div>
      <div class='status' v-if="copyDetailList.result === '已中奖'">
        <span>{{copyDetailList.winMoney}}</span>
      </div>
    </section>

    <nav class="title">
      <el-tabs class="box" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane class="follow" label="方案详情" name="first">
          <table class="project" border="0" cellpadding="0" cellspacing="0" >
            <caption class="t-title">过关方式：单关 </caption>
            <thead class="t-top">
              <tr>
                <td>场次</td>
                <td>主队</td>
                <td>比分</td>
                <td>客队</td>
                <td>投注内容</td>
              </tr>
            </thead>
            <tbody v-for="value in guoguanList" :key="value.id">
              <tr>
                <td>
                  <div>{{value.name}}</div>
                </td>
                <td>{{value.hn}}</td>
                <td>
                  <div class="ban">半 {{value.hvs}}:{{value.hhs}}</div>
                  <div class="quan">全 {{value.hs}}:{{value.vs}}</div>
                </td>
                <td>{{value.vn}}</td>
                <td>
                  <div style="color: #d81d36;">负-负(2.12)</div>
                </td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane class="customized" label="跟单用户" name="second">
          <ul class="gd-list">
            <li v-for="(item, index) in copyUserList"><span class="name">{{item.nickname}}</span><span class="mount"><s>{{item.imoney}}</s>元</span> <span class="time">{{item.cadddate.slice(5,16)}}</span></li>
            <li><span class="name">一笑******</span><span class="mount"><s>10</s>元</span> <span class="time">08-26
                21:11</span></li>
          </ul>
        </el-tab-pane>
      </el-tabs>

    </nav>

    <!-- <div class="buy">
      <ul>
        <li v-for="value in numList">{{value}}</li>
      </ul>
    </div> -->

    <footer class="footer-wrap">
      <ul class='clearfix num'>
        <li v-for="(value, index) in numList" @click="chooseAction(index)" >{{value}}
          <span class="choose" v-show="index !== i">
            <!-- <img src="../../assets/img/gd/chechicon.png" alt=""> -->
          </span>
        </li>

      </ul>
      <!-- <div class='clearfix foot'>
          <input type="button" value='-' class='substract' name="">
          <input type="number"  style="display: none;"/>
          <input type="number" value='5' name="" class='val'>
          <input type="button"  value='+' class='add' name="">
          <div>
              共<s>10元</s>
          </div>
          <div class='followMe' >立即预约</div>
      </div> -->
      <!-- <el-input-number size="mini" v-model="num"></el-input-number> -->
      <div class="down" id="myDown" v-show="showFooter">
        <span class="close" id="close" @click="closeAction">X</span>
        <img src="../../assets/img/gd/lottery_icon.png">
        <h4>盈球体育</h4>
        <p>最值得信赖的购彩平台</p>
        <span class="dl-btn">立即下载</span>
      </div>
    </footer>


  </div>
</template>

<script>
  import {
    copyDetail,
    copyUsers,
    guoguan
  } from '@/request/api'
  export default {
    data() {
      return {
        numList: ['10倍', '20倍', '50倍', '100倍'],
        selectIndex: 0,
        copyDetailList: [],
        copyUserList: [],
        guoguanList: [],
        showFooter: true,
        showChoose: false,
        num: 5,
        i: -1,
        activeName: 'first'
      }
    },
    methods: {
      backAction() {
        this.$router.go(-1);
      },
      changeIndex(index) {
        this.selectIndex = index
      },
      closeAction() {
        this.showFooter = !this.showFooter
      },
      chooseAction(index) {
        this.i = index
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    created() {
      copyDetail({
        'gid': 70,
        'hid': 'CP70150795445'
      }).then(res => {
        this.copyDetailList = res.Resp
      }),
      copyUsers({
        'gid': 70,
        'hid': 'CP70150795445',
        'pn': 1
      }).then( res => {
        this.copyUserList = res.Resp.userlist.userinfo
      }),
      guoguan({
        'r': '0.5496727684465395'
      }).then( res => {
        this.guoguanList = res.items.item
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

    .msg-icon-back {
      position: absolute;
      top: .32rem;
      left: .4rem;
      width: .36rem;
      height: .36rem;
      background: url('../../assets/img/back.png');
      background-size: contain;
    }


    h1 {
      display: block;
      text-align: center;
      line-height: 0.6rem;
      width: 60%;
      margin: 0 auto;
      font-size: 0.3rem;
      color: #000;
      padding-top: .15rem;
      font-weight: bold;
    }

    .msg-icon {
      position: absolute;
      top: .25rem;
      right: .15rem;
      width: 0.4rem;
      height: 0.4rem;
      background: url('../../assets/img/home_b.png');
      background-size: cover;
    }
  }

  .user {
    display: block;
    width: 100%;
    padding: 0.25rem 0.25rem 0.35rem 0.25rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;

    .touxiang {
      display: block;
      position: relative;
      margin-top: 0.15rem;
      float: left;
      width: 0.88rem;
      height: 0.88rem;

      .tx {
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
      display: block;
      float: left;
      font-size: 0.2rem;
      margin-left: 0.2rem;
      width: 67%;

      span {
        float: left;
      }

      div {
        height: 0.4rem;
        display: block;
      }

      div:nth-child(1) {
        margin-top: 0.25rem;
        margin-bottom: 0.1rem;

        .username {
          font-size: 0.26rem;
          color: #333;
          height: 100%;
          line-height: 0.4rem;
        }

        .pi {
          height: 0.35rem;
          color: #d81d36;
          margin-left: 0.2rem;
          font-size: 0.2rem;
          background: #fee4e8;
          border-radius: 0.13rem;
          text-align: center;
          line-height: 0.35rem;
          margin-right: 0.2rem;
          padding: 0 0.05rem;
        }

        span:nth-child(3) {
          font-size: 0.24rem;
          color: #666;
          height: 0.4rem;
          line-height: 0.4rem;

          s {
            font-style: normal;
            color: #d81d36;
            text-decoration: none;
            font-size: 0.26rem;
          }
        }
      }

      div:nth-child(2) span {
        font-size: 0.2rem;
        padding: 1px 3px;
        height: 0.3rem;
        text-align: center;
        line-height: 0.3rem;
        margin-right: 0.1rem;
        border-radius: 3px;
        float: left;
        display: block;
      }

      .lh_7 {
        color: #fb9a53;
        background-color: #FFFFFF;
        border: 1px solid #fb9a53;
      }
    }

    .guanzhu {
      display: block;
      float: right;
      width: 1.12rem;
      height: 0.48rem;
      text-align: center;
      line-height: 0.48rem;
      border: 1px solid #d81d36;
      font-size: 0.26rem;
      box-sizing: border-box;
      color: #d81d36;
      margin-top: 0.4rem;
      border-radius: 0.24rem;
    }
  }

  .gdxx {
    box-sizing: border-box;
    padding: 0.2rem 0.32rem 0.4rem;
    position: relative;
    border-bottom: 0.2rem solid #eee;

    p {
      display: block;
      padding-bottom: 0.14rem;

      span:nth-child(1) {
        float: left;
        font-size: 0.28rem;
        color: #333;
        padding-top: 2px;
        margin-right: 0.32rem;
      }

      span:nth-child(2) {
        float: left;
        font-size: 0.28rem;
        color: #999;
        padding-top: 2px;
      }

      span:nth-child(3) {
        float: right;
        font-size: 0.26rem;
        color: #333;
        padding-top: 2px;

        s {
          font-style: normal;
          color: #d81d36;
          text-decoration: none;
          font-size: 0.26rem;
        }
      }

      span:nth-child(4) {
        float: right;
        font-size: 0.26rem;
        color: #333;
        margin-right: 0.2rem;
        padding-top: 2px;
      }
    }

    .match {
      display: block;
      margin-bottom: 0.2rem;

      span {
        float: left;
        font-size: 0.22rem;
        margin-right: 0.2rem;
      }
    }

    .judgment {
      display: block;
      font-size: 0.24rem;
      color: #333;
      line-height: 0.4rem;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      margin-bottom: 0.1rem;
    }

    .gdinfo {
      display: block;

      p:nth-child(1) {
        display: block;
        font-size: 0.26rem;
        color: #333;
        margin-bottom: 0.32rem;

        span:nth-child(1) {
          margin-right: 0.62rem;

          i {
            font-style: normal;
            color: #d81d36;
            text-decoration: none;
            font-size: 0.26rem;
            margin-left: 0.22rem;
          }
        }

        span:nth-child(2) {
          color: #000;

          i {
            font-style: normal;
            color: #d81d36;
            text-decoration: none;
            font-size: 0.26rem;
            margin-left: 0.22rem;
          }
        }

        span:nth-child(3) {
          float: right;
        }
      }

      p:nth-child(2) {
        display: block;

        .gid {
          font-size: 0.28rem;
          color: #999;
        }

        .openTime {
          float: right;
          font-size: 0.24rem;
        }
      }
    }

    .status {
      position: absolute;
      width: 1.35rem;
      height: 1.08rem;
      top: 0.5rem;
      right: 2.1rem;
      background: url('../../assets/img/gd/prize.png') no-repeat;
      background-size: cover;

      span {
        font-size: 0.3rem !important;
        transform: rotate(14deg);
        margin-top: 0.3rem;
        color: #d81d36;
        width: 1.4rem;
        text-align: center;
        float: left;
        margin-right: 0.2rem;
      }
    }
  }

  .title {
    display: block;
    width: 100%;
    height: 0.88rem;
    /* border-bottom: 1px solid #ccc; */
    
    .t-box {
      width: 100%;
    }

    .project {
      width: 96%;
      text-align: center;
      border-left: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
      margin-left: 2%;
      margin-bottom: 1rem;
      box-sizing: border-box;

      .t-title {
        font-size: 0.3rem;
        text-align: left;
        padding: 0.2rem;
        box-sizing: border-box;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        border-top: 1px solid #ccc;
      }

      .t-top,
      tbody {
        background-color: #EEEEEE;

        tr {
          border-bottom: 1px solid #cccccc;

          td {
            font-size: 0.24rem;
            border-right: 1px solid #cccccc;
            border-top: 1px solid #cccccc;
            vertical-align: middle;
            color: #000;
          }
        }

      }

      tbody {
        background-color: #fff;

        .ban {
          color: #c37338;
        }

        .quan {
          color: #4d8c95;
        }


      }
    }

    .gd-list {
      display: block;
      box-sizing: border-box;
      width: 100%;
      overflow: auto;

      li {
        width: 100%;
        height: 0.8rem;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        padding: 0 0.32rem;

        span {
          font-size: 0.3rem;
          color: #333;
          display: block;
          float: left;
          height: 100%;
          width: 33.3%;
          text-align: center;
          line-height: 0.8rem;

          s {
            font-style: normal;
            color: #d81d36;
            text-decoration: none;
            font-size: 0.26rem;
          }
        }

        .time {
          float: right;
        }
      }
    }


    /* ul {
      display: flex;

      li {
        flex: 1;
        line-height: .88rem;
        text-align: center;
        color: #333;
        font-size: 0.28rem;
        box-sizing: border-box;
      }
    } */
  }

  .active {
    border-bottom: 3px solid #d81d36;
  }

  .footer-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #f7f7f7;

    .num {
      display: block;
      width: 100%;
      padding: 0.2rem 0.32rem;
      background: #f7f7f7;
      box-sizing: border-box;

      li {
        display: list-item;
        float: left;
        font-size: 0.32rem;
        box-sizing: border-box;
        border: 1px solid #eee;
        width: 1.55rem;
        height: 0.68rem;
        text-align: center;
        line-height: 0.68rem;
        background: #fff;
        margin-right: 0.16rem;
        color: #333;
        position: relative;

        .choose {
          display: block;
          position: absolute;
          width: .7rem;
          top: .04rem;
          left: .84rem;
          background: url('../../assets/img/gd/chechicon.png') cover;
        }
      }



    }

    .down {
      display: block;
      position: relative;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 100;
      left: 0;
      bottom: 0;
      height: 55px;
      box-sizing: border-box;
      /* padding: 10px 0; */
      padding-left: 60px;

      .close {
        position: absolute;
        top: 2px;
        right: 6px;
        width: 20px;
        height: 20px;
        color: #fff;
        text-align: center;
        font-size: 16px;
      }

      img {
        position: absolute;
        height: 35px;
        top: 10px;
        left: 15px;
      }

      h4 {
        display: block;
        /* padding-top: 5px; */
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 300;
      }

      p {
        display: block;
        font-size: 16px;
        color: #FFFFFF;
        /* padding-top: 5px; */
      }

      .dl-btn {
        position: absolute;
        display: block;
        background-color: #E13E3F;
        height: 22px;
        line-height: 22px;
        top: 17px;
        right: 45px;
        text-align: center;
        text-decoration: none;
        width: 70px;
        border: none;
        color: #FFFFFF;
        font-size: 15px;
        border-radius: 5px;
      }
    }
  }

  .clearfix {
    zoom: 1;
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
    height: .88rem;
    border: none;
    display: flex;
  }

  .el-tabs__item {
    flex: 1;
    text-align: center;
    line-height: .88rem;
    font-size: 0.28rem;
  }

  .el-tabs__item.is-active {
    color: #000;
  }

  .el-tabs__header {
    margin: 0;
  }

</style>
