<script>
	export let styles = {}
	export let sections = Array(1);

	export let components = [];

	$: style = Object.entries( styles ).map( arr => arr.join( ':' )).join(';'); 

</script>
<section id=SnapContainer { style }>
	{ #each sections as section, i (i) }
		<a id={  section.id } name={ section.id }>
			<slot name=section { section }>Slot</slot>
		</a>
	{ /each }
</section>
<style>
	#SnapContainer {
		height:100%;
		width:102%;
		overflow-y:auto;
		scroll-snap-type:y mandatory;
	}
	a { 
		height:100%;
		width:99%;
		scroll-snap-align:start;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
</style>
