<script>
	import Machine from "$lib/svg/Machine.svelte";
</script>
<main class=theme on:scroll='{checkVis}'>
	<sect id=Banner>
		<div id=BanTxt>
			<div>Flogram</div>
   		   	<div>Language</div>
    	  	<div id=BanSub>Create Fast Programs Fast</div>
		</div>
		<div id=BanImg>
			<Machine/>
		</div>
	<sect/>
</main>
<style>
	main {
		height:100vh;
		width:101.5vw;
		overflow-x:hidden;
		overflow-y:auto;
		scroll-snap-type:y mandatory;
	}
	scroll { 
		height:100vh;
		width:100vw;
		scroll-snap-align:start;
		overflow:hidden;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	#Banner {
		position:absolute;
		top:7vh;
		height:45vh;
		width:100vw;
		display:flex;
		justify-content:center;
		align-content:center;
		font-size:5vh;
		font-family:var(--fontLogo);
		color:var(--purple);
		font-weight:bold;
	}
	#BanTxt {
		width:25vw;
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-content:center;
	}
	#BanSub{
		margin-top:1vh;
		font-size:3vh;
	}
	#BanImg{
		width:25vw;
		display:flex;
		justify-content:center;
	}
</style>
