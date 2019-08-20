<template>
  <div class="recommend">
      <!-- 头部 -->
    <header class="header">
      <i class="msg-icon" @click="backAction"></i>
      <h1>牛人推荐</h1>
    </header>
    <!-- 折叠面板 -->
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="item in awesomeList" :key="item.uid"  name="1">
        <p>{{item.desc}}</p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import {
    recommendList
  } from '@/request/api';
  export default {
    data() {
      return {
        awesomeList: [],
        activeNames: ['1']
      }
    },
    methods: {
      backAction() {
        this.$router.go(-1);
        s
      },
      handleChange(val) {
        console.log(val);
      }
    },
    created() {
      recommendList().then(res => {
        this.awesomeList = res.rows
        //console.log(this.awesomeList)
      }).catch(err => {
        console.log(err);
      })
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
      left: .4rem;
      width: 0.36rem;
      height: 0.36rem;
      background: url('../../assets/img/gd/back.png');
      background-size: contain;
    }
  }

  .el-collapse-item__header.is-active {
      border-bottom-color: red;
  }

</style>
