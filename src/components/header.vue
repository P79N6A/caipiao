<template>
	<div class="header">
		<header class="top">
			<template v-if='backUrl&&backUrl != -1'>
				<router-link :to='backUrl' class="back"></router-link>
			</template>
			<template v-else>
				<div class="back" @click='back'></div>
				<!-- <a href="javascript:window.history.back()" class="back"></a> -->
			</template>
            <div class="center">{{ title }}</div>
            <slot></slot>
        </header>
	</div>	
</template>
<script>
	export default {
		name: 'headerTemp',
		props:['title','backUrl'],
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	};
</script>
<style lang="less" scoped>
	header.top{
	    width: 100%;
	    height: 0.9rem;
	    line-height:0.9rem;
	    position: fixed;
	    top: 0;
	    box-sizing: border-box;
	    border-bottom: 1px solid #ccc;
	    z-index: 9;
	    background-color: #FFFFFF;
	}
	.top .back{
	    position: absolute;
	    z-index:2;
	    top:0;
	    left:0;
	    width:0.97rem;
	    height:0.9rem;
	    background:url('../assets/img/back.png') no-repeat center;
	    background-size: 0.38rem 0.38rem;
	}
	.top .center{
	    text-align: center;
	    line-height:0.9rem;
	    position:relative;
	    font-size:0.35rem;
	}
	.top .right{
	    position: absolute;
	    z-index:2;
	    font-size: 0.32rem;
	    color: #000000;
	    top: 0rem;
	    right: 0.2rem;
	}
	.top .rule{
		width:0.97rem;
	    height:0.9rem;
	    background:url(../assets/img/rule.png) no-repeat center;
	    background-size:0.38rem 0.38rem;
	}
	.top .shaixuan{
		width: 0.32rem;
	    height: 0.33rem;
	    float: right;
	    margin-top: 0.26rem;
	    margin-right: 0.4rem;
	    position: absolute;
	    top: 0;
	    right: 0rem;
	    background: url(../assets/img/account/paixu.png);
	    background-size: 100% 100%;
	}
</style>
