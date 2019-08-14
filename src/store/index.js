import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*在这里感觉Vuex略鸡肋
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
在我看来 vuex 就是把需要共享的变量全部存储在一个对象里面，然后将这个对象放在顶层组件中供其他组件使用，它是另一种意义上的变量提升。

路由刷新
路由刷新是无刷新跳转，表面看起来就像是一个app应用，表现效果就像你写的 tab 选项卡，所有的数据都还存在内存里，页面是无重载的。

F5页面刷新
F5刷新做了什么事呢，重新载入页面，销毁之前所有的数据。

所以，这个bug(刷新页面后，vuex状态里的数据没了)出现的问题就很好理解了，
F5页面刷新，页面销毁之前的资源，重新请求，因此写在生命周期里的vuex数据是重新初始化，无法获取的，这也就是为什么会打印出空的原因。

解决思路1：
Localstorage 这是很容易想到的方法。将this.$store.state.PV存入到缓存里之后
，然后监听页面重载事件，如果页面重新载入了，那就从缓存里读取数据，
然后赋值，这样我们的dom元素就又可爱的回到了文档中间。
这个方法可以解决这个问题。但是如果需要用到localstorage的话，
我完全可以让我的蒙蒙小伙伴在取到pv的值的时候直接存到缓存里，
然后我直接用就可以，完全就不能出现这个问题，而且就算我自己存的话，也是相对繁琐的过程
PASS！
解决方法2：
用computed缓存
Computed属性的优点我试着来总结一下：
1. 纯响应式，computed里面所用到的data一旦改变，整个computed的方法就回重新计算这个属性值
2. 计算结果会被缓存起来，方便下次使用，如果下次调用的时候，其中的数据没有发生变化，则不会重新计算。
注： 实际使用时当vuex值变化时，F5刷新页面，vuex数据重置为初始状态，所以还是要用到localStorage或sessionStorage或cookie
所以还是要用到浏览器缓存
*/
if (sessionStorage) {
	var userInfo = sessionStorage.getItem("userInfo")||{};
}
export default new Vuex.Store({
	state: {
		userInfo:userInfo,
	},	
	mutations:{
		changeUserInfo (state,obj) {//state 对应store的state
			state.userInfo = obj;
			console.log(obj)
			if (sessionStorage) {
				userInfo = sessionStorage.setItem("userInfo",obj)
			}
		}
	},
	actions:{
		changeUserInfo (cxt,obj) {//cxt 对应Store，即上下文
			cxt.commit('changeUserInfo',obj);
		}
	}
})