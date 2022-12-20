import { writable, get } from 'svelte/store';
import { tick } from 'svelte';
export const theme = writable('dark');
export const themeValue = get(theme);
export const setTheme = async (mode) => {
	theme.set(mode);
	await tick;
};
