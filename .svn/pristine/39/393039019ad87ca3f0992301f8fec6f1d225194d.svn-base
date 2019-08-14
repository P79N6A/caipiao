<template>
	<div class="kjxx-history">
		<kjxx-header :title='$route.params.name+"历史开奖"' backUrl='-1'></kjxx-header>
		<ul class='content'>
			<!--数字彩-->
			<template v-if='szcGidList.indexOf($route.params.gid) > -1'>
				<template v-for='(item,index) in list'>
					<li class='ssq clearfix'>
						<router-link :to='"/kjxx/detailSzc/"+$route.params.gid+"/"+item.pid+"/"+$route.params.name'>
							<p class='clearfix'><span class='projid'>第{{item.pid}}期</span><span class='time' v-if='item.atime'>{{ item.atime.substring(0,10)}}</span></p>
					        <ul class='clearfix'>
					           <template v-if='item.code&&item.code.indexOf("|")>0'>
                                    <li v-for='redBall in item.code.split("|")[0].split(",")'>{{redBall}}</li>
                                    <template v-if='item.code.split("|")[1]&&item.code.split("|")[1].indexOf(",")>0'>
                                        <li v-for='(blueBall,index) in item.code.split("|")[1].split(",")' class="blue">{{blueBall}}</li>
                                    </template>
                                    <template v-else>
                                        <li class="blue">{{ item.code.split("|")[1] }}</li>
                                    </template>
                                </template>
                                <template v-else>
                                    <li v-for='redBall in item.code.split(",")'>{{redBall}}</li>
                                </template>
					        </ul>
					        <s></s>
						</router-link>
				    </li>
				</template>
			</template>
			<!--竞技彩-->
			<template v-if='jjcGidList.indexOf($route.params.gid) > -1'>
				<template v-for='(item,index) in list'>
					<li class='sfc clearfix'>
						<router-link :to='"/kjxx/detailJjc/"+$route.params.gid+"/"+item.pid+"/"+$route.params.name'>
							<p class='clearfix'><span class='projid'>第{{item.pid}}期</span><span class='time' v-if='item.atime'>{{ item.atime.substring(0,10)}}</span></p>
					        <ul class='clearfix'>
					            <template v-if='item.code'>
                                    <li v-for='items in item.code.split(",")'>
                                        {{items}}
                                    </li>
                                </template>
					        </ul>
					        <s></s>
						</router-link>
				    </li>
				</template>
			</template>
			<!--快频彩-->
			<template v-if='kpcGidList.indexOf($route.params.gid) > -1'>
				<template v-for='(item,index) in list'>
					<li class='ssq clearfix'>
						<router-link :to='"/kjxx/detailKpc/"+$route.params.gid+"/"+item.pid+"/"+$route.params.name+"/"+item.atime.substring(0,10)+"/"+item.code'>
							<p class='clearfix'><span class='projid'>第{{item.pid}}期</span><span class='time' v-if='item.atime'>{{ item.atime.substring(0,10)}}</span></p>
					        <ul class='clearfix'>
					           <template v-if='item.code'>
                                    <li v-for='items in item.code.split(",")'>
                                        {{items}}
                                    </li>
                                </template>
					        </ul>
					        <s></s>
						</router-link>
				    </li>
				</template>
			</template>
		</ul>
	</div>	
</template>
<script>
import kjxxHeader from '@/components/header'
import { get } from '@/request/http';
export default {
	name: 'kjxxHistory',
	metaInfo: {
      title: '历史开奖',
  	},
	components:{
		kjxxHeader
	},
	data:function(){
		return {
			gid:'',
			list:[],
			szcGidList:'01,03,07,50,51,52,53',
            jjcGidList:'80,81,83,82',
            kpcGidList:'55,56,57,06,08,04'
		}
	},
	
	methods:{
		
	},
	created() {
		let gid = this.$route.params.gid,t = this;
		get('/api/tdata/'+gid+'/last_10.xml?r='+Math.random()).then(res => {
			let data = $(res).find('row'),newList = [];
			data.each(function(index,item){
				let obj = {
					"atime":$(item).attr('tm'),
					"pid":$(item).attr('cp'),
					"code":$(item).attr('cc'),
				}
				newList.push(obj)
			})
			t.list = newList
		}).catch(res => {
			console.log(res)
		})
	},
	mounted () {
		// var axiosa = new axiosa();
		// console.log(axiosa)
	},
};
</script>
<style lang="less" scoped>
	.content{
		padding-top:0.9rem;
	}
	.content >li{
     width:100%;
     height:1.82rem;
     box-sizing:border-box;
     padding:0.32rem 1rem 0.32rem 0.32rem;
     border-bottom:1px solid #eee;
     position:relative;
}
s{
    position:absolute;
    width: 0.16rem;
    height:0.24rem;
    top:45%;
    right:0.5rem;
    background: url(../../assets/img/go.png) no-repeat;
    background-size:0.16rem 0.24rem;
}
a{
    display: block;
}

.projid{
    font-size:0.28rem;
    color:#333;
    float: left;
}
.time{
    font-size:0.26rem;
    color:#999;
    float: left;
    margin-top: 0.02rem;
    margin-left:0.32rem;
}
/*双色球*/
.ssq li{
    float: left;
    font-size:0.3rem;
    width:0.5rem;
    height:0.5rem;
    color:#ec2f49;
    text-align:center;
    line-height:0.5rem;
    border-radius: 50%;
}
 .ssq ul{
    margin-top:0.2rem;
}
.ssq li:not(:first-child){
    margin-left:0.1rem;
}
.ssq li.blue{
    color: #307ae1
}
 .content .ssq:first-child li{
    float: left;
    font-size:0.3rem;
    width:0.5rem;
    height:0.5rem;
    color:#fff;
    background: #ec2f49;
    text-align:center;
    line-height:0.5rem;
    border-radius: 50%;
}
 .content .ssq:first-child ul{
    margin-top:0.2rem;
}
 .content .ssq:first-child li:not(:first-child){
    margin-left:0.1rem;
}
 .content .ssq:first-child li.blue{
    background: #307ae1;
}

/*胜负彩 任选九 半全场 进球彩*/
.sfc li{
    float: left;
    font-size:0.32rem;
    width:0.34rem;
    height:0.6rem;
    color:#ec2f49;
    box-sizing:border-box;
    border:1px solid #eee;
    text-align:center;
    line-height:0.6rem;
    border-radius: 3px;
}
 .sfc ul{
    margin-top:0.2rem;
}
.sfc li:not(:first-child){
    margin-left:0.1rem;
}

 .content .sfc:first-child li{
    float: left;
    font-size:0.32rem;
    width:0.34rem;
    height:0.6rem;
    color:#fff;
    box-sizing:border-box;
    background: #ec2f49;
    text-align:center;
    line-height:0.6rem;
    border-radius: 3px;
}
 .content .sfc:first-child ul{
    margin-top:0.2rem;
}
 .content .sfc:first-child li:not(:first-child){
    margin-left:0.1rem;
}

</style>
