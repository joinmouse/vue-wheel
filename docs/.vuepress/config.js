module.exports = {
    base: '/vue-wheel/',
    title: 'VueWheel UI',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            '/install/',
            '/guide/',
            {
                title: '通用',
                collapsable: false,
                children: [
                    '/common/button',
                    '/common/icon'
                ]
            },
            {
                title: '布局',
                collapsable: false,
                children: [
                    '/layout/grid',
                    '/layout/layout'
                ]
            }, 
            {
                title: '数据展示',
                collapsable: false,
                children: [
                    '/dataShow/tabs'
                ]
            }
        ]
    }
}
