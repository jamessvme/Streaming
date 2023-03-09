<script lang="ts">
	import { breadcrumb, btn } from '@svelkit/spectre';
	import { onMount } from 'svelte';
	import Link from 'svelte-link';
	import { getBreadCrumbs } from '$lib/util/util';
	import type { BreadCrumbsItem } from '$lib/types/Global';

	export let url;
	let items: BreadCrumbsItem[] = [];
	let loading = false;

	onMount(async () => {
		await setBreadCrumbs();
	});

	const setBreadCrumbs = async () => {
		items = [];
		if (url)
			if (url.name && !url.path) {
				loading = true;
				await items.push({
					url: `${url.name}`,
					label: url.name
				});
			} else {
				loading = true;
				let temp = getBreadCrumbs(url.name, url.path);
				items = [...temp];
			}
		loading = false;
		return;
	};

	$: {
		url;
		setBreadCrumbs();
	}
</script>

<div>
	{#if loading}
		<div>loading...</div>
	{:else}
		<div class="items-center">
			<ul use:breadcrumb>
				{#each items as item}
					<li use:breadcrumb.item>
						<!-- <button on:click={() => changeUrl(item.url)}>{item.label}</button> -->
						<Link href={`/app/repo/${item.url}`} class="hover:underline hover:text-gray-100"
							>{item.label}</Link
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
