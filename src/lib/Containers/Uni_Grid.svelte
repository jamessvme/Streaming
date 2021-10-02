<script>
	import Card from "$lib/Containers/Card.svelte";

	export let props = { 
		rows:5, 
		cols:3, 
		cells:[
			{ id:'a', l:2, w:2 },
			{ id:'b', l:2, w:1 },
			{ id:'c', l:1, w:3 },
			{ id:'d', l:2, w:2 },
			{ id:'e', l:2, w:1 }
		]
	};
	const drawGrid = ({ rows, cols, cells }) => Array.from(
		{ length: rows }, 
		( _, row ) => {
			let col = [];
			let filled = 0;
			cells.map(({ id, l, w })=>{ 
				let cell = Array(w).fill(id);
				if( filled+l>row){
					if( col.length + cell.length <= cols ){
						col = [ ...col, ...cell ]; 
					};
				} else {
					filled=l;
				};
			});
			return col;
		}
	);
	
	let area;
	/*
	const drawGrid = ({ rows, cols }) => Array.from(
		{ length: rows }, 
		( _, row ) => Array.from(
			{ length: cols }, 
			( _, col ) => {
				return { r:row+1, c:col+1 }
			}
		)
	).flat();
	 */
	$: cells = drawGrid( props );
	$: console.log(cells);
	$: style = Object.entries( props ).map( arr => arr.join( ':' )).join(';'); 
</script>
<div id="Grid" style='--area:{ area }' >
	<!--	{ #each cells as cell }
		<slot name=cell {cell}>
			<div style="border:thick solid white">
			<Card>
				<h1 slot=heading>Cell</h1>
				<h3 slot=caption>{cell.r}:{cell.c}</h3>
			</Card>
			</div>
		</slot>
		{ /each }-->
</div>
<style>
	#Grid {
	  	display: grid;

		grid-template-area:var(--area);
		/*
	  	grid-template-columns: repeat(3,4fr);
	  	grid-auto-rows: minmax(10vh, 20vh);
		 */
	}
	/*
	#Grid {
	  display: grid;
	  grid-template-columns: repeat(2,1fr);
	  gap: 10px;
	  grid-auto-rows: minmax(100px, auto);
	  }*/
	.cell {
		grid-column:var(--column);
		grid-row:var(--row);
		background:var(--dark);
	}
</style>
