<template>
  <div class="customized">
    <nav class="nav">
      <div class="nav-wrap">
        <ul>
          <li></li>
        </ul>
        <span @click.prevent="flag=true">我定制的人</span>
        <span @click.prevent="flag=false">定制我的人</span>
      </div>
    </nav>
    <customized v-if="flag"></customized>
    <followme v-else="flag"></followme>
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

<script>
  import customized from './customized'
  import followme from './followme'
  export default {
    components: {
      customized,
      followme
    },
    data() {
      return {
        navList: [{
            name: '我定制的人'
          },
          {
            name: '定制我的人'
          }
        ],
        flag: true
      }
    }
  }

</script>

<style lang="scss" scoped>
  .customized {
    overflow: hidden;

    .nav {
      width: 100%;
      height: 1rem;
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

          &.active {
            background-color: #d81d36;
          }
        }
      }

      .active {
        background-color: #d81d36;
        color: #fff;
      }
    }

    .show-box {
      width: 100%;
      font-size: 0.3rem;
      text-align: center;
      margin-top: .5rem
    }

  }

</style>
