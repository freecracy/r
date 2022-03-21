import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

let navbar = [
	{
		text: "速查表",
		link: "https://cheats.rs",
	},
	{
		text: "联系我",
		link: "http://wpa.qq.com/msgrd?v=3&uin=295984047&site=qq&menu=yes",
	},
	{
		text: "其它",
		children: [
			{
				text: "The Rust Performance Book",
				link: "https://nnethercote.github.io/perf-book/",
			},
			{
				text: "RUST性能手册",
				link: "https://blues-star.github.io/perf-book-zh/",
			},
			{
				text: "使用 rust 进行系统编程",
				link: "https://github.com/bexxmodd/cr4sh_",
			},
			{
				text: "deps",
				link: "https://deps.dev",
			},
			{
				text: "框架",
				link: "https://github.com/seanmonstar/warp",
			},
		],
	},
];

let sidebar = [
	{
		text: "Rust 编程指南",
		children: [
			"简明教程.md",
			"入门.md",
			"常见概念.md",
			"所有权.md",
			"结构体.md",
			"枚举和模式匹配.md",
			"集合.md",
			"模块系统.md",
			"智能指针.md",
			"crates.md",
		],
	},
];

export default defineUserConfig<DefaultThemeOptions>({
	lang: "zh-CN",
	base: "/r/",
	title: "Rust 之旅",
	description: "",
	themeConfig: {
		logo: "https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
		navbar,
		sidebar,
		lastUpdatedText: "最近更新",
		contributors: false,
	},
	bundler: "@vuepress/vite",
});
