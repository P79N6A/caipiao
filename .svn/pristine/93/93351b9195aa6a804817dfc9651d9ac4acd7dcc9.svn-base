<template>
	<div class="coupon">
		<coupon-header title='优惠券' backUrl='-1'>
			<router-link to='/couponRule' class="right rule"></router-link>
		</coupon-header>
		<ul class='nav clearfix'>
	        <li :class='cur==0?"cur":""' @click='cur=0'>未使用</li>
	        <li :class='cur==1?"cur":""' @click='cur=1'>已使用</li>
	        <li :class='cur==2?"cur":""' @click='cur=2'>已过期</li>
	    </ul>
	    <div class="list-con">
	    	<!-- 未使用 -->
	    	<ul class="list" v-show='cur==0'>
	    		<template v-if='list1.length > 0'>
		    		<li v-for='(item,index) in list1' :key='index'>
			            <div class='name'>{{ item.cname }}</div>
			            <div class='btm1 clearfix'>
			                <div class='limit fl'>
			                    <p>·满{{ item.ilimit }}元可用</p>
			                    <p v-if='item.cendtime'>·有效期至：{{item.cendtime.substring(0,11)}}</p>
			                </div>
			                <div class='money fr clearfix'>
			                    <p class='fl'>￥</p>
			                    <p class='fr'>{{ item.iminus }}</p>
			                </div>
			            </div>
			        </li>
			    </template>
			    <template v-else>
			    	<p class="noData">暂无数据</p>
			    </template>
		    </ul>
	    	<!-- 已使用 -->
	    	<ul class="list" v-show='cur==1'>
	    		<template v-if='list2.length > 0'>
		    		<li v-for='(item,index) in list2' :key='index'>
			            <div class='name'>{{ item.cname }}</div>
			            <div class='btm clearfix'>
			                <div class='limit fl'>
			                    <p>·满{{ item.ilimit }}元可用</p>
			                    <p v-if='item.cendtime'>·有效期至：{{item.cendtime.substring(0,11)}}</p>
			                </div>
			                <div class='money fr clearfix'>
			                    <p class='fl'>￥</p>
			                    <p class='fr'>{{ item.iminus }}</p>
			                </div>
			            </div>
			            <div class='usered'></div>
			        </li>
			    </template>
			    <template v-else>
			    	<p class="noData">暂无数据</p>
			    </template>
	    	</ul>
	    	<!-- 已过期 -->
	    	<ul class="list" v-show='cur==2'>
	    		<template v-if='list3.length > 0'>
		    		<li v-for='(item,index) in list3' :key='index'>
			            <div class='name'>{{ item.cname }}</div>
			            <div class='btm clearfix'>
			                <div class='limit fl'>
			                    <p>·满{{ item.ilimit }}元可用</p>
			                    <p v-if='item.cendtime'>·有效期至：{{item.cendtime.substring(0,11)}}</p>
			                </div>
			                <div class='money fr clearfix'>
			                    <p class='fl'>￥</p>
			                    <p class='fr'>{{ item.iminus }}</p>
			                </div>
			            </div>
			        </li>
			    </template>
			    <template v-else>
			    	<p class="noData">暂无数据</p>
			    </template>
	    	</ul>
	    </div>
	</div>
</template>
<script>
import couponHeader from '@/components/header'
import { qp,loginout } from '@/request/api';
import { Toast,MessageBox  } from 'mint-ui'
export default {
	name: 'coupon',
	metaInfo: {
      title: '优惠券',
  	},
	components:{
		couponHeader
	},
	data:function(){
		return {
			cur:0,
			list1:[],
			list2:[],
			list3:[]
		}
	},
	methods:{
		getCoupon(fid,pn){
			let self = this;
			qp({
				"fid":fid,
				"pn": pn,
				"ps": 10
			}).then(res=>{
				const code = res.Resp.code;
				const desc = res.Resp.desc;
				if (code==0) {
					if (fid == 'u_coupon_1' && res.Resp.row) { 
						self.list1 =  self.list1.concat(res.Resp.row)
					}
					if (fid == 'u_coupon_2' && res.Resp.row) { 
						self.list2 =  self.list2.concat(res.Resp.row)
					}
					if (fid == 'u_coupon_3' && res.Resp.row) { 
						self.list3 =  self.list3.concat(res.Resp.row)
					}
				}else{
					Toast(desc)
				}
			})
		}
	},
	created() {
		let self = this;
		self.getCoupon("u_coupon_1",1)
		self.getCoupon("u_coupon_2",1)
		self.getCoupon("u_coupon_3",1)
	},
	mounted () {
		// loginout()
	},
};
</script>
<style lang="less" scoped>
.list-con{
	padding-bottom:.2rem;
}
	.nav{
	    padding:1rem 0.4rem 0;
	    width:100%;
	    box-sizing:border-box;
	    border-bottom:1px solid #eee;
	}
	.nav li{
	    float: left;
	    line-height:0.9rem;
	    font-size:0.3rem;
	    color:#333;
	    height:0.9rem;
	    box-sizing:border-box;
	    padding: 0 0.1rem;

	}
	.nav .cur{
	     border-bottom:0.03rem solid #d81d36;
	}
	.nav li:nth-child(2){
	    margin:0 1.65rem;
	}

	.list{
	    padding:0 0.32rem;
	}
	.list li{
	    width:100%;
	    height:2.24rem;
	    background: url(../../assets/img/account/disbg.png) no-repeat;
	    background-size:100%;
	    margin-top: 0.32rem;
	    position:relative;
	}
	.list .name{
	    width:100%;
	    box-sizing:border-box;
	    padding-left:0.38rem;
	    color:#333;
	    font-size:0.26rem;
	    padding-top:0.26rem;
	    padding-bottom:0.27rem;
	}
	.btm{
	    width:100%;
	    box-sizing:border-box;
	    padding-left:1.46rem;
	    background: url(../../assets/img/account/con1.png) no-repeat;
	    background-size:0.74rem 0.74rem;
	    background-position: 0.38rem center;
	}
	.btm1{
	    width:100%;
	    box-sizing:border-box;
	    padding-left:1.46rem;
	    background: url(../../assets/img/account/con2.png) no-repeat;
	    background-size:0.74rem 0.74rem;
	    background-position: 0.38rem center;
	}
	.limit p:first-child{
	    font-size:0.3rem;
	    font-weight:500;
	    color:#000;
	    margin-top:0.1rem;
	}
	.limit p:nth-child(2){
	    font-size:0.26rem;
	    color:#999;
	    margin-top:0.15rem;
	}
	.money p:first-child{
	    color:#999;
	    font-size:0.4rem;
	    margin-top:0.4rem;
	}
	.money p:nth-child(2){
	    color:#999;
	    font-size:.8rem;
	    margin-right:0.58rem;
	}
	.red{
	    color:#d81d36 !important;
	}
	.usered{
	    position:absolute;
	    top:0.16rem;
	    left:55%;
	    width:1.967rem;
	    height:1.28rem;
	    background:url(../../assets/img/account/usered.png) no-repeat;
	    background-size:100%;
	}
</style>