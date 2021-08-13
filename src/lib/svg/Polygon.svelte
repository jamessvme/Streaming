<script>
	import { onMount } from 'svelte';
	export let data = {
		icons:3,
		points: [
			[800, 100], 
			[0, 100], 
			[0, 0], 
			[800, 0],
		],
	};

	$: draw = {
		poly: data.points.map( arr=> arr.join(' ') ).toString(','),
		length: data.points.length,
		x:{	
			sorted: data.points.map( arr => arr[0]).sort((a,b)=>a-b),
			max: ()=>draw.x.sorted[draw.length-1],
			min: ()=>draw.x.sorted[0],
			off:{
				set: ()=> new Set( draw.x.sorted ),
				setLen: ()=> [...draw.x.off.set()].length,
				lmtMin: ()=> [...draw.x.off.set()][1],
				lmtMax: ()=> [...draw.x.off.set()][draw.x.off.setLen()-2],
			},
			iconInt: ()=> Math.abs( draw.x.off.lmtMax()-draw.x.off.lmtMin())/data.icons,
		},
		y:{
			sorted: data.points.map( arr => arr[1]).sort((a,b)=>a-b),
			max: ()=>draw.y.sorted[draw.length-1],
			min: ()=>draw.y.sorted[0],
			off:{
				set: ()=> new Set( draw.y.sorted ),
				setLen: ()=> [...draw.y.off.set()].length,
				lmtMin: ()=> [...draw.y.off.set()][1],
				lmtMax: ()=> [...draw.y.off.set()][draw.y.off.setLen()-2],
			},
			iconInt: ()=> Math.abs(draw.y.off.lmtMax()-draw.y.off.lmtMin())/data.icons,
		},
	};

	$: console.log( draw.x.off.set() );
	$: console.log( draw.x.iconInt() );
	$: console.log( draw.x.off.lmtMax());

	$: console.log( draw.y.off.set() );
	$: console.log( draw.y.iconInt() );
	$: console.log( draw.y.off.lmtMax());

</script>
<svg id=TrapH viewBox="0 0 { draw.x.max() } { draw.y.max() }" xmlns:svg="http://www.w3.org/2000/svg">
  	<polygon 
		fill='var( --purple )'
		points={ draw.poly }
				/>
		<svg id=Display viewBox="{ draw.x.iconInt() } { draw.y.iconInt() } { draw.x.max()-draw.x.iconInt() } { draw.y.max()-draw.y.iconInt() }" xmlns:svg="http://www.w3.org/2000/svg">
			{ #each Array(data.icons) as _, i }
					<circle 
						cx="{draw.x.iconInt()*i}"
						cy="{draw.y.iconInt()*2}"
						r="{draw.y.iconInt()}"
						fill='var( --blue )'
									/>
			{ /each }
		</svg>
</svg>
<style>
	#TrapH{
		height:100%;
	}
	#Display{
		height:100%;
		width:100%;
	}
</style>

