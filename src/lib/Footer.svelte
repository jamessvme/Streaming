<script>
	import Poly from '$lib/svg/Polygon.svelte';
	import GitHub from "$lib/svg/icons/Github.svelte";
	import Discord from "$lib/svg/icons/Discord.svelte";
	import Trap from "$lib/svg/Trapezoid.svelte";

	const data = {
		icons: 0,
		points: [
			[400, 100],
			[400, 0], 
			[85, 0], 
			[0, 100],
		],
	};

	/*	const cood = {
	const icons = [
		{svg:GitHub, href:"#"},
		{svg:Discord, href:"#"}
	];*/
</script>
<sect>
	<Poly/>
		<!--{#each icons as {svg, href} (svg)}
			<svelte:component this={svg}/>
			{/each}
	</Poly>-->
</sect>
<style>
	sect {
		height:100%;
		width:100%;
		display:flex;
		justify-content:var( --footerJustify );
		align-items:center;
	}

	a {
		color:var( --colorAnchor );
		text-shadow:var( --shadow );
	}

	/*	#icons {
		height:7vh;
		width:7vw;
		display:flex;
		justify-content:space-between;
	}
	.icon{
		margin-top:1vh;
		}*/
</style>
