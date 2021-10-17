<script>
	export let data = {
		slots: [
			{ x:0, y:0, w:50, h:50, f:'ghostwhite' },
		]
	};
	const { viewBox,  d:{ x, y, width, height }, slots, styles } = data;

	$: style = Object.entries( styles ).map( arr => arr.join( ':' )).join(';'); 
</script>
<svg { viewBox } { x } { y } { width } { height } { style }>
	<slot name=theme/>
	{ #each slots as vector, i (i) }
		<slot name=vector { vector } { i }>
			<rect x={ vector.x } y={ vector.y } width={ vector.w } height={ vector.h } fill={ vector.f }/>
		</slot>
	{ /each }
</svg>
