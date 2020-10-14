
module.exports = {
  title: '计算机基础',
  base: '/ComputerBasic/', // 设置站点根目录
  description: '飘飘乎如遗世独立 羽化而登仙',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/pkq.jpeg'
      } 
    ]
  ],
  themeConfig: {
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { 
        text: '操作系统',
        items: [
          {
            text: '操作系统',
            link: '/Data/OperatingSystem/'
          }
        ]
      },
      { 
        text: '计算机网络',
        items: [
          {
            text: '计算机网络',
            link: '/Data/ComputerNetwork/'
          }
        ]
      },
      { 
        text: '原理好文',
        items: [
          {
            text: '原理好文',
            link: '/Data/Article/'
          }
        ]
      }
    ],
    sidebar: {
      '/Data/ComputerOrganization/': [
        {
          title: '计算机组成原理',
          collapsable: false,
          children: [
            '/Data/ComputerOrganization/',
          ]
        }
      ],
      '/Data/OperatingSystem/': [
        {
          title: '操作系统',
          collapsable: false,
          children: [
            '/Data/OperatingSystem/',
            '/Data/OperatingSystem/Process.md'
          ]
        }
      ],
      '/Data/CL/': [
        {
          title: 'C语言',
          collapsable: false,
          children: [
            '/Data/CL/',
            '/Data/CL/function.md'
          ]
        }
      ],
      '/Data/CompilationPrinciple/': [
        {
          title: '编译原理',
          collapsable: false,
          children: [
            '/Data/CompilationPrinciple/',
          ]
        }
      ],
      '/Data/ComputerNetwork/': [
        {
          title: '计算机网络',
          collapsable: false,
          children: [
            '/Data/ComputerNetwork/',
          ]
        }
      ],
      '/Data/Article/': [
        {
          title: '原理好文',
          collapsable: false,
          children: [
            '/Data/Article/',
          ]
        }
      ],
      '/Data/C/': [
        {
          title: 'C语言',
          collapsable: false,
          children: [
            '/Data/C/',
          ]
        }
      ],
      '/Data/CPP/': [
        {
          title: 'CPP',
          collapsable: false,
          children: [
            '/Data/CPP/',
          ]
        }
      ]
    },
    repo: 'facebook201/ComputerBasic', // github 地址
    docsRepo: 'facebook201/ComputerBasic',
    docsDir: 'docs',
    editLinks: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  }
};




