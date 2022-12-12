import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Snimate',
    description: '学习文档',

    theme: defaultTheme({
        sidebar: [{
            'text': 'AE 脚本开发',
            link: '/after-effects-scripts',
            children: [
                {
                    text: "快速入门",
                    link: "/after-effects-scripts/get-startted"
                }
            ]
        }],
        navbar: [
            // NavbarItem
            {
                text: 'AE 脚本开发',
                link: '/after-effects-scripts/',
            },
            // NavbarGroup
            // {
            //     text: 'Group',
            //     children: [
            //         { text: 'group', link: '/group/foo' }, {
            //             text: "group2",
            //             link: '/group/bar.md'
            //         }],
            // },
            // 字符串 - 页面文件路径
            // '/bar/README.md',
        ],
    }),
})