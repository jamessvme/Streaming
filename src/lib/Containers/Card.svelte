<script>
	export let props = {};	
	$: style = Object.entries( props ).map( arr => arr.join( ':' )).join(';'); 
</script>
<article { style }>
	<slot name=heading><h3>Heading</h3></slot>
	<slot name=caption><p>Lorem Epsum</p></slot>
</article>
<style>
	article{
		border-radius:3%;
		padding:3vmin;
		display:flex;
		flex-direction:column;
		align-items:center;
	}
</style>

