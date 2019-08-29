<template>
  <div class="sumbit">
    <header class="header">
      <i class="msg-icon" @click="backAction"></i>
      <h1>确认提交</h1>
    </header>
    <div class="faje">
      <img src="../../assets/img/gd/zuqiu.png" />
      <p>竞彩足球</p>
    </div>
    <div class="Coupon">
      <p>方案金额</p>
      <div class='money'>￥8.00</div>
    </div>
    <div class="Coupon Coupon1">
      <p>优惠券</p>
      <i></i>
      <div>-￥8.00</div>
    </div>
    <div class="Coupon Coupon2">
      <p>方案￥8</p>
      <p>优惠￥0</p>
      <div>￥8.00</div>
      <span>待支付：</span>
    </div>
    <div class="jifen">
      <div>积分</div>
      <p>奖励<i>1</i>点</p>
    </div>
    <div class="zonger">
      <p>账户总额</p>
      <div>￥{{infoList.usermoeny}}元</div>
    </div>
    <div class="zjf">

      <p>账户积分</p>
      <div>{{infoList.ipoint}}点</div>
    </div>
    <span class="tjcd">提交彩店</span>


  </div>
</template>

<script>
    import {userInfo} from '@/request/api';
  export default {
    data() {
      return {
        infoList: []
      }
    },
    methods: {
      backAction() {
        this.$router.go(-1);
      }
    },
    created() {
        userInfo({
            'fid': 'u_ainfo',
            'rnd': Math.random()
        }).then(res => {
            this.infoList = res.Resp.row
            console.log(res)
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

    h1 {
      line-height: .88rem;
      text-align: center;
      font-size: 0.38rem;
      font-family: '宋体';
      font-weight: 700;
    }

    .msg-icon {
      position: absolute;
      top: .32rem;
      left: .4rem;
      width: 0.36rem;
      height: 0.36rem;
      background: url('../../assets/img/gd/back.png');
      background-size: contain;
    }
  }

  .faje {
    width: 100%;
    height: 0.92rem;
    border-bottom: 2px dashed #EEEEEE;

    img {
      float: left;
      margin-left: 0.3rem;
      width: 0.33rem;
      height: 0.31rem;
      margin-top: 0.3rem;
    }

    p {
      font-size: 0.32rem;
      color: #000000;
      line-height: 0.92rem;
      float: left;
      margin-left: 0.1rem;
    }
  }

  .Coupon {
    width: 7.2rem;
    height: 1rem;
    border-bottom: 2px dashed #EEEEEE;
    margin-left: 0.3rem;
    box-sizing: border-box;

    p {
      float: left;
      font-size: 0.26rem;
      color: #000000;
      line-height: 1rem;
    }

    div {
      display: block;
      float: right;
      font-size: 0.28rem;
      color: #d81d36;
      line-height: 1rem;
      margin-right: 0.3rem;
    }
  }

  .Coupon1 {
    i {
      font-style: normal;
      width: 0.2rem;
      height: 0.32rem;
      margin-right: 0.3rem;
      background: url('../../assets/img/gd/jiantou.png');
      display: inline-block;
      background-size: 100% 100%;
      margin-top: 0.34rem;
      float: right;
    }

    div {
      display: block;
      color: #ff7200;
      margin-right: 0.1rem;
    }
  }

  .Coupon2 {
    p {
      margin-right: 0.2rem;
    }

    div {
      margin-right: 0.3rem;
    }

    span {
      font-size: 0.26rem;
      float: right;
      line-height: 1rem;
    }
  }

  .jifen {
    height: 1.12rem;
    width: 100%;
    border-bottom: 0.22rem solid #f2f2f2;

    div {
      display: block;
      width: 0.7rem;
      height: 0.34rem;
      font-size: 0.2rem;
      border: 1px solid #ff7200;
      color: #ff7200;
      margin-left: 5rem;
      margin-top: 0.44rem;
      text-align: center;
      line-height: 0.34rem;
      border-radius: 3px;
      float: left;
    }

    p {
      display: block;
      font-size: 0.26rem;
      color: #333333;
      float: left;
      margin-left: 0.2rem;
      margin-top: 0.44rem;

      i {
        color: #ff7200;
        font-style: normal;
      }
    }
  }

  .zonger {
    display: block;
    width: 7.2rem;
    height: 1rem;
    border-bottom: 1px dashed #EEEEEE;
    margin-left: 0.3rem;
    box-sizing: border-box;

    p {
      display: block;
      font-size: 0.26rem;
      color: #999999;
      line-height: 1rem;
      float: left;
    }

    div {
      display: block;
      float: right;
      line-height: 1rem;
      font-size: 0.26rem;
      color: #999999;
      margin-right: 0.3rem;
    }
  }

  .zjf {
    display: block;
    width: 100%;
    border-bottom: 1px solid #EEEEEE;
    height: 1rem;

    p {
      display: block;
      font-size: 0.26rem;
      color: #999999;
      line-height: 1rem;
      float: left;
      margin-left: 0.3rem;
    }

    div {
      float: right;
      line-height: 1rem;
      font-size: 0.26rem;
      color: #999999;
      margin-right: 0.3rem;
    }
  }

  .tjcd {
      display: block;
    width: 5.44rem;
    height: 0.9rem;
    background: #d81d36;
    border-radius: 0.45rem;
    font-size: 0.4rem;
    color: #fff;
    text-align: center;
    line-height: 0.9rem;
    margin: 0 auto;
    margin-top: 1.1rem;
}

</style>
