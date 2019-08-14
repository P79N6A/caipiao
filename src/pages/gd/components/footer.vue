<template>
  <div class="footers">
     <footer>
            <router-link to='/' tag='div' :class="current==0?'home hover':'home'">
                <div class="home_bg"></div>
                <div class="home_wz">采购</div>
            </router-link>
            <!-- <div>
                <img src="@/assets/img/gd/anniu.png" alt="" />
            </div> -->
            <template v-if='loginState'>
                <router-link tag='div' to='/account' :class="current==2?'My hover':'My'">
                    <div class="My_bg"></div>
                    <div class="My_wz" >我的</div>
                </router-link>
            </template>
            <template v-else>
                <router-link tag='div' to='/login' :class="current==2?'My hover':'My'">
                    <div class="My_bg"></div>
                    <div class="My_wz" >我的</div>
                </router-link>
            </template>
            
      </footer>
  </div>  
</template>
<script>
  export default {
    //props:['loginState','current'],
  };
</script>
<style lang="less" scoped>
 footer{
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
    .home,.gdy,.My{
        width: 33.3%;
        height: 100%;
        float: left;
    }
    .home{
        padding-left: 1rem;
        box-sizing: border-box;

    }
     .hover{
        .home_bg{
          background: url(../assets/img/home_xz.png) 0 0 no-repeat;
          background-size: 100%;
        }
        .home_wz,.My_wz,.gd_wz{
           color: #d81d36;
        }
        .gd_bg{
          background: url(../assets/img/home_xz.png) 0 -0.5rem no-repeat;
          background-size: 100%;
        }
        .My_bg{
          background: url(../assets/img/home_xz.png) 0 -0.95rem no-repeat;
          background-size:100%
        }
      }
    .home_bg{
        width: 0.4rem;
        height: 0.4rem;
        background: url(../assets/img/home_b.png) 0 0 no-repeat;
        background-size:100%;
        margin-top: 0.15rem;
        margin-bottom: 7px;
        margin-left: 2px;
    }
    .home_wz,.gd_wz,.My_wz{
        font-size: 0.24rem;
        line-height: 0.24rem;
    }
    .gdy{
        padding-left: 1rem;
        box-sizing: border-box;
    }
    .gd_bg{
        width: 0.4rem;
        height: 0.4rem;
        background: url(../assets/img/home_b.png) 0 -0.5rem no-repeat;
        background-size: 100%;
        margin-top: 0.15rem;
        margin-bottom: 7px;
        margin-left: 3px;
    }
    .My{
        padding-left: 1rem;
        box-sizing: border-box;
    }
    .My_bg{
        width: 0.4rem;
        height: 0.4rem;
        background: url(../assets/img/home_b.png) 0 -0.95rem no-repeat;
        background-size: 100%;
        margin-top: 0.15rem;
        margin-bottom: 7px;
        margin-left: 2px;
    }
</style>
