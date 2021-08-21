<script>	
	export let props = {};
	export let slots = Array(1);

	$: style = Object.entries( props ).map( arr => arr.join( ':' )).join(';'); 
</script>

<div class=flex { style }>
	{ #each slots as data, i (i) }
		<slot name=data { data }>
			<h3>Text</h3>
		</slot>
	{ /each }
</div>
<style>
	.flex {
		height:100%;
		width:100%;
		display:flex;
		align-items:center;
		align-content:center;
	}	
</style>

