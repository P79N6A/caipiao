<template>
  <div id="gd">
    <!-- <router-view></router-view> -->
    <!-- 头部 -->
    <header class="header">
      <h1>复制跟单</h1>
      <router-link to="/help/fzgdNew27">
        <i class="msg-icon"></i>
      </router-link>
    </header>

    <!-- 导航 -->
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/gd/recommend">
            <div class="recommend"></div>
            <p>牛人推荐</p>
          </router-link>
        </li>
        <li>
          <router-link to="/gd/profit">
            <div class="hot"></div>
            <p>热门榜单</p>
          </router-link>
        </li>
        <li>
          <router-link to="/gd/redbill">
            <div class="redbill"></div>
            <p>红单爆料</p>
          </router-link>
        </li>
        <li>
          <router-link to="/gd/wdzj">
            <div class="myfollow"></div>
            <p>我的跟单</p>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- 广告位 -->
    <div class="banner"></div>

    <!-- 红人 -->
    <div class="sensation">
      <!-- 头部 -->
      <div class="sensation-top">
        <img src="../../assets/img/gd/hongren.png" alt="">
        <span>红人</span>
      </div>
      <!-- 红人导航 -->
      <div class="sensation-bottom">
        <ul>
          <router-link :to="{ path:'/gd/originator', query: { uid:  12984808} }">
            <!-- <router-link to='/gd/originator'> -->
            <li v-for="(item, index) in redList.slice(0,7)" :key="item.uid" @click="toAction">
              <img :src="'/api'+item.imageUrl" alt="" />
              <p>{{item.nickname}}</p>
            </li>
          </router-link>
          <li>
            <router-link to="/gd/sensation">
              <img src="../../assets/img/gd/more.png" alt="" />
              <p>更多</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 热门跟单 -->
    <!-- <gdProfitList/> -->
    <!-- <gdFollowList/> -->
    <div class="hot">
      <!-- 头部 -->
      <div class="hot-top">
        <div class="hot-nav">
          <div class="top-l">
            <span class="title">热门跟单</span>

            <router-link to='/gd/search'>
              <span class="search"> </span>
              <!-- <img class="search" src="../../../assets/img/gd/search.png" alt=""/> -->
            </router-link>

          </div>
          <div class="top-r">
            <span class="follow-icon"></span>
            <span class="follow">关注</span>
          </div>
        </div>
        <ul class="paixu">
          <!-- <li class="" data-px="qb" v-for="(item3, index) in pxList" @click="pxAciton(index)">
            {{item3.name}}
          </li> -->
          <li @click="moneyAction" >
            <p>方案金额</p>
            <span class="jiantou1"></span>
          </li>
          <li @click="hotAction">
            <p>跟单热度</p>
            <span class="jiantou1"></span>
          </li>
          <li @click="timeAction">
            <p>发单时间</p>
            <span class="jiantou1"></span>
          </li>
        </ul>
      </div>
      <!-- 跟单列表 -->
      <div class="hot-bottom">
        <ul>
          <!-- <router-link to='/gd/originator'> -->
          <li class="gditem" v-for="(item2, index) in hotList" :key="item2.projid" @click="toAction">
              <!-- <span class="jlj" v-if="item2.usertitle != null"><strong>{{item2.usertitle}}</strong></span> -->
            <div class="introduce">
              <div class="int-l">
                <img :src="'/api'+item2.imageUrl" alt="">
                <span class="crow" v-if="item2.ishot != 0"></span>
              </div>
              <div class="int-m">
                <p>{{item2.nickname}}</p>
                <span>{{item2.hit_week}}连红</span>
              </div>
              <div class="int-r">
                <p>{{item2.allnum}}中{{item2.hitnum}}</p>
              </div>
            </div>
            <div class="content">
              <div class="con-top">
                <img src="../../assets/img/foot.png" alt="">
                <span>预计回报:</span>
                <span>{{item2.ireturnrate}}倍</span>
                <span class="leagues">精选赛事</span>
                <span>截止</span>
                <span>{{item2.cendtime}}</span>
              </div>
              <p>{{item2.note}}</p>
              <div class="con-bottom">
                <span>自购<span class="buy">{{item2.itmoney}}</span>元</span>
                <span class="con-bottom-follow">跟单<span class="buy">{{item2.copycount}}</span>人</span>
                <input class="btn1" type="button" value="立即跟单" v-if="item2.ireturnrate != 0" @click.stop="yyAction">
                <input class="btn2" type="button" value="立即预约" v-if="item2.ireturnrate == 0" @click.stop="yyAction">
              </div>
            </div>
          </li>
          <!-- </router-link> -->
        </ul>
      </div>
    </div>


    <!-- 返回顶部按钮 -->
    <img class="back" src="../../assets/img/gd/huojian.png" v-show="toTopShow" @click="scrollToTop" />

    <!-- 到达底部 -->
    <div class="loading" v-show="showLoading">
      <span>已加载全部数据</span>
    </div>
    <!-- 底部导航 -->
    <gd-footer :loginState='loginState' current='0'></gd-footer>
  </div>
</template>

<script>
  import gdFooter from '@/components/gdFooter';
  import gdProfitList from './components/gdProfitList';
  import gdFollowList from './components/gdFollowList';
  import {
    sensationList,
    hotDocmentsList,
    checklogin,
    followCopy
  } from '@/request/api';
  export default {
    components: {
      gdFooter,
      gdProfitList,
      gdFollowList
    },
    data() {
      return {
        showLoading: false,
        toTopShow: false,
        redList: [],
        hotList: [],
        loginState: false,
        pxList: [{
            name: '方案金额',
            index: '0'
          },
          {
            name: '跟单热度',
            index: '1'
          },
          {
            name: '发单时间',
            index: '2'
          }
        ]
      }
    },
    computed: {},
    methods: {
      //点击返回顶部
      scrollToTop() {
        scrollTo(0, 0);
      },
      handleScroll() {
        //修改相对滚动位置
        console.log(this.scrollTop)
        this.scrollTop = window.pageYOffset || document.body.scrollTop
        if (this.scrollTop > 300) {
          this.toTopShow = true
        } else {
          this.toTopShow = false
        }
        if (this.scrollTop > 1550) {
          console.log('到底了')
          this.showLoading = true;
        } else {
          this.showLoading = false
        }
      },
      //金额排序
      moneyAction(e) {
        this.hotList.sort((a, b) => {
          return b.itmoney - a.itmoney
          e.currentTarget.querySelector("p").style.color = "yellow"
        })
      },
      //热度排序
      hotAction() {
        this.hotList.sort((a, b) => {
          return b.copycount - a.copycount
        })
      },
      //时间排序
      timeAction() {
        this.hotList.sort((a, b) => {
          console.log('点击了')
          //return (b.cendtime.split('') - b.time) - (a.cendtime - b.time)
          return a.cendtime.split('') - b.cendtime.split('')
          console.log('点击了', a.cendtime)
        })
      },
      //立即跟单
      yyAction() {
        console.log('点击了')
        this.$router.push({
          path: '/gd/gdxq',
        });
      },
      //列表跳转
      toAction() {
        this.$router.push({
          path: '/gd/originator',
          query: {
            uid: 'redList.uid'
          }
        });
      },
      requestData(uid) {
        console.log('uid', uid)
      }
    },
    created() {
      //红人数据
      sensationList().then(res => {
        this.redList = res
      }).catch(err => {
        console.log(err);
      })
      //热门跟单数据
      hotDocmentsList({
        'fid': 'web_jczqList',
        'ps': 20,
        'pn': 1
      }).then(res => {
        this.hotList = res.Resp.rows.row
      })
      //登录
      checklogin().then(res => {
        const code = res.Resp.code;
        //console.log(code)
        if (code === 0) {
          this.loginState = true
        } else {
          this.loginState = false
        }
      })
    },
    mounted() {
      this.$nextTick(function () {
        //修改事件监听
        window.addEventListener('scroll', this.handleScroll)

      });
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll) // 离开页面 关闭监听
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
      right: .4rem;
      width: 0.36rem;
      height: 0.36rem;
      background: url('../../assets/img/gd/xinxi.png');
      background-size: contain;
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
          font-size: 0;
          background: url('../../assets/img/gd/icon.png') no-repeat;
          background-size: cover;
          width: 0.73rem;
          height: 0.73rem;
          margin-bottom: 0.2rem;
          margin-left: 0.45rem;
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

    .sensation-bottom {
      ul {
        height: 3.56rem;
        padding: 0.5rem 0 0 .5rem;
        border-bottom: 0.2rem solid #f2f2f2;

        li {
          float: left;
          width: 1.45rem;
          height: 1.31rem;
          margin-right: 0.25rem;
          margin-bottom: 0.34rem;

          img {
            width: 1.01rem;
            height: 1.01rem;
            border-radius: 50%;
            margin-left: 0.2rem;
          }

          p {
            font-size: 0.22rem;
            font-family: '宋体';
            text-align: center;
          }
        }
      }
    }
  }

  .hot {
    margin-bottom: 1.4rem;

    .hot-top {
      width: 100%;
      height: 1.72rem;
      border-bottom: 1px solid #eeeeee;
      clear: both;
      background-color: #FFFFFF;
      z-index: 9;

      .hot-nav {
        width: 100%;
      height: 0.92rem;
      border-bottom: 1px solid #eeeeee;

      }

      .top-l {
        float: left;
        height: 100%;

        .title {
          display: block;
          font-size: 0.3rem;
          color: #d81d37;
          line-height: 0.92rem;
          margin-left: 0.4rem;
          float: left;
        }

        .search {
          width: 0.34rem;
          height: 0.34rem;
          background: url('../../assets/img/gd/search.png') no-repeat;
          display: block;
          background-size: cover;
          float: left;
          margin-left: 0.2rem;
          margin-top: 0.3rem;
        }
      }

      .top-r {
        float: right;

        .follow-icon {
          float: left;
          width: 0.24rem;
          height: 0.24rem;
          margin-right: 0.12rem;
          background: url('../../assets/img/gd/guanzhu.png') no-repeat;
          background-size: cover;
          margin-top: 0.32rem;
        }

        .follow {
          float: left;
          font-size: 0.3rem;
          line-height: 0.92rem;
          margin-right: 0.32rem;
        }
      }
    }

    .paixu {
      display: block;
      width: 100%;
      height: 0.78rem;
      background-color: #FFFFFF;
      /* position: absolute;
      top: 3rem; */
      z-index: 99;
      /* border-bottom: 1px solid #eeeeee; */

      /* display: none; */
      li {
        width: 1.35rem;
        float: left;
        list-style: none;
        margin-left: 0.85rem;

        p {
          display: block;
          font-size: 0.28rem;
          float: left;
          line-height: 0.78rem;
        }
      }

      .active {
        color: #d81d37;
      }

      .jiantou1 {
        background: url('../../assets/img/gd/huisjt.png');
        background-size: cover;
        float: left;
        width: 0.1rem;
        height: 0.24rem;
        margin-top: 0.28rem;
        margin-left: 0.1rem;
      }
    }

    .hot-bottom {
      .gditem {
        position: relative;
        height: 3.1rem;
        border-bottom: 1px solid #eeeeee;

        .jlj {
          width: 0.8rem;
          height: 0.75rem;
          background: url('../../assets/img/gd/jlj.png') no-repeat;
          background-size: cover;
          position: absolute;
          right: 0;
          top: 0;
          strong {
          position: absolute;
          right: -0.03rem;
          top: 0.05rem;
          font-weight: normal;
          font-size: 0.2rem;
          color: white;
          transform: rotate(40deg);
      }
      }

        .introduce {
          height: 1.1rem;
          padding-left: 0.32rem;

          .int-l {
            float: left;
            width: 0.86rem;
            height: 1.1rem;
            padding-top: 0.26rem;
            box-sizing: border-box;

            img {
              width: 0.86rem;
              height: 0.86rem;
              border-radius: 50%;
              vertical-align: top;
              transform: scaleX(1);
            }

            .crow {
              width: 0.4rem;
              height: 0.36rem;
              position: absolute;
              top: 0.1rem;
              left: 0.9rem;
              background: url('../../assets/img/hg.png') no-repeat;
              background-size: cover;
            }
          }

          .int-m {
            float: left;
            width: 4.36rem;
            margin-left: 0.32rem;
            height: 1.1rem;
            box-sizing: border-box;
            overflow: hidden;

            p {
              font-size: 0.26rem;
              line-height: 0.26rem;
              margin-top: 0.34rem;
            }

            span {
              font-size: 0.22rem;
              display: inline-block;
              height: 0.26rem;
              line-height: 0.26rem;
              border-radius: 3px;
              text-align: center;
              vertical-align: text-top;
              margin-right: 0.1rem;
              margin-top: 0.1rem;
              color: #fb9a53;
              background-color: #FFFFFF;
              border: 1px solid #fb9a53;
            }
          }

          .int-r {
            float: left;
            height: 1.1rem;
            box-sizing: border-box;

            p {
              width: 0.9rem;
              height: 0.38rem;
              background: url('../../assets/img/gd/yuanjiao.png') no-repeat;
              background-size: 100% 100%;
              margin-top: 0.5rem;
              color: #fe5b4c;
              font-size: 0.24rem;
              text-align: center;
              line-height: 0.38rem;
            }
          }
        }

        .content {
          width: 100%;
          height: 0.7rem;
          padding: 0.27rem 0.1rem 0 0.3rem;
          box-sizing: border-box;
          position: relative;

          .con-top {
            width: 100%;
            height: 0.4rem;
            padding: -.73rem 0.1rem 0 0.3rem;
            box-sizing: border-box;
            position: relative;

            img {
              width: 0.33rem;
              height: 0.31rem;
              float: left;
            }

            span:nth-of-type(1) {
              font-size: 0.24rem;
              float: left;
              margin-left: 0.13rem;
            }

            span:nth-of-type(2) {
              float: left;
              margin-left: 0.17rem;
              color: #d81d36;
              font-size: 0.24rem;
            }

            span:nth-of-type(3) {
              width: 1.6rem;
              font-size: 0.24rem;
              float: left;
              margin-left: 0.1rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            span:nth-of-type(4) {
              right: 0.2rem;
              font-size: 0.24rem;
              float: right;
              color: #999999;
              margin-left: 0;
            }

            span:nth-of-type(5) {
              font-size: 0.24rem;
              float: right;
              color: #999999;
              margin-left: 0;
            }
          }

          p {
            font-size: 0.26rem;
            /* padding-left: 0.3rem; */
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

          .con-bottom {
            width: 100%;
            height: 0.68rem;
            font-size: 0.26rem;
            padding-left: 0.4rem;
            margin-bottom: 0.3rem;
            box-sizing: border-box;

            .buy {
              margin-left: 0.2rem;
              color: #d81d36;
            }

            .con-bottom-follow {
              margin-left: 0.8rem;
            }

            input {
              -webkit-appearance: none;
              /*去除input默认样式*/
            }

            .btn1 {
              width: 1.74rem;
              height: 0.48rem;
              border: 1px solid #d81d36;
              background: #FFFFFF;
              color: #d81d36;
              border-radius: 50px;
              position: absolute;
              right: 0.2rem;
              z-index: 99;
            }

            .btn2 {
              width: 1.74rem;
              height: 0.48rem;
              border: 1px solid #fb9a53;
              background: #FFFFFF;
              color: #fb9a53;
              border-radius: 50px;
              position: absolute;
              right: 0.2rem;
              z-index: 99;
            }

          }
        }
      }

    }
  }

  .fixedBar {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    }

  .back {
    display: inline;
    width: 0.7rem;
    height: 0.7rem;
    position: fixed;
    bottom: 2rem;
    right: .5rem;
    z-index: 9999;
  }

  .loading {
    /* display: none; */
    overflow: hidden;
    height: 1.3em;
    margin-top: -0.3em;
    line-height: 1.5em;
    vertical-align: text-bottom;
    position: fixed;
    bottom: 1rem;
    font-size: 0.32rem;
    text-align: center;
    width: 100%;
    background: #EEE;
  }

</style>
