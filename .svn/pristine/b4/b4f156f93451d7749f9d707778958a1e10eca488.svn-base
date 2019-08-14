<template>
	<div class="mainbox">
		<router-link to="/"  class="closeIcon"></router-link>
		<div class="logo">
			<h1><img src="../../assets/img/logo.png"/></h1>
		</div>
		<div id="phone" class="pt90">
			<div class="int clearfix">
				<span class="tel">+86</span>
				<input type="number" value="" class='telNum ipt' placeholder="填写手机号码" style='display: none;'/>
				<input type="number" value="" class='btn1 telNum ipt btn1' placeholder="填写手机号码" v-model='phone' @keyup.enter="regMob" />
				<span class="icon1" v-show='phone.length > 0' @click='phone = ""'></span>
			</div>
			<div class="int clearfix">
				<span class="tel">登录密码</span>
				<input :type="phoneType?'text':'password'" value="" class="telPwd btn2" placeholder="6-20位字符"  v-model='phonePas' @keyup.enter="regMob"/>
				<span :class="phoneType?'icon2 icon2_open':'icon2 icon2_close'" @click='phoneType=!phoneType'></span>
			</div>
			<div class='int clearfix'>
				<span class="tel">验证码</span>
				<input type="number" id="btn4" style='width:3rem;' value="" class="yam" placeholder="请输入验证码"  v-model='yzm' @keyup.enter="regMob" />
				<input type="button" class='fsyzm' id="fsyzm" value='点击发送验证码' name="" @click='sendImgYzm'>
			</div>
		</div>
		<input type="button" id="btn3" value="注册" @click='regMob' />
		<p class="p1">轻触“注册”按钮，即表示您已阅读并同意</p>
		<router-link to="/reghelp" class="fwxy">《用户购彩服务协议》</router-link>
		<div class='shade'>
			<div class='showTp'>
				<div class='top'>图形验证</div>
				<img :src="yzmImgUrl" alt="" @click='changeUrl'>
				<p>请输入图形验证码</p>
				<input type="number" name="" id='yanzm' value="" v-model='imgYzm'>
				<span></span>
				<input type="button" id='sure' value='确定' name="" @click='sendYzm'>
			</div>
		</div>
	</div>	
</template>
<script>
import { Toast,MessageBox  } from 'mint-ui'
import { mobregzym,mobreg } from '@/request/api';
export default {
	name: 'userreg',
	metaInfo: {
      title: '注册',
  	},
	data:function(){
		return {
			showTab:0,
			phone:'',
			phonePas:'',
			yzm:'',
			imgYzm:'',
			name:'',
			namePas:'',
			phoneType:false,
			yzmImgUrl:'',
			num:60,
			timer:null,
			sendYzmbtn:true,

		}
	},
	
	methods:{
		sendImgYzm(){
			const t = this;
			const umob = t.phone,upwd = t.phonePas;
			if (!t.sendYzmbtn) { return false}
	        if(umob==''){
	            Toast("请输入手机号码");
	            return false;
	        }
	        if(!(/^1[345678]\d{9}$/.test(umob))){
	            Toast("手机号码有误，请重填");
	            return false;
	        }
	        if(!(/^[a-zA-Z0-9]{6,20}$/.test(upwd))){
	            Toast('请设置您的登陆密码,6-20个字符,只能含有数字和字母');
	            return false;
	        }else{
	        	this.yzmImgUrl = "/api/rand.phpx?rnd="+Math.random()
	            $('.shade').show();
	        }
		},
		sendYzm(){
			const t = this;
			const txm = t.imgYzm,mobileNo= t.phone;
			let	num = t.num,timer = t.timer;
			if(txm.length!=4){
	            $('.showTp span').html('请输入正确的验证码');
	            return false;
        	}
        	mobregzym({
        		"flag":1,
        		'yzm':txm,
        		'mobileNo':mobileNo
        	}).then(res=>{
        		const code = res.Resp.code;
				const desc = res.Resp.desc;
				if (code ==0) {
					t.sendYzmbtn = false;
					t.imgYzm = '';
					$('.shade').hide();
					$('.fsyzm').css({
                        'backgroundColor':'#e0e0e0',
                        'color':'#666'
                    })	
                    timer = setInterval(function() {
                        num--;
                        $('.fsyzm').val(num + 's重新发送');
                        $('.fsyzm').attr('disabled',true);
                        if(num == 0) {
                        	t.sendYzmbtn =  true;
                            clearInterval(timer);
                            $('.fsyzm').val('点击发送验证码');
                            $('.fsyzm').attr('disabled',false);
                            $('.fsyzm').css({
                                'backgroundColor': '#fa8080',
                                'color':'#fff'
                            });
                        }
                    }, 1000);
				}
        	})
		},
		regMob(){
			const t = this;
			const umob = t.phone,upwd= t.phonePas,yzm = t.yzm;
			if(umob==''){
	            Toast("请输入手机号码");
	            return false;
	        }
	        if(!(/^1[345678]\d{9}$/.test(umob))){
	            Toast("手机号码有误，请重填");
	            return false;
	        }
	        if(!(/^[a-zA-Z0-9]{6,20}$/.test(upwd))){
	            Toast('请设置您的登陆密码,6-20个字符,只能含有数字和字母');
	            return false;
			}
			mobreg({
				'mobileNo':umob,
				'yzm':yzm,
				'pwd':upwd
			}).then(data=>{
				const code = data.Resp.code, desc = data.Resp.desc;
				if(code==0){
					t.$router.push('/login/userregSucc')
				}
			})
		},
		changeUrl(){
			this.yzmImgUrl = "/api/rand.phpx?rnd="+Math.random()
		}

	},
	created() {
		
	},
	mounted () {
	},
};
</script>
<style lang="less" scoped>
	@import '~styles/showTp.less';
	.tab{
		margin-top: 0.7rem;
		width: 100%;
		height: 0.34rem;
		padding: 0 1.45rem;
		margin-bottom: 0.7rem;
	}
	.tab li{
		width: 2.3rem;
		height: 0.34rem;
		line-height: 0.34rem;
		font-size: 0.34rem;
		color: #999999;
		float: left;
		list-style: none;
		text-align: center;
	}
	.red{
		color: #fc3232!important;
	}
	.tab li:nth-of-type(1){
		border-right:1px solid #999999 ;
	}
	#phone,#Username{
		width: 6.8rem;
		margin: 0 auto;

	}
	.btn1,.btn2{
		width:4.62rem;
		height: 0.8rem;
		border: none;
		// background: none!important;
		font-size: 0.3rem;
		padding-left:0.26rem;
		display: block;
		float: left;
		margin-top:0.15rem;
	    box-sizing: border-box;
		FILTER: alpha(opacity=0);
		appearance:none; /*下拉框去掉右侧图标*/
	    -moz-appearance:none;
	    -webkit-appearance:none;
	    background-color:transparent;
	}
	.fsyzm{
		width: 2rem;
	    height: 0.48rem;
	    line-height: 0.48rem;
	    border-radius: 4px;
	    font-size: 0.24rem;
	    color: #fff;
	    display: block;
	    position: absolute;
	    top: 0.35rem;
	    right: 0rem;
	    text-align: center;
	    background-color: #fa8080;;
	}
	.p1,.fwxy{
		margin-top: 0.26rem;
		text-align: center;
		font-size: 0.24rem;
		line-height: 0.24rem;
		color: #999999;
		margin-top:0.5rem;
	}
	.fwxy{
		display: block;
		text-decoration: none;
		margin-top: 0.1rem;
		margin-bottom:1rem;
	}
	#btn3{
		width: 6.8rem;
		height: 0.8rem;
		line-height: 0.8rem;
		border: none;
		border-radius:5px;
		font-size: 0.36rem;
		color: #FFFFFF;
		margin: 0 auto;
		display: block;
		margin-top: 1.2rem;
		-webkit-appearance:none;
		/*display:block;
		text-align:center;
		text-decoration:none;*/
	}
</style>
