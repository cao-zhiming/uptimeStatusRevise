// 配置
window.Config = {

  // 站点名
  SiteName: '曹智铭的网站 状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  ApiKeys: [
    'ur1103925-28d20004ee335adbbb9a71bd',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 50,

  // 导航栏菜单
  Navi: [
    {
      text: '曹智铭的网站',
      url: 'https://blog.caozm.tk/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/cao-zhiming'
    }
  ]
};
