<template>
  <div class="customized">
    <nav class="nav">
      <div class="nav-wrap">
        <span>我定制的人</span>
        <span>定制我的人</span>
      </div>
    </nav>
    <div class="show-box">
      <p>没有定制用户</p>
    </div>
    <!-- <el-tabs class="box" v-model="activeName">
        <el-tab-pane class="my" label="我定制的人" name="first">
          <p>暂无数据</p>
        </el-tab-pane>
        <el-tab-pane class="follow-me" label="定制我的人" name="second">
          <p>暂无数据</p>
        </el-tab-pane>
      </el-tabs> -->
  
  </div>
</template>

<style lang="scss" scoped>
  .customized {
      overflow: hidden;
    .nav {
      width: 100%;
      height: .8rem;
      border-bottom: 1px solid #ccc;

      .nav-wrap {
        width: 3.36rem;
        height: 0.52rem;
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        border: 2px solid #d81d36;
        border-radius: 3px;

        span {
          width: 50%;
          height: 0.48rem;
          display: inline-block;
          float: left;
          font-size: 0.24rem;
          text-align: center;
          line-height: 0.48rem;
          color: #333;
          font-weight: 100;
        }
      }
    }

    /* .show-box {
            width: 100%;
            font-size: 0.3rem;
            text-align: center;
            /* margin-top: .5rem
            } */

  }

</style>
