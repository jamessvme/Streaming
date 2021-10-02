<script>
	import Svg from '$lib/Vector/Svg.svelte';
	export let props = {
		points: [
			[0, 0], 
			[50, 100], 
			[150, 100], 
			[200, 0]
		],
		margin: [0,0],
		links:Array.of('_'),
	}

	const { points, gradients=Array(1) } = props;

	$:inner = [
		points.map(arr => arr[0]).sort((a,b)=>a-b).slice(1,3),
		points.map(arr => arr[1]).sort((a,b)=>a-b).slice(1,3)
	];

	$: intervals = {
		width:inner[0][1]-inner[0][0],
		height:inner[1][1]-inner[1][0],
		direction:()=>intervals.width>intervals.height?"row":"col",
		Xintervals: ()=>intervals.width/props.links.length,
		Yintervals: ()=>intervals.height/props.links.length,		
		XCenters:()=>intervals.Xintervals()/2,
		YCenters:()=>intervals.Yintervals()/2,
		spaced:()=>Array.from(
			{ length: props.links.length },
			( _, i )=> [
				i*intervals.Xintervals()+props.margin[0],
				i*intervals.Yintervals()+props.margin[1],
			]
		),
	}
	$:console.log();

	$: data = {
		viewport: inner.map( arr => arr.join(' ')).join(' '),	
		slots: intervals.spaced().map(( val, i )=>{
			return { 
				id:props.links[i].id,
				href:props.links[i].href,
				img:props.links[i].img,
				text:props.links[i].text,
				x:intervals.direction()==="row"?val[0]:0, 
				y:intervals.direction()==="col"?val[1]:0, 
				cx:val[0]+intervals.XCenters(), 
				cy:val[1]+intervals.YCenters(),
				width:intervals.direction()==="row"?intervals.Xintervals()/2:'85%',
				height:intervals.direction()==="col"?intervals.Yintervals()/2:'85%',
				r:Math.min( intervals.XCenters(), intervals.YCenters()),
				f:'ghostwhite' }
		}),
		d: {
			x:inner[0][0],
			y:inner[1][0],
			width:intervals.width,
			height:intervals.height,
		}
	} 
</script>
{ #each gradients as fill, i (i) }
	<polygon { points }{ fill }/>
{ /each }
<Svg { data }>
	<svelte:fragment slot=vector let:vector>
		<slot name=vector { vector }>
			<circle cx={ vector.cx } cy={ vector.r } r={ vector.r } fill={ vector.f }/>
			<text x={ vector.cx } y={ vector.r+5 } text-anchor=middle fill='var( --green )'>Logo</text>
		</slot>
	</svelte:fragment>
</Svg>
<style>
	svg {
		height:100%;
	}
</style>
