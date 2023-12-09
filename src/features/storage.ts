export const setToStorage = (key: string, value: string): void => {
	// @ts-ignore
	window.localStorage.setItem(key, value);
};

// @ts-ignore
export const getFromStorage = (key: string): string | null => window.localStorage.getItem(key);

// @ts-ignore
export const removeFromStorage = (key: string): void => window.localStorage.removeItem(key);
