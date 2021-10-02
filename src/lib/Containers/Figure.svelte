<script>
	export let images = [ "image" ];
	export let styles = {
		'--width':'100%',
		'--height':'100%',
		'--direction':'row',
		'--font':'3.0vmin courier',
		'--color':'purple',
		'--justify':'center',
		'--align':'center',
	};

	$: style = Object.entries( styles ).map( arr => arr.join( ':' )).join(';'); 
</script>
<figure { style }>
	{ #if $$slots.captionA }
		<figcaption>
			<slot name=captionA>
				<p>Lorem Epsum</p>		
			</slot>
		</figcaption>
	{ /if }
	<picture>
		{ #each images as image }
			<slot name=image { image }>
				<div style="background-color:indigo; height:100%; width:100%;border-radius:50%;"></div>
			</slot>
		{ /each }
	</picture>
	{ #if $$slots.captionB }
		<figcaption>
			<slot name=captionB>
				<p>Lorem Epsum</p>		
			</slot>
		</figcaption>
	{ /if }
</figure>
<style>
	figure {
		height:100%;
		width:100%;
		display:flex;
		flex-direction:var(--direction);
		justify-content:center;
		align-items:center;
		font-weight:bold;
	}
	figcaption{
		height:var(--height);
		width:var(--width);
		display:flex;
		flex-direction:column;
		font:var(--font);
		color:var(--color);
		justify-content:var( --justify );
		align-items:var( --align );
	}
	picture {
		height:var(--height);
		width:var(--width);
	}
</style>
