<script>	
	export let props = {};
	const { list=4, stack=false, center=true, right=false, left=false }= props;
</script>
<sect  class:stack class:center class:right class:left>
	{ #each Array(list) as _, i (i) }
		<slot>
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
		justify-content: space-around;
	}
	.right {
		justify-content: end;
	}
	.left {
		justify-content: start;
	}
</style>

