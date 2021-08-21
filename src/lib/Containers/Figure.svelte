<script>
	export let props = {};
	$: style = Object.entries( props ).map( arr => arr.join( ':' )).join(';'); 
</script>
<figure { style }>
	<figcaption>
		<slot name=heading>
			<h1>Heading<h1>
		</slot>
		<slot name=caption>
			<p>Lorem Epsum</p>		
		</slot>
	</figcaption>
	<picture>
		<slot name=image>
			<div style="background-color:blue; height:100%; width:100%;">
				PlaceHolder
			</div>
		</slot>
	</picture>
</figure>
<style>
	figure {
		height:100%;
		width:var(--width);
		display:flex;
		justify-content:center;
		align-content:center;
		font-size:5vh;
		font-family:var(--fontLogo);
		color:var(--purple);
		font-weight:bold;
	}
	figcaption{
		width:65%;
		display:flex;
		flex-direction:column;
		justify-content:center
	}
	picture {
		height:100%;
		display:flex;
		flex-direction:row-reverse;
	}
</style>
