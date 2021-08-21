<script>
	export let props = {}
	export let components = [];
	$: style = Object.entries( props ).map( arr => arr.join( ':' )).join(';'); 

</script>
<div id=SnapContainer { style }>
	{ #each components as component, i (i) }
		<section>
			<svelte:component this={ component }/>
		</section>
	{ /each }
</div>
<style>
	#SnapContainer {
		height:100%;
		width:102%;
		overflow-y:auto;
		scroll-snap-type:y mandatory;
	}
	section { 
		height:100%;
		width:99%;
		scroll-snap-align:start;
		overflow:hidden;
		display:flex;
		justify-content:center;
		align-items:center;
	}
</style>
