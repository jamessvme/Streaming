<script lang="ts">
	import Avatar from 'svelte-avatar';
	import Badge from '$lib/components/core/Badge.svelte';
	import Button from '$lib/components/core/Button.svelte';
	import { faCheck, faComment, faDownload } from '@fortawesome/free-solid-svg-icons';
	import type { LibraryType } from 'src/lib/types/Library';
	import uniqolor from 'uniqolor';
	import Link from 'svelte-link';
	import { theme } from '$lib/store/theme';
	import { onMount } from 'svelte';

	let mode: string = 'dark';

	onMount(() => {
		theme.subscribe((value) => (mode = value));
	});
	export let library: LibraryType;
</script>

<Link href={`/app/repo/${library.name}`}>
	<div
		class="dark:bg-slate-700 dark:text-gray-100 bg-gray-100 flex flex-col justify-between gap-5 p-5 rounded-lg cursor-pointer hover:bg-gray-200/70 transition"
	>
		<!-- Main Content -->
		<div class="flex gap-5">
			<div class="w-20 h-20">
				<Avatar
					initials=""
					src=""
					name={library.name}
					size="80px"
					bgColor={uniqolor(library.name).color}
					borderRadius="10%"
				/>
			</div>

			<!-- Desc -->
			<div class="grow flex flex-col justify-between">
				<!-- Library name -->
				<div class="font-medium text-xl">
					{library.name}
				</div>
				<!-- Library description -->
				<div class="dark:text-gray-300 text-gray-500">
					{library.description}
				</div>
				<!-- Library tags -->
				<div class="flex gap-2">
					{#if 'labels' in library}
						{#each library.labels as tag}
							<Badge colorScheme={tag.color}>{tag.name}</Badge>
						{/each}
					{/if}
				</div>
			</div>

			<!-- Top badge -->
			{#if library.isTopRanked}
				<div>
					<Badge fontSize="16px" colorScheme="orange">Top Ranked</Badge>
				</div>
			{/if}
		</div>
		<!-- Action -->
		<div class="flex items-center justify-between">
			<!-- actions -->
			<div class="flex gap-2">
				<Button
					size="sm"
					leftIcon={faCheck}
					colorScheme={mode === 'light' ? 'orange' : 'blue50'}
					variant="ghost">Like</Button
				>
				<Button
					size="sm"
					leftIcon={faComment}
					colorScheme={mode === 'light' ? 'orange' : 'blue50'}
					variant="ghost">Comment</Button
				>
				<Button
					size="sm"
					leftIcon={faDownload}
					colorScheme={mode === 'light' ? 'orange' : 'blue50'}
					variant="ghost">Download</Button
				>
			</div>

			<!-- status -->
			<div class="flex gap-5">
				<span class="text-gray-600 font-medium dark:text-gray-100">{library.votes} votes</span>
				<span class="text-gray-600 font-medium dark:text-gray-100"
					>{library.downloads} downloads</span
				>
			</div>
		</div>
	</div>
</Link>
