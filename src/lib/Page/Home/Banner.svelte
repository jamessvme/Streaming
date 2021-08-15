<script>
	import CardImg from "$lib/Containers/CardImg.svelte";
	import LapTop from "$lib/svg/LapTop.svelte";

	export let props = {};

	let { heading, caption, image, size  } = props;

</script>
<CardImg>
	<h1 slot=heading>{ props.heading }</h1>
	<p slot=caption>{ props.caption }</p>		
	<svelte:fragment slot=image>
		<svelte:component this={props.image} props={props.size}/>
	</svelte:fragment>
</CardImg>
