// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
	devtools: { enabled: false },
	srcDir: 'src/',
	app: {
		head: {
			title: 'En Task',
		},
	},
	routeRules: {
		'/': {
			redirect: { to: 'task' },
		},
	},
	css: [
		'modern-normalize/modern-normalize.css',
		'assets/css/_colors.css',
		'assets/css/_base.css',
	],
	components: [
		{
			path: '@/components',
			pathPrefix: false,
		},
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "src/assets/scss/_global.scss";',
				},
			},
		},
	},
	alias: {
		'@features': fileURLToPath(new URL('./src/features', import.meta.url)),
		'@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
		'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
		'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
		'@constants/icon': fileURLToPath(new URL('./src/constants/icon', import.meta.url)),
	},
	modules: ['@nuxtjs/tailwindcss'],
});
