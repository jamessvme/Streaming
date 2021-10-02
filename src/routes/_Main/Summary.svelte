<script>
	import Flex from "$lib/Containers/Flex.svelte"
	import Card from "$lib/Containers/Card.svelte"

	const styles = {
		height:'50%',
		'--justify':'space-around',
		'--align':'center',
		'--color':'var( --green )',
		'--cell-justify':'center',
		'--cell-align':'start',
		'--cell-top':'11vh',
		'--cell-height':'30vh',
		'--cell-width':'23vw',
		'--radius':'9%',
		'--background':'var( --w2b )',
		'--pad':'3vmin',
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
				d: { 
					'--height':'var( --cell-height )', 
					'--width':'var( --cell-width )', 
					'margin-top':'var( --cell-top )', 
					'--justify':'var(--cell-justify )',
					'--align':'var( --cell-align )'
				},
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
				d: { 
					'--height':'35vh', 
					'--width':'31vw', 
					'--justify':'var(--cell-justify)',
					'--align':'var( --cell-align)',
					'--direction':'row',
				},
			},
			{ 
				heading:'High Security',
				list: [
					'Memory Safe',
					'Thread Safe',
					'Type Safe',
					'No Nulls'
				],
				d: { 
					'--height':'var( --cell-height )', 
					'--width':'var( --cell-width )', 
					'margin-top':'var( --cell-top )', 
					'--justify':'var( --cell-justify )',
					'--align':'var( --cell-align )',
				},
			},
		];
</script>
<Flex styles={{ height:'30%', font:'var(--font)', color:'var( --white )', '--justify':'center','--align':'center'}}>
	<p slot=cell>Lorem Epsum</p>
</Flex>
<Flex { styles } { slots }>
	<svelte:fragment slot=cell let:cell>
		<Card styles={ cell.d }>
			<h1 slot=heading>{ cell.heading }</h1>
			<ul slot=content>
				{ #each cell.list as item, i (i) }
					<li>{ item }</li>
				{ /each }
			</ul>
		</Card>
	</svelte:fragment>
</Flex>
<style>
	ul{
		display:flex;
		flex-direction:column;
		margin:0;
		padding:0;
	}
</style>
