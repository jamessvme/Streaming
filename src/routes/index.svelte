<script>
	import Snap from "$lib/Containers/Snap.svelte";

	import Banner from "./_Main/Banner.svelte";
	import Sect3 from "./_Main/Section3.svelte";

	const props = {
		background:'var(--g2w )'
	}
	const components = [ Banner, Sect3 ];
</script>
<Snap { props }{ components } />
