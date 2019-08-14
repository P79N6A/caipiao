<template>
	<div class="loginBox">
		<router-view></router-view>
	</div>	
</template>
<script>

export default {
	name: 'login',
	data:function(){
		return {
			
		}
	},
	
	methods:{
		

	},
	created() {
		
	},
	mounted () {
	},
};
</script>
<style lang="less" scoped>
	.loginBox /deep/ .mainbox {
			width: 100%;
			position: fixed;
			top:0;
			bottom:0;
			background: url(../../assets/img/cpdl_bg.jpg) no-repeat;
			background-size: 100%;
			.closeIcon {
				color: #000;
				position: absolute;
				width: 21px;
				height: 21px;
				top: 10px;
				right: 10px;
			}

			.closeIcon::before {
				content: '';
				position: absolute;
				top: 10px;
				width: 21px;
				height: 1px;
				background-color: red;
				-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
			}

			.closeIcon::after {
				content: '';
				position: absolute;
				top: 10px;
				width: 21px;
				height: 1px;
				background-color: red;
				-webkit-transform: rotate(45deg);
				transform: rotate(45deg);
			}
			input:-webkit-autofill,
			textarea:-webkit-autofill,
			select:-webkit-autofill {
				-webkit-box-shadow: 0 0 0 1000px transparent inset;
			}

			input[type=text]:focus,
			input[type=password]:focus,
			textarea:focus {
				-webkit-box-shadow: 0 0 0 1000px transparent inset;
			}
			.content{
				width: 6.8rem;
				height: 3.82rem;
				position:absolute;
				top: 50%;
				left: 50%;
				margin-left: -3.4rem;
				margin-top:-1.91rem;

			}
			.logo h1 img{
				width: 3.75rem;
				height: auto;
				margin: 0 auto;
				padding-top: 1.76rem;
				display: block;
			}
			.int{
				position: relative;
				border-bottom: 1px solid #ccc;
				width: 100%;
			}
			#btn1,#btn2,#loginTxyzm{
				width:5.78rem;
				height: 0.94rem;
				border: none!important;
				background: none!important;
				font-size: 0.3rem;
				padding-left:0.35rem;
				display: block;
				outline-style: none!important;
			}
			#btn4,#btn5{
				width:4.62rem;
				height: 1rem;
				border: none;
				background: none;
				font-size: 0.3rem;
				padding-left:0.35rem;
				outline: none;
				float: left;
			    box-sizing: border-box;

			}
			.yzmfs,.djs,#photo{
				width:2rem;
				height: 0.48rem;
				line-height: 0.48rem;
				border-radius: 4px;
				font-size: 0.24rem;
				color: #FFFFFF;
				display: block;
				position: absolute;
				top: 0.35rem;
				right: 0rem;
				text-align: center;
				background-color: #fa8080;
				display: block;
			}
			#btn4{
				width:2.62rem;
				padding-top:0.1rem ;
			}
			#photo{
				background:none;
				height:0.6rem;
				top:0.2rem;
			}
			.tel{
				width: 1.52rem;
				height: 1rem;
				font-size: 0.3rem;
				float: left;
				padding-left: 0.35rem;
				line-height: 1.2rem;
				text-align: left;
			}
			.wenzi{
				color: #fc3232;
				font-size: 0.24rem;
				text-align: center;
				padding-top: 0.5rem;
				// display: none;
				visibility: hidden;
			}

			.icon1,.icon2{
				position: absolute;
				top: 0rem;
				right: 0rem;
				display: block;
			}
			.icon1{
				width: 0.36rem;
				height: 0.36rem;
				background: url(../../assets/img/gb_icon.png) no-repeat;
				background-size: 100%;
				top: 0.27rem;
				right: 0.3rem;
			}
			.icon2_close{
				width: 0.32rem;
				height: 0.21rem;
				background: url(../../assets/img/byj.png) no-repeat;
				background-size: 100%;
				top: 0.4rem;
				right: 0.3rem;
			}
			.icon2_open{
				width: 0.32rem;
				height: 0.21rem;
				background: url(../../assets/img/eyes.png) no-repeat;
				background-size: 100%;
				top: 0.4rem;
				right: 0.3rem;
			}
			.icon3{
				position: absolute;
				display: block;
				width: 0.8rem;
				height: 0.8rem;
				top: 0.1rem;
				right: 0rem;
				background-image: none;
			}
			#btn3{
				width: 100%;
				height: 0.8rem;
				line-height: 0.8rem;
				border: none;
				background: #fc3232;
				border-radius:5px;
				font-size: 0.36rem;
				color: #FFFFFF;
				border-radius:5px !important;
				-webkit-appearance: none;
				display: block;
				margin-top: 0.5rem;
			}
			.forget{
				width: 1.6rem;
				font-size: 0.3rem;
				line-height: 0.3rem;
				color: #666666;
				margin-top: 0.26rem;
				display: block;
				float: right;
				margin-right: 0.1rem;
				text-decoration: none;
				-webkit-tap-highlight-color:transparent;
			}

			.reg{
				font-size: 0.24rem;
				color: #666666;
				text-align: center;
				position:absolute;
				bottom:15%;
				width: 100%;
				left: 0;
			}
			.reg a{
				text-decoration: none;
				color: #186be8;
				-webkit-tap-highlight-color: transparent;
			}
		}

		
	
</style>
