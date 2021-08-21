<script>
	import Figure from "$lib/Containers/Figure.svelte";
	import LapTop from "./Graphics/LapTop.svelte";

	const props = {
		width:'80%'
	}

	const data = {
		height:'100%', 
		width:'75%' 
	}
</script>
<Figure { props }>
	<h1 slot=heading>Flogram</h1>
	<p slot=caption>Build Fast Programs Fast</p>		
	<LapTop slot=image { data }/>
</Figure>

