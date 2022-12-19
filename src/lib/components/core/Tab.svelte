<script lang="ts">
	export let tabs: string[] = [];
	export let currentTab = 0;
	export let localStorageName = '';

	const handleClick = (i: number) => {
		currentTab = i;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(localStorageName + '_tab', i.toString());
		}
	};
</script>

<div>
	<!-- TabList -->
	<div class="flex border-b-2 border-inherit">
		{#each tabs as tab, index}
			<div
				class={`dark:text-gray-100 flex items-center justify-center px-4 py-2 border-b-2 cursor-pointer transition ${
					currentTab === index ? 'text-orange-500 border-current' : 'border-transparent'
				}`}
				on:click={() => handleClick(index)}
			>
				{tab}
			</div>
		{/each}
	</div>
</div>
