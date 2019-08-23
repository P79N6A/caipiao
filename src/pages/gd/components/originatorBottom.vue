<template>
  <div class="infos">
    <ul class="every">
      <li class="gditem" data-gid="70" data-projid="CP70150747454" data-iupload="1">
        <div class="aticle">
          <div class="aticle_t"><img src="img/zuqiu.png"><span>英超</span><span class="jiezhi">截止</span><span
              class="shijian">08-19 21:45</span></div>
          <div class="aticle_z">跟单有惊喜，躺赢狂收米，快来跟我单，中奖不错过</div>
          <div class="aticle_x">
            <div class="div1">
              <p>1.52<span>倍</span></p>
              <p>预计回报</p>
            </div>
            <div class="div2">
              <p>200<span>元</span></p>
              <p>自购金额</p>
            </div>
            <div class="div3">
              <p>0<span>人</span></p>
              <p>跟单人数</p>
            </div>
            <input type="button" class="btn1" id="btn1" value="立即跟单">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    import { followUserDetail } from '@/request/api';
    export default {
      data() {
          return {
              userList: []
          }
      },
      created() {
        followUserDetail({
          'ps': 10
        }).then( res => {
              this.userList = res.Resp.rows
              console.log(this.userList)
          })
      }
    }
  </script>  

<style lang="scss" scoped>
  .infos {
    /*height:10rem;*/
    width: 100%;
    position: relative;
    overflow: hidden;
    display: block;

    .gditem {
      position: relative;
      /* height: 3.1rem; */
      border-bottom: 1px solid #eeeeee;

      .aticle {
        display: block;
        width: 100%;

        .aticle_t {
          display: block;
          height: 0.7rem;
          padding: 0.27rem 0 0 0.3rem;
          box-sizing: border-box;
          position: relative;

          img {
            width: 0.33rem;
            height: 0.31rem;
            float: left;
          }

          span:nth-of-type(1) {
            margin-left: 0.28rem;
            font-size: 0.24rem;
            float: left;
            line-height: 0.35rem;
          }

          .jiezhi {
            color: #999999;
            float: right;
            margin-right: 0.2rem;
            font-size: 0.24rem;
            margin-left: 0.13rem;
            line-height: 0.35rem;
          }

          .shijian {
            color: #999999;
            float: right;
            font-size: 0.24rem;
            margin-left: 0.13rem;
            line-height: 0.35rem;
          }
        }

        .aticle_z {
          width: 100%;
          font-size: 0.26rem;
          padding-left: 0.3rem;
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

        .aticle_x {
          display: block;
          width: 100%;
          height: 0.68rem;
          font-size: 0.26rem;
          padding-left: 0.4rem;
          margin-bottom: 0.3rem;
          box-sizing: border-box;

          div {
            display: block;
            height: 0.62rem;
            float: left;
            margin-left: 0.68rem;

            p:nth-of-type(1) {
              display: block;
              font-size: 0.28rem;
              color: #d81d36;
              text-align: center;

              span {
                color: #999999;
              }
            }

            p:nth-of-type(2) {
              display: block;
              font-size: 0.22rem;
              margin-top: 0.16rem;
              color: #999999;
            }
          }

          .div1 {
            margin-left: 0rem;
          }

          #btn1 {
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

</style>
