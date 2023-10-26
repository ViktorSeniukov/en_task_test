import VTooltip from 'v-tooltip';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive('tooltip', VTooltip);
});
