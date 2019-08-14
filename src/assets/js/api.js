let $api = {}; // 接口

$api.url = {
	q: "/phpu/q.phpx", //一般查询公用接口
	checklogin: '/phpu/cl.phpx', // 检测用户是否登录
	checkexist: "/phpu/q.phpx?fid=u_check_user", // 查询用户名是否可用
	register: "/phpu/reg.phpx", // 注册
	regnoyzm: "/phpu/regnoyzm.phpx", // 注册
	login: "/phpu/login.phpx", // 登录
	loginout: "/phpu/lout.phpx", // 退出登陆
	base: "/phpu/q.phpx?fid=u_ainfo", // 查询用户登录名、用户余额、冻结款、用户类型
	info: "/phpu/q.phpx?fid=u_info", // 查询用户基本信息
	safe: "/phpu/q.phpx?fid=u_sinfo", // 查询安全资料
	protect: "/phpu/q.phpx?fid=u_pinfo", // 查询密码保护问题是否设置
	card: "/phpu/q.phpx?fid=u_binfo", // 查询银行卡信息
	fzgd: "/phpt/copyJczqs.phpx", //复制跟单查询

	bind: "/phpu/ubind.phpx", // 用户绑定提交
	bindyz: "/phpu/ubindck.phpx", // 用户绑定验证

	touzhu: "/phpu/qp.phpx?fid=u_buy", // 购彩记录
	gtouzhu: "/phpu/qp.phpx?fid=u_gbuy", //投注记录
	chase: "/phpu/qp.phpx?fid=u_zh", // 追号记录
	gchase: "/phpu/qp.phpx?fid=u_gzh", // 追号记录(具体彩种)

	myfollow: "/phpu/qp.phpx?fid=u_qauto", // 自动跟单

	account: "/phpu/qp.phpx?fid=u_charge", // 账户明细
	addmoneylist: "/phpu/qp.phpx?fid=u_fill", // 充值记录
	buylist: "/phpu/qp.phpx?fid=u_charge1", //购买彩票记录
	returnlist: "/phpu/qp.phpx?fid=u_charge2", //奖金派送记录
	drawlist: "/phpu/qp.phpx?fid=u_cash", //提款记录	
	myguoguan: "/phpu/qp.phpx?fid=u_guoguan", //我的过关

	xchase: "/phpu/q.phpx?fid=u_zhdetail", // 追号明细记录
	followme: "/phpu/qp.phpx?fid=u_myauto", // 跟我的跟单
	followhist: "/phpu/qp.phpx?fid=u_autos", // 跟单记录
	followhistone: "/phpu/q.phpx?fid=sauto", // 查询单笔跟单记录
	ktkmoney: "/phpu/q.phpx?fid=u_balance", // 查询可提款金额

	fanli: "/phpu/qp.phpx?fid=u_fanli", // 用户返利列表
	agent: "/phpu/qp.phpx?fid=u_agent", // 我的推广列表
	agentxl: "/phpu/qp.phpx?fid=u_agentxl", // 我的销量列表
	agentrt: "/phpu/q.phpx?fid=u_agentrt", // 我的返点比例

	qautobuy: "/phpu/qabuy.phpx", // 查询跟单信息
	aautobuy: "/phpu/abuy.phpx", // 设置跟单信息	

	addmoney: "/phpu/addmoney.phpx", // 充值
	addmoneynew: "/pwap/addmoneynew.phpx", // 触屏充值
	drawmoney: "/phpu/drawmoney.phpx", //提款	
	ttzhifu: "/phpu/sendData.phpx", //天天盈球支付接口
	ttmoney: "/phpu/webAwardNubmer.phpx", //天天盈球账户余额接口
	yhq: "/phpu/qp.phpx?fid=u_coupon_1&pn=1&ps=10",//查询未使用优惠券
	zyzm: "/phpu/mobregzym.phpx"//注册手机号发送手机验证码 

};

// 用户修改配置
$api.modify = {
	info: "/phpu/mui.phpx?fid=u_modi_info", // 修改用户基本信息
	pwd: "/phpu/mui.phpx?fid=u_modi_pwd", // 修改密码
	protect: "/phpu/mui.phpx?fid=u_set_pinfo", // 修改密保
	card: "/phpu/mui.phpx?fid=u_set_bank", // 修改设置银行卡信息
	name: "/phpu/mui.phpx?fid=u_modi_rinfo", // 用户实名
	autostate: "/phpu/mui.phpx?fid=u_modi_auto" // 自动跟单状态
};

module.exports.$api = $api;