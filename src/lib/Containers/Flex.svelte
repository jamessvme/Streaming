<script>	
	export let styles = {
		'--justify':'center',
		'--align':'center',
		'--direction':'row'
	};
	export let slots = Array(1);

	$: style = Object.entries( styles ).map( arr => arr.join( ':' )).join(';'); 
</script>
<div class=flex { style }>
	{ #each slots as cell, i (i) }
		<slot name=cell { cell }>
			<h3>Text</h3>
		</slot>
	{ /each }
</div>
<style>
	.flex {
		height:100%;
		width:100%;
		display:flex;
		flex-direction:var(--direction);
		justify-content:var(--justify);
		align-items:var(--align);
	}	
</style>

