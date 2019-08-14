<template>
	<div class="zhlist">
		<account-header title='追号详情' backUrl='-1'></account-header>
		追号详情
	</div>
</template>
<script>
	import accountHeader from '@/components/header'
	import { qp,checklogin,loginout } from '@/request/api'
	import { Toast,MessageBox } from 'mint-ui'
	export default {
		name: 'zhlistDetail',
		metaInfo: {
	      title: '追号详情',
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
			
		},
		created() {
			
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