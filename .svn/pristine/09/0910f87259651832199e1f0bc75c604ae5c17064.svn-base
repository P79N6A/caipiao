<template>
	<div class="usertx">
		<account-header title='提现' backUrl='-1'>
			<router-link to='/account/txjl' class="right">提现记录</router-link>
		</account-header>
		<div class='content'>
	        <div class='icard'>
	            <img class='fl' :src="bankImg" alt="">
	            <div class='info fl'>
	                <p class='clearfix'><span class='bank'>{{ bankName }}</span><span class='bankNo'>({{ '尾号'+ bankLastNum}})</span></p>
	                <p class='userName'>{{ userInfo.rname }}</p>
	            </div>
	        </div>
	         <div class='num'>
	            <label>开户姓名</label>
	            <input type="text" class='user' name="" placeholder="请输入开户姓名" v-model='trueName'>
	        </div>
	        <div class='num number'>
	            <label>提款金额</label>
	            <input type="number" class='money' name="" placeholder="请输入提款金额，最少10元" v-model='drawmoney'>
	        </div>
	        <input type="button" name="" class='draw' value="提现" @click='handleDrawmoney'>
	        <div class='tips'>
	            <s></s>
	            <div class='tip'>温馨提示</div>
	            <ul>
	                <li>1、提款不收取手续费，为防止恶意提现，每日提款次数最多为3次（提款处理中与提款成功次数的总和） </li>
	                <li>
	                    2、为了防止套现和洗钱，每次充值后需消费充值金额30%后才能提现
	                </li>
	                <li>
	                    3、仅支持借记卡提现，不支持具有透支功能的信用卡，准贷记卡提现
	                </li>
	                <li>
	                    4、用户提款最快10分钟内到账，若一个工作日内还未到账，请您及时联系网站客服：400-0939-988
	                </li>
	            </ul>
	        </div>
	    </div>
	</div>
</template>
<script>
	import accountHeader from '@/components/header'
	import { userInfo,drawmoney,loginout } from '@/request/api'
	import { Toast,MessageBox } from 'mint-ui'
	export default {
		name: 'usertx',
		metaInfo: {
	      title: '提现',
	  	},
	  	components:{
			accountHeader
		},
		data:function(){
			return {
				bankCode:{
				    '1':['招商银行',require('imgs/account/zsyh.png')],
				    '2':['工商银行',require('imgs/account/gsyh.png')],
				    '3':['建设银行',require('imgs/account/jsyh.png')],
				    '4':['中国银行',require('imgs/account/zgyh.png')],
				    '5':['中国人民银行',require('imgs/account/zgrmyh.png')],
				    '6':['交通银行',require('imgs/account/jtyh.png')],
				    '8':['中信银行',require('imgs/account/zxyh.png')],
				    '9':['兴业银行',require('imgs/account/xyyh.png')],
				    '10':['光大银行',require('imgs/account/gdyh.png')],
				    '12':['中国民生银行',require('imgs/account/zgmsyh.png')],
				    '13':['中国农业银行',require('imgs/account/zgnyyh.png')],
				    '15':['农村信用合作社',require('imgs/account/ncxyhzs.png')],
				    '25':['中国邮政储蓄银行',require('imgs/account/zgyzcxyh.png')],
				    '1000':['广东发展银行',require('imgs/account/gdfzyh.png')],
				    '1001':['深圳发展银行',require('imgs/account/szfzyh.png')],
				    '4000':['上海浦东发展银行',require('imgs/account/shpdfzyh.png')],
				    '4001':['上海银行',require('imgs/account/shyh.png')]
				},
				userInfo:'',
				bankImg:'',
				bankName:'',
				bankLastNum:'',
				usermoney:'',
				trueName:'',
				drawmoney:'',
			}
		},
		methods:{
			getUserMoneyI(){
				let self=this;
				userInfo({"fid":"u_balance"}).then(d =>{
					let code=d.Resp.code,desc=d.Resp.desc;
		            if(code==0){
		            	let row=d.Resp.row;
		            	self.usermoney = row.ibalance
		            }else if(code==1){ //未登录
		            	MessageBox.alert("用户未登录").then(res=>{
		            		self.$router.push('/login')
		            	})
		            }else{
		            	Toast(desc)
		            }
				})
			},
			handleDrawmoney(){
				let self = this;
				if (self.trueName == "") {
		            Toast('请填写真实姓名');
		            return false;
		        }
		        if (!self.drawmoney) {
		            Toast('请输入提款金额');
		            return false;
		        }
		        if(self.usermoney>=10 && self.drawmoney <10){
		            Toast('提款金额至少为10元');
		            return false;
		        }
		        if(self.usermoney>=1 && self.usermoney<10 && self.usermoney!= self.drawmoney){
		            Toast('可提款的金额少于10元，请一次性提清。');
		            return false;
		        }
		        if(self.usermoney<10){
		            Toast('亲，暂不接受账户余额10元以下的提款申请哦。');
		            return false;
		        }
		        drawmoney({
		        	"realName":encodeURIComponent($.trim(self.trueName)),
		        	"tkMoney":$.trim(self.drawmoney),
		        	"tkType":0,
		        	"rnd":Math.random()
		        }).then(xml=>{
		        	var R = xml.Resp;
	                var code = R.code;
	                var desc = R.desc;
	                if (code == "0") {
	                    Toast('提交成功');
	                } else {
	                    if (code=="1"&&desc=="用户未登录"){
	                    	self.$router.push('/login')
	                    }else{
	                        Toast(desc);
	                    }
	                }
                	self.trueName=self.drawmoney='';
		        }).catch(res=>{
		        	 Toast('您所请求的页面有异常！');
		        })
			}
		},
		created() {
			// loginout()
			let self = this;
			let info = JSON.parse(sessionStorage.getItem('userInfo'));
			self.userInfo = info;
			if (!info.rname) { 
        		self.$router.push('/login/smrz');
        	}else if (!info.bank) {
        		self.$router.push('/login/bank');
        	}
        	// 银行种类
            if(info.code&&info.code.indexOf(',')>-1){
                var r=info.code.split(',');
                self.bankName=self.bankCode[r[0]][0];
                self.bankImg = self.bankCode[r[0]][1];
            }else{
                self.bankName = self.bankCode[info.code][0];
                self.bankImg = self.bankCode[info.code][1];
            }
            // 银行卡后4位
            self.bankLastNum = info.bank.slice(-4);
            self.getUserMoneyI()
		},
		mounted () {
			// loginout()
		},
	};
</script>
<style lang="less" scoped>
	.content{
    width:100%;
    box-sizing:border-box;
    padding:1rem 0.32rem .2rem;
}
.icard{
    width:100%;
    box-sizing:border-box;
    background:#eee;
    margin:0.32rem 0;
    border-radius:0.15rem;
    height:1.48rem;
}

.icard img{
    width:0.84rem;
    margin:0.32rem;
}
.info p{
    color:#999;
    font-size:0.26rem;
}
.info p:first-child{
    margin-top:0.4rem;
    margin-bottom:0.22rem;
}
.info p:first-child span{
    float: left;
}
.info p:first-child span:first-child{
    color:#333;
    font-size:0.3rem;
}
.info p:first-child span:nth-child(2){
    margin-top:0.02rem;
    margin-left:0.28rem;
}
.num{
    width:100%;
    height:0.9rem;
    box-sizing:border-box;
    border:1px solid #eee;
    border-radius:0.1rem;
}
.num label{
    font-size:0.3rem;
    color:#333;
    height:100%;
    float:left;
    line-height:0.88rem;
    padding:0 0.32rem;
}
.num input{
    float:left;
    border:0;
    height:0.85rem;
    padding:0;
    line-height:0.88rem;
    outline-style: none;
    color:#999;
    font-size:0.26rem;
    width:70%;
}
.number{
    margin-top:0.32rem;
}
.content>input{
    width:100%;
    box-sizing:border-box;
    height:0.9rem;
    border: 1px solid #d81d36;
    line-height:0.88rem;
    color:#d81d36;
    font-size:0.34rem;
    text-align: center;
    outline-style: none;
    border-radius:0.45rem;
    background: #fff;
    display:block;
    margin-top:0.6rem;
}

.tips{
    width:100%;
    position:relative;
    // height:4.4rem;
    box-sizing:border-box;
    border: 2px solid #ffbf6d;
    border-radius:0.15rem;
    background: #fffef4;
    margin-top:0.7rem;
    padding:0 0.32rem;
    // padding-bottom:0.32rem;
}
.tips s{
    width:0.27rem ;
    height:0.19rem;
    position:absolute;
    top:-0.19rem;
    left:0.92rem;
    background:url(../../assets/img/account/toTop.png) no-repeat;
    background-size:100%;
}
.tips .tip{
    font-size:0.28rem;
    color:#ff7e00;
    margin-top:0.3rem;
    padding-left: 0.4rem;
    background: url(../../assets/img/account/tip.png) no-repeat left center;
    background-size:0.32rem 0.3rem;
}
.tips ul{
    width:100%;
    padding:0.32rem 0;
}
ul li{
    font-size: 0.24rem;
    color:#666;
    line-height:0.34rem;
}

</style>