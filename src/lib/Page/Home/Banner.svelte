<script>
	import CardImg from "$lib/Containers/CardImg.svelte";

	export let props = {};

	let { heading, caption, image, size  } = props;

</script>
<CardImg --width=80%>
	<h1 slot=heading>{ heading }</h1>
	<p slot=caption>{ caption }</p>		
	<svelte:fragment slot=image>
		<svelte:component this={ image } props={ size }/>
	</svelte:fragment>
</CardImg>

