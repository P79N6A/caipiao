<template>
  <div class="hot">
    <!-- 头部 -->
    <div class="hot-top">
      <div class="top-l">
        <span class="title">热门跟单</span>

        <router-link to='/gd/search'>
          <span class="search"> </span>
        </router-link>

      </div>
      <div class="top-r">
        <span class="follow-icon"></span>
        <span class="follow">关注</span>
      </div>
    </div>
    <!-- 跟单列表 -->
    <div class="hot-bottom">
      <ul>
        <li class="gditem">
          <div class="introduce">
            <div class="int-l">
              <img :src="hotList.imageUrl" alt="">
            </div>
            <div class="int-m">
              <p>{{hotList.nickname}}</p>
              <span>{{hotList.hit_week}}连红</span>
            </div>
            <div class="int-r">
              <p>{{hotList.allnum}}中{{hotList.hitnum}}</p>
            </div>
          </div>
          <div class="content">
            <div class="con-top">
              <img src="../../../assets/img/foot.png" alt="">
              <span>预计回报:</span>
              <span>{{hotList.ireturnrate}}倍</span>
              <span class="leagues">精选赛事</span>
              <span>截止</span>
              <span>{{hotList.cendtime}}</span>
            </div>
            <p>{{hotList.note}}</p>
            <div class="con-bottom">
              <span>自购<span class="buy">{{hotList.itmoney}}</span>元</span>
              <span class="con-bottom-follow">跟单<span class="buy">{{hotList.copycount}}</span>人</span>
              <input class="btn1" type="button" value="立即跟单">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {
    hotDocmentsList
  } from '@/request/api';
  export default {
    data() {
        return {
      hotList: []
    }
    },
    created() {
        hotDocmentsList({
        'fid': 'web_jczq_hot_List',
        'ps': 1,
        'pn': 1
      }).then(res => {
        this.hotList = res.Resp.rows.row
      })

    }

  }

</script>

<style lang="scss" scoped>
  .hot {
    .hot-top {
      width: 100%;
      height: 0.92rem;
      border-bottom: 1px solid #eeeeee;
      clear: both;
      background-color: #FFFFFF;
      z-index: 9;

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
          background: url('../../../assets/img/gd/search.png') no-repeat;
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
          background: url('../../../assets/img/gd/guanzhu.png') no-repeat;
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

    .hot-bottom {
      .gditem {
        position: relative;
        height: 3.1rem;
        border-bottom: 1px solid #eeeeee;

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
              background: url('../../../assets/img/gd/yuanjiao.png') no-repeat;
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
            }
          }
        }
      }

    }
  }

</style>