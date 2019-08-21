import { get, post } from './http'
let $api = {}
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


//首页banner
export const indexBannerList = p => get('/api/dedeinc/h5_syimages.json', p);
//首页公告
export const indexNotice = p => get('/api/discovery/notice/index.json', p);
//getExplainList热门解说
export const rmJs = p => get('/shnongc/getHomePageJS.php', p);
//copyJczq跟单
export const copyJczq = p => get('/api/phpt/copyJczqs.phpx', p);
//查询开奖公告
export const aopencode = p =>get('/api/cpdata/game/aopencode.json',p)
//每日竞彩 足球
export const dailycontestJczq = p =>get('/api/discovery/forecast/jczq/index.json',p)
//每日竞彩 篮球
export const dailycontestJclq = p =>get('/api/discovery/forecast/jclq/index.json',p)
//新闻资讯 足球
export const newZq = p =>get('/api/discovery/news/football/index.json',p)
//新闻资讯 篮球
export const newLq = p =>get('/api/discovery/news/basketball/index.json',p)
//新闻资讯 数字彩
export const newSzc = p =>get('/api/discovery/news/szc/index.json',p)
//快频彩详情 banner 
export const kpcBannerList = p =>get('/api/dedeinc/h5_ssqimages.json',p)

//login
//登录
export const login = p =>post('/api/phpu/login.phpx',p)
//退出登录
export const loginout = p =>get('/api/phpu/lout.phpx',p)
//忘记密码
export const checkAccount = p =>post('/api/phpu/checkAccount.phpx',p)
//忘记密码 发送验证码
export const usergetpwd = p =>post('/api/phpu/usergetpwd.phpx',p)
//忘记密码 提交新密码
export const modifypwdByPhones = p =>post('/api/phpu/modifypwdByPhones.phpx',p)
//注册 发送验证码
export const mobregzym = p =>post('/api/phpu/mobregzym.phpx',p)
//注册 手机号注册
export const mobreg = p =>post('/api/phpu/mobreg.phpx',p)

//个人中心 设置昵称
export const addUserNickname = p =>get('/api/phpu/addUserNickname.phpx',p)
//个人中心 
export const qp = p =>post('/api/phpu/qp.phpx',p)
//个人中心 提现
export const drawmoney = p =>post('/api/phpu/drawmoney.phpx',p)
//待支付订单列表
export const explainZfList = p =>get('/api/phpt/explainZfList.phpx',p)
//待支付订单列表 余额购买解说详情
export const buyExplain = p =>get('/api/phpt/buyExplain.phpx',p)
//待支付订单列表 直付购买解说详情
export const zfExplainOrder = p =>get('/api/phpt/zfExplainOrder.phpx',p)
//待支付订单列表 直付购买解说详情
export const payMoneyOrder = p =>get('/api/phpt/payMoneyOrder.phpx',p)
//投注记录
export const webTouZhus = p =>get('/api/phpu/webTouZhus.phpx',p)
//投注记录 跟单数据接口
export const webFollowRecord = p =>get('/api/phpu/webFollowRecord.phpx',p)

//qq支付
export const qqPay = p =>get('/api/phpu/addmoney.phpx',p)

//检测用户信息
export const userInfo = p =>post('/api/phpu/q.phpx',p)
//检测是否登录
export const checklogin = p =>get('/api/phpu/cl.phpx',p)

//跟单
//红人
export const sensationList = p => get('/api//cpdata/copy/webRedPersons.json', p)
//热门跟单列表
export const hotDocmentsList = p => post('/api/phpt/copyJczqs.phpx', p);
//全部红人
export const allSensationList = p => get('/api/cpdata/copy/webRedPersonList.json', p);
//晒红单
export const showRedbillList = p => get('/api/cpdata/copy/webHighBonus.json', p);
//热门榜单
export const hotprofitList = p => get('/api/cpdata/phot/31/webHitWeekUserList.json', p);
export const hotprofitReturnList = p => get('/api/cpdata/phot/31/webReturnWeekUserList.json', p);
//我的战绩
export const myrecord = p => get('/api/phpu/webfollowDetail.phpx', p);
//牛人推荐
export const recommendList = p => get('/api/cpdata/copy/webNiuRens.json', p);
//发单人详情
export const followDetail = p => post('/api/phpu/webfollowDetail.phpx', p);
//发单人详情关注列表
export const followUserDetail = p => post('/api/phpu/webfollowUserLists.phpx', p);
//跟单详情
export const copyDetail = p => post('/api/phpt/copyDetail.phpx', p);



