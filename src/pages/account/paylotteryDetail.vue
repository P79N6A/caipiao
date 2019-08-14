<template>
	<div class="paylotteryDetail">
		<account-header title='投注详情' backUrl='-1'></account-header>
		

	</div>
</template>
<script>
	import accountHeader from '@/components/header'
	import { checklogin,webTouZhus,webFollowRecord } from '@/request/api'
	import { Toast,MessageBox,Indicator } from 'mint-ui'
	export default {
		name: 'paylotteryDetail',
		metaInfo: {
	      title: '投注记录详情',
	  	},
	  	components:{
			accountHeader
		},
		data:function(){
			return {
				
			}
		},
		methods:{
			getList(type,pn){
				console.log('getList')
				let self = this;
				if (self.nav2Current == 3) {//跟单的接口与其他接口不是同一个
					webFollowRecord({
						"fid": type,
						"pn": pn,
						"ps": this.ps
					}).then(res=>{
						self.dataHandling(res)
					}).catch(err =>{
			            console.log("网络出错")
			        })
				}else{
					//全部 投注 发单接口
					webTouZhus({
						"fid": type,
						"pn": pn,
						"ps": this.ps
					}).then(res=>{
						self.dataHandling(res)
					}).catch(err =>{
			            console.log("网络出错")
			        })
				}
				
			},
			dataHandling(res){//数据处理
				let code = res.Resp.code,desc = res.Resp.desc,self = this;
				if(code == "0"){
					let data = res.Resp.rows;
					if (!data.row) {
						Indicator.close()
					}else{
						if(data.row.length == self.ps){
							// debugger
		                	self.list = self.list.concat(data.row);
		                    Indicator.close()
		                    self.loading = false;
		                }else if(data.row.length>0&&data.row.length<10 ){
		                   	self.list = self.list.concat(data.row);
		                    Indicator.close()
		                }else{
		                	let rs = new Array(data.row);
		                	self.list = self.list.concat(rs);
		                    Indicator.close()
		                }
					} 
				}else if (code == "1"){
					Indicator.close()
					MessageBox.alert("请登录！").then(res=>{
						self.$router.push('/login')
					})
				}else{
					Indicator.close()
					Toast(desc);
				}
			},
			loadMore() {
				console.log('loadMore')
				let self = this,data='';
			 	self.loading = true;
			 	Indicator.open('加载中...');
			 	setTimeout(() => {
			 		self.pn++
				    data = self.data[self.nav2Current][self.nav1Current]
				    self.getList(data,self.pn)
			 	},1500)
			    
			},
			changeList(type1,type2){
				console.log('changeList')
				let self = this,data='';
				self.list = [];
				self.pn = 1;
				data = self.data[type1][type2]
				self.loading = true;
				Indicator.open('加载中...');
				self.getList(data,1)
			},
			goDetail(item){
				let self = this;
				item = JSON.parse(item);
				console.log(item)
			}
		},
		created() {
			
		}
	};
</script>
<style lang="less" scoped>
.content{
    width:100%;
    box-sizing:border-box;
    padding:1.3rem 0.30rem .3rem;
}
.paixu-bg{
	position: fixed;
	top: 0.9rem;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0,0,0,0.5);
	z-index: 9999;
}
.paixu{
	background-color: #FFFFFF;
	width: 100%;
	height: 3.2rem;
	padding: 0.2rem 0.4rem;
	box-sizing: border-box;
}
.paixu div{
	width: 100%;
	height: 0.69rem;
	font-size: 0.3rem;
	color: #999999;
	
}
.paixu div span:nth-of-type(1){
	height: 0.69rem;
	line-height: 0.69rem;
	
}
.paixu_bgs{
	display: inline-block;
	float: right;
	width: 0.35rem;
	height: 0.24rem;
	line-height: 0.69rem;
	background: url(../../assets/img/account/duigou.jpg);
	background-size: 100% 100%;
	margin-top: 0.2rem;
	
}
.paixu div.currents{
	color: #000000;
}
.fid{
	width: 100%;
	height: 0.92rem;
	border-bottom: 1px solid #EEEEEE;
	position: fixed;
	top: 0.9rem;
	padding: 0 0.4rem;
	box-sizing: border-box;
	background-color: #FFFFFF;
	z-index: 9;
	display: flex;
}
.fid li{
	flex: 1;
	height: 0.9rem;
	font-size: 0.3rem;
	color: #000000;
	list-style: none;
	line-height: 0.92rem;
	text-align: center;
}
.fid li:last-child{
	margin-right: 0;
}
.current{
	border-bottom: 1px solid #c6343d;
}
.every{
    width:100%;
    margin-top: 1.78rem;
}
.every .wdgd{
	width: 100%;
	display: flex;
	height: 1.37rem;
	overflow: hidden;
	list-style: none;
	position: relative;
}
.date{
	flex: 1;
	height: 1.37rem;
	font-size: 0.28rem;
	padding: 0.28rem 0.16rem 0.36rem 0.21rem;
	box-sizing: border-box;
}
.record{
	flex: 6;
	height: 1.37rem;
	overflow: hidden;
	border-bottom: 1px solid #EEEEEE;
	padding-left: 0.26rem;
	box-sizing: border-box;
}
.rename{
	float: left;
}
.rename p:nth-of-type(1){
	padding-top: 0.29rem;
	font-size: 0.3rem;
	line-height: 0.3rem;
	font-weight: 700;
}
.rename .jiner{
	padding-top: 0.19rem;
	line-height: 0.28rem;
	font-size: 0.28rem;
	color: #9e9e9e;
}
.jiner i{
	font-style: normal;
}
.usercode,.usercodes{
	float: right;
	margin-right: 0.76rem;
	font-size: 0.29rem;
	line-height: 1.37rem;
}
.usercodes{
	line-height: 0.24rem;
	padding-top: 0.38rem;
	box-sizing: border-box;
	margin-right: 0rem;
	width: 2.5rem;
}
.usercodes p{
	height: 0.24rem;
	font-size: 0.24rem;
	color: #d13429;
	text-align: center;
}
.usercodes .yzj{
	font-size: 0.27rem;
	line-height: 0.27rem;
	margin-bottom: 0.08rem;
}
.usercodes .yzjje{
	font-size: 0.27rem;
	line-height: 0.27rem;
}
.usercode i,.usercodes i{
	width: 0.16rem;
	height: 0.26rem;
	position: absolute;
	top: 0.54rem;
	right: 0.3rem;
	background: url(../../assets/img/go.png) no-repeat;
	background-size: 100% 100%;
}
</style>