<template>
	<div class="kjxx-detail">
		<kjxx-header :title='$route.params.name+"开奖"' backUrl='/kjxx'>
			<router-link :to='"/kjxx/history/"+$route.params.gid+"/"+$route.params.name' class="right">历史开奖</router-link>
		</kjxx-header>
		<div class="pt90">
			<div class="banner">
				<swiper ref="mySwiper" :options="swiperOption">
					<swiper-slide v-for='(item,index) in bannerList' :key='index'>
						<a :href="item.url" :title='item.title'>
							<img :src="item.image">
						</a>
					</swiper-slide>	
				</swiper>
			</div>
			<div class="content_t">
				<div class="content_qs clearfix">
					<p class="qici">第{{ $route.params.pid }}期</p><span class="content_time">{{ $route.params.time }}</span>
				</div>
				<ul class="number" v-if='$route.params.code'>
					<li v-for='item in $route.params.code.split(",")'>{{item}}</li>
				</ul>
			</div>
			<div class="content">
				
				<div class="content_b">
					<div class="content_bn" v-if='currentGid == "56"||currentGid == "55"||currentGid == "57"'>
						<div class="clearfix">
							<p>奖项</p>
							<p>每注金额(元） </p>
						</div>
						<ul class="clearfix jiangx">
							<li class="clearfix">
								<p>任一</p>
								
								<p>13</p>
							</li>
							<li class="clearfix">
								<p>任二</p>
								
								<p>6</p>
							</li>
							<li class="clearfix">
								<p>任三</p>
								
								<p>19</p>
							</li>
							<li class="clearfix">
								<p>任四</p>
								
								<p>78</p>
							</li>
							<li class="clearfix">
								<p>任五</p>
								
								<p>540</p>
							</li>
							<li class="clearfix">
								<p>任六</p>
								
								<p>90</p>
							</li>
							<li class="clearfix">
								<p>任七</p>
								
								<p>26</p>
							</li>
							<li class="clearfix">
								<p>任八</p>
								
								<p>9</p>
							</li>
							<li class="clearfix">
								<p>前二组选</p>
								
								<p>65</p>
							</li>
							<li class="clearfix">
								<p>前三组选</p>
								
								<p>195</p>
							</li>
							<li class="clearfix">
								<p>前二直选</p>
								
								<p>130</p>
							</li>
							<li class="clearfix">
								<p>前三直选</p>
								
								<p>1170</p>
							</li>
						</ul>
					</div>
					<div class="content_bn" v-if='currentGid == "08"||currentGid == "06"'>
						<div class="clearfix">
							<p>奖项</p>
							<p>每注金额(元） </p>
						</div>
						<ul class="clearfix jiangx">
							<li class="clearfix">
								<p>和值</p>
								
								<p>9-240</p>
							</li>
							<li class="clearfix">
								<p>三同号通选</p>
								
								<p>40</p>
							</li>
							<li class="clearfix">
								<p>三同号单选</p>
								
								<p>240</p>
							</li>
							<li class="clearfix">
								<p>三不同号</p>
								
								<p>40</p>
							</li>
							<li class="clearfix">
								<p>三连号通选</p>
								
								<p>10</p>
							</li>
							<li class="clearfix">
								<p>二同号复选</p>
								
								<p>15</p>
							</li>
							<li class="clearfix">
								<p>二同号单选</p>
								
								<p>80</p>
							</li>
							<li class="clearfix">
								<p>二不同号</p>
								
								<p>8</p>
							</li>
						</ul>
					</div>
					<div class="content_bn" v-if='currentGid == "04"'>
						<div class="clearfix">
							<p>奖项</p>
							<p>每注金额(元） </p>
						</div>
						<ul class="clearfix jiangx">
							<li class="clearfix">
								<p>五星</p>
								
								<p>100,000</p>
							</li>
							<li class="clearfix">
								<p>三星</p>
								
								<p>1000</p>
							</li>
							<li class="clearfix">
								<p>两星</p>
								
								<p>100</p>
							</li>
							<li class="clearfix">
								<p>一星</p>
								
								<p>10</p>
							</li>
							<li class="clearfix">
								<p>大小单双</p>
								
								<p>4</p>
							</li>
							<li class="clearfix">
								<p>二星组选</p>
								
								<p>50</p>
							</li>
							<li class="clearfix">
								<p>五星通选一等奖</p>
								
								<p>20,000</p>
							</li>
							<li class="clearfix">
								<p>五星通选二等奖</p>
								
								<p>200</p>
							</li>
							<li class="clearfix">
								<p>五星通选三等奖</p>
								
								<p>20</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="wfjs">
				<router-link  class='wfjs_l' :to='"/help/gid"+$route.params.gid'>玩法介绍</router-link>
				<!--<a class="wfjs_r" href="http://m.159cai.com/szc/yc/">
					预测分析
				</a>-->
			</div>
		</div>
		
	</div>	
</template>
<script>
import kjxxHeader from '@/components/header'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { kpcBannerList } from '@/request/api';
export default {
	name: 'detailKpc',
	data:function(){
		return {
			currentGid:'',
			bannerList:[],
			swiperOption: {//swiper3
		      autoplay: 3000,
		      speed: 1000,
		      loop:true,
		      pagination: {
	            el: '.swiper-pagination'
	          },
		    },
		}
	},
	metaInfo() {
		return {
     		title: '开奖信息 | '+ this.$route.params.name,
     		
     	}
  	},
	components:{
		kjxxHeader,
		swiper,
    	swiperSlide,
	},
	computed: {
		swiper() {
	        return this.$refs.mySwiper.swiper
	   	}
	},
	methods:{
		
	},
	created() {
		kpcBannerList().then( res => {
			this.bannerList = res
		})
	},
	mounted () {
		this.currentGid = this.$route.params.gid
	},
};
</script>
<style lang="less" scoped>
	.content_t{
	width: 100%;
	height: 1.46rem;
}
.content_t p{
	font-size: 0.28rem;
	color: #333333;
	margin-top:0.24rem;
	margin-left: 0.32rem;
	line-height: 0.28rem;
	float: left;
	
}
.content_t .content_time{
	margin-left: 0.5rem;
	display: block;
	float: left;
	font-size: 0.26rem;
	color: #999999;
	margin-top:0.24rem;
	line-height: 0.26rem;
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
.number{
	width: 95%;
	height: 0.96rem;
	margin-left:5%;
	margin-top: 0.22rem;
}
.number li{
	width: 0.52rem;
	height: 0.52rem;
	border-radius: 50%;
	background-color: #ff3153;
	float: left;
	font-size: 0.3rem;
	color: #FFFFFF;
	text-align: center;
	line-height: 0.52rem;
	margin-right: 0.14rem;
}
.number li.blue{
	background-color: #307ae1;
}
.content_z{
	width: 100%;
	height: 1.08rem;
	background-color: #f7f7f7;
}
.content_zl,.content_zr{
	width: 50%;
	float: left;
}
.content_zl p,.content_zr p{
	font-size: 0.26rem;
	color: #333333;
	text-align: center;
	margin-top: 0.18rem;
	line-height: 0.26rem;
	
}
.content_zl p.xl,.content_zr p.gc{
	font-size: 0.32rem;
	line-height: 0.32rem;
	color: #d81d36;
	
}
.content_b{
	width: 100%;
	background-color: #f7f7f7;
	padding-top: 0.5rem;
}
.content_bn{
	width: 6.88rem;
	/*height: 3.8rem;*/
	margin: 0 auto;
	background-color: #FFFFFF;
	
}
.content_bn div{
	width: 100%;
	height: 0.7rem;
	border-bottom: 1px solid #EEEEEE;
}
.content_bn div p:nth-of-type(1){
	font-size: 0.24rem;
	color: #666666;
	width: 3.02rem;
	height: 0.7rem;
	float:left;
	text-align: center;
	line-height: 0.7rem;
}
.content_bn div p:nth-of-type(2){
	font-size: 0.24rem;
	color: #666666;
	width: 3.55rem;
	height: 0.7rem;
	float:right;
	text-align: center;
	line-height: 0.7rem;
}


.content_bn ul li{
	width: 100%;
	height: 0.5rem;
	border-bottom: 1px solid #EEEEEE;
}
.content_bn ul li p:nth-of-type(1){
	font-size: 0.24rem;
	color: #666666;
	width: 3.02rem;
	height: 0.5rem;
	float:left;
	text-align: center;
	line-height: 0.5rem;
	
}

.content_bn ul li p:nth-of-type(2){
	font-size: 0.24rem;
	color: #d81d36;
	width: 3.29rem;
	height: 0.5rem;
	float:right;
	text-align: center;
	line-height: 0.5rem;
}
.wfjs{
	width: 100%;
	height: 1.3rem;
	background-color: #f7f7f7;
}
.wfjs_l{
	width: 100%;
	height: 1.3rem;
	float: left;
	font-size: 0.28rem;
	color: #000000;
	line-height: 1.3rem;
	box-sizing: border-box;
	text-align: center;
	text-decoration: none;
}
.wfjs_r{
	padding-left: 0.78rem;
	width: 3.75rem;
	height: 1.3rem;
	float: left;
	font-size: 0.28rem;
	color: #000000;
	box-sizing: border-box;
	line-height: 1.3rem;
	text-decoration: none;
}
.banner{
	width: 100%;
	height: 2.02rem;
	border-bottom: 0.16rem solid #f2f2f2;
	background-size: 100%;
}
.banner img{
	width: 100%;
	height: 2.02rem;
}
</style>
