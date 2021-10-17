<script>
	import Svg from '$lib/Vector/Svg.svelte';

	const data = [
		'M 0 80',
		'L 0,20, 80,20', 
		'c 10,0 15,-10 5,-20',
		'c 5,0 10,15 10,20',
		'l 0,25',
		'c 0,20 -10,35 -30,35',
		'z'
	];

	const gradients = [ 'url( #ColumnBG )', 'url( #Column )' ];
	$: d = data.join( ' ' );
</script>
{ #each gradients as fill, i (i) }
	<g>
		<a href='#Function'>
			<path { d } { fill }/>
			<text x=15 y=63  fill='white'>Link</text>
		</a>
	</g>
{ /each }
<style>
	svg {
		height:100%;
	}
</style>
