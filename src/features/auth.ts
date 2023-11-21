import type { H3Event } from 'h3';

export const auth = (event: H3Event): boolean => {
	const isAuthorization = getCookie(event, 'pass') || false;
	if (isAuthorization) {
		const password = prompt('Write password');
		// @ts-ignore
		const passCookie = useCookie(
			'pass',
			{
				default: () => password,
				watch: false,
			},
		);
		console.log('pass', password);
		console.log('cookie', passCookie);
	}

	return false;
};
