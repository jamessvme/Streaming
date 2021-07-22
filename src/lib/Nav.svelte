<script>
	export let Logo="";
	export let internal=[{ href:"#", text:"" }];
	export let icons = [{ svg:"svg", href:"#" }];
</script>
<sect>
  <a href=#Logo><h1 id=Logo>{ Logo }</h1></a>
  	<ul>
		{#each internal as { href, text }, i (i)}
			<a { href }><h3>{ text }</h3></a>
		{/each}
	</ul> 
	<ul id="icons">
		{#each icons as {svg, alt, href}, i (i)}
			<a class=icon { href }><svelte:component this={ svg }/></a>
		{/each}
	</ul>
</sect>
<style>
	sect {
		height:9vh;
		width:100vw;
		display:flex;
		justify-content:space-around;
		align-items:center;
		background:var(--purple);
	}

	ul {
		height:8vh;
		width:45vw;
		display:flex;
		justify-content:space-around;
		align-items:center;
	}

	a {
		color:var( --colorAnchor );
		text-shadow:var( --shadow );
	}

	#Logo {
		width:9vw;
		display:flex;
		justify-content:center;
		font-family:var(--fontLogo);
		font-weight:var(--weightLogo);
		text-shadow:var(--shadowLogo);
		font-size:4vh;
		color:var( --colorLogo );
	}

	#icons {
		height:7vh;
		width:7vw;
		display:flex;
		justify-content:space-between;
	}
	.icon{
		margin-top:1vh;
	}
</style>
