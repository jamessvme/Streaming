import { writable, derived } from 'svelte/store';
import type { LibraryType } from '../types/Library';

export const libraries = writable<LibraryType[]>([]);