<script>	
	export let list = 4;
	export let stack  = false;
	export let center;
	export let right;
	export let left;

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

