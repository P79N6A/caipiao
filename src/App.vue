<template>
  <div id="app">
     <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
      // 如果子component中没有定义 metaInfo.title ，会默认使用这个title
      title: '彩票',
      meta: [
        {               
          name: 'viewport',
          content:'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1'
        },
        { //删除默认的苹果工具栏和菜单栏,Web应用会以全屏模式运行           
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        { //认值为default（白色），可以定为black（黑色）和black-translucent（灰色半透明）          
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black'
        },
        {//当该 HTML 页面在手机上浏览时，该标签用于指定是否将网页内容中的手机号码显示为拨号的超链接。               
          name: 'format-detection',
          content: 'telephone=no'
        },
        {               
          name: 'keyWords',
          content: '福利彩票，福彩，体育彩票，体彩，足彩，网上买彩票，彩票合买，彩票开奖，彩票走势图，彩票预测'
        },
        {               
          name: 'Description',
          content: '159cai彩票网为彩民提供专业的彩票网上投注、合买、开奖结果、走势分析、比分直播等服务，覆盖福彩、体彩、足彩、竞彩、快频等彩种。彩票网上投注最佳选择！'
        }
      ]
  }
};
</script>
