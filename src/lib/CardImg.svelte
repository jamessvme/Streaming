<figure id=Banner>
	<div id=BanTxt>
		<slot name=heading>
			<h1>Header<h1>
		</slot>
		{#if $$slots.heading2}
			<slot name=heading2>
				<h2>Header2</h2>
		</slot>
		{/if}
		<slot name=description>
			<figcaption>description</figcaption>
		</slot>
	</div>
	<div id=BanImg>
		<slot name=image><img src=https://via.placeholder.com/150/0000FF/808080/></slot>
	</div>
</figure>
<style>
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
</style>

<!--
<style>
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
-->
