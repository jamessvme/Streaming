<script>	
	export let props = {};
	const { fill=Array(4), stack=false, center=true, right=false  }= props;
</script>
<sect  class:stack class:center class:right>
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
	}	
	
	.stack {
		flex-direction:column;
	}
	.center {
		justify-content:space-around;
	}
	.right {
		flex-direction:row-reverse;
	}
</style>

