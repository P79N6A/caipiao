<template>
  <div class="bottom-wrap">
    <el-tabs class="box" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="follow" label="我的关注" name="first">
          <p>暂无关注用户</p>
      </el-tab-pane>
      <el-tab-pane class="customized" label="我的定制" name="second">配置管理</el-tab-pane>
      <el-tab-pane class="documentary" label="我的跟单" name="third"></el-tab-pane>
      <el-tab-pane class="programme" label="我的方案" name="fourth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
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
</style>

<style>
        .el-tabs   {
        color: red;
    }

</style>