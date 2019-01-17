module.exports = {
    base: '/vue-wheel/',
    title: 'Vue-UI',
    description: '一个基于Vue2.0的UI框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: ['/install/', '/quick-start/']
            },
            {
                title: '组件',
                children: ['/components/buttom']
            },
        ]
    }
}
