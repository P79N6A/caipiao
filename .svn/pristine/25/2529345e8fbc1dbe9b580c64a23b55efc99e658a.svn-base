<template>
	<div class="txjl">
		<account-header title='提现记录' backUrl='-1'></account-header>
		<div class='content'>
	        <ul class='box'   
	        	v-infinite-scroll="loadMore"
 				infinite-scroll-disabled="loading"
  				infinite-scroll-distance="20" 
  				v-if='list.length > 0'>
	        		<li v-for='(item,index) in list' :key='index'>
		                <p class='line'></p>
		                <p class='draw clearfix'><span>订单号：{{item.cashid}}</span><span>{{item.cashdate}}</span></p>
		                <div class='info'>
		                    <s></s>
		                    <div class='clearfix drawInfo'>
		                        <div>
		                            <p>金额</p>
		                            <p><s>{{item.money}}</s>元</p>
		                        </div>
	                            <template v-if='item.success==1'>
	                            	<div><p>状态</p><p class='green'>成功</p></div><div><p>备注</p><p>提款成功</p></div>
	                            </template>
	                            <template v-else-if='item.success==0'>
	                            	<div><p>状态</p><p class='green'>处理中</p></div><div><p>备注</p><p>银行处理中</p></div>
	                            </template>
	                            <template v-else>
	                            	<div><p>状态</p><p class='red'>失败</p></div><div><p>备注</p><p>{{item.memo}}</p></div>
	                            </template>
		                    </div>
		                </div>
		            </li> 
		            <li v-if='loading' class="lastData">--已经到底啦--</li>      
	        </ul>
	        <p  v-else class="noData">暂时没有您最近三个月的提现记录</p>
	    </div>

	</div>
</template>
<script>
	import accountHeader from '@/components/header'
	import { qp } from '@/request/api'
	import { Toast,MessageBox,Indicator } from 'mint-ui'
	export default {
		name: 'txjl',
		metaInfo: {
	      title: '提现记录',
	  	},
	  	components:{
			accountHeader
		},
		data:function(){
			return {
				list:[],
				pn:0,
				loading:false,
				ps:'10',
			}
		},
		methods:{
			getList(pn){
				let self = this;
				let d = new Date();
			    let d1 = d.getTime() - 90*24*3600*1000;
			    let d2 = new Date(d1);
				qp({
					"stime": d2.getFullYear() + "-" + (d2.getMonth()+1) + "-" + d2.getDate(),
            		"etime": d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate(),
            		"fid":"u_cash",
            		"pn":pn,
            		"ps":self.ps
				}).then(res=>{
					let code = res.Resp.code,desc = res.Resp.desc;
					if(code == "0"){
						let rs = res.Resp.row;
		                if(rs && rs.length == self.ps){
		                	self.list = self.list.concat(rs);
		                    Indicator.close()
		                    self.loading = false;
		                }else if(rs.length>0&&rs.length<10 ){
		                   	self.list = self.list.concat(rs,[]);
		                    Indicator.close()
		                }else{
		                	rs = new Array(rs);
		                	self.list = self.list.concat(rs);
		                    Indicator.close()
		                }
					}else if (code == "1"){
						Indicator.close()
						MessageBox.alert("请登录！").then(res=>{
							self.$router.replace({
			                    path: '/login',
			                    query: {
			                        redirect: router.currentRoute.fullPath
			                    }
			                });
						})
					}else{
						Indicator.close()
						Toast(desc);
					}

				})
			},
			loadMore() {
				let self = this
			 	self.loading = true;
			 	Indicator.open('加载中...');
			 	setTimeout(() => {
				    self.pn++
				    self.getList(self.pn)
				},1000)
			    
			}
		},
		created() {
			//this.getList(1);
		}
	};
</script>
<style lang="less" scoped>
.content{
    padding-top:0.9rem;
    width:100%;
    box-sizing:border-box;
    padding-left:0.30rem;
}
ul{
    width:100%;
    box-sizing:border-box;
    padding:0 0.40rem;
}
li{
    width:100%;
     box-sizing:border-box;
     margin-top:0.6rem;
     position:relative

}
.line{
    width:0.02rem;
    height:2.08rem;
    background:#eee;
    position:absolute;
    top:0.24rem;
    left:-0.4rem;
}

.line::after{
    content:'';
    width:0.22rem;
    height:0.22rem;
    background: #fb766e;
    border-radius:50%;
    position:absolute;
    top: -0.24rem;
    left:-0.11rem;
}

.draw span:first-child{
    font-size:0.24rem;
    color:#065ed7;
    float: left;
}
.draw span:nth-child(2){
    font-size:0.24rem;
    color:#999;
    float: right;
}
.info{
    position:relative;
    background: #f7f7f7;
    border-radius: 0.15rem;
    border: 1px solid #eee;
    margin-top:0.2rem;
    padding:0.2rem 0;
    padding-right:0.2rem;
}
.info>s{
    position:absolute;
    top:45%;
    left:-0.2rem;
    width:0.19rem;
    height:0.27rem;
    background: url(../../assets/img/account/toleft.png) no-repeat;
    background-size:0.19rem 0.27rem;
}
.info>div div{
    float:left;

}
.info p{
     font-size:0.24rem;
     color:#666;
     text-align: center;
}
.info p s{
    color:#d81d36;
}
.info .red{
    color:#d81d36;
}
.info .green{
    color:#1aaf05;
}
.info>div div p:nth-child(2){
    margin-top:0.2rem;
}

.drawInfo div:not(:last-child){
    width:27%
}
.drawInfo div:first-child{
    margin-right:1%;
}
.drawInfo div:last-child{
    width:2.17rem;
}
.drawInfo div:last-child p:last-child{
    font-size:0.22rem;
    color:#333;

}	
.lastData{
	padding: .6rem 0;
	text-align: center;
	color: #ccc;
}
</style>