<figure>
	<figcaption>
		<slot name=heading>
			<h1>Heading<h1>
		</slot>
		<slot name=caption>
			<p>Lorem Epsum</p>		
		</slot>
	</figcaption>
	<picture>
		<slot name=image>
			<div style="background-color:blue; height:100%; width:100%;">
				PlaceHolder
			</div>
		</slot>
	</picture>
</figure>
<style>
	figure {
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
	picture {
		height:100%;
	}
</style>
