<template>
  <div class="bottom-wrap">
    <el-tabs class="box" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="follow" label="我的关注" name="first">
          <p>暂无关注用户</p>
      </el-tab-pane>
      <el-tab-pane class="customized" label="我的定制" name="second">
          <myCustomized/>
      </el-tab-pane>
      <el-tab-pane class="documentary" label="我的跟单" name="third"></el-tab-pane>
      <el-tab-pane class="programme" label="我的方案" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import myCustomized from './recordCustomized'
  export default {
    components: {myCustomized},
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };

</script>

<style lang="scss" scoped>
  .follow{
    p {
      text-align: center;
      font-size: 0.3rem;
    }
  }
</style>

<style>
  .el-tabs__nav-scroll{
    overflow: hidden;
  }
  .el-tabs__active-bar{
    background-color: #d81d36;
    /* margin: 0 .5rem; */
  }
  
  .el-tabs__nav{
    width: 100%;
    margin: 0 .3rem;
  }
  .el-tabs__item.is-active{
    color: #000;
  }
</style>