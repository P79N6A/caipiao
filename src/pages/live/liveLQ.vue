<template>
	<div >
		<div class="buyHeader" id="topHeader">
			<router-link to='/'  class="back"></router-link>
			<div class="buttons-row clearfix main-tab">
				<router-link to='/liveZQ' class="button">足球</router-link>
				<router-link to='/liveLQ' class="active button">篮球</router-link>
			</div>
		</div>
		<iframe width="100%" height="700em" frameborder="0" scrolling="no" src="http://nlive.159cai.com/live/basketball"></iframe>
	</div>
</template>
<script>
	export default {
		name: 'liveLQ',
		metaInfo: {
	      title: '比分直播-篮球',
	  	},
	};
</script>
<style>
	.buyHeader{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 90;
		height: 0.97rem;
		background-color: #fff;
		border-bottom: 1px solid #ccc;
	}
	.back{
		position: absolute;
	    z-index:2;
	    top:0;
	    left:0;
	    width:0.97rem;
	    height:0.97rem;
	    background:url('../../assets/img/back.png') no-repeat center;
	    background-size: 0.38rem 0.38rem;
	}
	.main-tab {
	    margin: .2rem auto 0;
	    width: 178px;
	    display: flex;
	    align-self: center;
	}
	.button {
		flex: 1;
		height: 30px;
		text-align: center;
		line-height: 30px;
		color: #d81d36;
		border-radius: 5px 0 0 5px;
		border: 1px solid #d81d36;
		padding: 0 10px 0 10px;
	}
	.buttons-row .button:last-child {
		border-radius: 0 5px 5px 0;
	}
	.active {
		color: #fff;
		background-color: #d81d36;
	}
</style>