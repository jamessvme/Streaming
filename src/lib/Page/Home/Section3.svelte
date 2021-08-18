<script>
	import Flex from "$lib/Containers/Flex.svelte"
	import Card from "$lib/Containers/Card.svelte"

	export let props = {};
</script>
<Flex { props }>
	<svelte:fragment slot=val let:val>
		<Card --height={ val.d.height } --width={ val.d.width } --top={ val.d.marginTop }>
			<h1 slot=heading>{ val.heading }></h1>
			<ul slot=caption>
				{ #each val.list as item, i (i) }
					<li>{ item }</li>
				{ /each }
			</ul>
		</Card>
	</svelte:fragment>
</Flex>
<style>
	h1{
		text-align:center;
		font-size:3vmin;
		color:var(--green);
	}
	ul{
		display:flex;
		flex-direction:column;
		padding-left:2vw;
		color:var(--green);

	}
	li{
		font-size:2.5vmin;
		color:var(--green);
	}
</style>

