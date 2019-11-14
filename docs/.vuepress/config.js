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
            }
        ]
    }
}