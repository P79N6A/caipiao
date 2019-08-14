<template>
	<div class="index">
		<header class="header">
	        <img class='logo' src="../../assets/img/logo.png" alt="">
		</header>
		<div id="sliderA">
			<swiper ref="mySwiper" :options="swiperOption">
				<swiper-slide v-for='(item,index) in bannerList' :key='index'>
					<a :href="item.url" :title='item.title'>
						<img :src="item.image">
					</a>
				</swiper-slide>	
			</swiper>
			<div class="swiper-pagination"></div>
		</div>
		<div class="announce">
			<ul>
				<template  v-for='(item,index) in announceList'>
					<a :href="item.url" title="item.title" v-if='item.isshow==1'>{{ item.title }}</a>
				</template>
			</ul>
		</div>
		<div class="online">
			<router-link to='/liveZQ'>
				比分直播
			</router-link>
			<router-link to='/kjxx'>
				开奖信息
			</router-link>
	    </div>
	    <!-- 彩种列表 -->
	    <ul class='gc clearfix'>
	        <li>
	        	<router-link to='/jczq/jchh.html'>
	    			<img src="../../assets/img/jczq.png" alt="">
	                <p>竞彩足球</p>
	    		</router-link>
	        </li> 
			<li>
	            <router-link to="/jclq/index.html">
	                <img src="../../assets/img/jclq.png" alt="">
	                <p>竞彩篮球</p>
	            </router-link>
	        </li>
			<li>
				<router-link to="/zc/index.html">
					<img src="../../assets/img/sfc.png" alt="">
					<p>胜负彩</p>
				</router-link>
			</li>
			<li>
				<router-link to="/zc/r9.html">
					<img src="../../assets/img/rx9.png" alt="">
					<p>任选九</p>
				</router-link>
			</li>
	        <li>
	            <router-link to="/dlt/index.html">
	                <img src="../../assets/img/dlt.png" alt="">
	                <p>大乐透</p>
	            </router-link>
	        </li>
			<li>
	            <router-link to="/bd/">
	                <img src="../../assets/img/sfgg.png" alt="">
	                <p>北京单场</p>
	            </router-link>
	        </li> 
	    </ul>
	    <!--热门解说 -->
	    <div class="rmjs-box">
	        <h2 class="tit"></h2>
			<rmjs-box :rmjsList='rmjsList'></rmjs-box>
	    </div>
	    <!--跟单-->
	    <ul class="gd"> 
	    	<!--最热-->
	        <li>
	            <div class='top clearfix'>
	                <div class='userpf'>
	                    <div class='tx' :style='"background:url(/api"+copyJczqHot.imageUrl+") no-repeat center;background-size:cover;"'></div>
	                    <s v-if='copyJczqHot.ishot==1'></s>
	                </div>
	                <div class='usertitle'>
	                    <p class='clearfix'><span class='name'>{{ copyJczqHot.nickname}}</span><span class='mzs'>{{ copyJczqHot.allnum }}中{{ copyJczqHot.hitnum }}</span>
	                    </p>
	                    <p class='clearfix'  v-if='copyJczqHot.usertitle'>
	                    	<template v-if='copyJczqHot.usertitle.indexOf(",")>0'>
	                    		<span v-for='item in copyJczqHot.usertitle.split(",")'>{{ item }}</span>
	                    	</template>
	                    	<template v-else>
	                    		<span>{{ copyJczqMore.usertitle }}</span>
	                    	</template>
	                    </p>
	                </div>
	                <span  class='hot'>跟单最热</span>
	            </div>
	            <div class='bottom'>
	                <div class='clearfix'>
	                    <i></i>
	                    <span>预计回报：<s>{{copyJczqHot.ireturnrate}}</s>倍</span>
	                    <template v-if='copyJczqHot.league'>
	                    	<span v-for='item in copyJczqHot.league.split(",")'>{{ item }}</span>
	                    </template>
	                    <template v-else>
	                    	<span>精选赛事</span>
	                    </template>
	                    <span class='endtime' v-if='copyJczqHot.cendtime'>{{ copyJczqHot.cendtime.substring(5,15) }}截止</span>
	                </div>
	                <div class='clearfix'>
	                    <span>自购：<s>{{copyJczqHot.itmoney}}</s>元</span>
	                    <span>跟单：<s>{{copyJczqHot.copycount}}</s>人</span>
	                    <a href="" class=''>立即跟单</a>
	                </div>
	            </div>
	        </li>
         	<li>
	            <div class='top clearfix'>
	                <div class='userpf'>
	                    <div class='tx' :style='"background:url(/api"+copyJczqMore.imageUrl+") no-repeat center;background-size:cover;"'></div>
	                    <s v-if='copyJczqMore.ishot==1'></s>
	                </div>
	                <div class='usertitle'>
	                    <p class='clearfix'><span class='name'>{{ copyJczqMore.nickname}}</span><span class='mzs'>{{ copyJczqMore.allnum }}中{{ copyJczqMore.hitnum }}</span>
	                    </p>
	                    <p class='clearfix' v-if='copyJczqMore.usertitle'>
	                    	<template v-if='copyJczqMore.usertitle.indexOf(",")>0'>
	                    		<span v-for='item in copyJczqMore.usertitle.split(",")'>{{ item }}</span>
	                    	</template>
	                    	<template v-else>
	                    		<span>{{ copyJczqMore.usertitle }}</span>
	                    	</template>
	                    </p>
	                </div>
	                <span  class='buyM'>自购最多</span>
	            </div>
	            <div class='bottom'>
	                <div class='clearfix'>
	                    <i></i>
	                    <span>预计回报：<s>{{copyJczqMore.ireturnrate}}</s>倍</span>
	                    <template v-if='copyJczqMore.league'>
	                    	<span v-for='item in copyJczqMore.league.split(",")'>{{ item }}</span>
	                    </template>
	                    <template v-else>
	                    	<span>精选赛事</span>
	                    </template>
	                    <span class='endtime' v-if='copyJczqMore.cendtime'>{{ copyJczqMore.cendtime.substring(5,15) }}截止</span>
	                </div>
	                <div class='clearfix'>
	                    <span>自购：<s>{{copyJczqMore.itmoney}}</s>元</span>
	                    <span>跟单：<s>{{copyJczqMore.copycount}}</s>人</span>
	                    <a href="">立即跟单</a>
	                </div>
	            </div>
	        </li>
		</ul>
	    <div  class='clearfix footer'>
	        <router-link to="/gong" class='annce clearfix'>
                <img src="../../assets/img/notice.png" alt="">
                <span>公告</span>
	        </router-link>
	        <div>
                <router-link to="/dailycontest" class='every clearfix'>
	                <img src="../../assets/img/daliy.png" alt="">
	                <span>每日竞彩</span>
	            </router-link>
	            <a href="http://www.shnongc.cn/rab/H5/qiuzhi/mjjs/index.html" class='news clearfix'>
	                <img src="../../assets/img/news.png" alt="">
	                <span>名家解说</span>
	            </a>
	        </div>
	    </div>
	   <index-footer :loginState='loginState' current='0'></index-footer>
	</div>	
</template>
<script>
import rmjsBox from './components/rmjs'
import indexFooter from '@/components/footer'
import { indexBannerList,indexNotice,rmJs,copyJczq,checklogin } from '@/request/api';
export default {
	name: 'index',
	// metaInfo: {
 //      // 如果子component中没有定义 metaInfo.title ，会默认使用这个title
 //      title: '首页',
 //  	},
	components:{
    	rmjsBox,
        indexFooter
	},
	data:function(){
		return {
			bannerList:[],
			announceList:[],
			rmjsList:[],
			copyJczqHot:'',
			copyJczqMore:'',
			swiperOption: {//swiper3
		      autoplay: 3000,
		      speed: 1000,
		      loop:true,
		      pagination: {
	            el: '.swiper-pagination'
	          },
		    },
            loginState:false,
		}
	},
	computed: {
		swiper() {
	        return this.$refs.mySwiper.swiper
	   	},
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
		},
	},
	created() {
		let t = this
		indexBannerList().then(res => {
            t.bannerList = res
        }).catch(err =>{
        	// console.log(err)
        })
        indexNotice().then(res => {
            t.announceList = res
        }).catch(err =>{
        	// console.log(err)
        })
        rmJs({
        	"page":1,
        	"playtype":1,
        	"type":0,
        	"name":"",
        	"pagesize":20
        }).then(res => {
           t.rmjsList = res.data.slice(0,3)
        }).catch(err =>{
        	// console.log(err)
        })
        //跟单最热
        copyJczq({
        	'fid':'web_jczq_hot_List',
            'ps':1,
            'pn':1
        }).then(res => {
           t.copyJczqHot = res.Resp.rows.row
        }).catch(err =>{
        	console.log(err)
        })
        //自购最多
        copyJczq({
        	'fid':'web_jczqList',
            'ps':1,
            'pn':1
        }).then(res => {
           t.copyJczqMore = res.Resp.rows.row
        }).catch(err =>{
        	console.log(err)
        })
        checklogin().then(res => {
            const code = res.Resp.code;
            if (code === 0 ) {
                t.loginState = true
            }else{
                t.loginState = false
            }
        })
		
	},
	mounted () {
		// var axiosa = new axiosa();
		// console.log(axiosa)
	},
};
</script>
<style lang="less" scoped>
	.header{
		height: 1.2rem;
		img{
			width: 2.17rem;
			height: auto;
    		margin-top: 0.3rem;
		}
	}
	#sliderA {
	    position: relative;
	    width: 100%;
	    overflow: hidden;
	    img{
	    	width: 100%;
	    	height: auto;
	    }
	}
	.swiper-pagination{
		width: 100%;
		left: 0;
		bottom: 5px;
	}
	.announce{
        display: block;
        width:100%;
        height:0.65rem;
        box-sizing:border-box;
        padding-left:0.65rem;
        background: url('../../assets/img/announce.png') no-repeat;
        background-size:0.37rem 0.37rem;
        background-position:2.5% center;
        font-size:0.26rem;
        line-height:0.65rem;
        color:#333;
        border-bottom:1px solid #eee;
        overflow:hidden;
        position:relative;
    }
    .announce ul{
        position:absolute;
    }
    .announce a{
        display: block;
        height:100%;
        color:#000;
        line-height:0.649rem;
    }
    .online{
        width:100%;
        height:1.4rem;
        border-bottom:0.2rem solid rgb(242,242,242);
    }
    .online  a{
        width:50%;
        display:block;
        float:left;
        box-sizing:border-box;
        font-size:0.3rem;
        color:#000;
        line-height:1.4rem;
        padding:0 0.5rem;
        text-align:right;
    }
    .online a:nth-child(1){
        border-right:1px solid #eee;
        background:url('../../assets/img/line.png') no-repeat;
        background-position:18% center;
        background-size:1.19rem 1.16rem;
    }
     .online a:nth-child(2){
        background:url('../../assets/img/kaijiang.png') no-repeat;
        background-position:18% center;
        background-size:1.18rem 1.16rem;
    }
    ul.gc li{
        list-style:none;
        width:25%;
        border-right:1px solid #eee;
        border-bottom:1px solid #eee;
        box-sizing:border-box;
        float:left;
        padding:0.2rem;
    }
    ul.gc li a{
        display:block;
        width:100%;
        height:100%;
        text-decoration: none;
     }
    ul.gc li a img{
        width:1.06rem;
        height:1.05rem;
        display:block;
        margin:0 auto;
    }
   	ul.gc li a p{
        text-align:center;
    }
   	ul.gc li a p:nth-child(2){
        font-size:0.26rem;
        color:#000;
        margin:0.08rem 0;
    }
    ul.gc li img{
        width:1.06rem;
        height:1.05rem;
        display:block;
        margin:0 auto;
    }
   	ul.gc li p{
        text-align:center;
    }
   	ul.gc li p:nth-child(2){
        font-size:0.26rem;
        color:#000;
        margin:0.08rem 0;
    }
    .rmjs-box{
    	color: rgba(0,0,0,0.8);  
    	font-size: .28rem;
    }
    .rmjs-box .tit{
	    padding: .18rem;
	    height: .38rem;
	    background-color: #fcfcfc;
	    background-image: url(../../assets/img/h1_2.png);
	    -webkit-background-size: 2.94rem .38rem;
	    background-size: 2.94rem .38rem;
	    background-position: center .18rem;
	    background-repeat: no-repeat;
	    text-align: center;
	    margin-bottom: 0;
	}
	 .footer{
        width:100%;
        height:2.43rem;
        margin-bottom: 1rem;
    }
    .annce{
        width:50%;
        height:100%;
        float: left;
        box-sizing:border-box;
        border-right:1px solid #eee;
         font-size:0.34rem;
        color:#010101;

    }
    .annce img{
        margin-left:0.93rem;
        margin-right:0.25rem;
        margin-top:0.75rem;
        float: left;
        width:1rem;
        height:0.87rem;
    }
    .annce span{
        font-size:0.34rem;
        color:#010101;
        float: left;
        margin-top:0.95rem;

    }
    .footer div{
        float:right;
        width:50%;
        height:100%;
    }
      .footer div a{
        width:100%;
        height:50%;
        display: block;
      }
      .every img,.news img{
        float: left;
        margin-top:0.2rem;
        margin-left:0.6rem;
        margin-right:0.4rem;
        width:0.87rem;
      }
       .every span,.news span{
            font-size:0.3rem;
            color:#000;
            float: left;
            margin-top:0.45rem;
      }
      .news{
        box-sizing:border-box;
        border-top:1px solid #eee;
      }
      
    .gd{
        border-bottom:0.2rem solid #f2f2f2;
        i{
            font-style:normal;
            position: absolute;
            top:0 ;
            left:0;
            width:0.4rem;
            height:0.37rem;
            background:url('../../assets/img/foot.png') no-repeat;
            background-size:100% ;
        }
    }
    .gd li{
        list-style:none;
        width:100%;
        height:2.6rem;
        border-bottom:1px solid #ccc;
    }
     .gd li:last-child{
        border-bottom:none;
    }
    .gd s{
        font-style:normal;
        color:#d81d36;
        text-decoration:none;
    }
    .gd .top{
        position: relative;
    }
    .gd .top .userpf{
        position: relative;
        margin-top:0.25rem;
        float: left;
        margin-left:0.4rem;
    }
    .gd .name{
        font-size:0.26rem;
        color:#000;
        display:block;
        float:left;
        margin-right:0.2rem;
        border:none;
    }
    .gd .mzs{
        float:left;
        display:block;
        color:#d81d36;
        background: #fee4e8;
        padding:0 0.08rem;
        border-radius:10px;
        font-size:0.2rem;
        border:none;
    }
    .gd span{
        font-size:0.2rem;
        display:block;
        float:left;
        margin-right:0.1rem;
    }
    .gd .hot,.gd .buyM{
        height:0.4rem;
        width:1.28rem;
        float:right;
        background: url('../../assets/img/bgHot.png') no-repeat;
        background-size: cover;
        font-size:0.22rem;
        color:#fff;
        line-height:0.4rem;
        text-align:center;
        margin-top:0.3rem;
        margin-right:0;
    }
    .gd .buyM{
        background: url('../../assets/img/buyM.png') no-repeat;
        background-size: cover;
    }
    .gd .top div{
        float:left;
     }
    .gd .tx{
        position: relative;
        width:0.86rem;
        height:0.86rem;
        border-radius:50%;
        border:2px solid #ccc;
        background: url('../../assets/img/usermr.png') no-repeat;
        background-size:100%;
        background-position:center;
        float:left;
        overflow:hidden;
    }

    .gd .usertitle {
        /* width:100%; */
        float:left;
        margin-top:0.3rem;
        width:4.4rem;
        margin-left:0.45rem;
    }
    .gd .usertitle p{
        margin-top:0.1rem;
    }

    .usertitle p span{
        box-sizing: border-box;
	    font-size: 0.24rem;
	    border-radius: 0.04rem;
	    color: #ff8f00;
	    line-height: 0.28rem;
	    padding: 0 0.1rem;
	    border: 0.02rem solid #ff9400;
    }

       .gd .userpf s{
        position: absolute;
        top:-0.2rem;
        right:-0.15rem;
        width:0.45rem;
        height:0.39rem;
        background: url('../../assets/img/hg.png') no-repeat;
        background-size:100%;
       }
    .gd .bottom{
        box-sizing:border-box;
        padding-left:0.4rem;
        margin-top:0.2rem;
    }
    .gd .bottom>div:nth-child(1){
        padding-left:0.45rem;
        position: relative;
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .gd .endtime{
        float:right;
        margin-right:0.3rem;
        color:#999;
        font-size:0.22rem;
    }
     .gd .bottom>div:nth-child(2){
        position: relative;
        /* height: 0.4rem; */
        line-height: 0.4rem;
        margin-top:0.1rem;
    }
    .gd .bottom>div:nth-child(2) a{
        height:0.4rem;
        width:1.75rem;
        /* line-height:0.4rem; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align:center;
        font-size:0.3rem;
        float: right;
        color:#d81d36;
        border-radius:0.225rem;
        border:1px solid #d81d36;
        margin-right:0.3rem;
    }
</style>
