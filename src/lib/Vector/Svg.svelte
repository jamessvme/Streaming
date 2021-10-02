<script>
	export let data = {
		slots: [
			{ x:0, y:0, w:50, h:50, f:'ghostwhite' },
		]
	};
	const { viewport, d, slots } = data;

</script>
<svg { viewport } x={ d.x } y={ d.y } width={ d.width } height={ d.height }>
	<slot name=theme/>
	{ #each slots as vector, i (i) }
		<slot name=vector { vector }>
			<rect x={ vector.x } y={ vector.y } width={ vector.w } height={ vector.h } fill={ vector.f }/>
		</slot>
	{ /each }
</svg>
