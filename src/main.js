// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
import MintUI from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import VueScroller from 'vue-scroller'
import 'mint-ui/lib/style.css'
import 'styles/reset.css'
import $ from 'jquery'
import infiniteScroll from 'vue-infinite-scroll'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import animated from 'animate.css'
//import { Search } from 'mint-ui';
Vue.config.productionTip = false
Vue.use(infiniteScroll);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI)
Vue.use(Vant);
import { Search } from 'vant';
Vue.use(Search);	
//Vue.component(Search.name, Search);

Vue.lottery = [
	[1, "双色球", "", "10", "/ssq/"],
	[3, "福彩3D", "", "44", "/3d/"],
	[4, "时时彩", "", "120", '/ssc/'],
	[6, "新快三", "", "", '/k3/'],
	[7, "七乐彩", "", "7", "/qlc/"],
	[8, "幸运快三", "", "8", "/k3jl/"],

	[50, "超级大乐透", "", "20", "/dlt/"],
	[51, "七星彩", "", "25", "/qxc/"],
	[52, "排列五", "", "27", "/p5/"],
	[53, "排列三", "", "26", "/p3/"],
	[54, "11选5", "", "119", "/11x5/"],
	[55, "广东11选5", "", "120", "/11x5/11x5gd/"],
	[56, "十一运夺金", "", "115", "/11x5/11x5dj/"],
	[57, "新11选5", "", "116", "/11x5/11x5xj/"],

	[80, "胜负彩", "", "1", "/zc/"],
	[81, "任选九", "", "2", "/r9/"],
	[82, "进球彩", "", "4", "/jq/"],
	[83, "半全场", "", "3", "/bq/"],

	[84, "胜负过关", "", "", "/bd/sfgg.html"],
	[85, "北单胜平负", "", "", "/bd/"],
	[86, "北单猜比分", "", "", "/bd/"],
	[87, "北单半全场", "", "", "/bd/"],
	[88, "北单上下单双", "", "", "/bd/"],
	[89, "北单进球数", "", "", "/bd/"],

	[70, "竞彩混合", "混投", "", "/jczq/jchh.html"],
	[90, "竞彩胜平负", "胜平负", "", "/jczq/spf.html"],
	[72, "竞彩让球胜平负", "让球胜平负", "", "/jczq/"],
	[91, "竞彩猜比分", "猜比分", "", "/jczq/"],
	[92, "竞彩半全场", "半全场", "", "/jczq/"],
	[93, "竞彩进球数", "进球数", "", "/jczq/"],

	[71, "篮彩混合", "混投", "", "/jclq/hh.html"],
	[94, "篮彩胜负", "胜负", "", "/jclq/"],
	[95, "篮彩让分胜负", "让分胜负", "", "/jclq/rfsf.html"],
	[96, "篮彩胜分差", "胜分差", "", "/jclq/"],
	[97, "篮彩大小分", "大小分", "", "/jclq/dxf.html"],
	[98, "猜冠军", "猜冠军", "", "/guanyajun/guanjun.html"],
	[99, "猜冠亚军", "猜冠亚军", "", "/guanyajun/guanyajun.html"],
]

//彩种过滤器
Vue.filter('lotteryCode', function (code,n) {  //时间过滤器
	if(typeof(n) == 'undefined') {
		n = 1;
	};
	for(var i = 0; i < Vue.lottery.length; i++) {
		if(Vue.lottery[i][0] == code) {
			return Vue.lottery[i][n];
		}
	}
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
