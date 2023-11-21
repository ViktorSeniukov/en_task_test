import { defineNuxtRouteMiddleware } from 'nuxt/app';
import { auth } from '@features/auth';

// to: RouteLocationNormalized

// eslint-disable-next-line consistent-return
export default defineNuxtRouteMiddleware(() => {
	// @ts-ignore
	if (auth()) {
		return navigateTo('/create');
	}
});
