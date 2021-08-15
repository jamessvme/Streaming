<script>
	import LapTop from "$lib/svg/LapTop.svelte";
	import Grid from "$lib/Containers/Grid.svelte";
	export let components = [
		{ ths:Grid, props:{rows:3, cols:3}}
	];
</script>
{ #each components as component, i (i) }
 	<section>
		<slot name=component { component }>
			<svelte:component this={ component.cmp } props={ component.props }/>
		</slot>
	</section>
{ /each }
<style>
	section { 
		height:100%;
		width:100%;
		scroll-snap-align:start;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
</style>
