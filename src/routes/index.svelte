<script>
	import Machine from "$lib/svg/Machine.svelte";
	import Banner from "$lib/CardImg.svelte";
	import TypeWriter from "$lib/animation/TypeWriter.svelte";

	const txtToFill = "Build fast programs faster";
	const delay = 0;
</script>
<!--<main class=theme on:scroll='{checkVis}'>-->
<main>
	<Banner>
		<h1 slot=heading>
			Flogram
		</h1>
		<h1 slot=heading2>
			Language
		</h1>
		<figcaption slot=description>
			<TypeWriter {txtToFill}/>
		</figcaption>
		<picture slot=image>
			<Machine/>
		</picture>
	</Banner>
</main>
<style>
	main {
		height:100vh;
		width:101.5vw;
		overflow-x:hidden;
		overflow-y:auto;
		scroll-snap-type:y mandatory;
	}
	scroll { 
		height:100vh;
		width:100vw;
		scroll-snap-align:start;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
</style>
