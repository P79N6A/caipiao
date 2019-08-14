<template>
	<div class="gong">
		<gong-header title='公告' backUrl='/'></gong-header>
        <div class="pt90">
            <ul class="clearfix content" v-if='list.length > 0'>
                <li v-for='(item,index) in list' :key='index'>
                    <a :href="item.url" >
                        <div class="content_left">
                            <div class="div1">{{ item.title }}</div>
                            <div class="div2">{{ item.date }}</div>
                        </div>
                        <div class="content_right"></div>
                    </a>
                </li>
            </ul>
        </div>
		
	</div>	
</template>
<script>

import gongHeader from '@/components/header'
import {indexNotice } from '@/request/api';
export default {
	name: 'gong',
	metaInfo: {
      title: '公告',
  	},
	components:{
        gongHeader,
    },
	data:function(){
		return {
			list:[],
		}
	},
	methods:{
		
	},
	created() {
		let t = this
        indexNotice().then(res => {
            t.list = res
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
	.content{
        width: 100%;
        overflow: hidden;
        border-top: 0.32rem solid #f2f2f2;
        li{
            height: 1.54rem;
            padding-left: 0.32rem;
            padding-right: 0.4rem;
            box-sizing: border-box;
            border-bottom: 1px solid #EEEEEE;
            list-style: none;
            position: relative;
            a{
                display: block;
                width: 100%;
                height: 1.54rem;
            }
        }
        .content_left {
            float: left;
            width: 90%;
            height: 1.54rem;
            .div1 {
                font-size: 0.32rem;
                color: #333333;
                margin-top: 0.34rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .div2 {
                font-size: 0.28rem;
                color: #999999;
                margin-top: 0.1rem;
                line-height: 0.28rem;
            }
        }
        .content_right {
            width: 0.16rem;
            height: 0.24rem;
            float: right;
            background: url(../..//assets/img/go.png) no-repeat;
            background-size: cover;
            margin-top: 0.64rem;
        }

    }
</style>
