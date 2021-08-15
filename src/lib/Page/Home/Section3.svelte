<script>
	import Flex from "$lib/Containers/Flex2.svelte"
	import Card from "$lib/Containers/Card.svelte"

	export let props = {};
	let { caption, cards } = props;
</script>
<Flex props={{list:1, center:true}}>
	{#each cards as card }
		<Card --height={ card.d.h } --width={ card.d.w } --top={ card.d.t }>
			<h1 slot=heading>{ card.heading }</h1>
			<ul slot=caption>
				{#each card.list as item }	
					<li>{item}</li>
				{/each}
			<ul>
		</Card>
	{/each}
</Flex>
<style>
	h1{
		text-align:center;
		font-size:3vmin;
		color:var(--green);
	}
	ul{
		padding-left:2vw;
		color:var(--green);

	}
	li{
		font-size:2.5vmin;
		color:var(--green);
	}
</style>

