<template>
  <div class="footers">

    <!--预约发单结构-->
    <div class="yuyue" v-show="showFd">
      <router-link to="/gd/Billingf">
        <!-- <div class="animated zoomIn"> -->
          <!-- <div class="yyfd" :class="[showFd ? 'rotate' : 'unrotate']"></div> -->
          <img class="yyfd" src="../assets/img/gd/yyfd.png" alt="" :class="[showFd ? 'unrotate' : 'rotate']">
        <!-- </div> -->
      </router-link>
      <router-link to="jczq/jchh">
        <span class="wyfd"></span>
      </router-link>
    </div>
    <footer>
      <router-link to='/' tag='div' :class="current==0?'home hover':'home'">
        <div class="home_bg" ></div>
        <div class="home_wz">购彩</div>
      </router-link>
      <!-- <router-link to='/gd/sensation' tag='div' :class="current==1?'gdy hover':'gdy'"> -->
      <div tag='div' :class="current==1?'gdy hover':'gdy'" class="gd_bg" @click="fdAction()" >
        <img :class="[showFd ? 'unrotate' : 'rotate']" src="../assets/img/gd/anniu.png" style="width: 0.8rem; height: 0.8rem;margin-top: 0.1rem;" alt="">
      </div>
      <!-- </router-link> -->
      <div class="gd-btn"></div>
      <template v-if='loginState'>
        <router-link tag='div' to='/account' :class="current==2?'My hover':'My'">
          <div class="My_bg"></div>
          <div class="My_wz">我的</div>
        </router-link>
      </template>
      <template v-else>
        <router-link tag='div' to='/login' :class="current==2?'My hover':'My'">
          <div class="My_bg"></div>
          <div class="My_wz">我的</div>
        </router-link>
      </template>

    </footer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showFd: false
      }
    },
    props: ['loginState', 'current'],
    methods: {
      fdAction() {
        this.showFd = !this.showFd
      }
    }
  };

</script>
<style lang="less" scoped>
  .yuyue {
    display: block;
    position: fixed;
    bottom: 1rem;
    background-color: #FFFFFF;
    width: 100%;
    height: 2.2rem;
    z-index: 99;
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));

    /* 标准的语法（必须放在最后） */
    .yyfd,
    .wyfd {
      width: 1.51rem;
      height: 1.5rem;
      display: block;
      position: absolute;
      -webkit-box-shadow: 0 0 12px 2px #999999;
      -moz-box-shadow: 0 0 12px 2px #999999;
      box-shadow: 0 0 12px 2px #999999;
      border-radius: 50%;
      top: .3rem;
    }

    .yyfd {
      left: 1.82rem;
      bottom: 0.5rem;
      /* background: url('../assets/img/gd/yyfd.png') no-repeat;
      background-size: cover; */
 
    }

    .wyfd {
      right: 1.82rem;
      bottom: 0.5rem;
      background: url('../assets/img/gd/wyfd.png') no-repeat;
      background-size: cover;
    }


  }

  .rotate {
    -webkit-transform:rotate(0deg);
    transform:rotate(0deg);
    -webkit-transition:-webkit-transform 1s ;
    transition:transform 1s ;
  }

  .unrotate {
    -webkit-transform:rotate(-313deg);
    transform:rotate(-313deg);
    -webkit-transition:-webkit-transform 1s ;
    transition:transform 1s ;
  }  


  footer {
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    border-top: 1px solid #c1c1c1;
    background-color: #FFFFFF;
  }

  .home,
  .gdy,
  .My {
    width: 33.3%;
    height: 100%;
    float: left;
  }

  .home {
    padding-left: 1rem;
    box-sizing: border-box;

  }

  .hover {
    .home_bg {
      background: url(../assets/img/home_xz.png) 0 0 no-repeat;
      background-size: 100%;
    }

    .home_wz,
    .My_wz,
    .gd_wz {
      color: #d81d36;
    }

    .gd_bg {
      width: 0.4rem;
      height: 0.4rem;
    }

    .My_bg {
      background: url(../assets/img/home_xz.png) 0 -0.95rem no-repeat;
      background-size: 100%
    }
  }

  .home_bg {
    width: 0.4rem;
    height: 0.4rem;
    background: url(../assets/img/home_b.png) 0 0 no-repeat;
    background-size: 100%;
    margin-top: 0.15rem;
    margin-bottom: 7px;
    margin-left: 2px;
  }

  .home_wz,
  .gd_wz,
  .My_wz {
    font-size: 0.24rem;
    line-height: 0.24rem;
  }

  .gdy {
    padding-left: 1rem;
    box-sizing: border-box;
  }

  /* .gd_bg{
        width: 0.4rem;
        height: 0.4rem;
        background: url(../assets/img/gd/anniu.png) 0 -0.5rem no-repeat;
        background-size: 100%;
        margin-top: 0.15rem;
        margin-bottom: 7px;
        margin-left: 3px;
    } */
  .gd-btn {
    /* width: 0.78rem;
        height: 0.78rem; */
    /* margin-top: 0.12rem;
        vertical-align: top;
        transition: 1s; */
  }

  .My {
    padding-left: 1rem;
    box-sizing: border-box;
  }

  .My_bg {
    width: 0.4rem;
    height: 0.4rem;
    background: url(../assets/img/home_b.png) 0 -0.95rem no-repeat;
    background-size: 100%;
    margin-top: 0.15rem;
    margin-bottom: 7px;
    margin-left: 2px;
  }

</style>
