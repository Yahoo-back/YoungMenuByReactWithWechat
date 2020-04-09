export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: [
      'admin',
      'admin1',
      'admin2',
      'admin3',
      'admin4',
      'admin5',
      'admin6',
      'admin7',
      'test',
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
      'test7',
      'user',
      'zss',
      'zss1',
      'zss2',
      'zss3',
      'zss4',
      'zss5',
      'zss6',
      'zss7',
    ],
    routes: [
      // dashboard
      { path: '/', redirect: '/user/login' },
      // { path: '/', redirect: '/dashboard/workplace' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      {
        path: '/otherUser',
        name: 'otherUser',
        icon: 'usergroup-add',
        routes: [
          {
            path: '/otherUser/list',
            name: 'list',
            component: './OtherUser/List',
          },
        ],
      },
      {
        path: '/article',
        name: 'article',
        icon: 'file-markdown',
        routes: [
          {
            path: '/article/list',
            name: 'list',
            component: './Article/List',
          },
          {
            path: '/article/create',
            name: 'create',
            component: './Article/ArticleCreate',
          },
        ],
      },
      {
        path: '/News',
        name: 'News',
        icon: 'pushpin',
        routes: [
          {
            path: '/News/list',
            name: 'list',
            component: './News/List',
          },
          {
            path: '/News/create',
            name: 'create',
            component: './News/NewsCreate',
          },
        ],
      },
      {
        path: '/message',
        name: 'message',
        icon: 'message',
        routes: [
          {
            path: '/message/list',
            name: 'list',
            component: './Message/List',
          },
        ],
      },
      {
        path: '/tag',
        name: 'tag',
        icon: 'tags',
        routes: [
          {
            path: '/tag/list',
            name: 'list',
            component: './Tag/List',
          },
        ],
      },
      {
        path: '/link',
        name: 'link',
        icon: 'link',
        routes: [
          {
            path: '/link/list',
            name: 'list',
            component: './Link/List',
          },
        ],
      },
      {
        path: '/category',
        name: 'category',
        icon: 'book',
        routes: [
          {
            path: '/category/list',
            name: 'list',
            component: './Category/List',
          },
        ],
      },
      {
        path: '/timeAxis',
        name: 'timeAxis',
        icon: 'clock-circle',
        routes: [
          {
            path: '/timeAxis/list',
            name: 'list',
            component: './TimeAxis/List',
          },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/BaseView',
            // component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                // redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/personalLink',
                component: './Account/Settings/PersonalLinkView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
