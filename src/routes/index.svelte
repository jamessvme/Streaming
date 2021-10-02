<script>
	import Snap from "$lib/Containers/Snap.svelte";

	import Banner from "./_Main/Banner.svelte";
	import Features from "./_Main/Features.svelte";

	import Summary from "./_Main/Summary.svelte";

	const styles = {
		background:'var(--g2w )'
	}

	const sections = [
		{
			id:"Banner",
			component:Banner, 
		},
		{
			id:"Features",
			component:Features,
		},
		{
			id:"Install",
			component:Summary,
		}
	]
</script>
<Snap { styles } { sections }>
	<svelte:fragment slot=section let:section>
	 	<svelte:component this={ section.component } />
	</svelte:fragment>
</Snap>

