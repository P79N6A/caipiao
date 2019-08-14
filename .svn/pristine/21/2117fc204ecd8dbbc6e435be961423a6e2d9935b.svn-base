<template>
	<div class="mainbox">
		<router-link to="/login/unpassword" class="closeIcon"></router-link>
			<div class="logo">
				<h1><img src="../../assets/img/logo.png"/></h1>
			</div>
			<div class="content">
				<div class="int">
					<input :type="newpasState?'password':'text'"  id="btn1" value=""  placeholder="请输入新的登录密码" v-model='newpas' />
					<span @click='newpasState=!newpasState' :class="newpasState?'icon2 icon2_close':'icon2 icon2_open'"></span>
				</div>
				<div class="int">
					<input :type="agensnewpasState?'password':'text'" id="btn2" value="" placeholder="请再次输入新的登录密码" v-model='agensnewpas'/>
					<span  @click='agensnewpasState=!agensnewpasState' :class="agensnewpasState?'icon2 icon2_close':'icon2 icon2_open'"></span>
				</div>
				<div class='int clearfix'>
					<input type="number" class='txyzm'  placeholder='请输入图形验证码' v-model='imgYzm' />
					<img :src='yzmImgUrl'  id='photo' alt="图形验证码" @click='changeUrl'>
				</div>
				<div class="int clearfix">
					<span class="tel">验证码</span>
					<input type="number" id="btn4" value="" placeholder="请填写验证码" v-model='yzm' />
					<span class="yzmfs" v-html='html' @click='sendYzm($route.query.name,$route.query.phone)'>{{ html }}</span>
				</div>
				<p class="wenzi">* 短信验证码已发送至手机</p>
				<input type="button" id="btn3" value="提交" @click='submit($route.query.name,$route.query.phone)' />
			</div>
	</div>	
</template>
<script>
import { usergetpwd,modifypwdByPhones } from '@/request/api';
import { Toast,MessageBox } from 'mint-ui'
export default {
	name: 'modify',
	metaInfo: {
      title: '重置密码',
  	},
	data:function(){
		return {
			newpasState:true,
			agensnewpasState:true,
			newpas:'',
			agensnewpas:'',
			imgYzm:'',
			yzm:'',
			html:'点击发送验证码',
			yzmImgUrl:'',
			sendYzmbtn:true,
			num:60,
			timer:null
		}
	},
	
	methods:{
		sendYzm(name,phone){
			const t = this;
			const pwd1 =$.trim(t.newpas),
				pwd2 = $.trim(t.agensnewpas),
				txyzm = $.trim(t.imgYzm),
				regpwd=/^[a-zA-Z0-9]{6,20}$/;
			let	num = t.num,
				timer = t.timer;
			if (!t.sendYzmbtn) { return false}
				if(phone == '' || phone == undefined) {
					MessageBox.alert('请填写手机号码').then(action => {
						t.$router.push('/login/unpassword')
					});
					return false;
				}
				if(!regpwd.test(pwd1)){
					Toast('请设置您的登陆密码,6-20个字符,只能含有数字和字母');
					return false;
				}
				if(pwd1!=pwd2){
					Toast('2次输入的密码不一致');
					return false;
				}
				if(txyzm.length!=4){
					Toast('请输入正确的图形验证码');
					return false;
				}
				usergetpwd({
					"flag":1,
					"uid":encodeURIComponent(name),
					'newValue':phone,
					'rnd': Math.random(),
					'yzm':txyzm
				}).then(res=>{
					const code = res.Resp.code;
					const desc = res.Resp.desc;
					if(code == "0") {
						t.sendYzmbtn = false;
						$('.wenzi').css('visibility','visible');
						$('.yzmfs').css({
				            'backgroundColor':'#e0e0e0',
				            'color':'#666'
				        })
						timer = setInterval(function() {
							num--;
							t.html = '<i>'+num+'</i>s重新发送'
							if(num == 0) {
								clearInterval(timer);
								t.sendYzmbtn =  true;
								t.html ='点击发送验证码';
								$('.wenzi').css('visibility','hidden');
								$('.yzmfs').css({
						            'backgroundColor':'#fa8080',
						            'color':'#fff'
					        	})
							}
						}, 1000);

					} else {
						Toast(desc);
					}
				})
		},
		submit(name,phone){
			const t = this;
			const vcode = t.yzm;
			if(!(/^\d{6}$/.test(vcode))) {
				Toast("验证码不正确");
				return false ;
			}
			modifypwdByPhones({
				"uid":encodeURIComponent(name),
				'mobileNo':phone,
				'newValue':t.newpas,
				'pwd':t.agensnewpas,
				'rnd': Math.random(),
				'yzm':vcode
			}).then(res=>{
				const code = res.Resp.code,
				desc = res.Resp.desc;
				if(code == "0") {
					t.$router.puhs('/login/succ')
				} else {
					Toast('验证信息不存在或已过期');
				}
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
