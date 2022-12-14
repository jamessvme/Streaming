<script lang="ts">
	import Tab from '$lib/components/core/Tab.svelte';
	import Overview from '$lib/components/pages/repo/tabs/Overview.svelte';
	import Library from '$lib/components/pages/repo/tabs/Library.svelte';

	const tabs = ['Overview', 'Libraries', 'Projects', 'Stars'];
	let currentTab = -1;

	if (typeof localStorage !== 'undefined') {
		currentTab =
			localStorage.getItem('repo_tab') === null
				? 0
				: parseInt(localStorage.getItem('repo_tab') as string);
	}
</script>

<div class="mt-6 w-full">
	{#if currentTab !== -1}
		<Tab {tabs} bind:currentTab localStorageName="repo" />

		<!-- Tab content -->
		<div class="mt-5 p-5 !h-[100%]">
			<!-- Overview -->
			{#if currentTab === 0}
				<Overview />
			{/if}
			<!-- Libraries -->
			{#if currentTab === 1}
				<Library />
			{/if}
			<!-- Projects -->

			<!-- Stars -->
		</div>
	{/if}
</div>
