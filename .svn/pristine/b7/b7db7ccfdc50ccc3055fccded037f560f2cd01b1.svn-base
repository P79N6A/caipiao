<template>
	<div class="usercz">
		<usercz-header title='充值' backUrl='-1'></usercz-header>
		<section class="buyname">
			<span>{{userInfo.nickid}}</span>
			<p class="buymoney"><span>{{userInfo.usermoeny}}</span><i>元</i></p>
		</section>
		<div class="chongzhi">
				<div class="top-mar pay-money">
					<div class="pay-money-in">
						<input type="number"  style="display: none;"/>
						<p>充值金额<input type="number" value="10" placeholder="请输入充值金额" maxlength="6" id="money" onkeyup= "if(this.value == '0'){alert('只能整数');this.value='';}" v-model='payMoney'><i>元</i></p>
						<ul class="pay-money-ch">
							<li :class="payMoney==10?'current':''" @click='payMoney=10'><em data-target="10" id="10" :class="payMoney==10?'cur':''">10元</em></li>
							<li :class="payMoney==100?'current':''" @click='payMoney=100'><em data-target="100" id="100" :class="payMoney==100?'cur':''">100元</em></li>
							<li :class="payMoney==300?'current':''" @click='payMoney=300'><em data-target="300" id="300" :class="payMoney==300?'cur':''">300元</em></li>
							<li :class="payMoney==500?'current':''" @click='payMoney=500'><em data-target="500" id="500" :class="payMoney==500?'cur':''">500元</em></li>
						</ul>
					</div>
				</div>
				<div class="pay-bank" id="chargetypeTab">
					<ul @click='QQpayState =!QQpayState'>
						<li><em class="cz_icon2"></em></li>
						<li>
							<p class="bank-tit">银行卡充值</p>
							<p class="bank-about">极速到账，无手续费，网银支付限额以各发卡银行限额为准</p>
						</li>
						<li>
							<em :class="QQpayState?'true-icon true-icon-cur':'true-icon'" id="qq" data-type="qq"></em>
						</li>
					</ul>
				</div>
				<div class="tipss">
					<p>为防止恶意套现、洗钱，单笔充值后需消费30%方可提现。</p>
				</div>
			</div>
			<form name="payform" method="post" action="/pwap/addmoney.phpx" id="payform" style="display: none">
				<!-- <input type="hidden" name="banktype" id="banktype" value="00" /> -->
				<input type="hidden" name="bankid" id="bankid" value="3" />
				<input name="addmoney" type="hidden" id="addmoney" size="6" />
			</form>
			<div class="submit" @click='pay'>
				<p>立即支付</p>
			</div>
	</div>
	
</template>
<script>
	import userczHeader from '@/components/header';
	import { qqPay } from '@/request/api';
	import { Toast,MessageBox  } from 'mint-ui'
	export default {
		name: 'usercz',
		metaInfo: {
	      title: '充值中心',
	  	},
		components:{
			userczHeader
		},
		data:function(){
			return {
				cur:0,
				list1:[],
				list2:[],
				list3:[],
				userInfo:'',
				money:'',
				payMoney:'10',
				QQpayState:true,
			}
		},
		methods:{
			pay(){
				let self = this;
				if (self.payMoney == "" || self.payMoney < 10) {
					Toast('请选择或输入充值金额并且充值金额不能小于10元~')
					return false
				}
				if (!self.QQpayState) {
					Toast('请选择充值方式')
					return false
				}
				if (!self.userInfo.rname) {
					MessageBox.alert('请先实名认证！').then(action => {
  						self.$router.push('/login/smrz')
  					});
  					return false
				}
				if (self.payMoney > 5000000) {
					Toast('存入金额最高不能超过500万元人民币');
					return false;
				}
				qqPay({
					"addmoney":self.payMoney,
					"bankid":"66"
				}).then( res => {
					const code = res.Resp.code;
					if (code == 1) {//未登录
						MessageBox.confirm('请先登录！').then(action => {
	  						self.$router.replace({
			                    path: '/login',
			                    query: {
			                        redirect: router.currentRoute.fullPath
			                    }
			                });
	  					});
					}
					if (code == 0) {
						const desc = res.Resp.row.code_url;
						MessageBox.confirm('您确定要打开你的网银银卡进行支付吗？').then(action => {
							location.href = desc;
	  					});
					}
				})
			}
		},
		created() {
			this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
		},
		mounted () {
			// loginout()
		},
	};
</script>
<style lang="less" scoped>
	@images: "../../assets/img/account";
	.buyname{
		width: 100%;
		height: 0.96rem;
		position: fixed;
		z-index: 99;
		top: 1rem;
		border-bottom: 0.2rem solid #EEEEEE;
		background-color:#FFFFFF ;
	}
.buyname span{
	float: left;
	margin-left: 0.32rem;
	font-size: 0.34rem;
	line-height: 0.96rem;
	color: #333333;
}
.buymoney{
	float: right;
	font-size: 0.32rem;
	line-height: 0.96rem;
	color: #d81d36;
	margin-right: 0.32rem;
}

.buymoney span{
	color: #d81d36;
}

.buymoney i{
	font-style: normal;
	color: #666666;
	margin-left: 5px;
}

.chongzhi{
	margin-bottom: 2rem;
}
.top-mar{
	width: 100%;
	height: 2.6rem;
	margin-top: 2.03rem;
	border-bottom: 0.2rem solid #EEEEEE;
}
.pay-money-in{
	width: 100%;
	height: 2.6rem;
	overflow: hidden;
	
}
.pay-money-in p{
	width: 100%;
	font-size: 0.34rem;
	color: #333333;
	line-height: 1.34rem;
	padding-left: 0.32rem;
	border-bottom: 1px solid #EEEEEE;
}
.pay-money-in input{
	width: 4.82rem;
	line-height: 0.5rem;
	height: 0.5rem;
	text-align: right;
	border: none;
	outline: 0;
	font-size: 0.34rem;
	color: #000000;
	margin-left: 0.25rem;
}
.pay-money-in i{
	font-style: normal;
	font-size: 0.34rem;
	color: #333333;
	margin-left: 0.1rem;
}
.pay-money-ch{
	width: 100%;
	height: 1.27rem;
	overflow: hidden;
	padding: 0.32rem;
	box-sizing: border-box;
}
.pay-money-ch li{
	float: left;
	width: 1.46rem;
	height: 0.58rem;
	border: 1px solid #EEEEEE;
	border-radius: 5px;
	margin-right: 0.2rem;
	font-size: 0.3rem;
	color: #666666;
	list-style: none;
	text-align: center;
	line-height: 0.58rem;
	position: relative;
}
.pay-money-ch li em{
	font-style: normal;
}
.pay-money-ch li:last-child{
	margin-right: 0rem;
}
.pay-money-ch li.current{
	border: 1px solid #D81D36;
}
.pay-money-ch li .cur:after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.43rem;
    height: 0.28rem;
    content: "";
    background: url("@{images}/sel2.png") no-repeat;
    background-size: 100% 100%;
}
.pay-bank ul{
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #EEEEEE;
}
.pay-bank ul li{
	float: left;
}
.pay-bank ul li:nth-of-type(1){
	width: 1.34rem;
	padding: 0.36rem 0.31rem;
	box-sizing: border-box;
	
}
.pay-bank ul li:nth-of-type(2){
	width: 5.22rem;
}
.pay-bank ul li:nth-of-type(3){
	width: 0.92rem;
	padding: 0.56rem 0.2rem 0.57rem 0.2rem;
	box-sizing: border-box;
}
.cz_icon2{
	display: block;
	width: 0.72rem;
	height: 0.72rem;
	float: left;
	background: url("@{images}/cz_icon.png");
	background-position: 0 -9.44rem;
	background-size: cover;
}
.bank-tit{
	font-size: 0.32rem;
	color: #333333;
	margin-top: 0.32rem;
	margin-bottom: 0.2rem;
	line-height: 0.32rem;
}
.bank-about{
	font-size: 0.24rem;
	color: #999999;
	line-height: 1.2;
	margin-bottom: 0.26rem;
}

.true-icon{
	display: block;
	float: left;
	width: 0.3rem;
	height: 0.3rem;
	
	background: url("@{images}/wxz.png") no-repeat;
	background-size: 100% 100%;
}
.true-icon-cur{
	background: url("@{images}/xuanzhong.png") no-repeat;
	background-size: 100% 100%;
}
.tipss{
	width: 6.82rem;
	height: 0.57rem;
	border: 1px solid #ffbf6d;
	margin: 0 auto;
	font-size: 0.24rem;
	text-align: center;
	line-height: 0.57rem;
	border-radius: 5px;
	background-color: #fffef4;
	margin-bottom: 0.32rem;
	margin-top: 0.32rem;
}
.submit{
	width: 100%;
	height: 1.56rem;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #FFFFFF;
	z-index: 99;
	border-top: 0.2rem solid #EEEEEE;
}
.submit p{
	width: 6.8rem;
	height: 0.9rem;
	margin: 0 auto;
	border-radius:30px ;
	font-size: 0.32rem;
	color: #FFFFFF;
	text-align: center;
	line-height: 0.9rem;
	background-color: #d81d36;
	margin-top: 0.34rem;
}
</style>