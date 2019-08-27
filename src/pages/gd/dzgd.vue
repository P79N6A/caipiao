<template>
  <div class="dzgd">
    <!-- 头部 -->
    <header class="header">
      <i class="back-icon" @click="backAction"></i>
      <h1>定制跟单</h1>
      <router-link to="/help/dzgd">
        <i class="msg-icon"></i>
      </router-link>
    </header>
    <!-- 内容 -->
    <div class="people">
      <span>发单人：</span>
      <span class="nickname">秋至i</span>
      <img src="../../assets/img/gd/ygz.png">
      <span class="red">关注</span>
    </div>
    <div class="bei">
      <span>认购倍数：</span>
      <input type="text" id="int1" value="5">
      <span class="last">倍</span>
    </div>
    <div class="foot">
      <div class="div1">
        <img src="../../assets/img/gd/xz2.png" class="img1" data-off="true">
        <span>对定制方案金额做范围限制。</span>
      </div>

      <p class="p1 clearfix">
        <span>单倍金额：</span>
        <input type="text" id="int2" placeholder="最低2元"><span class="line">-</span><input type="text" id="int3"
          placeholder="最高20万">
        <span class="yuan">元</span>
      </p>
    </div>

    <span class="btn">确定</span>

  </div>
</template>
<script>
  export default {
    methods: {
      backAction() {
        this.$router.go(-1);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .dzgd {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .header {
      width: 100%;
      height: 1rem;
      position: relative;
      top: 0;
      bottom: 0;
      border-bottom: 1px solid #EEEEEE;
      background-color: #d81d37;

      h1 {
        line-height: 1rem;
        text-align: center;
        font-size: 0.34rem;
        font-family: '宋体';
        font-weight: 700;
        color: #fff;
      }

      .msg-icon {
        position: absolute;
        top: .32rem;
        right: .4rem;
        width: 0.36rem;
        height: 0.36rem;
        background: url('../../assets/img/gd/doubt.png');
        background-size: cover;
      }

      .back-icon {
        position: absolute;
        top: .32rem;
        left: .4rem;
        width: 0.36rem;
        height: 0.36rem;
        background: url('../../assets/img/gd/back.png');
        background-size: contain;
      }

    }

    .people {
      display: block;
      width: 6.8rem;
      height: 1.2rem;
      margin: 0 auto;
      border-bottom: 1px solid #e7e7e7;

      span {
        display: block;
        float: left;
        font-size: 0.32rem;
        color: #333333;
        line-height: 1.2rem;
      }

      img {
        display: block;
        float: left;
        width: 0.3rem;
        height: 0.3rem;
        line-height: 1.04rem;
        margin-top: 0.48rem;
        margin-left: 2.16rem;
      }

      .red {
        color: #e13e3f;
        margin-left: 0.12rem;
      }
    }

    .bei {
      display: block;
      width: 6.8rem;
      height: 1.2rem;
      margin: 0 auto;
      border-bottom: 1px solid #e7e7e7;

      span {
        font-size: 0.32rem;
        display: block;
        float: left;
        line-height: 1.2rem;
      }

      .last {
        margin-left: 0.2rem;
      }
    }

    .foot {
      display: block;
      width: 6.8rem;
      margin: 0 auto;
      padding-top: 0.3rem;

      .div1 {
        display: block;
        width: 5.87rem;
        height: 0.82rem;

        img {
          float: left;
          width: 0.32rem;
          height: 0.32rem;
        }

        span {
          font-size: 0.32rem;
          display: block;
          float: left;
          line-height: 0.26rem;
          margin-left: 0.2rem;
        }
      }

      .p1 {
        display: block;
        height: 1.5rem;
        margin-top: .3rem;

        span {
          font-size: 0.32rem;
          display: block;
          float: left;
          line-height: 0.47rem;
        }

        #int2 {
          margin: 0;
          padding: 0;
          color: #000000;
          font-size: 0.22rem;
          margin-left: 0.28rem;
        }

        .line {
          margin: 0 0.16rem;
        }

        #int3 {
          margin-left: 0rem;
          margin-top: 0;
        }

        .yuan {
          margin-left: 0.2rem;
        }
      }
    }

    .btn {
        display: block;
        width: 7rem;
        height: .8rem;
        background-color: #d81d37;
        color: #FFFFFF;
        font-size: 0.4rem;
        text-align: center;
        line-height: 0.8rem;
        margin: 0 auto;
        border-radius: 5px;
        margin-top: 0.1rem;
    }

    #int1,
    #int2,
    #int3 {
      float: left;
      margin-top: 0.35rem;
      width: 1.4rem;
      height: 0.5rem;
      border-radius: 5px;
      border: 1px solid #cccccc;
      background: none;
      text-align: center;
      margin-left: 0.28rem;
      font-size: 0.22rem;
    }
  }

</style>
