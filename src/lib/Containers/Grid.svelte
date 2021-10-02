<script>
	import Card from '$lib/Containers/Card.svelte';

	let props = {
		'--area':"'a a a' 'b b c' 'b b c'",
	};

	let cells = [ 'a','b','c' ];

	$: style = Object.entries( props ).map( arr => arr.join( ':' )).join(';'); 
</script>
<div id="Grid" { style }>
	{ #each cells as cell }
		<slot name=cell {cell}>
			<div style='grid-area:{cell}; border:thick solid white'>
				<Card>
					<h1 slot=heading>{cell}</h1>
				</Card>
			</div>
		</slot>
	{ /each }
</div>
<style>
	#Grid {
	  	display: grid;
		grid-template-areas:var(--area);
	}
</style>
