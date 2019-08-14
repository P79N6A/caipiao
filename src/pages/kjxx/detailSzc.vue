<template>
	<div class="kjxx-detail">
		<kjxx-header :title='$route.params.name+"开奖"' backUrl='/kjxx'>
			<router-link :to='"/kjxx/history/"+$route.params.gid+"/"+$route.params.name' class="right">历史开奖</router-link>
		</kjxx-header>
		<div class="kjxx-detail-com">
			<div class="content">
				<div class="content_t">
					<div class="content_qs clearfix">
						<p>第{{detailObj.pid}}期</p><span class="content_time" v-if='detailObj.atime'>{{detailObj.atime.substring('0', '10')}}</span>
					</div>
					<ul class="number" v-if='detailObj.code'>
						<template v-if='detailObj.code.indexOf("|")>0'>
                            <li v-for='redBall in detailObj.code.split("|")[0].split(",")'>{{redBall}}</li>
                            <template v-if='detailObj.code.split("|")[1]&&detailObj.code.split("|")[1].indexOf(",")>0'>
                                <li v-for='(blueBall,index) in detailObj.code.split("|")[1].split(",")' class="blue">{{blueBall}}</li>
                            </template>
                            <template v-else>
                                <li class="blue">{{ detailObj.code.split("|")[1] }}</li>
                            </template>
                        </template>
                        <template v-else>
                            <li v-for='redBall in detailObj.code.split(",")'>{{redBall}}</li>
                        </template>
					</ul>
				</div>
				<div class="content_z">
					<div class="content_zl">
						<p>本期销量(元)</p>
						<p class="xl">{{ detailObj.gsale?detailObj.gsale:"-"}}</p>
					</div>
					<div class="content_zr">
						<p>奖池滚存(元)</p>
						<p class="gc">{{ detailObj.gpool?detailObj.gpool:"-"  }}</p>
					</div>
				</div>
				<div class="content_b">
					<div class="content_bn">
						<div class="clearfix">
							<p>奖项</p>
							<p>注数 </p>
							<p>单注奖金(元） </p>
						</div>
						<ul class="clearfix jiangx" v-if='detailObj.ginfo'>
							<template v-if='detailObj.ginfo'>
								<li class="clearfix" v-for='(item,index) in detailObj.ginfo.split(",")'>
									<p>{{ awardsList[gidList["gid"+detailObj.gid]][index] }}</p>
									<p v-if='detailObj.ninfo'>{{ detailObj.ninfo.split(",")[index] }}</p>
									<p>{{ item }}</p>
								</li>
							</template>
						</ul>
					</div>
				</div>
			</div>
			<div class="wfjs">
				<router-link :to='"/help/gid"+detailObj.gid' class="wfjs_l">玩法介绍</router-link>
				<router-link to='/gong/news/szc' class="wfjs_r">预测分析</router-link>
			</div>
		</div>
	</div>	
</template>
<script>
import kjxxHeader from '@/components/header'
import { get} from '@/request/http';
export default {
	name: 'detailSzc',
	data:function(){
		return {
			title:'template',
			detailObj:{},
			gidList:{
				'gid01':'awardsList1',
				'gid50':"awardsList2",
				'gid03':"awardsList3",
				'gid53':"awardsList3",
				'gid52':"awardsList3",
				'gid07':"awardsList1",
				'gid51':"awardsList1"
			},
			awardsList:{
				"awardsList1":['一等奖','二等奖','三等奖','四等奖','五等奖','六等奖','七等奖'],
				"awardsList2":['一等奖','二等奖','三等奖','四等奖','五等奖','六等奖','追加一等奖','追加二等奖','追加三等奖','追加四等奖','追加五等奖'],
				"awardsList3":['直选','组三','组六']
			}
			
		}
	},
	metaInfo() {
		return {
     		title: '开奖信息 | '+ this.$route.params.name,
     	}
  	},
	components:{
		kjxxHeader
	},
	methods:{
		getInfo(gid,pid){
			get('/api/cpdata/guoguan/'+gid+'/'+ pid + "/" + pid + ".json")
			.then(this.getInfoSuccess)
			.catch(this.getInfoError)
		},
		getInfoSuccess(res){
			this.detailObj = res.rows
		},
		getInfoError(res){
			this.detailObj = res.rows
		}
	},
	created() {
		this.getInfo(this.$route.params.gid,this.$route.params.pid)
	},
	mounted () {
		// var axiosa = new axiosa();
		// console.log(axiosa)
	},
};
</script>
<style lang="less" scoped>
	.kjxx-detail-com{
		padding-top:1rem;
	}
	.content_t{
		width: 100%;
		height: 1.46rem;
	}
	.content_t p{
		font-size: 0.28rem;
		color: #333333;
		margin-top:0.24rem;
		margin-left: 0.32rem;
		line-height: 0.28rem;
		float: left;
		
	}
	.content_t .content_time{
		margin-left: 0.5rem;
		display: block;
		float: left;
		font-size: 0.26rem;
		color: #999999;
		margin-top:0.24rem;
		line-height: 0.26rem;
	}
	.clearfix:after {
	  content: " ";
	  display: block;
	  clear: both;
	  height: 0;
	}
	.clearfix {
	  zoom: 1;
	}
	.number{
		width: 100%;
		height: 0.96rem;
		margin-top: 0.22rem;
		display: flex;
		justify-content: center;
	}
	.number li{
		width: 0.52rem;
		height: 0.52rem;
		border-radius: 50%;
		background-color: #ff3153;
		font-size: 0.3rem;
		color: #FFFFFF;
		text-align: center;
		line-height: 0.52rem;
		margin-right: 0.14rem;
	}
	.number li.blue{
		background-color: #307ae1;
	}
	.content_z{
		width: 100%;
		height: 1.08rem;
		background-color: #f7f7f7;
	}
	.content_zl,.content_zr{
		width: 50%;
		float: left;
	}
	.content_zl p,.content_zr p{
		font-size: 0.26rem;
		color: #333333;
		text-align: center;
		margin-top: 0.18rem;
		line-height: 0.26rem;
		
	}
	.content_zl p.xl,.content_zr p.gc{
		font-size: 0.32rem;
		line-height: 0.32rem;
		color: #d81d36;
		
	}
	.content_b{
		width: 100%;
		/*height: 3.8rem;*/
		background-color: #f7f7f7;
	}
	.content_bn{
		width: 6.88rem;
		/*height: 3.8rem;*/
		margin: 0 auto;
		background-color: #FFFFFF;
		
	}
	.content_bn div{
		width: 100%;
		height: 0.7rem;
		border-bottom: 1px solid #EEEEEE;
	}
	.content_bn div p:nth-of-type(1){
		font-size: 0.24rem;
		color: #666666;
		width: 2.02rem;
		height: 0.7rem;
		float:left;
		text-align: center;
		line-height: 0.7rem;
	}
	.content_bn div p:nth-of-type(2){
		font-size: 0.24rem;
		color: #666666;
		width: 2.55rem;
		height: 0.7rem;
		float:left;
		text-align: center;
		line-height: 0.7rem;
	}
	.content_bn div p:nth-of-type(3){
		font-size: 0.24rem;
		color: #666666;
		width: 2.29rem;
		height: 0.7rem;
		float:left;
		text-align: center;
		line-height: 0.7rem;
	}

	.content_bn ul li{
		width: 100%;
		height: 0.5rem;
		border-bottom: 1px solid #EEEEEE;
	}
	.content_bn ul li p:nth-of-type(1){
		font-size: 0.24rem;
		color: #666666;
		width: 2.02rem;
		height: 0.5rem;
		float:left;
		text-align: center;
		line-height: 0.5rem;
		
	}
	.content_bn ul li p:nth-of-type(2){
		font-size: 0.24rem;
		color: #666666;
		width: 2.55rem;
		height: 0.5rem;
		float:left;
		text-align: center;
		line-height: 0.5rem;
	}
	.content_bn ul li p:nth-of-type(3){
		font-size: 0.24rem;
		color: #d81d36;
		width: 2.29rem;
		height: 0.5rem;
		float:left;
		text-align: center;
		line-height: 0.5rem;
	}
	.wfjs{
		width: 100%;
		height: 1.3rem;
		background-color: #f7f7f7;
	}
	.wfjs_l{
		padding-left: 1.82rem;
		width: 3.75rem;
		height: 1.3rem;
		float: left;
		font-size: 0.28rem;
		color: #000000;
		line-height: 1.3rem;
		box-sizing: border-box;
		text-decoration: none;
	}
	.wfjs_r{
		padding-left: 0.78rem;
		width: 3.75rem;
		height: 1.3rem;
		float: left;
		font-size: 0.28rem;
		color: #000000;
		box-sizing: border-box;
		line-height: 1.3rem;
		text-decoration: none;
	}
</style>
