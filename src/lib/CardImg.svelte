<script>
	export let headers = [];
<script>

<figure id=Banner>
	<div id=BanTxt>
		<slot name=heading><h1>Header<h1></slot>
		{#if $$slots.heading2}
			<slot name=headering><h2>Header2</h2></slot>
		{/if}
		<slot slot=descr><div>description</div></slot>
	</div>
	<div id=BanImg>
		<slot><div>Img</div></slot>
	</div>
<figure/>
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
