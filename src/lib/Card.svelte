<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher;

	export let heading="";
	export let discription="";
	export let buttons=[];
</script>
<article>
	<h3>{heading}</h3>
	<p>{description}</p>
	<div>
		{#each buttons as button, i (i)}
			<button on:click={dispatch( button )}>{button}</button>
		{/each}
	</div>
</article>
