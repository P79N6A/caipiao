<template>
	<div class="mainbox">
		<router-link to="/" class="closeIcon"></router-link>
		<div class="logo">
			<h1><img src="../../assets/img/logo.png"/></h1>
		</div>
		<div class="content">
			<div class="int">
				<input type="number" autocomplete="off" style="display: none;">
				<input type="text" id="btn1" class="btn1" value="" placeholder="请输入注册手机/账号ID" v-model='phone' @keyup.enter="DoLogin">
				<span class="icon1" v-show='phone.length > 0' @click='phone = ""'></span>
			</div>
			<div class="int">
				<input type="number" id="loginTxyzm" class='txyzm'  placeholder='请输入图形验证码' v-model='imgYzm' />
				<img :src='yzmImgUrl'  id='photo'  alt="图形验证码" @click='changeUrl'>
			</div>
			<div class="int">
				<input type="text" autocomplete="off" style="display: none;">
				<input :type="type?'text':'password'" id="btn2" value="" placeholder="请输入登录密码" autocomplete="off" v-model='password' @keyup.enter="DoLogin">
				<div class="icon3" @click='type=!type'>
					<span :class="type?'icon2 icon2_open':'icon2 icon2_close'"></span>
				</div>
			</div>
			<input type="button" id="btn3" value="登录" @click="DoLogin" >
			<router-link class="forget" to="unpassword" append>忘记密码？</router-link>
		</div>
		<p class="reg">还没有账号？现在去
			<router-link to="userreg" append>免费注册 &gt;</router-link>
		</p>
	</div>	
</template>
<script>
import { login } from '@/request/api';
import { Toast,MessageBox  } from 'mint-ui'
export default {
	name: 'login',
	data:function(){
		return {
			phone:'',
			password:'',
			type:false,
			yzmImgUrl:'',
			imgYzm:'',
		}
	},
	metaInfo: {
      title: '登录',
  	},
	methods:{
		DoLogin(){
			const t = this;
			const phone = t.phone,password = t.password,yzm = t.imgYzm;
			if (phone == '') {
				$('#btn1').focus();
				Toast('请输入合法的用户名!')
				return false
			}
			if (phone == '') {
				$('#btn1').focus();
				Toast('请输入合法的用户名!')
				return false
			}
			if (yzm == '') {
				$('#loginTxyzm').focus();
				Toast('请输入图形验证码!')
				return false
			}
			login({
				"uid":phone,
				"pwd":password,
				"yzm":yzm
			}).then(res => {
				const code = res.Resp.code;
				const desc = res.Resp.desc;
				if (code == 0) {
					if (t.$route.query.redirect) {
						t.$router.push(t.$route.query.redirect)
					}else{
						t.$router.push('/account')
					}
				}else{
					Toast(desc)
				}
			}).catch( res => {
				Toast(desc)
			})
		},
		changeUrl(){
			this.yzmImgUrl = "/api/rand.phpx?rnd="+Math.random()
		}
	},
	created() {
		this.yzmImgUrl = "/api/rand.phpx?rnd="+Math.random()
	},
	mounted () {

	},
};
</script>
