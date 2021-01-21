module.exports = {
  title: '个人博客',
  description: '个人工作中整理的知识库',
  themeConfig: { //顶部导览nav(自带简易搜索功能)
    displayAllHeaders: false, // 默认值：false 显示所有页面的标题链接
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/Front/'},
      { text: '面试', link : '/Interview/'},
      { text: 'Java', link: '/Java/' },
      { text: '网络安全', link: '/WebSecurity/' },
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/Interview/':[
        '',
        'js',
        'html',
        'css',
        'coreCode',
        'browser',
        'frame',
        'miApp',
        'ts',
      ],
      '/Front/':[
        '',
        'javascript',
        'html',
        'css',
        'tool',
        'internet',
        'ts',
      ]
    },
  },
}
