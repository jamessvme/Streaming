<script lang="ts">
	import { onMount } from 'svelte';
	import Link from 'svelte-link';
	import LibraryCard from '$lib/components/pages/repo/LibraryCard.svelte';
	import Input from '$lib/components/core/Input.svelte';
	import Button from '$lib/components/core/Button.svelte';
	import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
	import type { LibraryType } from '../../../../types/Library';
	import axios from 'axios';
	import { env } from '$env/dynamic/public';
	import { libraries } from '$lib/store/libraries';
	import { theme } from '$lib/store/theme';

	let mode: string = 'dark';
	onMount(async () => {
		try {
			theme.subscribe((value) => (mode = value));
			libraries.set([]);

			const response = await axios.get<LibraryType[]>(`${env.PUBLIC_FLOGRAM_API_URL}/libraries/`);

			libraries.set(response.data);
		} catch (error) {
			libraries.set([]);
		}
	});

	const searchLibrary = async (e: any) => {
		if (e.target.value) {
			const response = await axios.get<LibraryType[]>(
				`${env.PUBLIC_FLOGRAM_API_URL}/libraries/search/${e.target.value}`
			);
			libraries.set(response.data);
		} else {
			const response = await axios.get<LibraryType[]>(`${env.PUBLIC_FLOGRAM_API_URL}/libraries/`);
			libraries.set(response.data);
		}
	};
</script>

<div class="flex flex-col gap-5">
	<!-- top side -->
	<div class="flex items-center justify-between">
		<div class="flex gap-5">
			<input
				class="dark:bg-slate-700 dark:text-gray-100 h-12 text-lg px-4 w-full min-w-0 outline outline-transparent outline-2 outline-offset-2 appearance-none relative transition py-0 rounded-md border border-inherit focus-visible:z-1"
				placeholder="Find a library..."
				on:input={(e) => searchLibrary(e)}
				type="text"
			/>
		</div>

		<Link href="/app/repo/create">
			<Button colorScheme={mode === 'light' ? 'orange' : 'blue50'} leftIcon={faBookAtlas}
				>Create New Library</Button
			>
		</Link>
	</div>
	<!-- library list -->
	<div class="grid lg:grid-cols-2 gap-5">
		{#each $libraries as library}
			<div>
				<LibraryCard {library} />
			</div>
		{/each}
	</div>
</div>
