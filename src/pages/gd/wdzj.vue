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
        </div>
        <p class='name'>圣诞节粉丝</p>
        <p class='desc'>
          <span class='fans'>粉丝:0</span>
          <span class='att'>关注:0</span>
        </p>
        <p class='money clearfix'>
          <span style='float: left'>累计发单中奖：<span class='yellow fd'>0</span>元</span>
          <span style='float: right'>累计跟单中奖：<span class='yellow zj'>0</span>元</span>
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
            <p class='red week'>13%</p>
            <p>7日盈利</p>
          </li>
          <li>
            <p class='red month'>34%</p>
            <p>30日盈利</p>
          </li>
          <li>
            <p class='red hit'>8中4</p>
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
    <recordBottom/>
  </div>
</template>

<script>
  import recordBottom from './components/myRecordBottom' 
  export default {
    components: {recordBottom},
    methods: {
        backAction() {
            this.$router.go(-1);
        }
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

      .logo {
        width: 1.24rem;
        height: 1.2rem;
        border: 3px solid #fff;
        border-radius: 50%;
        box-sizing: border-box;
        margin-left: 3.2rem;
        margin-top: 1.2rem;
        overflow: hidden;
        background: url('../../assets/img/gd/hongren.png') no-repeat;
        background-size: 110%;
        background-position: center;
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
        font-size:0.32rem;
        color:#d81d36;
        font-weight: bold;
        padding:0.23rem 0 0.12rem 0;
        border-bottom:2px solid #ccc;
        zoom: 1;
        img{
            padding:0 0.22rem 0 0.22rem;
            float: left;
            border-right:1px solid #ccc;
            width:1.28rem;
        }
        .res{
            margin-left:.38rem;
            overflow:hidden;
            padding-left: 0.38rem;
            box-sizing:border-box;
            .red{
                font-size:0.32rem;
                color:#d81d36;
                font-weight: bold;
                margin-top:0.15rem;
                margin-bottom:0.1rem;
                text-align:center;
            }
            li{
                float: left;
                p:nth-child(2){
                    font-size:0.26rem;
                    color:#333;
                    font-weight:normal;
                }
            }
            li:nth-child(2){
                margin-left:0.95rem;
            }
            li:nth-child(3){
                margin-left:0.96rem;
            }
        }
      }

      .near-box {
        zoom: 1;
        height: 1.18rem;
        border-bottom:0.2rem solid rgb(238,238,238);
        span{
            font-size:0.28rem;
            color:#333;
            margin-left:0.32rem;
            margin-top:0.4rem;
            margin-bottom:0.5rem;
            float: left;
        }
        ul{
            overflow:hidden;
            /* box-sizing:border-box; */
            padding-left:0.76rem;
            padding-top:0.36rem;
            height:0.52rem;
            li{
                float:left;
                font-size:0.26rem;
                color:#fff;
                width:0.5rem;
                height:0.5rem;
                text-align: center;
                line-height:0.45rem;
                border:3px solid #f66;
                border-radius:50%;
                box-sizing:border-box;
                background:#f66;
                margin-right: 0.62rem;
                position: relative;
                line-height:0.4rem;
            }
            li::after{
                content:'';
                width:0.7rem;
                height:1px;
                position: absolute;
                background: #eee;
                top: 0.22rem;
                left:0.5rem;
            }
            li:nth-child(5)::after{
                background: none;
            }
            .white{
                float:left;
                font-size:0.26rem;
                color:#fff;
                width:0.5rem;
                height:0.5rem;
                text-align: center;
                line-height:0.45rem;
                border:1px solid #EEEEEE;
                border-radius:50%;
                box-sizing:border-box;
                background:#FFFFFF !important;
                margin-right: 0.62rem;
                position: relative;
            }
        }
      }
  }
</style>
