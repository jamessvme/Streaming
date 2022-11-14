import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }: { params: any }) {
    return {
        name: params.library as string,
        path: params.path as string
    };
}