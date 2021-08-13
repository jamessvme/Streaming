<script>
	export let data = {
		intervals: 1,
		fill:'blue',
		stroke:'ghostwhite',
		points: [
			[0, 0], 
			[50, 100], 
			[150, 100], 
			[200, 0]
		],
	}
	const { intervals,  fill, points, stroke } = data;
</script>
<polygon { points }{ fill }{ stroke }/>
{#each Array( intervals ) as _,i} 
	<slot>
		<text x=100 y=50 text-anchor=middle fill='var( --white )'>Logo</text>
	</slot>
{/each}
<style>
	svg {
		height:100%;
	}
</style>
