<template>
	<div class="dailycontest">
		<gong-header title='每日竞彩' backUrl='/'></gong-header>
        <div class="pt90">
           <div class="tab">
                <div :class="current==0?'zq current':'zq'" @click='current=0'>
                    足球
                </div>
                <div :class="current==1?'lq current':'lq'" @click='current=1'>
                    篮球
                </div>
            </div>
            <div class="tab-main">
                <ul class="tab-item" v-show='current==0'>
                    <li class="clearfix" v-for='(itemZQ,index) in zqlist' :key='index'>
                        <a :href="itemZQ.url">
                            <div class="title">{{itemZQ.experttitle}}</div>
                            <div class="time">
                                {{itemZQ.expertaddtitle.split(/\s/)[0]}}
                                <span class="black">{{itemZQ.expertaddtitle.split(/\s/)[2]}}</span>
                            </div>
                            <img :src="itemZQ.image" class="images">
                            <div class="desc">{{ itemZQ.expertbet }}</div>
                        </a>
                    </li>
                </ul>
                <ul class="tab-item" v-show='current==1'>
                    <li class="clearfix" v-for='(itemLQ,index) in lqlist' :key='index'>
                        <a :href="itemLQ.url">
                            <div class="title">{{itemLQ.experttitle}}</div>
                            <div class="time">
                                {{itemLQ.expertaddtitle.split(/\s/)[0]}}
                                <span class="black">{{itemLQ.expertaddtitle.split(/\s/)[2]}}</span>
                            </div>
                            <img :src="itemLQ.image" class="images">
                            <div class="desc">{{ itemLQ.expertbet }}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
		
	</div>	
</template>
<script>

import gongHeader from '@/components/header'
import {dailycontestJczq,dailycontestJclq } from '@/request/api';
export default {
	name: 'dailycontest',
	metaInfo: {
      title: '每日竞彩',
  	},
	components:{
        gongHeader,
    },
	data:function(){
		return {
			zqlist:[],
            lqlist:[],
            current:0,
		}
	},
	methods:{
		
	},
	created() {
		let t = this
        dailycontestJczq().then(res => {
           t.zqlist = res
        }).catch(err =>{
            console.log(err)
        })
        dailycontestJclq().then(res => {
           t.lqlist = res
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
.zq,.lq{
    width: 1.24rem;
    height: 0.88rem;
    
    margin-left: 1.24rem;
    font-size: 0.3rem;
    color: #333333;
    text-align: center;
    line-height: 0.9rem;
    float: left;
}
.lq{
    float: right;
    margin-left: 0;
    margin-right: 1.42rem;
}
.current{
    border-bottom: 2px solid #d81d36;
}
.tab-item {
    margin-top: 0.9rem;
    li{
        width: 100%;
        padding: 0 0.3rem 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        list-style: none;
        position: relative;
        .title{
            font-size: 0.32rem;
            color: #333333;
            height: 0.8rem;
            line-height: 0.8rem;
            width: 100%;
            float: left;
        }
        .time{
            font-size: 0.24rem;
            color: #999999;
            line-height: 0.24rem;
            width: 100%;
            float: left;
            margin-bottom: 0.32rem;
        }
        .black {
            color: #333333;
        }
        .images {
            width: 6.86rem;
            height: 3.4rem;
            vertical-align: middle;
            margin-bottom: 0.22rem;
        }
        .desc{
            font-size: 0.24rem;
            color: #999999;  
        }
    }

}
</style>
