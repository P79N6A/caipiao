<template>
  <div id="search">
    <!-- <mt-search placeholder="请输入发单人名称"></mt-search> -->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        clearable
        @search="onSearch"
        @cancel="onCancel"
        
      />
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    metaInfo: {
      title: '搜索--彩票网'
  	},
    methods: {
      onCancel() {
        this.$router.replace({path:'/gd'});
      }
    }
  }

</script>

<!-- <style>
    .mint-searchbar{
        background-color: #fff;
        border-bottom: 1px solid #eeeeee;


    }
  .mint-searchbar-core {
    background-color: #F5F5F5;
  }

  .mint-searchbar-inner {
    background-color: #F5F5F5;
    border-radius: .2rem;
    font-size: 0.28rem;
  }

  .mint-searchbar-cancel {
    color: #000;
  }

  ..mintui-search{
      font-size: .rem;
  }

</style> -->
