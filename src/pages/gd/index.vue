<template>
  <div id="gd">
    <!-- 头部 -->
    <header class="header">
      <h1>复制跟单</h1>
      <!-- <div class="msg-icon"></div> -->
    </header>

    <!-- 导航 -->
    <nav class="nav">
      <ul>
        <li>
          <div class="recommend"></div>
          <p>牛人推荐</p>
        </li>
        <li>
          <div class="hot"></div>
          <p>热门榜单</p>
        </li>
        <li>
          <div class="redbill"></div>
          <p>红单爆料</p>
        </li>
        <li>
          <div class="myfollow"></div>
          <p>我的跟单</p>
        </li>
      </ul>
    </nav>

    <!-- 广告位 -->
    <div class="banner"></div>

    <!-- 红人 -->
    <div class="sensation">
      <div class="sensation-top">
        <img src="../../assets/img/gd/hongren.png" alt="">
        <span>红人</span>
      </div>
    </div>
  </div>

  <!-- 底部 -->
  <!-- <gd-footer><gd-footer/> -->

</template>

<script>
  import gdFooter from '../../components/gdFooter'
  export default {
    components: {
      gdFooter
    }
  }

</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: .88rem;
    position: re;
    top: 0;
    bottom: 0;
    border-bottom: 1px solid #EEEEEE;

    h1 {
      line-height: .88rem;
      text-align: center;
      font-size: 0.38rem;
      font-family: '宋体';
      font-weight: 700;
    }

    .msg-icon {
      display: block;
      /* width: .09rem;
      height: .09rem; */
      background: url('../../assets/img/gd/xinxi.png');
      /* position: absolute;
      top: .22rem;
      right: .22rem;  */
    }
  }

  .nav {
    padding: .3rem .48rem;
    magin: 0 auto;
    overflow: hidden;

    ul {
      display: flex;

      li {
        flex: 1;

        div {
          background: url('../../assets/img/gd/icon.png') no-repeat;
          background-size: cover;
          width: .73rem;
          height: .73rem;
          /* margin-bottom: 0.2rem;
          margin-left: 0.44rem; */
          margin: .1rem auto;
          font-size: 0;
        }

        p {
          font-size: 0.24rem;
          line-height: 0.24rem;
          text-align: center;
        }

        .hot {
          background-position: 0 -0.78rem;
        }

        .redbill {
          background-position: 0 -1.55rem;
        }

        .myfollow {
          background-position: 0 -2.33rem;
        }

      }
    }
  }

  .banner {
    width: 100%;
    height: 2.6rem;
    overflow: hidden;
    background-color: #f2f2f2;
  }

  .sensation {
    .sensation-top {
      width: 100%;
      height: 0.88rem;
      clear: both;
      border-bottom: 1px solid #eeeeee;
      img {
        width: 0.36rem;
        height: 0.34rem;
        float: left;
        margin-left: 0.4rem;
        margin-top: 0.28rem;
      }
      span {
        display: inline-block;
        font-size: 0.3rem;
        line-height: 0.3rem;
        color: #d81d37;
        float: left;
        margin-top: 0.3rem;
        margin-left: 0.2rem;
      }
    }
  }
</style>
