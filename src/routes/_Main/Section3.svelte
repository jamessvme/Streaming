<script>
	import Flex from "$lib/Containers/Flex.svelte"
	import Card from "$lib/Containers/Card.svelte"

	const props = {
		"justify-content":"space-around"
	}
	const slots = [
			{ 
				heading:'High Productivity', 
				list: [ 	
					'Simple mental model',
					'Simplify debugging',
					'Improve readability',
					'Acyclical data structures',
				],
				d: { height:'33vh', width:'28vw', 'margin-top':'13vh', background:'var(--w2b)' },
			},
			{ 
				heading:"High Performance", 
				list: [
					'No garbage collector (GC)',
					'Allocate memory in bulk',
					'Automatic threading',
					'Automatic async',
					'Automatic ownership',
					'~3x less memory than GC',
				],			
				d:{ height:'40vh', width:'31vw', background:'var(--w2b)'}
			},
			{ 
				heading:'High Security',
				list: [
					'Memory Safe',
					'Thread Safe',
					'Type Safe',
					'No Nulls'
				],
				d: { height:'33vh', width:'28vw', 'margin-top':'13vh', background:'var(--w2b)' },
			},
		];

</script>
<Flex { slots } { props }>
	<svelte:fragment slot=data let:data>
		<Card props={ data.d }>
			<h1 slot=heading>{ data.heading }></h1>
			<ul slot=caption>
				{ #each data.list as item, i (i) }
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

