<script>	
	export let props = {};
	const { fill=Array(4), stack=false, center=true, right=false  }= props;
</script>
<sect>
	{ #each fill as val, i (i) }
		<slot name=val { val }>
			<h3>Text</h3>
		</slot>
	{ /each }
</sect>
<style>
	sect {
		height:100%;
		width:100%;
		display:flex;
		align-items:center;
		align-content:center;
		flex-direction:var( --direction );
		justify-content:var( --justify );
		background:var(--background);
	}	
</style>

