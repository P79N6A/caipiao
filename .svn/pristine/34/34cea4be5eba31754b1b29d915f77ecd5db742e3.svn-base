<template>
	<div class="mainbox">
		<router-link to="/login" class="closeIcon"></router-link>
		<div class="logo">
			<h1><img src="../../assets/img/logo.png"/></h1>
		</div>
		<div class="content" >
			<div class="int">
				<input type="text"  id="btn1" value=""  placeholder="请输入用户名或注册手机号" v-model='id' @keyup.enter="nextP" />
				<span class="icon1"  v-show='id.length > 0' @click='id = ""'></span>
			</div>
			<div class="int">
				<!--onpaste=return false  禁止粘贴-->
				<input 
					type="number" 
					id="btn2" 
					value="" 
					placeholder="请输入绑定手机号" 
					onpaste="return false;" 
					v-model='phone' 
					@keyup.enter="nextP" />
				<span class="icon1"  v-show='phone.length > 0' @click='phone = ""'></span>
			</div>
			<input type="button" id="btn3" value="下一步" @click='nextP' />
		</div>
	</div>	
</template>
<script>
import { checkAccount } from '@/request/api';
import { Toast,MessageBox  } from 'mint-ui'
export default {
	name: 'unpassword',
	metaInfo: {
      title: '忘记密码',
  	},
	data:function(){
		return {
			phone:'',
			id:''
		}
	},
	
	methods:{
		nextP(){
			const t = this;
			const uname =t.id,phone = $.trim(t.phone);
			if(!(/^1[34578]\d{9}$/.test(phone))){
		        Toast("手机号码格式不对，请重填");
		        return false;
		   	}
			if(uname==''){
				Toast('请输入账号ID');
				return false;
			}else if(phone==''){
				Toast('请输入绑定手机号');
				return false;
			}
			checkAccount({
				"uid":uname,
				"mobileNo":phone
			}).then( res => {
				var code = res.Resp.code;
                var desc = res.Resp.desc;
                if (code == "0"){
                    t.$router.push({
                    	'path':'/login/modify',
                    	'query':{
                    		"name":uname,
                    		"phone":phone
                    	}
                    })
                }else{
                    Toast(desc);
                }
			})

		}

	},
	created() {
		
	},
	mounted () {
	},
};
</script>
