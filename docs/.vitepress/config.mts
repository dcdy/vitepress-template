/** @format */

import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: '/vitepress-template/',
	title: 'VitePress基础框架',
	description: 'VitePress基础框架的站点描述',
	lang: 'zh-Hans', // 站点的 lang 属性
	appearance: true, // 外观切换 - 深色浅色
	lastUpdated: true, // 显示页面最后更新时间
	cleanUrls: true, // 删除路径中的.html后缀
	metaChunk: true, // 生成 meta 标签
	// markdown 解析配置
	markdown: {
		// theme: 'material-theme-palenight', // 主体配色
		math: true, // 支持数学公式
		lineNumbers: true, // 显示行号
		container: {
			tipLabel: '提示',
			warningLabel: '警告',
			dangerLabel: '危险',
			infoLabel: '信息',
			detailsLabel: '详细信息',
		},
		image: {
			// 默认禁用图片懒加载
			lazyLoading: true,
		},
	},
	// Head配置
	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-template/logo/vitepress-logo-mini.svg' }], // 网站图标
		['link', { rel: 'icon', type: 'image/png', href: '/vitepress-template/logo/vitepress-logo-mini.png' }], // 网站图标
	],
	// 主题配置
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: { src: '/logo/vitepress-logo-mini.svg', width: 24, height: 24 }, // 左侧导航栏图标也可直接'/logo/vitepress-logo-mini.svg'
		siteTitle: 'VitePress基础框架', // 左侧导航栏标题
		// 导航菜单
		nav: nav(),
		// 侧边栏菜单
		sidebar: [
			{
				text: '配置',
				items: [
					{ text: '教程', link: '/directions' },
					{ text: 'Markdown例子', link: '/markdown-examples' },
				],
			},
		],
		outline: 'deep', // 在大纲中显示的标题级别
		outlineTitle: '页面导航', // 大纲的标题
		// 提供编辑页面的链接
		editLink: {
			pattern: 'https://github.com/dcdy/vitepress-template/edit/main/docs/:path',
			text: '在 GitHub 上编辑此页面',
		},
		// 上次更新时间显示文本
		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short', // 可选值short(默认)(2024/1/11)、medium(2024年1月1日)和full(2024年1月1日星期一)
				timeStyle: 'short', // 可选值short(默认)(18:00)、medium(18:00:00)和full(中国标准时间 18:00:00)
			},
		},
		// 底部翻页文本
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		footer: {
			// 有 sidebar 时不显示
			message: '基于MIT许可发布',
			copyright: `版权所有 © ${
				new Date().getFullYear() == 2023 ? 2024 : 2024 + '-' + new Date().getFullYear()
			} dcdyxmt@163.com`,
		},
		socialLinks: [
			// 友情连接
			{ icon: 'github', link: 'https://github.com/dcdy/vitepress-template' },
			{
				icon: {
					svg: '<svg t="1727428813465" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2268" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="2269"></path></svg>',
				},
				link: 'https://gitee.com/xia_mei_ting/vitepress-template',
			},
		],
		returnToTopLabel: '回到顶部', // 用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。
		sidebarMenuLabel: '菜单', // 用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。
		darkModeSwitchLabel: '主题', // 用于自定义悬停时显示的深色模式开关标题。
		lightModeSwitchTitle: '切换到浅色模式', // 用于自定义悬停时显示的浅色模式开关标题。
		darkModeSwitchTitle: '切换到深色模式', // 用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
		externalLinkIcon: true, // 默认false，是否在 markdown 中的外部链接旁显示外部链接图标。
	},
});

// 导航菜单
function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: '首页',
			link: '/',
			// activeMatch: '/',
		},
		{
			text: '配置',
			link: '/directions',
			activeMatch: '/directions',
		},
		{
			text: '下拉导航',
			items: [
				{
					text: '下拉导航表题', // 该部分的标题，也可以省略标题
					items: [
						{
							text: '子项A',
							link: 'https://github.com/dcdy/vitepress-template/edit/main/docs/.vitepress/config.mts',
						},
						{
							text: '子项B',
							link: 'https://gitee.com/xia_mei_ting/vitepress-template/blob/main/docs/.vitepress/config.mts',
						},
					],
				},
			],
		},
	];
}
