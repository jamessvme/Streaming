<script>
	import Card from "$lib/Containers/Card.svelte";

	export let props = { rows:3, cols:2 };

 	const drawGrid = ({ rows, cols } = { rows:2, cols:2 }) => Array.from(
		{ length: rows }, 
		( _, row ) => Array.from(
			{ length: cols }, 
			( _, col ) => {
				return { r:row+1, c:col+1 }
			}
		)
	);

	$: cells = drawGrid( props );
</script>
<div class="wrapper">
	{ #each cells as cell }
		<slot name=cell {cell}>
			<Card class="cell"	--row={ cell.r } --column={ cell.c }>
				<h1>Cell Heading</h1>
				<p>Cell Description</p>
			</Card>
		</slot>
 	{ /each }
</div>
<style>
	.wrapper {
	  display: grid;
	  grid-template-columns: repeat(2,1fr);
	  gap: 10px;
	  grid-auto-rows: minmax(100px, auto);
	}
	.cell {
		grid-column:var(--column);
		grid-row:var(--row);
		background:var(--dark);
	}
</style>
