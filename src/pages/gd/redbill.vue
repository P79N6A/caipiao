<template>
  <div id="redbill">
    <header class="header">
      <i class="msg-icon" @click="backAction"></i>
      <h1>晒红单</h1>
    </header>
    <div class="content clearfix">
      <ul class="clearfix">
        <li id="article" v-for="item in redbillList" :key="item.uid">
          <div class="left">
            <div class="one clearfix">
              <div class="name">{{item.nickname}}</div>
              <div class="leader">带红 {{item.copycount}}人</div>
            </div>
            <p class="p1">中奖：<span class="sp1">{{item.prizemoney}}</span></p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
    import { showRedbillList } from '@/request/api'; 
    export default {
        data() {
            return {
                redbillList: []
            }
        },
        methods: {
          backAction() {
            this.$router.go(-1);s
          }
        },
        created() {
          showRedbillList().then( res => {
                this.redbillList = res;
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

  .content {
    width: 7.5rem;
    box-sizing: border-box;
    padding: 0.1rem 0.06rem 0 0.1rem;
    ul{
        margin-left:0.22rem;
    }
    .clearfix {
        zoom: 1;
        .left {
            margin-top: 0.22rem;
            width: 3.32rem;
            height: 1.7rem;
            float: left;
            border: 2px solid #eeeeee;
            border-radius: 10px;
            margin-right: 0.22rem;
            box-sizing: border-box;
            padding: 0.25rem 0rem 0.3rem 0rem;
            .one{
                height: 0.37rem;
                margin-left: 0.1rem;
                .name{
                    height: 0.37rem;
                    float: left;
                    font-size: 0.22rem;
                    color: #000000;
                    line-height: 0.37rem;
                    width: 1.4rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .leader{
                    /* width: 1.3rem; */
                    height: 0.35rem;
                    background: url('../../assets/img/gd/yuanjiao.png') no-repeat;
                    background-size: 100% 100%;
                    float: right;
                    margin-right: 0.1rem;
                    font-size: 0.22rem;
                    color: #ff4d4d;
                    padding-left: 0.12rem;
                    /* text-align: center; */
                    line-height: 0.38rem;
                    padding-right: 0.1rem;
                }
            }
            .p1{
                width: 2.83rem;
                margin-left: 0.24rem;
                margin-top: 0.45rem;
                height: 0.3rem;
                font-size: 0.22rem;
                color: #999999;
                .sp1{
                    line-height: 0.3rem;
                    font-size: 0.34rem;
                    color: #d81d36;
                }
            }
        }
    }
  }
  .clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}

</style>
