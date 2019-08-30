<template>
    <div class="billingf">
        <!-- 头部 -->
        <header class="header">
            <i class="back-icon" @click="backAction"></i>
            <h1>预约发单</h1>
            <router-link to="/help/yygd">
                <i class="msg-icon"></i>
            </router-link>
        </header>
        <!-- 内容 -->
        <div class="content">
            <img src="../../assets/img/gd/sorry.png" class="jinggao" />
            <p>很抱歉，您不具备预约发单权限</p>
            <div>目前预约发单只有红人可使用，其他用户将根据发单人资质择优选取发放权限，您也可以主动联系客服申请，工作人员将根据您的资质情况来发放权限</div>
            <div class="footer">
                <div @click="kfAction" class="kf-box">
                    <img src="../../assets/img/gd/erji.png" />
                    <span class="kefu">在线客服</span>
                </div>
                <img src="../../assets/img/gd/telphone.png" />
                <span href="tel:4000696159" class="tel">400-0696-159</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        metaInfo: {
      title: '预约发单'
  	},
        methods: {
            backAction() {
                this.$router.push('/gd');
            },
            kfAction() {
                window.location.href = 'http://chat.live800.com/live800/chatClient/floatButton.js?jid=4618724443&companyID=331528&configID=124917&codeType=custom&enterurl=m.159cai.com'
            }
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
            right: .4rem;
            width: 0.36rem;
            height: 0.36rem;
            background: url('../../assets/img/gd/xinxi.png');
            background-size: contain;
        }

        .back-icon {
            position: absolute;
            top: .32rem;
            left: .4rem;
            width: 0.36rem;
            height: 0.36rem;
            background: url('../../assets/img/gd/back.png');
            background-size: contain;
        }

    }

    .content {
        margin-top: 2.3rem;

        .jinggao {
            width: 1.01rem;
            height: 1.01rem;
            margin: 0 auto;
            display: block;
        }

        p:nth-of-type(1) {
            text-align: center;
            height: 1.55rem;
            font-size: 0.3rem;
            color: #666666;
            line-height: 1.55rem;
            margin: 0;
        }

        div:nth-of-type(1) {
            padding: 0 0.6rem;
            font-size: 0.24rem;
            color: #999999;
            line-height: 0.4rem;
        }

        .footer {
            padding: 0 1.35rem;
            height: 1.06rem;
            padding-top: 0.82rem;
            box-sizing: border-box;

            img {
                width: 0.3rem;
                height: 0.3rem;
                float: left;
            }

            img:nth-of-type(2) {
                width: 0.29rem;
                height: 0.32rem;
                margin-left: 1rem;
                float: left;
            }

            .kf-box {
                font-size: 0.24rem;
                color: #333333;
                display: inline-block;
                float: left;
                .kefu {
                margin-left: 0.1rem;
                }

            }


            .tel {
                font-size: 0.26rem;
                display: inline-block;
                color: #333333;
                margin-left: 0.1rem;
                float: left;
                text-decoration: none;
            }
        }
    }
</style>