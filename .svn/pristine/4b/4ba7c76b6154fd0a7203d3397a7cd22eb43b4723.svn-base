<template>
	<div class="account">
		<div class="head">
			<div class="head_one">
				<router-link tag='div' to='coupon' class="yhq" append></router-link>
			</div>
			<div class="head_two">
				<template v-if='userInfo.imageurl'>
					<img :src="'/api/upload/userPic/'+userInfo.imageurl+'.png'">
				</template>
				<template v-else>
					<img src="../../assets/img/usermr.png"/>
				</template>
				<div class="shezhi clearfix">
					<template v-if='userInfo.nickname'>
						<p class="nicheng">昵称：{{ userInfo.nickname }}</p>
					</template>
					<template v-else>
						<p class="she">请设置昵称</p>
						<p class="shez" @click='setNickname'>设置</p>
					</template>
				</div>
				<p class="nickname">ID：{{ userInfo.nickid }}</p>
			</div>
		</div>
		<div class="money">
			<div class="chongti">
				<router-link to="usercz" class='chongzhi' append>充值</router-link>
				<router-link :to='usertxUrl' class='tixian' append>提现</router-link>
			</div>
			<div class="Totalamount clearfix">
				<div class="Total">
					<p @click='eyeState=!eyeState'>账户总额(元) <img class="biyan" src="../../assets/img/account/eye.jpg"/></p>
					<template v-if='eyeState'>
						<div class="zonger">{{ parseFloat(userInfo.usermoeny)+parseFloat(userInfo.prize) }}</div>
					</template>
					<template v-else>
						<div class="zonger">****</div>
					</template>
				</div>
				<div class="balance">
					<p>
						<img src="../../assets/img/account/green_san.jpg"/>
						<span>余额</span>&nbsp&nbsp 
						<template v-if='eyeState'>
							<span class="usermoeny">{{ userInfo.usermoeny }}</span>
						</template>
						<template v-else>
							<span class="usermoeny">****</span>
						</template>
					</p>
					<div>
						<img src="../../assets/img/account/red_san.jpg"/>
						<span>彩金 </span>&nbsp&nbsp
						<template v-if='eyeState'>
							<span class="prize">{{ userInfo.prize}}</span>
						</template>
						<template v-else>
							<span class="prize">****</span>
						</template>
						
					</div>
				</div>
			</div>
		</div>
		<div class="Record">
			<ul>
				<li>
					<router-link tag='div' class="Record_left" to='waitpay' append>
						<div class="bg">
						</div>
						<div class="wenzi">
							<p>待支付订单</p>
							<p>查看所有待支付订单</p>
						</div>
					</router-link>
					<router-link tag='div' class="Record_left" to='paylottery' append>
						<div class="bg">
						</div>
						<div class="wenzi">
							<p>购彩记录</p>
							<p>查看全部订单</p>
						</div>
					</router-link>
				</li>
				<li>
					<router-link tag='div' class="Record_left" to='zhlist' append>
						<div class="bg bg2">
						</div>
						<div class="wenzi">
							<p>追号记录</p>
							<p>追号订单记录</p>
						</div>
					</router-link>
					<router-link tag='div' class="Record_right" to='integral' append>
						<div class="bg bg1">
						</div>
						<div class="wenzi">
							<p>积分：<span class="jifen">{{ userInfo.ipoint }}</span></p>
							<p>积分商城 大惊喜</p>
						</div>
					</router-link>
					
					
				</li>
				<li>
					<router-link tag='div' class="Record_left" to='integralDetail' append>
						<div class="bg bg4">
						</div>
						<div class="wenzi">
							<p>积分明细</p>
							<p>积分收支明细</p>
						</div>
					</router-link>
					<router-link tag='div' class="Record_right" to='accountDetail' append>
						<div class="bg bg3">
						</div>
						<div class="wenzi">
							<p>账户明细</p>
							<p>资金流水明细 </p>
						</div>
					</router-link>
				</li>
				<li>
					<router-link tag='div' class="Record_left" to='explainList' append>
						<div class="bg_jieshuo">
						</div>
						<div class="wenzi">
							<p>解说记录</p>
							<p>查看名家解说记录</p>
						</div>
					</router-link>
					<router-link tag='div' class="Record_right" to='set' append>
						<div class="bg bg5">
						</div>
						<div class="wenzi">
							<p>账户设置</p>
							<p>实名、推送、建议</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<account-footer :loginState='loginState' current='2'></account-footer>
		<div class="tanchuang-bg">
			<div class="tanchuang">
				<p class="title">设置昵称</p>
				<input type="text"  id="btn1" placeholder="2-12个字符" />
				<span class="xxx"></span>
				<p class="tishi">请输入昵称</p>
				<p class="tishi2">昵称支持中文、英文、数字</p>
				<div class="sure">
					<a href="javascript:;" class="quxiao">取消</a>
					<a href="javascript:;" class="ok">确定</a>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
import accountFooter from '@/components/footer'
import { checklogin,userInfo,addUserNickname,loginout } from '@/request/api';
import { Toast,MessageBox,Indicator  } from 'mint-ui'
export default {
	name: 'accountIndex',
	data:function(){
		return {
			loginState:false,
			userInfo:new Object(),
			usertxUrl:'',
			eyeState:true
		}
	},
	components:{
		accountFooter
	},
	methods:{
		setNickname(){
			let self = this;
			MessageBox.prompt('设置昵称(昵称支持中文、英文、数字)').then(({value,action}) => {
				debugger
				let reg1 = /(?!(\D*\d){4})^[\u4e00-\u9fa5\w]{2,12}$/;
				let len = value.replace(/[^\x00-\xff]/g,"aa").length;
				if (!value) {
					Toast('请输入昵称');
					return false
				}
				if (len > 12){
			 		Toast('昵称不能超过12个字符');
			        return false;
			    }
			    if (len < 3){
			 		Toast('昵称得少于2个字符');
			        return false;
			    }
				if (!reg1.test(value)){
					Toast('昵称支持中文、英文、数字');
					return false
				}
				addUserNickname({
					"nickname":value
				}).then(res=>{
					var code = res.Resp.code;
			 		var desc = res.Resp.desc;
				 	if(code==0){
				 		Toast(desc);
						location.reload()
					}
				})
			}).catch(() => {
				Toast("取消设置昵称")
			});;
		}

	},
	created() {
		Indicator.open('加载中...');
		let self = this,info1 = new Object(),info2 = new Object();
		checklogin().then(res => {
            const code = res.Resp.code;
            if (code === 0 ) {
                self.loginState = true
            }else{
            	self.loginState = false
                self.$router.push('/login')
            }
        })
        userInfo({
        	"fid":"u_sinfo",
        	"rnd":Math.random()

        }).then(res =>{
        	info1 = res.Resp.row
        	userInfo({
	        	"fid":"u_ainfo",
	        	"rnd":Math.random()
	        }).then(res =>{
	        	info2 = res.Resp.row
	        	self.userInfo = $.extend(info1,info2)
	        	if (!self.userInfo.rname) { 
	        		self.usertxUrl = '/login/smrz'
	        	}else if (!self.userInfo.bank) {
	        		self.usertxUrl = '/login/bank'
	        	}else{
	        		self.usertxUrl = '/account/usertx'
	        	}
	        	sessionStorage.setItem("userInfo",JSON.stringify(self.userInfo))
	        	Indicator.close();
	        	// self.$store.dispatch('changeUserInfo',self.userInfo);
	        })
        })
        
	},
	mounted () {
		// loginout()
	},
};
</script>
<style lang="less" scoped>
	@images: "../../assets/img/account";
	.account{
		padding-bottom: 1rem;
	}
	*{
		line-height: 1.2;
	}
	.head{
	width: 100%;
	height: 3.48rem;
	background-color: #cd282c;
	padding-top: 0.15rem;
}
.head_one{
	width: 100%;
	margin: 0 auto;
	height: 0.33rem;
}
.head_two{
	width: 100%;
	height: 3.14rem;
	position: relative;
}
.head_two img{
	width: 1.38rem;
	height: 1.38rem;
	border-radius: 50%;
	border: 3px solid #FFFFFF;
	margin-left: 2.92rem;
	margin-top: 0.22rem;
	vertical-align: middle;
}
.yhq{
	width: 0.33rem;
	height: 0.33rem;
	float: right;
	margin-right: .2rem;
	background: url("@{images}/kefu.png") 0 0 no-repeat;
	background-position: 0 -0.48rem;
	background-size: 100%;

}
.shezhi{
	width: 100%;
	height: 0.3rem;
	margin-top: 0.2rem;
}

.shezhi p:nth-of-type(1){
	font-size: 0.26rem;
	line-height: 0.3rem;
	float: left;
	margin-left: 2.54rem;
	color: #FFFFFF;
	margin-top: -0.03rem;
}
.shezhi p:nth-of-type(2){
	width: 0.68rem;
	border-radius: 20px;
	background-color: #a01f22;
	font-size: 0.22rem;
	line-height: 0.31rem;
	color: #FFFFFF;
	text-align: center;
	float: left;
	margin-left: 0.12rem;
}
.nicheng{
    margin-left:0!important; 
    width: 100%;
    text-align: center;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
.nickname{
	/*margin-left: 2.38rem;*/
	text-align: center;
	margin-top: 0.2rem;
	font-size: 0.31rem;
	color: #FFFFFF;
}
.money{
	width: 100%;
	height: 2.58rem;
	border-bottom: 0.2rem solid #f2f2f2;
}
.chongti{
	width: 100%;
	height: 0.88rem;
	border-bottom: 1px solid #eeeeee;
}
.chongzhi,.tixian{
	width: 50%;
	box-sizing: border-box;
	border-right: 1px solid #EEEEEE;
	height: 0.86rem;
	font-size: 0.34rem;
	line-height: 0.86rem;
	text-align: center;
	color: #d81d36;
	display: block;
	float: left;
}
.tixian{
	border: none;
	color: #006cff;
}
.Totalamount{
	width: 100%;
	height: 0.82rem;
	margin-top: 0.44rem;
}
.Total,.balance{
	width: 50%;
	float: left;
	box-sizing: border-box;
	border-right: 1px dashed #EEEEEE;
	height: 0.82rem;
	
}
.Total{
	padding-left: 0.95rem;
}
.balance{
	padding-left: 0.85rem;
	border: none;
}
.balance img{
	width: 0.1rem;
	height: 0.14rem;
	margin-right: 0.12rem;
}
.Total p{
	font-size: 0.26rem;
	color: #666666;
	line-height: 0.26rem;
	margin-bottom: 0.2rem;
}
.Total p img{
	width: 0.31rem;
	height: 0.19rem;
}
.Total div{
	font-size: 0.36rem;
	color: #d81d36;
	line-height: 0.36rem;
	width: 1.6rem;
	text-align: center;
}
.balance p{
	color: #d81d36;
	font-size:0.24rem;
	margin-bottom: 0.2rem;
}
.balance div{
	color: #ff5400;
	font-size:0.24rem;
}
.balance p span,.balance div span{
	color: #333333;
}
.usermoeny{
	color: #d81d36!important;
}
.prize{
	color: #ff5400!important;
}
.Record ul li{
	width: 100%;
	height: 1.49rem;
	border-bottom: 1px solid #f5f5f5;
	border-top:1px solid #fcfcfc;
	list-style: none;
}
.Record_left,.Record_right{
	margin: 0.22rem 0;
	width: 50%;
	float: left;
	box-sizing: border-box;
	border-right: 1px solid #eeeeee;
}
.Record_right{
	border: none;
}
.bg{
	width: 0.35rem;
	height: 0.35rem;
	background: url("@{images}/small_tb.png") 0 0 no-repeat;
	background-size: 100%;
	float: left;
	margin-top: 0.33rem;
	margin-left: 0.32rem;
}
.bg_jieshuo{
	width: 0.35rem;
	height: 0.35rem;
	background: url("@{images}/jieshuo.png") 0 0 no-repeat;
	background-size: 100%;
	float: left;
	margin-top: 0.33rem;
	margin-left: 0.32rem;
}
.bg1{
	background-position: 0 -0.41rem;
}
.bg2{
	background-position: 0 -0.81rem;
}
.bg3{
	background-position: 0 -1.19rem;
}
.bg4{
	background-position: 0 -1.59rem;
}
.bg5{
	background-position: 0 -2rem;
}
.wenzi{
	float: left;
	margin-left: 0.3rem;
}
.wenzi p:nth-of-type(1){
	font-size: 0.28rem;
	color: #333333;
	margin-bottom: 0.22rem;
	margin-top: 0.1rem;
}.wenzi p:nth-of-type(2){
	font-size: 0.24rem;
	color: #999999;
}
.jifen{
	color: #ff5400;
}
.tanchuang{
	width: 5.84rem;
	height: 3.7rem;
	background: #FFFFFF;
	position: absolute;
	top: 4.58rem;
	left: 50%;
	margin-left: -2.92rem;
	z-index: 11;
	display: none;
}
.title{
	width: 100%;
	height: 0.9rem;
	font-size: 0.32rem;
	line-height: 0.9rem;
	color: #000000;
	text-align: center;
}
	
</style>
