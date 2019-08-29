<template>
	<div class="kjxx">
		<kjxx-header title='开奖信息' backUrl='/'></kjxx-header>
        <div class="tab">
            <div :class='current==0?"current szc":"szc"' @click='current=0'>
                数字彩
            </div>
            <div :class='current==1?"current jjc":"jjc"' @click='current=1'>
                竞技彩
            </div>
            <div :class='current==2?"current kpc":"kpc"' @click='current=2'>
                快频彩
            </div>
        </div>
        <div class="kj-list list" v-show='current==0'>
            <ul>
                <li class="ico-click"  v-for='(item,index) in szcList'>
                    <router-link :to='"/kjxx/detailSzc/"+item.gid+"/"+item.pid+"/"+item.gname'>
                        <i></i>
                        <div class="kj">
                            <p class="kj-tit">
                                <strong>{{ item.gname }}</strong><s>第{{ item.pid }}期</s>
                                <span v-if='item.auditdate'>{{item.auditdate.substring(0,10)}}</span>
                            </p>
                            <em class="ball">
                                <template v-if='item.codes&&item.codes.indexOf("|")>0'>
                                    <b v-for='redBall in item.codes.split("|")[0].split(",")'>{{redBall}}</b>
                                    <template v-if='item.codes.split("|")[1]&&item.codes.split("|")[1].indexOf(",")>0'>
                                        <b v-for='(blueBall,index) in item.codes.split("|")[1].split(",")' class="blue">{{blueBall}}</b>
                                    </template>
                                    <template v-else>
                                        <b class="blue">{{ item.codes.split("|")[1] }}</b>
                                    </template>
                                </template>
                                <template v-else>
                                    <b v-for='redBall in item.codes.split(",")'>{{redBall}}</b>
                                </template>
                            </em>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="kj-list list" v-show='current==1'>
            <ul>
                <li class="ico-click"  v-for='(item,index) in jjcList'>
                    <router-link '"/kjxx/detailJjc/"+item.gid+"/"+item.pid+"/"+item.gname'>
                        <i></i>
                        <div class="kj">
                            <p class="kj-tit">
                                <strong>{{ item.gname }}</strong><s>第{{ item.pid }}期</s>
                                <span v-if='item.auditdate'>{{item.auditdate.substring(0,10)}}</span>
                            </p>
                            <em style="float:left; margin-top: 0.2rem;">
                                <template v-if='item.codes'>
                                    <cite v-for='items in item.codes.split(",")'>
                                        {{items}}
                                    </cite>
                                </template>
                            </em>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="kj-list list" v-show='current==2'>
            <ul>
                 <li class="ico-click"  v-for='(item,index) in kpcList'>
                    <router-link :to='"/kjxx/detailKpc/"+item.gid+"/"+item.pid+"/"+item.gname+"/"+item.auditdate.substring(0,10)+"/"+item.codes'>
                        <i></i>
                        <div class="kj">
                            <p class="kj-tit">
                                <strong>{{ item.gname }}</strong><s>第{{ item.pid }}期</s>
                                <span v-if='item.auditdate'>{{item.auditdate.substring(0,10)}}</span>
                            </p>
                            <em class="ball">
                                <template v-if='item.codes&&item.codes.indexOf("|")>0'>
                                    <b v-for='redBall in item.codes.split("|")[0].split(",")'>{{redBall}}</b>
                                    <template v-if='item.codes.split("|")[1]&&item.codes.split("|")[1].indexOf(",")>0'>
                                        <b v-for='(blueBall,index) in item.codes.split("|")[1].split(",")' class="blue">{{blueBall}}</b>
                                    </template>
                                    <template v-else>
                                        <b class="blue">{{ item.codes.split("|")[1] }}</b>
                                    </template>
                                </template>
                                <template v-else>
                                    <b v-for='redBall in item.codes.split(",")'>{{redBall}}</b>
                                </template>
                            </em>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
	</div>	
</template>
<script>
import kjxxHeader from '@/components/header'
import { aopencode} from '@/request/api';
export default {
	name: 'index',
	metaInfo: {
      title: '开奖信息',
  	},
	components:{
		kjxxHeader
	},
	data:function(){
		return {
			current:0,
            szcList:[],
            jjcList:[],
            kpcList:[]
		}
	},
	
	methods:{
		
	},
	created() {
		aopencode().then(res => {
            var r = res.rows.row,t = this;
            //数字彩
            const szcGidList = '01,50,03,53,52,07,51',
            //竞技彩
            jjcGidList = '80,81,83,82',
            //快频彩
            kpcGidList = '55,56,57,06,08,04';
            r.forEach(function(item,index){
                if (szcGidList.indexOf(item.gid) > -1) {
                    t.szcList.push(item)
                }
                if (jjcGidList.indexOf(item.gid) > -1) {
                    t.jjcList.push(item)
                }
                if (kpcGidList.indexOf(item.gid) > -1) {
                    t.kpcList.push(item)
                }
            })
        }).catch(err =>{
            console.log(err)
        })
	},
	mounted () {
		// var axiosa = new axiosa();
		// console.log(axiosa)
	},
};
</script>
<style lang="less" scoped>
	.tab{
        width: 100%;
        height: 0.9rem;
        position: fixed;
        top: 0.9rem;
        border-bottom: 1px solid #ccc;
        background-color: #FFFFFF;
        z-index: 9;
    }
    .szc,.jjc,.kpc{
        width: 1.2rem;
        height: 0.88rem;
        font-size: 0.3rem;
        color: #333333;
        text-align: center;
        line-height: 0.88rem;
        float: left;
    }
    .jjc{
        margin-left: 1.29rem;
        
    }
    .szc{
        margin-left: 0.69rem;
        
    }
    .kpc{
        margin-left: 1.24rem;
    }
    .current{
        border-bottom: 2px solid #d81d36;
    }
    .kj-list {
    margin-top: 1.8rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
}
.kj-list ul{
    width: 100%;
    overflow: hidden;
}
.kj-list ul li {
    padding: 0 0.38rem 0 0.2rem;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    width: 100%;
    height: 1.78rem;
}
.kj {
    padding:0.32rem 0;
    overflow: hidden;
    
}
.kj-tit{
    font-size: 0.28rem;
    color: #000;
    line-height: 0.32rem;
}
.kj-tit strong {
    font-size: 0.32rem;
    color: #000;
}
.kj-tit s{
    margin-left: 0.44rem;
}
.kj-tit span {
    margin-left: 0.34rem;
    font-size: 0.26rem;
    color: #999;
}
.ball{
    float: left;
    height: 0.52rem;
    margin-top: 0.32rem;
}

.ico-click i {
    float: right;
    width: 0.16rem;
    height: 0.24rem;
    background: url(../../assets/img/go.png);
    background-size: cover;
    margin-top: 0.8rem;
}
</style>
