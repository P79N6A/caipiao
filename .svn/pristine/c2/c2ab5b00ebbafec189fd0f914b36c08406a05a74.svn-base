<template>
	<div class="gong">
		<gong-header title='新闻资讯' backUrl='-1'></gong-header>
        <div class="pt90">
            <ul class="clearfix nav">
                <li :class="cur=='zq'?'cur':''" @click='cur="zq"'>足球</li>
                <li :class="cur=='lq'?'cur':''" @click='cur="lq"'>篮球</li>
                <li :class="cur=='szc'?'cur':''" @click='cur="szc"'>数字彩</li>
            </ul>
            <div class="list-con">
                <template v-for='(item,keys) in lists'>
                    <div :class='cur==keys?"show":""' >
                        <ul class="list" >
                            <li v-for='(items,indexs) in item' :key='indexs'>
                                <a :href="items.url" class='clearfix'>
                                    <img :src="items.image" alt="items.title">
                                    <div>
                                        <p class='title'>{{items.title}}</p>
                                        <p class='content'>{{items.contents}}</p>
                                        <p class='time'>{{ items.pubdate}}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </template>
                
            </div>
        </div>
		
	</div>	
</template>
<script>

import gongHeader from '@/components/header'
import {newZq,newLq,newSzc } from '@/request/api';
export default {
	name: 'gongNews',
	metaInfo: {
      title: '新闻资讯',
  	},
	components:{
        gongHeader,
    },
	data:function(){
		return {
			listzq:[],
            listlq:[],
            listszc:[],
            cur:this.$route.params.tab,
		}
	},
	methods:{
		
	},
    computed:{
        lists(){
            return {
               "zq":this.listzq,
               "lq":this.listlq,
               "szc":this.listszc,
            }
        }
    },
	created() {
		let t = this,newLists = {};
        newZq().then(res => {
           t.listzq = res
        }).catch(err =>{
            console.log(err)
        })
        newLq().then(res => {
           t.listlq = res
        }).catch(err =>{
            console.log(err)
        })
        newSzc().then(res => {
           t.listszc = res
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
	 .nav{
            width:100%;
            border-bottom:1px solid #eee;
        }

        .nav li{
            float: left;
            width:25%;
            text-align:center;
            line-height:0.9rem;
            height:0.9rem;
            box-sizing:border-box;
            display: block;
            font-size:0.3rem;
            color:#333;

        }
        .nav li:nth-child(2){
            margin-left:7.5%;
        }
        .nav li:last-child{
            float: right;
            margin-right:5%;

        }
        .cur{
            border-bottom:2px solid #d81d36;
        }
         .nav li:first-child{
            margin-left:5%;

        }
        .list-con>div{
            display: none;
        }
        .list-con>div.show{
            display: block;
        }
        .list li{
            width:100%;
            height:2.2rem;
            border-bottom:1px solid #eee;
            box-sizing:border-box;
        }

        .list a{
            display: block;
            width:100%;
            height:100%;
            box-sizing:border-box;
            padding:0.32rem;
        }
        .list img{
            width:2.27rem;
            float: left;
            height:1.56rem;
            overflow:hidden;
            margin-right:0.4rem;
        }
        .title{
            font-size:0.32rem;
            color:#333;
            overflow: hidden; /*自动隐藏文字*/
            text-overflow: ellipsis;/*文字隐藏后添加省略号*/
            white-space: nowrap;/*强制不换行*/
        }
        .content{
            font-size:0.26rem;
            color:#666;
            margin:0.12rem 0 0.22rem 0;
            overflow: hidden; /*自动隐藏文字*/
            text-overflow: ellipsis;/*文字隐藏后添加省略号*/
            white-space: nowrap;/*强制不换行*/
        }
        .time{
            font-size:0.28rem;
            color:#999;
        }
</style>
