<template>
	<div class="rmjs-boxs">
		 <ul>
        	<li v-for='(item,index) in rmjsList' :key='item.projid'>	
        		<div class="rmjs-box-top">
        			<div class="img-txt">
        				<a :href='"http://www.shnongc.cn/rab/H5/qiuzhi/mjjs/mj-detail.html?cauthorid="+item.authorid'>
        					<img :src="item.authheadImlUrl" :alt="item.authName">
        					<div class="txt">
        						<h3>
        							<span class="icons zq"></span>
        							<p>{{item.authName}}</p>
        						</h3>
        						<p class="tit-list"> 
        							<span 
        								:class='"Ticon "+tagClass(item.authTag)'
        							></span>
        							<span class="Txticon">近{{item.allnum}}中{{item.hitnum}}</span>
        							<span class="hit_span" v-if='item.lznum > 2'>{{ item.lznum }}连红</span>
        						</p>
        					</div>
        				</a>
        			</div>
        			<p class="num">
        				<a :href='"http://www.shnongc.cn/rab/H5/qiuzhi/mjjs/js-detail.html?planNo="+item.projid'>{{item.salepeice}}<font class="fz24">元</font></a>
        			</p>
        		</div>
        		<a :href='"http://www.shnongc.cn/rab/H5/qiuzhi/mjjs/js-detail.html?planNo="+item.projid'>
        			<div class="rmjs-boxcon">{{item.title}}</div>
        		</a>
        		<a class="plan_box" :href='"http://www.shnongc.cn/rab/H5/qiuzhi/mjjs/js-detail.html?planNo="+item.projid'>
        			<div class="plan_left">
        				<div class="plan_list" v-for='(items,indexs) in item.matches' :key='indexs'>
        					<span class="plan_day">{{ items.matchTime.substring(5,10) }}</span>
        					<span class="plan_name">{{items.leagueName}}</span>
        					<span>{{items.homeTeam}}VS{{items.guestTeam}}</span>
        				</div>
        			</div>
        			<div class="plan_right">{{item.matches.length}}场</div>
        		</a>
        		<div class="rmjs-box-bottm">  
        			<p><span class="icons time"></span>开赛时间 :<span>{{item.begintime.substring(0,10)}}</span></p>  
        			<span>未开赛</span>
        		</div>
        	</li>
	    </ul>
	</div>
	</div>	
</template>
<script>
export default {
	name: 'rmjsTemp',
	props:{
      rmjsList:Array,
    },
	data:function(){
		return {
			
		}
	},
	methods:{
		tagClass(tag){
			var tagClass="";
                switch(tag)
                {
                case "专业玩家":
                  tagClass = 'zywj'
                  break;
                case "彩票分析师":
                  tagClass = 'cpfxs'
                  break;
                case "媒体名记":
                  tagClass = 'mtmj'
                  break;
                  case "社区名人":
                  tagClass = 'sqmr'
                  break;
                  case "TV大咖":
                  tagClass = 'TVdk'
                  break;
                default:
                  tagClass = 'zqmj'
                }
            return tagClass
		}
	},
	created() {
		
		
	},
	mounted () {
	},
};
</script>
<style lang="less" scoped>
	.rmjs-boxs li{
		background: #fff;
		 border-bottom: 0.2rem solid rgb(242,242,242);
		 padding: .26rem .46rem .16rem;
		 display: flex;
		 flex-direction:column;
	}
	.rmjs-box-top {
	    margin-bottom: .18rem;
	    display: flex;
	    flex-direction:row;
	    justify-content:space-between;
	}
	.rmjs-box-top .img-txt{
	    width:85%;
	}
	.rmjs-box-top .img-txt a{
	    display: flex;
	    flex-direction:row;
	}
	.rmjs-box-top .img-txt img{
	    width: 1rem;
	    height: 1rem;
	    border-radius: 50%;
	}
	.rmjs-box-top .img-txt .txt{
	    flex: 1;
	    font-size: .32rem;
	    margin-left: .14rem;
	}
	.rmjs-box-top .txt h3{
	    width: 100%;
	    display: flex;
	    flex-direction:row;
	    align-items:center;
	}
	.rmjs-box-top .txt h3 p{
	    width: 90%;
	    font-size: .32rem;
	}
	.icons{
    background: url(../../../assets/img/icon.png) no-repeat;
    background-size: 1.2rem auto;
    display: block;
}
.zq{
    width: .24rem;
    height: .24rem;
    margin-right: .14rem;
    background-position: 0 0;
}
.time{
    width: .32rem;
    height: .32rem;
    margin-right: .1rem;
    background-position: 0 -.28rem;
}
.money{
    width: .22rem;
    height: .22rem;
    margin-left: .05rem;
    margin-top: .18rem;
    background-position: 0 -.66rem;
}
.tit-list{
    padding-top: .15rem;
    display: flex;
    flex-direction:row;
    align-items:center;   
}
.tit-list span{
    height: .32rem;
    margin-right: .1rem;
}
.tit-list span.Ticon{
    background: url(../../../assets/img/title_icon.png) no-repeat;
    -webkit-background-size: 1.64rem auto;
    background-size: 1.64rem auto;
}
.tit-list span.cpfxs{
    width: 1.64rem;
    background-position: 0 0;
}
.tit-list span.mtmj{
    width: 1.34rem;
    background-position: 0 -.44rem;
}
.tit-list span.sqmr{
    width: 1.34rem;
    background-position: 0 -.9rem;
}
.tit-list span.TVdk{
    width: 1.18rem;
    background-position: 0 -1.3rem;
}
.tit-list span.zywj{
    width: 1.34rem;
    background-position: 0 -1.71rem;
}
.tit-list span.zqmj{
    width: 1.34rem;
    background-position: 0 -2.13rem;
}
.tit-list span.Txticon{
    box-sizing: border-box;
    font-size: .24rem;
    border-radius: .04rem;
    color:rgba(255,143,0,1);
    line-height:.28rem;
    padding: 0 .1rem;
    border:.02rem solid rgba(255,148,0,1);
}
.rmjs-box-top .num a{
    font-size: .36rem;
    color: #FF4301;
    margin-right: .05rem;
    display: flex;
    flex-direction:row;
    align-items:flex-start;  
}
.rmjs-boxcon a{
    display: block;
    padding: .1rem .54rem 0 0;
    font-size: .28rem;
    color: #000;
    line-height: .4rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.rmjs-box-bottm{
    margin-top: .2rem;
    display: flex;;
    flex-direction:row;
    justify-content:space-between ;
}
.rmjs-box-bottm span,.rmjs-box-bottm p{
    font-size: .24rem;
    color: rgba(0,0,0,0.3);
}
.rmjs-box-bottm p{
   display: flex;;
    flex-direction:row; 
}
.rmjs-boxs-more{
    padding: 0.2rem 0 0.3rem;
    text-align: center;
    font-size: .32rem;
    color: #666;
    display: block;
}
.rmjs-boxcon {
    margin-bottom: 0.15rem;
}
.plan_box {
    /* box-sizing: border-box; */
    text-decoration: none;
    width: 100%;
    border-left: 1px solid #979797;
    border-top: 1px solid #979797;
    border-right: 1px solid #979797;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.1rem;
}
.plan_left {
    flex: 6;
    font-size: 0.26rem;
    color: #666;
}
.plan_right {
    /* box-sizing: content-box; */
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.28rem;
    color: #333;
    border-bottom: 1px solid #979797;
}
.plan_list {
    box-sizing: border-box;
    height: 0.5rem;
    border-bottom: 1px solid #979797;
     border-right: 1px solid #979797; 
    padding-left: 0.14rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.plan_day {
    margin-right: 0.2rem;
}
.plan_name {
    margin-right: 0.2rem;
}
.hit_span{
    /* width: 1.25rem; */
    background-color: rgba(241,45,63,1);
    color: #fff;
    font-size: 0.24rem;
    padding: 0 .1rem;
    vertical-align: middle;
}
.fz24{
	font-size: .24rem;
	color: rgba(0,0,0,0.8);
}
</style>
