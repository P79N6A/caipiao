<template>
  <div class="recommend">
    <!-- 头部 -->
    <header class="header">
      <i class="msg-icon" @click="backAction"></i>
      <h1>牛人推荐</h1>
    </header>
    <!-- 折叠面板 -->
    <router-link to="/gd/originator">
      <el-collapse accordion>
        <el-collapse-item v-for="item in awesomeList" :key="item.uid">
          <template slot="title">
            <div class="list_t clearfix">
              <div id="content_l">
                <img :src="'/api'+item.imageUrl" />
                <span class="crow" v-if="item.ishot != 0"></span>
              </div>
              <div id="content_l1">
                <p>{{item.nickname}}</p>
                <span class="org"><b class="month">{{item.month}}</b>月</span>
                <span class="hury">盈利率<b class="red">{{item.avgreturnrate}}%</b></span>
                <span class="hury">命中率<b class="red">{{item.hitrate}}%</b></span>
              </div>
            </div>
          </template>
          <p class="introduce">{{item.desc}}</p>
        </el-collapse-item>
      </el-collapse>

    </router-link>
  </div>
</template>

<script>
  import {
    recommendList
  } from '@/request/api';
  export default {
    data() {
      return {
        awesomeList: [],
        activeNames: ['1']
      }
    },
    methods: {
      backAction() {
        this.$router.push('/gd');
      },
      handleChange(val) {
        console.log(val);
      }
    },
    created() {
      recommendList().then(res => {
        this.awesomeList = res.rows
        //console.log(this.awesomeList)
      }).catch(err => {
        console.log(err);
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

  .list_t {
    display: block;
    padding: 0.26rem 0.4rem 0.28rem 0.3rem;
    width: 100%;
    height: 1.4rem;
    box-sizing: border-box;

    #content_l {
      display: block;
      width: 0.86rem;
      height: 0.86rem;
      box-sizing: border-box;
      float: left;
      position: relative;

      img {
        width: 0.86rem;
        height: 0.86rem;
        border-radius: 50%;
        vertical-align: top;
      }

      .crow {
        width: 0.4rem;
        height: 0.36rem;
        position: absolute;
        top: -.15rem;
        left: 0.55rem;
        background: url('../../assets/img/hg.png') no-repeat;
        background-size: cover;
      }
    }

    #content_l1 {
      display: block;
      height: 0.86rem;
      margin-left: 0.2rem;
      float: left;

      p {
        display: block;
        font-size: 0.26rem;
        line-height: 0.1rem;
        margin-top: 0.08rem;
        /* margin-bottom: 0.28rem; */
      }

      span {
        display: inline-block;
        text-align: center;
        vertical-align: text-top;
        font-size: 0.24rem;
        line-height: 0.24rem;
      }

      .org {
        color: #ff8400;

        .month {
          font-weight: normal;
        }
      }

      .hury {
        color: #666666;

        .red {
          color: #d81d36;
          font-weight: normal;
        }
      }
    }
  }

  .introduce {
    font-size: 0.26rem;
    color: #333333;
    height: 1.2rem;
    padding: 0.25rem 0.45rem;
    text-indent: 0.52rem;
    line-height: 0.38rem;
    box-sizing: border-box;
    box-shadow: inset 0 3px 10px #eaeaea;
  }

</style>

<style lang="scss">
  /* .el-collapse-item__header.is-active {
    border-bottom-color: red;
  } */
  .el-collapse-item__header {
    height: 1.4rem;
  }

</style>
