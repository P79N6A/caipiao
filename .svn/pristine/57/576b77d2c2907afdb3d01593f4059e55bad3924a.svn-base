<template>
	<div class="dzf">
		<account-header title='待支付订单' backUrl='-1'></account-header>
		 <div class="content">
	    	<ul id="list" v-if='list&&list.length > 0'>
	    		<li v-for='(item,index) in list' :key='index'>
	    			<div class="list_top">
	    				<div class="list_top_title">
	    					<template v-if='item.lotterytype == 2'>
	    						竞彩篮球
	    					</template>
	    					<template v-else-if='item.lotterytype == 3'>
	    						胜负彩
	    					</template>
	    					<template v-else-if='item.lotterytype == 4'>
	    						任选九
	    					</template>
	    					<template v-else>
	    						竞彩足球
	    					</template>
	    				</div>
	    				<div class="list_top_time" v-if='item.oadddate'>
	    					{{ item.oadddate.substring(0,10) }}
	    				</div>
	    			</div>
	    			<div class="list_middle">
	    				{{item.title}}
	    			</div>
	    			<div class="list_bottom">
	    				<div class="list_bottom_coin">
	    					售价：<span>{{ item.salepeice }}</span><i>金币</i>
	    				</div>
	    				<template v-if='item.ibuystate == 0'>
	    					<div class="submit dzf" @click='goPay(item.salepeice,item.planNo,item.buyid)'>
		    					待支付
		    				</div>
	    				</template>
	    				<template v-else-if='item.ibuystate == 3'>
	    					<div class="submit ysx">
		    					已失效
		    				</div>
	    				</template>
	    				<template v-else>
	    					<div class="submit clz">
		    					处理中
		    				</div>
	    				</template>
	    			</div>
	    		</li>
	    	</ul>
	    	<p v-else class="noData">暂无数据</p>
	    </div>
	</div>
</template>
<script>
	import accountHeader from '@/components/header'
	import { explainZfList,checklogin,buyExplain,zfExplainOrder,payMoneyOrder } from '@/request/api'
	import { Toast,MessageBox } from 'mint-ui'
	export default {
		name: 'dzf',
		metaInfo: {
	      title: '待支付订单',
	  	},
	  	components:{
			accountHeader
		},
		data:function(){
			return {
				list:new Array(),
				pn:0,
				loading:false,
				ps:'10',
				userInfo:'',
			}
		},
		methods:{
			goPay(money,planNo,buyid){
				let self = this;
				if (money > self.userInfo.usermoeny) {
					MessageBox.alert("余额不足"+money+"元，是否继续支付").then(res=>{
						self.zfExplainOrderFun(money,planNo,buyid)
					})
				}else{
					MessageBox.alert("确认余额支付"+money+"元").then(res=>{
						self.buyExplainFun(planNo)
					})
				}
			},
			//余额支付
			buyExplainFun(planNo){
				let self = this;
				buyExplain({
					"channel":'159cai',
					"version":'1',
					"planNo":planNo
				}).then(res=>{
					let code = res.Resp.code,desc = res.Resp.desc||'网络错误';
					if (code == 0) {
						MessageBox.alert("购买成功").then(res=>{
							self.getList(self.userInfo.nickid)
						})
					}else if(code == 1){
						MessageBox.alert("未登录，请登录！").then(res=>{
							self.$router.replace({
			                    path: '/login',
			                    query: {
			                        redirect: router.currentRoute.fullPath
			                    }
			                });
						})
					}else{
						Toast(desc)
					}
				}).catch(res=>{
					Toast("网络错误")
				})
			},
			//直付
			zfExplainOrderFun(money,planNo,buyid){
				let self = this;
				zfExplainOrder({
					'channel': '159cai',
					'version': 1,
					'buyid': planNo //解说id
				}).then(res=>{
					let code = res.Resp.code,desc = res.Resp.desc||'网络错误';
					if (code == 0) {
						Toast(desc);
						payMoneyOrder({
							'channel': '159cai',
							'version': 1,
							'addmoney':money,
							'buyid':buyid,
							'bankid':35,
							'planNo':planNo,
							'payType':159
						}).then(res=>{
							let code = res.Resp.code,desc = res.Resp.desc||'网络错误';
							if (code == 0) {
								let result = res.Resp.row.result;
								if(result==''){
									let payUrl = res.Resp.row.payUrl;
									location.href = payUrl;
								}
							}else{
								Toast(desc);
							}	
						})
					}else if(code == 1){
						MessageBox.alert("未登录，请登录！").then(res=>{
							self.$router.replace({
			                    path: '/login',
			                    query: {
			                        redirect: router.currentRoute.fullPath
			                    }
			                });
						})
					}else{
						Toast(desc)
					}
				})
				.catch(res=>{
					Toast("网络错误")
				})
			},
			getList(uid){
				let self = this;
				explainZfList({
					"version":1,
					"channel":"159cai",
					"uid":uid
				}).then(res=>{
					let code = res.Resp.code,desc = res.Resp.desc||'网络错误';
					if (code == 0) {
						if(res.Resp.rows&&res.Resp.rows.row) {
							self.list = res.Resp.rows.row
						};
					}else{
						Toast(desc)
					}
				})
			}
		},
		created() {
			checklogin().then(res => {
	            const code = res.Resp.code;
	            if (code == 1 ) {
	                this.$router.replace({
	                    path: '/login',
	                    query: {
	                        redirect: router.currentRoute.fullPath
	                    }
	                });
	            }
       		})
			this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
			this.getList(this.userInfo.nickid)
		}
	};
</script>
<style lang="less" scoped>
.content{
    width:100%;
    box-sizing:border-box;
    padding:1.3rem 0.30rem .3rem;
}
#list{
	position: relative;
	width: 100%;
	font-size: 0.4rem;
	text-align: center;
}
#list .zwsj{
	margin-top: 0.2rem;
	font-size: 0.4rem;
}
#list li{
	width: 100%;
	border-top: 0.22rem solid #f5f5f5;
	padding-top: 0.22rem;
	padding-bottom: 0.3rem;
	background-color: #fff;
}
.list_top{
	width: 100%;
	height: 0.35rem;
}
.list_top_title{
	width: 1.1rem;
	height: 0.35rem;
	margin-left: 0.4rem;
	font-size: 0.24rem;
	color: #fff;
	border-radius: 20px;
	float: left;
	background-color: #cccccc;
	text-align: center;
	line-height: 0.35rem;
}
.list_top_time{
	margin-right: 0.45rem;
	font-size: 0.24rem;
	color: #999;
	float: right;
	text-align: center;
	line-height: 0.35rem;
}
.list_middle{
	margin: 0 auto;
	margin-top: 0.17rem;
	width: 6.32rem;
	background-color: #f7f7f7;
	line-height: 0.64rem;
	font-size: 0.34rem;
	color: #333333;
	padding:0 0.15rem;
	text-align: left;
}
.list_bottom{
	margin-top: 0.22rem;
	width: 100%;
	height: 0.47rem;
}
.list_bottom_coin{
	font-size: 0.24rem;
	color: #333333;
	margin-left: 0.42rem;
	float: left;
	line-height: 0.47rem;
}
.list_bottom_coin span{
	color: #db4247;
	font-size: 0.36rem;
}
.list_bottom_coin i{
	color: #666666;
	font-size: 0.24rem;
	font-style: normal;
}
.submit{
	width: 1.2rem;
	height: 0.47rem;
	border-radius: 40px;
	font-size: 0.28rem;
	color: #fff;
	text-align: center;
	margin-right: 0.42rem;
	float: right;
	background-color: #db4247;
	line-height: 0.47rem;
}
.clz{
	background-color: #999999;
}
.ysx{
	background-color: #cccccc;
}
</style>