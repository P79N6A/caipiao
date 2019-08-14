<template>
	<div class="mainbox">
		<router-link to="/login"   class="closeIcon"></router-link>
		<div class="logo">
			<h1><img src="../../assets/img/logo.png"/></h1>
		</div>
		<img src="../../assets/img/success_img.png" class="img1"/>
		<p class="p1">恭喜您，密码修改成功！</p>
		<div class="contents">
			<router-link to='/login'>
				<input type="button" id="btn3" value="重新登录" />
			</router-link>
		</div>
	</div>	
</template>
<script>

export default {
	name: 'succ',
	metaInfo: {
      title: '密码修改成功',
  	},
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
<style scoped>
.contents{
	width: 6.8rem;
	margin: 0 auto;
	margin-top: 1.8rem;

}
	.img1{
	width: 1.24rem;
	height: 1.22rem;
	display: block;
	margin: 0 auto;
	padding-top: 2rem;
}
.p1{
	font-size: 0.3rem;
	color: #333333;
	text-align: center;
	padding-top: 0.45rem;
}
</style>
