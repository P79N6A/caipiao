<template>
	<div class="kjxx-detail">
		<kjxx-header :title='$route.params.name+"开奖"' backUrl='/kjxx'>
			<router-link :to='"/kjxx/history/"+$route.params.gid+"/"+$route.params.name' class="right">历史开奖</router-link>
		</kjxx-header>
		<div class="pt90">
			<div class="content">
				<div class='proj'>
                    <p class='clearfix info'>
                        <span class='type'>{{ $route.params.name }}</span>
                        <span class='id'>第{{ detailObj.pid }}期</span>
                        <span class='time' v-if='detailObj.atime'>{{detailObj.atime.substring('0', '16')}}</span>
                    </p>
                    <ul class='clearfix' v-if='detailObj.code'>
                         <li v-for='item in detailObj.code.split(",")'>{{ item }}</li>
                    </ul>
                    <div @click='dzState = !dzState'>
                    	对阵详情
                    	<s :class='{iconUp:dzState}'></s>
                    </div>
                </div>
                <table class='project' v-show='dzState'>
                    <tr>
                        <th>序号</th>
                        <th>主队</th>
                        <th>比分</th>
                        <th>客队</th>
                        <th>赛果</th>
                    </tr>
                    <template v-if='$route.params.gid == 80 || $route.params.gid == 81'>
                    	<tr v-for='(item,index) in detailObj.row'>
                            <td>{{item.id}}</td>
                            <td>{{item.hn}}</td>
                            <td>{{item.hs+':'+item.vs}}</td>
                            <td>{{item.vn}}</td>
                            <td>{{detailObj.code.split(",")[index]}}</td>
                        </tr>
                    </template>
                   	<template v-if='$route.params.gid == 82 '>
                    	<tr v-for='(item,index) in detailObj.row'>
                            <td>{{item.id}}</td>
                            <td>{{item.hn}}</td>
                            <td>{{item.hs+':'+item.vs}}</td>
                            <td>{{item.vn}}</td>
                            <td><div>{{detailObj.code.split(",")[index*2]}}</div><div>{{detailObj.code.split(",")[index*2+1]}}</div></td>
                        </tr>
                    </template>
                    <template v-if='$route.params.gid == 83 '>
                    	<tr v-for='(item,index) in detailObj.row' v-if='index%2 == 0'>
                            <td>{{index/2+1}}</td>
                            <td>{{item.hn.substring(3)}}</td>
                            <td><div>半{{item.hhs+':'+item.hvs}}</div><div>全{{item.hs+':'+item.vs}}</div></td>
                            <td>{{item.vn}}</td>
                            <td><div>{{detailObj.code.split(",")[index]}}</div><div>{{detailObj.code.split(",")[index+1]}}</div></td>
                        </tr>
                    </template>
                </table>
                <table class='tips'>
                    <tbody>
                        <tr>
                            <th>奖项</th>
                            <th>中奖注数</th>
                            <th>没注金额(元)</th>
                        </tr>
                        <template v-if='detailObj.ginfo&&detailObj.ginfo.indexOf(",") > -1'>
                        	<tr>
	                            <td>一等奖</td>
	                            <td>{{ detailObj.ninfo.split(',')[0] }}</td>
	                            <td>{{ detailObj.ginfo.split(',')[0] }}</td>
	                        </tr>
	                        <tr>
	                            <td>二等奖</td>
	                            <td>{{ detailObj.ninfo.split(',')[1] }}</td>
	                            <td>{{ detailObj.ginfo.split(',')[1] }}</td>
	                        </tr>
                        </template>
                        <template v-else>
                        	<tr>
	                            <td>一等奖</td>
	                            <td>{{ detailObj.ninfo}}</td>
	                            <td>{{ detailObj.ginfo}}</td>
	                        </tr>
                        </template>
                    </tbody>
                </table>
                <div class='btm clearfix'>
                    <span class='cty'>全国销量：<s>{{ detailObj.gsale }}元</s></span>
                    <span class='num'>奖池滚存：<s>{{ detailObj.gpool }}元</s></span>
                </div>
                <div class='dec clearfix'>
                	<router-link  class='wanf' :to='"/help/gid"+detailObj.gid'>玩法介绍</router-link>
 					<router-link to='/gong/news/zq' class="yuche">预测分析</router-link>
                </div>

            </div>
		</div>	
	</div>	
</template>
<script>
import kjxxHeader from '@/components/header'
import { get} from '@/request/http';
export default {
	name: 'detailJjc',
	data:function(){
		return {
			title:'template',
			detailObj:{},
			dzState:false,
			
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
	.content{
    width:100%;
    position:relative;
    box-sizing:border-box;
    padding:0.18rem;
}
.proj{
    width:7.14rem;
    height:2.59rem;
    background: url(../../assets/img/bg0824.png) no-repeat;
    background-size: 100%;
    box-sizing:border-box;
}
.info{
    width:100%;
    box-sizing:border-box;
    padding:0.32rem  0.32rem 0 0.32rem;
}
.info span{
    float: left;
    font-size:0.28rem;
}
.type{
    color:#333;

}
.id{
    color:#999;
    margin:0 0.7rem;
}
.time{
    color:#999;
}
.proj ul{
    padding:0.32rem;

}
.proj li{
    float: left;
    color:#d81d36;
    font-size: 0.3rem;
}
.proj li:not(:first-child){
    margin-left: 0.31rem;
}
.proj div{
    text-align:center;
    font-size:0.3rem;
    position:relative;
    z-index:5;
}
.proj s{
    position:absolute;
    width:0.22rem;
    height:0.13rem;
    background: url(../../assets/img/xxsj1.png) no-repeat;
    background-size:100%;
    bottom:0.1rem;
    right:2.7rem;
    &.iconUp{
    	background-image: url(../../assets/img/xsjt1.png);
    }
}
.project{
    margin-top:0.2rem;
}
.project,tbody{
    width:100%;
}
.project tr{
    width:100%;
    border-top:1px solid #eee;
}
.project tr:last-child{
    border-bottom:1px solid #eee;
}
.project td,.project th{
    font-size:0.22rem;
    color:#666;
    text-align:center;
    height:0.7rem;
    line-height:0.7rem;
    box-sizing:border-box;
    border:1px solid #eee;
}

.project td div:first-child{
    box-sizing:border-box;
    border-bottom:1px solid #eee;
}
.project tr:first-child td{
   font-size:0.28rem;
}
.project tr td:first-child{
    width:15%;
}
.project tr td:nth-child(2){
    width:27.5%;
}
.project tr td:nth-child(3){
    width:15%;
}
.project tr:not(:first-child) td:nth-child(3){
    color:blue;
    width:15%;
}
.project tr td:nth-child(4){
    width:27.5%;
}
.project tr td:last-child{
    width:15%;
    border-right:1px solid #eee;
}
.project tr:not(:first-child) td:last-child{
    width:15%;
    color:#d81d36;
    border-right:1px solid #eee;
}

.tips{
    width:100%;
    margin-top:0.2rem;
}
.tips tr{
    width:100%;
}
.tips td,.tips th{
    width:33.3%;
    box-sizing:border-box;
    height:0.7rem;
    line-height:0.7rem;
    text-align:center;
    border-top:1px solid #eee;
    border-left:1px solid #eee;
    font-size:0.24rem;
    color:#333;
}
.tips tr td:last-child{
    border-right:1px solid #eee;
}
.tips tr:not(:first-child) td:last-child{
    color:#d81d36;
}
.tips tr:last-child{
    border-bottom:1px solid #eee;
}
.btm{
    width:100%;
    border-bottom:1px solid #eee;
    border-left:1px solid #eee;
    border-right:1px solid #eee;
}
.btm span{
    font-size:0.24rem;
    float: left;
    width:50%;
    text-align:center;
    height:0.7rem;
    line-height:0.7rem;
    color:#666;
}
.btm s{
    color:#d81d36;
}
.dec{
    width:100%;
    height:1rem;
    background: #f7f7f7;
    margin-bottom: 1rem;
}
.dec a{
    width:50%;
    line-height:1rem;
    float: left;
    font-size:0.3rem;
    text-align:center;
}
</style>
