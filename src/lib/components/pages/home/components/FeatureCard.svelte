<script lang="ts">
	import Button from '$lib/components/core/Button.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';

	export let title = '';
	export let description = '';
	export let icon: any = null;
</script>

<div
	class="dark:bg-slate-700 bg-white w-[400px] flex flex-col gap-2 rounded-md shadow-md text-left p-10"
>
	<div
		class="w-12 h-12 flex items-center justify-center rounded-full dark:bg-[#38b2ac] bg-orange-500"
	>
		{#if icon !== null}
			<Fa {icon} color="white" />
		{/if}
	</div>

	<span class="dark:text-gray-100 mt-4 text-2xl">{title}</span>

	<p class="dark:text-gray-300 text-gray-500">
		{description}
	</p>

	<div class="dark:text-gray-300 flex justify-end">
		<!-- <Button colorScheme="gray100" variant="link">Learn more...</Button> -->
		<span>Learn more...</span>
	</div>
</div>
