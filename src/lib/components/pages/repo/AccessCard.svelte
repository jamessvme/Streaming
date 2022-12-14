<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import { theme } from '$lib/store/theme';
	import { onMount } from 'svelte';
	export let title = '';
	export let description = '';
	export let icon: any;
	export let isCheck = false;
	export let handleClick: any;
	let mode: string = 'dark';

	onMount(() => {
		theme.subscribe((value) => {
			mode = value;
		});
	});
</script>

<div
	class="relative flex gap-5 {isCheck
		? 'dark:bg-slate-700 bg-orange-100/50'
		: 'hover:dark:bg-slate-700 bg-transparent'} hover:dark:bg-slate-700 hover:bg-orange-100/50 p-3 cursor-pointer rounded-md transition"
	on:click={() => handleClick()}
>
	<div class="">
		<Fa {icon} size="40" color={mode === 'light' ? 'gray' : 'white'} />
	</div>

	<div class="flex flex-col gap-3">
		<span>{title}</span>
		<span>{description}</span>
	</div>

	<!-- check mark -->
	{#if isCheck}
		<div class="absolute top-2 right-2">
			<Fa icon={faCheck} color={mode === 'light' ? 'gray' : 'white'} />
		</div>
	{/if}
</div>
