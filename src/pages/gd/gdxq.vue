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
        <img src="../../assets/img/gd/hongren.png" alt="" class='tx'>
        <img class='hg' src="../../assets/img/hg.png" alt="">
      </div>
      <div class='userInfo'>
        <div class='clearfix'><span class='username'>召唤师峡谷</span> <span
            class='pi'>5中4</span><span>7日盈利率:<s>100%</s></span></div>
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
        <span class='beishu'><s>--</s>倍</span>
        <span>预计回报</span>
      </p>
      <div class='clearfix match'>
        <span class='purple'>亚冠</span>
      </div>
      <span class='judgment'>从不马后炮，多说无益，用稳定的命中率良心推单</span>
      <div class='gdinfo'>
        <p><span>自购<i class='buy'>2000</i>元</span> <span>跟单<i class='follow'>156,142</i>元</span><span
            class='permoney'>2元起投</span></p>
        <p><span class='gid'>cp7011287920</span> <span class='openTime'>发单时间：2016-12-15 15:36</span></p>
      </div>
      <div class='status'>
        <span></span>
      </div>
    </section>

    <nav class="title">
      <ul>
        <li v-for="(item, index) in titleList" @click="changeIndex(index);" :class="{active: selectIndex===index}">
          {{item}}
        </li>
      </ul>
    </nav>

    <div class="buy">
      <ul>
        <li v-for="value in numList">{{value}}</li>
      </ul>
    </div>


  </div>
</template>

<script>
  import { copyDetail } from '@/request/api'
  export default {
    data() {
      return {
        titleList: ['方案详情', '跟单用户'],
        numList: ['10倍', '20倍', '50倍', '100倍'],
        selectIndex: 0,
        copyDetailList: []
      }
    },
    methods: {
      backAction() {
        this.$router.go(-1);
      },
      changeIndex(index) {
        this.selectIndex = index
      }
    },
    created() {
      copyDetail().then( res => {
        this.copyDetailList = res.Resp
        console.log(this.copyDetailList)
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
  }

  .title {
    display: block;
    width: 100%;
    height: 0.88rem;
    border-bottom: 1px solid #ccc;

    ul {
      display: flex;

      li {
        flex: 1;
        line-height: .88rem;
        text-align: center;
        color: #333;
        font-size: 0.28rem;
        box-sizing: border-box;
      }
    }
  }

  .active {
    border-bottom: 3px solid #d81d36;
  }

  .buy {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #f7f7f7;
    ul {
      display: flex;
      width: 100%;
      padding: 0.2rem 0.32rem;
      background: #f7f7f7;
      box-sizing: border-box;
      li {
        flex: 1;
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
      }
    }
  }

</style>
