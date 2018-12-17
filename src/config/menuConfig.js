const menuList = [
    {
        title:'首页',
        key:'/home'
    },
    {
        title:'咸阳宫',
        key:'/ui',
        children:[
            {
                title:'按钮',
                key:'/ui/buttons',
            },
            {
                title:'弹框',
                key:'/ui/modals',
            },
            {
                title:'Loading',
                key:'/ui/loadings',
            },
            {
                title:'通知提醒',
                key:'/ui/notification',
            },
            {
                title:'全局Message',
                key:'/ui/messages',
            },
            {
                title:'Tab页签',
                key:'/ui/tabs',
            },
            {
                title:'图片画廊',
                key:'/ui/gallery',
            },
            {
                title:'轮播图',
                key:'/ui/carousel',
            }
        ]
    },
    {
        title:'长乐宫',
        key:'/form',
        children:[
            {
                title:'登录',
                key:'/form/login',
            },
            {
                title:'注册',
                key:'/form/reg',
            }
        ]
    },
    {
        title:'未央宫',
        key:'/table',
        children:[
            {
                title:'基础表格',
                key:'/table/basic',
            },
            {
                title:'高级表格',
                key:'/table/high',
            }
        ]
    },
    {
        title:'永巷宫',
        key:'/rich'
    },
    {
        title:'长门宫',
        key:'/city'
    },
    {
        title:'江都宫',
        key:'/order',
        btnList:[
            {
                title:'都梁宫',
                key:'detail'
            },
            {
                title:'扬子宫',
                key:'finish'
            }
        ]
    },
    {
        title:'仙都宫',
        key:'/user'
    },
    {
        title:'福阳宫',
        key:'/bikeMap'
    },
    {
        title:'大明宫',
        key:'/charts',
        children:[
            {
                title:'柱形图',
                key:'/charts/bar'
            },
            {
                title:'饼图',
                key:'/charts/pie'
            },
            {
                title:'折线图',
                key:'/charts/line'
            },
        ]
    },
    {
        title:'春风得意宫',
        key:'/permission',
        children:[
            {
                title:'怡红院',
                key:'/charts/bar'
            },
            {
                title:'花满楼',
                key:'/charts/pie'
            },
            {
                title:'醉乡春',
                key:'/charts/line'
            },
        ]
    },
];
export default menuList;