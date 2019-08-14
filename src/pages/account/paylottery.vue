<template>
	<div class="paylottery">
		<account-header title='投注记录' backUrl='-1'>
			<div class="right shaixuan" @click='paixuState =!paixuState'></div>
		</account-header>
		<div class="paixu-bg" v-if='paixuState'>
			<div class="paixu">
				<div :class="nav1Current==0?'all currents':'all'" @click='nav1Current=0;paixuState=false;changeList(nav2Current,0)'>
					<span>全部</span>
					<span class="gou paixu_bgs"></span>
				</div>
				<div :class="nav1Current==1?'unaward currents':'unaward'"  @click='nav1Current=1;paixuState=false;changeList(nav2Current,1)'>
					<span>待开奖</span>
					<span class="gou"></span>
				</div>
				<div :class="nav1Current==2?'won currents':'won'"  @click='nav1Current=2;paixuState=false;changeList(nav2Current,2)'>
					<span>已中奖</span>
					<span class="gou"></span>
				</div>
				<div :class="nav1Current==3?'unwon currents':'unwon'"  @click='nav1Current=3;paixuState=false;changeList(nav2Current,3)'>
					<span>未中奖</span>
					<span class="gou"></span>
				</div>
			</div>
		</div>
		<ul class="fid">
			<li :class="nav2Current==0?'qb current':'qb'"  @click='nav2Current=0;changeList(0,nav1Current)'>全部</li>
			<li :class="nav2Current==1?'tz current':'tz'"  @click='nav2Current=1;changeList(1,nav1Current)'>投注</li>
			<li :class="nav2Current==2?'fd current':'fd'"  @click='nav2Current=2;changeList(2,nav1Current)'>发单</li>
			<li :class="nav2Current==3?'gd current':'gd'"  @click='nav2Current=3;changeList(3,nav1Current)'>跟单</li>
		</ul>
		<ul 
			class="every"
			v-infinite-scroll="loadMore"
 			infinite-scroll-disabled="loading"
  			infinite-scroll-distance="30" 
  			v-show='list.length > 0'
			>
			<li class='wdgd clearfix' v-for='(item,index) in list' :key='index' @click='goDetail(JSON.stringify(item))'>
                <template v-if='index>0&&item.time.substring(5,10)==list[index-1].time.substring(5,10)'>
                	<span class='date'></span>
                </template>
                <template v-else>
					<span class='date' v-if='item.time'>{{ item.time.substring(5,10).replace("-","月") }}</span>
				</template>
                <div class='record  clearfix'>
                    <div class='rename'>
                        <p v-if='item.type'>{{ item.type.split('-')[0] }}</p>
                        <p class="jiner">{{ item.money }}元 
                        	<template v-if='nav2Current==0'>
                        		<template v-if='item.copy == 0'>
                        			代购订单
                        		</template>
                        		<template v-else-if='item.copy >= 98'>
                        			跟单订单
                        		</template>
                        		<template v-else>
                        			发单订单
                        		</template>
                        	</template>
                        	<template v-else>
                        		{{ item.buyType }}
                        	</template>
                        </p>
                    </div>
                    <template v-if='item.result=="已中奖"'>
                		<div class='usercodes'>
                			<p class="yzj">{{ item.result }}</p>
                			<p class="yzjje">{{ item.prize?item.prize:item.winMoney }}元</p>
                		</div>
                    </template>
                    <template v-else-if='item.result=="待选比赛"'>
                		<span class='usercode' style='color:#ee7e31'>{{item.result}} <i></i></span>
                    </template>
                     <template v-else-if='item.result=="已退款"'>
                		<span class='usercode' style='color:#00c553'>{{item.result}} <i></i></span>
                    </template>
                     <template v-else>
                		<span class='usercode'>{{item.result}} <i></i></span>
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
	import { checklogin,webTouZhus,webFollowRecord,loginout} from '@/request/api'
	import { Toast,MessageBox,Indicator } from 'mint-ui'
	export default {
		name: 'paylottery',
		metaInfo: {
	      title: '投注记录',
	  	},
	  	components:{
			accountHeader,
		},
		data:function(){
			return {
				paixuState:false,
				nav1Current:0,//筛选出来的nav 全部 待开奖 已中奖 未中奖
				nav2Current:0,//页面一直存在的nav 全部 投注 发单 跟单
				list:[],
				data:[
					["w_all","w_all_unaward","w_all_won","w_all_unwon"],
					["w_dg","w_dg_unaward","w_dg_won","w_dg_unwon"],
					["w_fd","w_fd_unaward","w_fd_won","w_fd_unwon"],
					["w_gd_all","w_gd_unaward","w_gd_won","w_gd_unwon"],
				],
				pn:1,
				ps:10,
				loading:true,//false则执行loadMore，true则不执行
			}
		},
		methods:{
			getList(type,pn){
				// console.log('getList')
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
						// Indicator.close()
					}else{
						if(data.row.length == self.ps){
							// debugger
		                	self.list = self.list.concat(data.row);
		                    // Indicator.close()
		                    self.loading = false;
		                }else if(data.row.length>0&&data.row.length<10 ){
		                   	self.list = self.list.concat(data.row);
		                    // Indicator.close()
		                }else{
		                	let rs = new Array(data.row);
		                	self.list = self.list.concat(rs);
		                    // Indicator.close()
		                }
					} 
				}else{
					// Indicator.close()
					Toast(desc);
				}
			},
			loadMore() {
				// console.log('loadMore')
				let self = this,data='';
			 	self.loading = true;
			 	// Indicator.open('加载中...');
			 	// setTimeout(() => {
			 		self.pn++
				    data = self.data[self.nav2Current][self.nav1Current]
				    self.getList(data,self.pn)
			 	// },1500)
			    
			},
			changeList(type1,type2){
				// console.log('changeList')
				let self = this,data='';
				self.list = [];
				self.pn = 1;
				data = self.data[type1][type2]
				self.loading = true;
				// Indicator.open('加载中...');
				self.getList(data,1)
			},
			goDetail(item){
				let self = this,gid,hid;
				item = JSON.parse(item);
				console.log(item)
				if (self.nav2Current == 3) {
					gid = item.planNo.split('_')[0]
					hid = item.planNo.split('_')[1]
				}else{
					gid = item.gid;
					hid = item.projid;
				}
				self.$router.push('/account/paylotteryDetail/'+gid+'/'+hid)
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
       		this.loading = true;
       		this.getList("w_all",1)
			// this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
			// this.getList(this.userInfo.nickid)
			// loginout()
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