import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

let navbar = [
	{
		text: "联系我",
		link: "http://wpa.qq.com/msgrd?v=3&uin=295984047&site=qq&menu=yes",
	},
];

let sidebar = [
	{
		text: "Rust 编程指南",
		children: ["入门.md", "常见概念.md", "所有权.md"],
	},
];

export default defineUserConfig<DefaultThemeOptions>({
	lang: "zh-CN",
	base: "/r/",
	title: "Rust 之旅",
	description: "",
	themeConfig: {
		logo: "https://vuejs.org/images/logo.png",
		navbar,
		sidebar,
		lastUpdatedText: "最近更新",
		contributors: false,
	},
	bundler: "@vuepress/vite",
});
