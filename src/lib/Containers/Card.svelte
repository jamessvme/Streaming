<script>
	export let styles = {
		'--height':'100%', 
		'--width':'50%', 
		'--pad':'3vmin',
		'--radius':'3%',
		'--direction':'column',
		'--justify':'center',
		'--align':'center',
		'--background':'indigo',
		'--font':'3.0vmin courier',
		'--color':'ghostwhite'
	};	
	$: style = Object.entries( styles ).map( arr => arr.join( ':' )).join(';'); 
</script>
<article { style }>
	{ #if $$slots.mediaA }
		<slot name=mediaA>
			<div style="background-color:ghostwhite; height:100%; width:100%;border-radius:50%;"></div>
		</slot>
	{ /if }
	<div id=text_wrapper>
		<slot name=content>
			<h3>Heading</h3>
			<p>Lorem Epsum</p>
		</slot>
	</div>
	{ #if $$slots.mediaB }
		<slot name=mediaB>
			<div style="background-color:ghostwhite; height:100%; width:100%;border-radius:50%;"></div>
		</slot>
	{ /if }
</article>
<style>
	article {
		height:var( --height );
		width:var( --width );
		padding:var( --pad );
		display:flex;
		flex-direction:var(--direction);
		border-radius:var( --radius );
		justify-content:var( --justify );
		align-items:var( --align );
		background:var( --background );		
		font:var(--font);
		color:var(--color);
	}
	#text_wrapper {
		display:flex;
		flex-direction:column;
	}
</style>



