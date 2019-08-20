<template>
    <div class="gdxq">
            <header class="header">
                    <h1>跟单详情</h1>
                    <router-link to="/">
                      <i class="msg-icon"></i>
                    </router-link>
                  </header>
              
    </div>
</template>

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
      top: .25rem;
      right: .15rem;
      width: 0.4rem;
        height: 0.4rem;
      background: url('../../assets/img/home_b.png');
      background-size: cover;
    }
  }

</style>