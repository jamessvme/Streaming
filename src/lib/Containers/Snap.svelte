<script>
	import LapTop from "$lib/svg/LapTop.svelte";
	export let components = [];
	$:console.log(components);
</script>
{ #each components as component, i (i) }
 	<section>
		<slot name=component { component }>
			<svelte:component this={ component.cmp } props={ componet.props }/>
		</slot>
	</section>
{ /each }
<style>
	section { 
		height:100%;
		width:100vw;
		scroll-snap-align:start;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
		background:var(--background);
	}
</style>
