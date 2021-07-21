<script>
	export let Logo;
	export let internal=[{ href:"#", text:"" }];
	export let icons = [{ svg:"svg", href:"#" }];
</script>
<nav>
  <a href=#Logo><h1 id=Logo>{ Logo }</h1></a>
  	<ul>
		{#each internal as { href, text }, i (i)}
			<a { href }><h3>{ text }</h3></a>
		{/each}
	</ul> 
	<ul id="icons">
		{#each icons as {svg, alt, href}, i (i)}
			<a { href }><svelte:component this={ svg }/></a>
		{/each}
	</ul>
</nav>
<style>
	nav {
		height:9vh;
		width:100vw;
		display:flex;
		justify-content:space-around;
		align-items:center;
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
	}

	#Logo {
		width:9vw;
		display:flex;
		justify-content:center;
		font-family:var(--fontLogo);
		font-size:3vh;
		color:var( --colorLogo );
	}

	#icons {
		width:7vw;
		display:flex;
		justify-content:space-between;
	}
</style>
