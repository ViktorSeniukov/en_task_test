// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			title: 'En Task',
		},
	},
	srcDir: 'src/',
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
	},
	modules: ['@nuxtjs/tailwindcss'],
});
