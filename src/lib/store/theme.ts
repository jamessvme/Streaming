import { writable, get } from 'svelte/store';

export const theme = writable('dark');
export const themeValue = get(theme);
export const setTheme = (mode) => theme.update(() => mode);
