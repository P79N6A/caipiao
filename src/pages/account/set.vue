<template>
	<div class="set">
		<account-header title='设置' backUrl='-1'></account-header>
		<div class="content">
	    	<ul class='box'>
	            <li>
	            	<template v-if='userInfo.rname'>
	            		<div class="clearfix username">
	            			<span class='fl'>真实姓名</span><span class='fr'>{{userInfo.rname}}</span>
	            		</div>
	            	</template>
	            	<template v-else>
	            		<router-link class='clearfix username' to='/login/smrz'>
	            			<span class='fl'>真实姓名</span><span class='fr'>未认证<i></i></span>
	            		</router-link>
	            	</template>
	            </li>
	            <li>
	            	<template v-if='userInfo.bank&&userInfo.rname'>
	            		<router-link class="clearfix icard" to='/login/showBank'>
	            			<span class='fl'>银行卡号</span><span class='fr'>{{userInfo.bank}}<i></i></span>
	            		</router-link>
	            	</template>
	            	<template v-else-if='userInfo.bank&&!userInfo.rname'>
	            		<router-link class="clearfix icard" to='/login/smrz'>
	            			<span class='fl'>银行卡号</span><span class='fr'>{{userInfo.bank}}<i></i></span>
	            		</router-link>
	            	</template>
	            	<template v-else>
	            		<router-link class='clearfix icard' to='/login/bank'>
	            			<span class='fl'>银行卡号</span><span class='fr'>未绑定<i></i></span>
	            		</router-link>
	            	</template>
	            </li>
	            <li>
	            	<router-link class="clearfix imoblie" to='/login/showMobile'>
            			<span class='fl'>手机号码</span><span class='fr'>{{userInfo.mobile}}<i></i></span>
            		</router-link>
	            </li>
	            <li>
	            	<router-link class="clearfix chgpwd" to='/login/changepwd'>
            			<span class='fl'>修改密码</span><i></i>
            		</router-link>
	            </li>
	        </ul>
		    <div class='exit'>
		        退出登录
		    </div>
	    </div>
	</div>
</template>
<script>
	import accountHeader from '@/components/header'
	import { explainZfList,checklogin,buyExplain,zfExplainOrder,payMoneyOrder } from '@/request/api'
	import { Toast,MessageBox } from 'mint-ui'
	export default {
		name: 'set',
		metaInfo: {
	      title: '设置',
	  	},
	  	components:{
			accountHeader
		},
		data:function(){
			return {
				userInfo:'',
			}
		},
		methods:{
			
		},
		created() {
			checklogin().then(res => {
	            const code = res.Resp.code;
	            if (code == 1 ) {
	                this.$router.replace({
	                    path: '/login',
	                    query: {
	                        redirect: this.$router.currentRoute.fullPath
	                    }
	                });
	            }else{
	            	this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
	            }
       		})
			// this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
			// this.getList(this.userInfo.nickid)
		}
	};
</script>
<style lang="less" scoped>
.content{
    width:100%;
    position:absolute;
    bottom:0px;
    top: 0.9rem;
    background:#f2f2f2;
}
ul{
    width:100%;
}
li{
    width:100%;
    background: #fff;
    position:relative;
    border-bottom:1px solid #eee;
    box-sizing:border-box;
    padding-left:0.32rem;
}
ul li:first-child{
    border-top:0.3rem solid #f2f2f2;
    border-bottom:0.3rem solid #f2f2f2;
}
li a{
    display: block;
    padding-right: 0.32rem;
    box-sizing:border-box;
    height:0.9rem;
}
.box span{
    color:#333;
    font-size:0.3rem;
    line-height:0.9rem;
}
.box i{
    width:0.4rem;
    height:0.9rem;
    display:block;
    float: right;
    background: url(../../assets/img/go.png) no-repeat center right;
    background-size:0.16rem 0.24rem;
}
.exit{
    height:0.9rem;
    line-height:0.9rem;
    text-align: center;
    background:#fff;
    color:#d81d36;
    font-size:0.3rem;
    border-bottom:1px solid #eee;
    font-weight: 500;
   border-top:0.3rem solid #f2f2f2;
}
</style>