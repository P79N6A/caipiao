<template>
	<div class="zhlist">
		<account-header title='追号记录' backUrl='-1'></account-header>
    	<ul class="fid">
			<li :class="current=='zhuihao_sz'?'qb current':'qb'" @click="current='zhuihao_sz';changeList('zhuihao_sz')">数字彩</li>
			<li :class="current=='zhuihao_kp'?'tz current':'tz'" @click="current='zhuihao_kp';changeList('zhuihao_kp')">快频彩</li>
		</ul>
		<ul 
			class="every"
			v-infinite-scroll="loadMore"
 			infinite-scroll-disabled="loading"
  			infinite-scroll-distance="30" 
  			v-show='list.length > 0'
			>
			<li class='wdgd clearfix' v-for='(item,index) in list' :key='index' @click='goDetail(item.zhid,item.gameid)'>
                <template v-if='index>0&&item.adddate.substring(5,10)==list[index-1].adddate.substring(5,10)'>
                	<span class='date'></span>
                </template>
                <template v-else>
					<span class='date' v-if='item.adddate'>{{ item.adddate.substring(5,10).replace("-","月") }}</span>
				</template>
                <div class='record  clearfix'>
                    <div class='rename'>
                        <p v-if='item.gameid'>{{ item.gameid|lotteryCode }}</p>
                        <p class="jiner">{{ item.tmoney }}元 追号订单</p>
                    </div>
                    <template v-if='item.reason==0'>
                		<span class='usercode green'>进行中<i></i></span>
                    </template>
                     <template v-else>
                		<span class='usercode'>已完成<i></i></span>
                    </template>
                </div>
         	</li>
         	<li v-if='loading' class="lastData">--已经到底啦--</li> 
		</ul>
		<p  v-show='list.length == 0' class="noData" style="margin-top: 1.78rem;">暂无数据</p>
		
	</div>
</template>
<script>
	import accountHeader from '@/components/header'
	import { qp,checklogin,loginout } from '@/request/api'
	import { Toast,MessageBox } from 'mint-ui'
	export default {
		name: 'zhlist',
		metaInfo: {
	      title: '追号记录',
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
				current:'zhuihao_sz',//zhuihao_sz 数字彩 zhuihao_kp 快频彩
			}
		},
		methods:{
			getList(type,pn){
				let self = this;
				let etime = self.setMonth(0);
				let stime = self.setMonth(6);
				qp({
					"fid": type,
					"pn": pn,
					"ps": this.ps,
					'stime':stime,
					'etime':etime,
				}).then(res=>{
					let code = res.Resp.code,desc = res.Resp.desc,self = this;
					if(code == "0"){
						let data = res.Resp.row;
						if (!data) {
							// Indicator.close()
						}else{
							if(data.length == self.ps){
			                	self.list = self.list.concat(data);
			                    // Indicator.close()
			                    self.loading = false;
			                }else if(data.length>0&&data.length<10 ){
			                   	self.list = self.list.concat(data);
			                    // Indicator.close()
			                }else{
			                	let rs = new Array(data);
			                	self.list = self.list.concat(rs);
			                    // Indicator.close()
			                }
						} 
					}else{
						// Indicator.close()
						Toast(desc);
					}
				}).catch(err =>{
		            console.log("网络出错")
		        })
			},
			setMonth:function(n){
	            var startTime = new Date();
	                startTime.setMonth(startTime.getMonth()-n);
	            var year = startTime.getFullYear();
	            var month = startTime.getMonth()+1;
	            if (month < 10) {month = '0'+month}
	            var day = startTime.getDate()
	        	if (day < 10) {day = '0'+day}
	            return year+'-'+month+'-'+day;
	        },
			loadMore() {
				// console.log('loadMore')
				let self = this,data='';
			 	self.loading = true;
		 		self.pn++
			    self.getList(self.current,self.pn)
			    
			},
			changeList(type){
				// console.log('changeList')
				let self = this,data='';
				self.list = [];
				self.pn = 1;
				self.loading = true;
				// Indicator.open('加载中...');
				self.getList(type,1)
			},
			goDetail(tid,lotid){
				this.$router.push('/account/zhlistDetail/'+tid+'/'+lotid)
			}
		},
		created() {
			checklogin().then(res => {
	            const code = res.Resp.code;
	            if (code == 1 ) {
	                this.$router.replace({
	                    path: '/login',
	                    query: {
	                        redirect: this.$router.currentRoute.fullPath
	                    }
	                });
	            }
       		})
			// this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
			// this.getList(this.userInfo.nickid)
			// loginout()
		}
	};
</script>
<style lang="less" scoped>
.fid{
	width: 100%;
	height: 0.92rem;
	border-bottom: 1px solid #EEEEEE;
	position: fixed;
	top: .9rem;
	box-sizing: border-box;
	background-color: #FFFFFF;
	z-index: 9;
}
.fid li{
	width: 1.22rem;
	height: 0.9rem;
	font-size: 0.3rem;
	color: #000000;
	list-style: none;
	float: left;
	line-height: 0.92rem;
	text-align: center;
}
.fid li:nth-of-type(1){
	margin-left: 1.47rem;
	margin-right: 1.08rem;
}
.fid li:nth-of-type(2){
	margin-left: 1.1rem;
	margin-right: 1.39rem;
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
	float: left;
	font-size: 0.28rem;
	padding:0.28rem 0.16rem 0.36rem 0.21rem;
	box-sizing: border-box;
}
.record{
	flex: 6;
	height: 1.37rem;
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
	margin-right: 1rem;
	font-size: 0.29rem;
	line-height: 1.37rem;
}
.usercodes{
	line-height: 0.24rem;
	padding-top: 0.38rem;
	box-sizing: border-box;
	margin-right: 0.3rem;
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
	right: 0.62rem;
	background: url(../../assets/img/go.png) no-repeat;
	background-size: 100% 100%;
}
.green{
	color: #51bc5c;
}
</style>