<template>
  <div id="gd">
    <div class="hides">
      <h1 class="h1"><span>复制跟单</span><i></i></h1>
      <ul id="icon">
        <li class="niu">
          <div></div>
          <p>牛人推荐</p>
        </li>
        <li class="bang1">
          <div></div>
          <p>热门榜单</p>
        </li>
        <li class="redbill">
          <div></div>
          <p>红单爆料</p>
        </li>
        <li class="wdzj">
          <div></div>
          <p>我的跟单</p>
        </li>
      </ul>
      <!--广告位-->
      <div id="banner">
        <!--<img src="img/banner.jpg" />-->
        <!--#include virtual="/dedeinc/h5_cpoyadver.html"-->
      </div>
      <div class="hr">
        <img src="img/hongren.png" />
        <span>红人</span>
      </div>
      <!--红人列表-->
      <ul class="Head">

      </ul>
    </div>

  </div>
</template>

<script>
  //import footer from './components/footer'
  export default {

  }

</script>

<style lang="scss" scoped>
    .hides{
        display: block;
	    position: relative;
        .h1{
            height: 0.88rem;
            line-height: 0.88rem;
            font-size: 0;
            border-bottom: 1px solid #EEEEEE;
        }

    }
</style>
